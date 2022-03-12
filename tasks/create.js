#!/usr/bin/env node
const fs = require("fs")
const https = require("https")
const unzip = require('unzipper');
const SRC_URL = require("./config").SRC_URL

const create = async (appName) => {
    return new Promise(r => {
        const out = fs.createWriteStream(`${appName}.zip`)
        https.get(SRC_URL, res => {
            res.pipe(out)
            res.on("end", () => {
                const zip = fs.createReadStream(`./${appName}.zip`)
                zip.pipe(unzip.Extract({ path: "." }))
                    .promise()
                    .then(async () => {
                        fs.rename("./quick-sand", appName, err => r(false))
                        fs.unlink(`./${appName}.zip`, err => r(false))
                        r(true)
                    })
                    .catch((e) => r(false))
            })
        })
    })
}

module.exports = create