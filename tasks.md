# Setup

## Installation

Run the following command from root folder of the cloned project to install all dependencies.

`npm install`

## Verify Setup

In order to verify that everything is setup correctly, run the following command, which should show you the failing tests. This is good! We'll be fixing these tests once we jump into the build step.

`npm run test`

Every time you want to check your work locally you can type that command, and it will report the status of every task in that module.
As you move through the modules, you can run module-specific tests with the script `npm run test:module1`, replacing the number with one that corresponds with the module you are working in.

## Previewing Your Work

In order to run your code, you can run `npm start` to start the application, and the output will appear in the terminal.

# Module 01 - Requesting HTTP resources

## 1.0 - Install Necessary Libraries

The first thing we need to do is to install fetch as a dependency. In your command line terminal, enter the command `npm install node-fetch`.

## 1.1 - Require Necessary Libraries

@app-require-libs In `app.js` require the just-added library `node-fetch` and store a reference to it in a `const` called `fetch`. 

## 1.2 - Retrieve static HTTP resource

@app-retrieve-static-joke In `app.js` the `fetch` constant just added is a function, and by default it will retrieve the resource at the URL provided as its only URL. Create a function named `getJoke()`. Inside of this function, use `fetch` to request a random Chuck Norris joke from `https://api.chucknorris.io/jokes/random`. The function itself returns a promise, so you will need wait for it to resolve.

## 1.3 - Extract and display just the joke text

@app-extract-display-joke