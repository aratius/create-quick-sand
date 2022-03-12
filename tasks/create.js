#!/usr/bin/env node
const fs = require("fs")
const https = require("https")
const unzip = require('unzipper');

const url = "https://cdn.jsdelivr.net/gh/aratius/quick-sand@master/quick-sand.zip"
const create = async (cwd, appName) => {
    return new Promise(r => {
        const out = fs.createWriteStream(`${appName}.zip`)
        https.get(url, res => {
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