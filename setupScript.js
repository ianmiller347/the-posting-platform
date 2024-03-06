const fs = require('node:fs');

/**
 *
 * This setup script clones all boilerplate to a parent project.
 * It is to be run inside of a project that was just created.
 * It means it must be run within a subfolder of the root project.
 * if you're in parent-app, then you clone this repo and run this script.
 *
 * For example:
 * create-next-app my-app
 * cd my-app
 * git clone https://github.com/ianmiller347/the-posting-platform.git
 * cd the-posting-platform
 * yarn run setup-script
 *
 * now, the parent application is where we want to copy folders to.
 *
 * the function is called when this file is called by node, but also exported
 * so that other files can pass in pathPrefix if we create in subdirectory
 * when global npm module is installed by a user
 *
 */

// Function to copy files from source directory to destination directory
async function copyDirectories(directories, destinationPrefix) {
  try {
    for (const directory of directories) {
      // const source = directory;
      const source = path.resolve(__dirname, directory);
      const destination = path.join(destinationPrefix, directory);
      await fs.copy(source, destination, { recursive: true });
      console.log(`Copied ${source} to ${destination}`);
    }
  } catch (error) {
    console.error('Error copying directories:', error);
  }
}

// Define the source directory in your npm package containing the files to copy
// const sourceDirectory = path.resolve(__dirname, 'source');

// Copy files from the source directory to the project directory
// await copyFiles(sourceDirectory, projectDirectory);

// function to copy folders over
const copyFoldersOver = async (
  destinationPathPrefix = '..',
  sourcePathPrefix = ''
) => {
  // copy the directories over first
  const sourceDirectories = [
    'components',
    'helpers',
    'hooks',
    'pages',
    'state',
    'styles',
    'types',
  ];

  await copyDirectories(sourceDirectories, destinationPathPrefix);

  console.log('Folders copied successfully.');

  // Next we will copy the config files that are in the current root over to the new project
  // Array of files to copy
  const filesToCopy = [
    'tsconfig.json',
    '.prettierrc',
    'tailwind.config.js',
    '.lintstagedrc.js',
    '.eslintrc.json',
    'platform.config.js',
  ];

  // Copy each file to the parent directory
  filesToCopy.forEach((file) => {
    fs.copySync(file, `${destinationPathPrefix}/${file}`);
  });

  console.log('All files copied successfully.');
};

copyFoldersOver();

module.exports = copyFoldersOver;
