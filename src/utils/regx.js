export default {
  isMobile (mobile) {
    return /^1[3-9]\d{9}/.test(mobile)
  },
  isSmsCode (code) {
    return /\d{4}/.test(code)
  },
  isEmail (email) {
    return /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(email)
  },
  isName (name) {
    return /.{1,16}/.test(name)
  }
}
