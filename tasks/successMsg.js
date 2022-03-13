#!/usr/bin/env node
const sleep = require("./sleep")
const COL = require("./config")
const COL_HAPPY = COL.COL_HAPPY
const COL_SUCCEED = COL.COL_SUCCEED
const ln = () => console.log("\n")

const success = async (cwd, appName) => {
    await sleep(1000)
    console.log(COL_HAPPY("created - ") + appName)
    ln()
    await sleep(500)
    console.log(COL_SUCCEED("success - ") + `Created app at ${cwd}/${appName}`)
    console.log("Inside that directory, you can run several commands:");
    ln()
    console.log(COL_HAPPY(" npm install"));
    console.log("   Install the dependencies.");
    ln()
    console.log(COL_HAPPY(" npm run dev"));
    console.log("   Starts the development server.");
    ln()
    console.log(COL_HAPPY(" npm run build"));
    console.log("   Builds the app for production.");
    ln()
    console.log(COL_HAPPY(" npm start"));
    console.log("   Runs the built app in production mode.");
    ln()
    await sleep(500)
    console.log("We suggest that you begin by typing:");
    ln()
    console.log(COL_HAPPY(" cd ") + appName);
    console.log(COL_HAPPY(" npm install"));
    console.log(COL_HAPPY(" npm run dev"));
    ln()
}

module.exports = success