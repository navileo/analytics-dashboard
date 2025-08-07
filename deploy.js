const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
};

console.log(`${colors.blue}=== Portfolio Analytics Dashboard Deployment Helper ===${colors.reset}\n`);

// Check if git is installed
try {
  execSync('git --version', { stdio: 'ignore' });
} catch (error) {
  console.error(`${colors.red}Error: Git is not installed or not in PATH${colors.reset}`);
  process.exit(1);
}

// Check if the project is a git repository
if (!fs.existsSync(path.join(__dirname, '.git'))) {
  console.log(`${colors.yellow}Initializing git repository...${colors.reset}`);
  execSync('git init', { stdio: 'inherit' });
}

// Deployment steps
console.log(`${colors.green}Step 1: Building frontend for production${colors.reset}`);
console.log('This will create optimized production build files');

try {
  process.chdir(path.join(__dirname, 'frontend'));
  console.log(`${colors.yellow}Installing frontend dependencies...${colors.reset}`);
  execSync('npm install', { stdio: 'inherit' });
  console.log(`${colors.yellow}Building frontend...${colors.reset}`);
  execSync('npm run build', { stdio: 'inherit' });
  console.log(`${colors.green}Frontend build completed successfully!${colors.reset}\n`);
} catch (error) {
  console.error(`${colors.red}Frontend build failed: ${error.message}${colors.reset}`);
  process.exit(1);
}

// Backend preparation
console.log(`${colors.green}Step 2: Preparing backend for deployment${colors.reset}`);

try {
  process.chdir(path.join(__dirname, 'backend'));
  console.log(`${colors.yellow}Installing backend dependencies...${colors.reset}`);
  execSync('npm install', { stdio: 'inherit' });
  console.log(`${colors.green}Backend preparation completed!${colors.reset}\n`);
} catch (error) {
  console.error(`${colors.red}Backend preparation failed: ${error.message}${colors.reset}`);
  process.exit(1);
}

// Return to project root
process.chdir(__dirname);

console.log(`${colors.green}Deployment preparation completed!${colors.reset}`);
console.log(`${colors.blue}Next steps:${colors.reset}`);
console.log(`1. Push your code to GitHub: ${colors.yellow}git add . && git commit -m "Ready for deployment" && git push${colors.reset}`);
console.log(`2. Deploy backend to Render: ${colors.yellow}https://dashboard.render.com/web/new${colors.reset}`);
console.log(`3. Deploy frontend to Netlify: ${colors.yellow}https://app.netlify.com/start${colors.reset}`);
console.log(`\nRefer to the README.md file for detailed deployment instructions.`);