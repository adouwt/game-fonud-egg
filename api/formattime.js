// 生成一个格式为yyyymmddhhmmss + 5位随机数
const formatTime = () => {
  let currrentTime = new Date()
  let getMonth = currrentTime.getMonth() < 10 ? '0' + currrentTime.getMonth() : currrentTime.getMonth()
  let getDate = currrentTime.getDate() < 10 ? '0' + currrentTime.getDate() : currrentTime.getDate()
  let getHours = currrentTime.getHours() < 10 ? '0' + currrentTime.getHours() : currrentTime.getHours()
  let getMinutes = currrentTime.getMinutes() < 10 ? '0' + currrentTime.getMinutes() : currrentTime.getMinutes()
  let getSeconds = currrentTime.getSeconds() < 10 ? '0' + currrentTime.getSeconds() : currrentTime.getSeconds()
  let handelTime = '' + currrentTime.getFullYear() + getMonth + getDate + getHours + getMinutes + getSeconds
  let lastStr = handelTime + fiveRamdomNumber(5)
  return lastStr
}
function fiveRamdomNumber (number) {
  var str = ''
  for (let i = 0; i < number; i++) {
    str += Math.floor(Math.random()*9)
  }
  return str
}

module.exports = formatTime
