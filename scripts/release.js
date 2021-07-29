const execa = require('execa')
const fs = require('fs')
const inquirer = require('inquirer')
const semver = require('semver')

const release = async() => {
  const curVersion = JSON
    .parse(fs.readFileSync('./package.json', 'utf8'))
    .version

  console.log(`[./scripts/release.js] Current version: ${curVersion}`)

  const bumps = ['major', 'minor', 'patch', 'prerelease']
  const versions = {}
  bumps.forEach(b => {
    versions[b] = semver.inc(curVersion, b)
  })
  const bumpChoices = bumps.map(b => ({ name: `${b} (${versions[b]})`, value: b }))

  const { bump } = await inquirer.prompt([
    {
      name: 'bump',
      message: 'Select release type:',
      type: 'list',
      choices: [
        ...bumpChoices
      ]
    }
  ])

  const version = versions[bump]

  const { yes } = await inquirer.prompt([
    {
      name: 'yes',
      message: `Confirm releasing ${version}?`,
      type: 'list',
      choices: ['Cancel', 'Ok']
    }
  ])

  if (yes === 'Cancel') {
    console.log('[./scripts/release.js] cancelled.')
    return
  }

  await execa('npm', ['--no-git-tag-version', 'version', version], { stdio: 'inherit' })
  await execa('npx', ['conventional-changelog', '-p', 'angular', '-i', 'CHANGELOG.md', '-s'], { stdio: 'inherit' })

  await execa('git', ['add', '-A'], { stdio: 'inherit' })
  await execa('git', ['commit', '-m', `release: v${version}`], { stdio: 'inherit' })
  await execa('git', ['tag', '-a', version, '-m', version], { stdio: 'inherit' })
  await execa('git', ['push', 'origin', 'main', '--tags'], { stdio: 'inherit' })

  console.log(`[./scripts/release.js] Done releasing version: ${version}`)
}

release().catch(err => {
  console.error(err)
  process.exit(1)
})
