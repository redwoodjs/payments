const { promisify } = require('util')
const { exec } = require('child_process')
const path = require('path')
const fsx = require('fs-extra')

const removeEnvVars = async (vars) => {
  const envFile = path.resolve(__dirname, `../../../.env`)
  const contents = await fsx.readFile(envFile)
  const envLines = contents.toString().split('\n')
  let newLines = envLines
  vars.forEach((envVar) => {
    newLines = newLines.filter((line) => !line.startsWith(envVar))
  })
  await fsx.writeFile(envFile, newLines)
}

const appendToFileSync = (file, data, successMsg = 'File Updated') => {
  return fsx.appendFile(file, data, 'utf8').then((err) => {
    if (err) throw err
    console.log(successMsg)
  })
}

const execAsync = promisify((cmd, fn) => {
  exec(cmd, (error, stdout, stderr) => fn(error, stdout, stderr))
})

const renderTemplateFile = async (file, template, vars = {}) => {
  const contents = await fsx.readFile(template)

  // Templating
  let results = contents.toString()
  for (const [key, value] of Object.entries(vars)) {
    results = results.replace(`STRIPE_${key.toUpperCase()}`, value)
  }

  await fsx.writeFile(file, results)
}

const copyFunctionDir = async (fn) => {
  const targetDir = path.resolve(__dirname, `../../../api/src/functions/${fn}`)
  const srcDir = path.resolve(__dirname, `../functions/${fn}`)
  const exists = await fsx.pathExists(targetDir)
  if (!exists) {
    await fsx.copy(srcDir, targetDir, (error) => {
      if (error) throw error
      console.log(`Stripe ${fn} function successfully copied`)
    })
  } else {
    console.log(`The function \'${fn}\' already exists`)
    return
  }
}

module.exports = {
  appendToFileSync,
  copyFunctionDir,
  renderTemplateFile,
  execAsync,
  removeEnvVars,
}
