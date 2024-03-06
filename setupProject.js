const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const copyFoldersOver = require('./setupScript');
const setupPlatform = require('./platformSetup');

/**
 * This file is for setting up a project when this package was installed as a global npm module
 *
 * npm install -g the-posting-platform
 *
 * Scripts currently offered:
 *
 * create-posting-platform
 * cd my-projects
 * create-posting-platform my-new-app
 * currently it copies files into the users source code to replace their nextjs boilerplate
 *
 * it could act more like a library where it just exports modules used by another app
 * but for now it provides a lot of source code for you. perhaps the --library option could be added.
 *
 */

// Main function to set up the project
async function setupProject() {
  try {
    // Get the directory where the script is being executed
    const currentDirectory = process.cwd();

    // Get the project name from command line arguments
    const projectName = process.argv[2];

    if (!projectName) {
      console.error('Please provide a project name.');
      return;
    }

    // Run create-next-app with the provided project name
    const createNextApp = `npx create-next-app ${projectName} --typescript`;
    execSync(createNextApp, { stdio: 'inherit' });

    // now that we ran create next app, we want to modify the nextjs boilerplate
    // and put our stuff in the new directory
    const projectDirectory = path.join(currentDirectory, projectName);
    // copy the folders and files into the newly created next app
    await copyFoldersOver(projectDirectory);

    // now make them change into the new directory
    process.chdir(projectDirectory);

    // next initialize husky, prettier, lint-staged
    execSync('npx husky init', { stdio: 'inherit' });

    console.log('Project creation complete. Now time for setup...');

    await setupPlatform();

    console.log('Platform setup complete.');
  } catch (error) {
    console.error('Error setting up project:', error);
  }
}

// Call the setupProject function
setupProject();
