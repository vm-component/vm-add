const path = require("path")
const {exec, echo} = require("shelljs")
const {readFileSync} = require("fs")

let repoUrl
let pkg = JSON.parse(readFileSync("package.json") as any)
if (typeof pkg.repository === "object") {
  if (!pkg.repository.hasOwnProperty("url")) {
    throw new Error("URL does not exist in repository section")
  }
  repoUrl = pkg.repository.url
} else {
  repoUrl = pkg.repository
}

let ghToken = process.env.GH_TOKEN
let version = pkg.version

let remoteGitStore = `https://${ghToken}@github.com/${repoUrl.split(':')[1]}`

echo("Push new version to Github...")
exec("git add .")
exec('git config user.name "xiangsongtao"')
exec('git config user.email "280304286@163.com"')
exec(`git commit -m "chore(release): ${version}"`)
exec(
  `git push --force --quiet "${remoteGitStore}" master`
)
echo("Push Done!!")
