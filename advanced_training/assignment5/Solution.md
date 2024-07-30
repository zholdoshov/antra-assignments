# Assignemnt 5 (Advanced Training)

## What’s package.json and package-lock.json?

These files have important data for a JavaScript project, like names and versions of libraries and custom scripts. They also include project details such as name and version, and settings for tools like ESLint. You can edit some parts of package.json, but package-lock.json is generated and shouldn't be changed. Their main job is to make sure all developers use the same library versions.

## What’s the difference between npm and npx?

The npm command manages your JavaScript libraries, adding or removing them and updating package\*.json files. The npx command runs commands from any npm package, even if it's not installed locally. If the package isn't in your project, npx fetches it and saves it in a cache, without changing your project or global PATH.

## What is Babel?

Babel is a tool that changes your JavaScript code to a different version of JavaScript. For example, if you write modern JavaScript (ES7) but need it to work in older browsers (ES5), Babel will convert your code.

## What is Webpack?

Webpack bundles your JavaScript code, combining many files and libraries into one file that browsers can run. It also uses loaders, which can preprocess the code, like running Babel or handling CSS imports before bundling.
