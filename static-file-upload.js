const chalk = require('chalk')
const qiniu = require('qiniu')
const glob = require('glob')

const ACCESS_KEY = 'jqaNhtyOh7N4dsQQDwZp-rV6BCjCq693VS0UGwl-'
const SECRET_KEY = 'IZddo4xVX0LUK84wCsvssPVheeWVXi_maXRjIZbc'

const config = new qiniu.conf.Config()
config.zone = qiniu.zone.Zone_z2

const mac = new qiniu.auth.digest.Mac(ACCESS_KEY, SECRET_KEY)
const bucket = 'beaconlearning-static'

const paths = glob.sync('./dist/assets/*')
console.log(`当前共生成[${chalk.green(paths.length)}]个静态文件`)

paths.forEach((filePath, index) => {
  const filekey = filePath.replace('./dist/', '')
  const putPolicy = new qiniu.rs.PutPolicy({ scope: bucket })
  const token = putPolicy.uploadToken(mac)

  const uploader = new qiniu.form_up.FormUploader(config)
  const extra = new qiniu.form_up.PutExtra()

  uploader.putFile(token, filekey, filePath, extra, (err, respBody, respInfo) => {
    if(!err) console.log(`${index}\t${chalk.green('success')}\t${respBody.key}`)
    else console.log(`${index}\t${chalk.red('failed')}\t${filePath}`)
  })
})



