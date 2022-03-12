#!/usr/bin/env node

const fs = require("fs-extra")
const chalk = require("chalk")
const COL_SUCCEED = chalk.hex("#0BE081")
const COL_HAPPY = chalk.hex("#0BC9E0")
const COL_NORMAL = chalk.hex("#A49BCC")

const sleep = (time) => new Promise(res => setTimeout(res, time))
let texts = ""
const ln = () => texts += "\n"
const log = (t) => {
  texts += t + "\n"
  console.clear()
  console.log(texts)
}

const main = async () => {
  console.clear()
  await sleep(500)

  const arg = process.argv
  const cwd = process.cwd()
  let appName = "app"
  for(let i = 0; i < arg.length; i++) {
    if(arg[i].match(/-*(n|name)/) != null) {
      if(i + 1 <= arg.length - 1) appName = arg[i+1]
    }
  }

  log(COL_NORMAL("Coping a project ") + "@aualrxse/quick-sand.")

  fs.copy(`${cwd}/node_modules/@aualrxse/quick-sand`, `${cwd}/${appName}`, async (err) => {
    if(err) return error(err)
    else {
      await sleep(1000)
      log(COL_HAPPY("created - ") + appName)
      ln()
      await sleep(500)
      log(COL_SUCCEED("success - ") + `Created app at ${cwd}/${appName}`)
      log("Inside that directory, you can run several commands:");
      ln()
      log(COL_HAPPY(" npm run dev"));
      log("   Starts the development server.");
      ln()
      log(COL_HAPPY(" npm run build"));
      log("   Builds the app for production.");
      ln()
      log(COL_HAPPY(" npm start"));
      log("   Runs the built app in production mode.");
      ln()
      await sleep(500)
      log("We suggest that you begin by typing:");
      ln()
      log(COL_HAPPY(" cd ") + appName);
      log(COL_HAPPY(" npm run dev"));
      ln()
    }
  })

}
main()