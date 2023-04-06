#!/usr/bin/env node

import gptCommit from "./commands/gpt-commit.js";
import { program } from "commander";

const gitExtension = (args) => {
  // Extract the command and arguments from the command line
  const [command, ...rest] = args;

  program
    .command("commit")
    .description("Generate a Git commit message based on the summary of changes")
    .action(async () => {
      await gptCommit();
    });

    // Add more commands here

  // Handle invalid commands
  program.on("command:*", () => {
    console.error("Invalid command: %s\n", program.args.join(" "));
    program.help();
    process.exit(1);
  });
  program.parse(process.argv);
};

gitExtension(process.argv.slice(2));

export default gitExtension;
