const path = require("path")
const {exec, echo} = require("shelljs")
const {readFileSync} = require("fs")
const pkg = JSON.parse(
  readFileSync(path.resolve(__dirname, "..", "package.json"))
)

let version = pkg.version

echo("Push new version to Github...")
exec("git add .")
exec('git config user.name "xiangsongtao"')
exec('git config user.email "280304286@163.com"')
exec(`git commit -m "chore(release): ${version}"`)
exec(
  `git push --force --quiet`
)
echo("Push Done!!")
