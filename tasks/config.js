#!/usr/bin/env node

const chalk = require("chalk")
const COL_SUCCEED = chalk.hex("#0BE081")
const COL_HAPPY = chalk.hex("#0BC9E0")
const COL_NORMAL = chalk.hex("#A49BCC")
const COL_WARNING = chalk.hex("#E24756")
const SRC_URL = "https://cdn.jsdelivr.net/gh/aratius/create-quick-sand@master/quick-sand.zip"

module.exports = {
    COL_HAPPY,
    COL_NORMAL,
    COL_SUCCEED,
    COL_WARNING,
    SRC_URL
}