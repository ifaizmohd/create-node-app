import { Command } from "commander";
import * as fs from "fs-extra";
import * as path from "path";
const chalk = require("chalk");
import { execSync } from "child_process";

const program = new Command();
const templateDir = path.join(__dirname, "../src/template");

program
  .version("1.0.0")
  .argument("<project-name>", "name of the project")
  .action((projectName) => {
    const projectPath = path.join(process.cwd(), projectName);

    // Check if project already exists.
    if (fs.existsSync(projectPath)) {
      console.log(chalk.red(`Project folder ${projectName} already exists!`));
      process.exit(1);
    }

    // copy the template file to project path if not exists already.
    fs.copySync(templateDir, projectPath);
    console.log(chalk.green(`Project ${projectName} created successfully!`));

    // Initialize git in the project.
    execSync("git init", { cwd: projectPath, stdio: "inherit" });
    console.log(chalk.green(`Initialized an empty git repository`));

    // Install the dependencies of the project.
    execSync("npm install", { cwd: projectPath, stdio: "inherit" });
    console.log(chalk.green("Dependencies installed successfully!"));

    console.log(chalk.green("Your Project is ready!"));
  });

program.parse(process.argv);
