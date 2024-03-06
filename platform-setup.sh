# Platform setup if you prefer shell instead of node.js runtime
read -p "What name do you want to use for your new app?" APP_NAME
# Check if the .env file exists
if [ -f .env ]; then
    # Modify the existing .env file or create it if it doesn't exist
    echo "APP_NAME=$APP_NAME" >> .env
else
    # Create a new .env file with the environmental variable
    echo "APP_NAME=$APP_NAME" > .env
fi
read -p "Describe your app in 100 words or less." APP_DESCRIPTION
read -p "Make up a one word descriptive name or adjective for your apps theme" APP_THEME

# Email setup for auth
read -p "What is your email server host?" EMAIL_SERVER_HOST
read -p "What is your email server port?" EMAIL_SERVER_PORT
read -p "What is your email server username?" EMAIL_SERVER_USER
read -p "What is your email server password?" EMAIL_SERVER_PASSWORD
read -p "What is the from address for your email server?" EMAIL_SERVER_FROM

# AWS setup
FOO="${AWS_REGION:-default}"
read -p "What AWS region do you want to use? (Enter for default: us-east-1)" AWS_REGION
# If the user didn't provide any input, set the default value
AWS_REGION="${input:-us-east-1}"
echo "AWS_REGION set to: $AWS_REGION"
read -p "What is your AWS secret key?" AWS_SECRET_ACCESS_KEY
read -p "What is your AWS access key id?" AWS_ACCESS_KEY_ID
