import { Command } from "commander";
import greet from "./commands/greet.js";
import fetchData from "./commands/fetch.js";
import readFile from "./commands/read.js";

const program = new Command();

program
  .name("ninja-utility")
  .description("A CLI tool with multiple commands")
  .version("1.0.0");

program
  .command("greet")
  .description("Display a colorful greeting message")
  .action(greet);

program
  .command("fetch")
  .description("Fetch data from a public API")
  .action(fetchData);

program
  .command("read <file>")
  .description("Read and display content from a file")
  .action(readFile);

program.parse(process.argv);
