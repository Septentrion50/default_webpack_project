# Starter project for a webpack app (without REACT)

This little project is made to avoid boilerplate code. Use it as you like.

## Current features

- Babel to transform your magnificent ES6 (env preset) clean code into an ES5 mess.
- You can use `async/await` syntax in this project, the `babel polyfill` covers you.
- SCSS minifier to bundle together all your style files.
- dotenv will allow you to use a nice `.env` file to avoid your environment variables to be published on the web.

## How to use

Note that you are in **development** mode by default, don't forget to switch to **production** when your project is ready to be published.
Find these in `webpack.config.js`.

To build your webpack app run `npm run build`.
The watch mode is enabled by default.

To use an environment variable, simply call it with `process.env.[YOUR_ENV_VAR]`, don't forget to create your `.env` file to put your environment variables in first.
Obviously, it is not in this repo because `.env` is already included in the `.gitignore` file.

Now, code freely !

