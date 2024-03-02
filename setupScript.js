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
 */

// copy folders over
fs.cpSync('helpers', '../helpers', { recursive: true });
fs.cpSync('pages', '../pages', { recursive: true });
fs.cpSync('hooks', '../hooks', { recursive: true });
fs.cpSync('components', '../components', { recursive: true });

// copy config files over
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
  fs.copySync(file, `../${file}`);
});

console.log('Files copied successfully.');
