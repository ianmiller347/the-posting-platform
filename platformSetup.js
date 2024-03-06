const fs = require('fs');
const readline = require('readline');

// Function to prompt user for input
function prompt(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

// Function to set or update environment variables in the .env file
function setEnvVariable(key, value) {
  // Check if the .env file exists
  let envContent = '';
  if (fs.existsSync('.env')) {
    // Read existing .env file content
    envContent = fs.readFileSync('.env', 'utf8');
  }

  // Update the content with the new or updated key-value pair
  const regex = new RegExp(`^${key}=.*`, 'gm');
  if (envContent.match(regex)) {
    // If the key already exists, update its value
    envContent = envContent.replace(regex, `${key}=${value}`);
  } else {
    // If the key doesn't exist, append it to the end of the file
    envContent += `${key}=${value}\n`;
  }

  // Write the updated content back to the .env file
  fs.writeFileSync('.env', envContent);
}

async function setupPlatform() {
  // Prompt user for app name
  const appName = await prompt(
    'What name do you want to use for your new app? (App Name) '
  );
  setEnvVariable('APP_NAME', appName);

  // Prompt user for app description
  const appDescription = await prompt(
    'Describe your app in 100 words or less: '
  );
  setEnvVariable('APP_DESCRIPTION', appDescription);

  // Prompt user for app theme
  const appTheme = await prompt(
    `Make up a one-word descriptive name or adjective for your app's theme: `
  );
  setEnvVariable('APP_THEME', appTheme);

  console.log('App setup complete, next lets setup AWS');

  // Prompt user for AWS configuration
  const awsRegion = await prompt(
    'What AWS region do you want to use? (Enter for default: us-east-1) '
  );
  // Default to us-east-1 if user doesn't input anything
  const awsRegionDefault = 'us-east-1';
  setEnvVariable('AWS_REGION', awsRegion || awsRegionDefault);

  const awsSecretAccessKey = await prompt('What is your AWS secret key? ');
  setEnvVariable('AWS_SECRET_ACCESS_KEY', awsSecretAccessKey);

  const awsAccessKeyId = await prompt('What is your AWS access key id? ');
  setEnvVariable('AWS_ACCESS_KEY_ID', awsAccessKeyId);

  console.log('Setup complete.');

  // Prompt user for email server configuration
  const emailServerHost = await prompt('What is your email server host? ');
  setEnvVariable('EMAIL_SERVER_HOST', emailServerHost);

  const emailServerPort = await prompt('What is your email server port? ');
  setEnvVariable('EMAIL_SERVER_PORT', emailServerPort);

  const emailServerUser = await prompt('What is your email server username? ');
  setEnvVariable('EMAIL_SERVER_USER', emailServerUser);

  const emailServerPassword = await prompt(
    'What is your email server password? '
  );
  setEnvVariable('EMAIL_SERVER_PASSWORD', emailServerPassword);

  const emailServerFrom = await prompt(
    'What is the from address for your email server? '
  );
  setEnvVariable('EMAIL_SERVER_FROM', emailServerFrom);
}

module.exports = setupPlatform;
