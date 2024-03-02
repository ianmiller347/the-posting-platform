const fs = require('node:fs');
const { execSync } = require('child_process');

// Function to execute shell commands
function executeCommand(command) {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    process.exit(1);
  }
}

// install dependencies.
// Function to read dependencies from package.json
function readDependenciesFromPackageJson(dependencyType = 'dependencies') {
  // Read package.json file
  const packageJson = fs.readFileSync('package.json', 'utf8');

  // Parse package.json content to get dependencies
  const dependencies = JSON.parse(packageJson)[dependencyType];

  // Return an array of dependencies
  return Object.keys(dependencies);
}

// Function to install dependencies using yarn
function installDependencies(dependencies, isDevDeps = false) {
  // Install dependencies using yarn
  executeCommand(`yarn add ${isDevDeps ? '-D' : ''}${dependencies.join(' ')}`);
}

// Main function to copy dependencies from package.json and install them
function copyAndInstallDependencies() {
  // Read dependencies from package.json
  const dependencies = readDependenciesFromPackageJson('dependencies');
  const devDependencies = readDependenciesFromPackageJson('devDependencies');

  // Install dependencies using yarn
  installDependencies(dependencies, false);
  installDependencies(devDependencies, true);

  console.log(
    'Dependencies and dev dependencies copied and installed successfully.'
  );
}

// Execute the copy and install dependencies function
copyAndInstallDependencies();
