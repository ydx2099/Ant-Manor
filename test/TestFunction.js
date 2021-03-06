/*
 * @Author: TonyJiangWJ
 * @Date: 2019-11-28 08:59:15
 * @Last Modified by: TonyJiangWJ
 * @Last Modified time: 2019-11-30 23:52:22
 * @Description: 
 */
let singletonRequire = require('../SingletonRequirer.js')(runtime, this)
let {
  debugInfo, debugForDev, logInfo, infoLog, warnInfo, errorInfo
} = singletonRequire('LogUtils')
let commonFunctions = singletonRequire('CommonFunction')
let runningQueueDispatcher = singletonRequire('RunningQueueDispatcher')

function testSleepTime() {
  toastLog(commonFunctions.getSleepTime())
}

function checkRuntimeStatus() {
  commonFunctions.showRuntimeStatus()
}

// checkRuntimeStatus()
commonFunctions.updateSleepTime(5, true)