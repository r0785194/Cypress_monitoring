# zvb-test-automation
Test automation project for the ZVB application using Cypress and Cucumber.

# Overview
- Basic info
- How to Configure
- How to run

# Basic info
before starting on the project you'll need to run the 'npm install' command to install all needed dependencies. Once you have
done that it is possible to use the predefined scripts in package.json. The 'local' script profile is used for local debugging 
not for actually running the tests, since we would like to do that headless. 

# How to Configure project
In the project we are using cucumber, and pre-configured scripts (smoke, sanity, regression). These scripts use the cucumber
tag annotations, and it is therefore possible to mark either entire features or single scenario's as part of a script. 
The TAGS which are available are:
- @smoke
- @sanity
- @regression

A Feature or Scenario can be part of multiple tests, and the tags are therefore chainable (space separated).

# How to run
in the package.json you will be able to find the run scripts under the script tag. Once there you'll notice that different 
profiles will result in a different result. Chaining scripts is also possible by using 'npm otherScriptName'.

```json
{
  "scripts": {
    "zip-artifacts": "bestzip test-results.zip ./test-results/*",
    "local": "cypress open",
    "report": "node cypress/support/generate_report.js",
    "sanity": "npx cypress-tags run -e TAGS='@sanity'"
  }
}
```

## Environment Param config
The most important is the usage of environment parameters which allows you to set certain environmental values. These environment
parameters can be chained by comma separation. 

The way we  use them in this project is to:
1. choose which tests to run (smoke, sanity, regression)
2. to overwrite values (jenkins credentials store)
3...

```json
{
  "scripts": {
      "sanity": "npx cypress-tags run --env TAGS=@sanity"
    }
}
```
