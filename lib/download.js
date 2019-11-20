module.exports.clone = async (repo,desc) =>{
  const {promisify} = require('util')
  const dowload = promisify(require('download-git-repo'))
  const ora = require('ora')
  const process = ora(`下载中...${repo}`)
  process.start()
  try{
    await dowload(repo,desc)
  }catch(err){
    process.fail()
  }
  process.succeed()
}