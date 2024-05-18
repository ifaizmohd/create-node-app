# bynat (Build Your Node App in TypeScript)

**bynat** is a command-line interface (CLI) tool designed to streamline the process of setting up a new Node.js application project with TypeScript.

## Features

- **Quick Setup**: Initialize a new Node.js application project with TypeScript in seconds.
- **Modern Tooling**: Utilize modern development tools and best practices out of the box.
- **Configurable**: Customize your project setup with various options and configurations.
- **Minimal Setup**: Start coding your application right away without worrying about boilerplate setup.

## Installation

To install **bynat**, you can use npm or yarn:

```bash
npm install -g bynat
# or
yarn global add bynat
```

## Usage

### Initializing a New Project

To create a new Node.js application project with TypeScript, run:

```bash
bynat init <project-name>
```

Replace `<project-name>` with the name of your project directory.

### Project Structure

After running the `bynat init` command, your project directory will be set up with the following structure:

```
<project-name>/
├── src/
│   └── server.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

### Starting Development

Once your project is initialized, you can start coding your application in the `src` directory. The `index.ts` file serves as the entry point for your application.

### Building and Running

To build your TypeScript code into JavaScript, run:

```bash
bynat build
```

To run your built application, use:

```bash
bynat start
```

## Options

- `--help`: Display help information about the CLI tool.
- `--version`: Display the version number of the CLI tool.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on [GitHub](https://github.com/ifaizmohd/create-node-app.git).

## License

This project is licensed under the [MIT License](LICENSE).
