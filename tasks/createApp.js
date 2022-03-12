#!/usr/bin/env node

const create = require("./create")
const sleep = require("./sleep")
const successMsg = require("./successMsg")
const COL = require("./config")
const COL_NORMAL = COL.COL_NORMAL
const COL_WARNING = COL.COL_WARNING

const main = async () => {
  console.clear()
  await sleep(500)

  const arg = process.argv
  const cwd = process.cwd()
  const d = new Date()
  let appName = `app_${d.getFullYear()}${d.getMonth()}${d.getDay()}${d.getHours()}${d.getMinutes()}${d.getSeconds()}`
  for(let i = 0; i < arg.length; i++) {
    if(arg[i].match(/-*(n|name)/) != null) {
      if(i + 1 <= arg.length - 1) appName = arg[i+1]
    }
  }

  console.log(COL_NORMAL("Coping a project ") + "@aualrxse/quick-sand.")

  const res = await create(cwd, appName)
  if (!res) console.error(COL_WARNING("error - ") + "Already created.")
  else successMsg()
}
main()