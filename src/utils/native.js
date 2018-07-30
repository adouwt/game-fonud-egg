/* eslint-disable */
//  const userAgent = navigator.userAgent.toLowerCase()
export const Android = () => navigator.userAgent.match(/Android/i)
export const iOS = () => navigator.userAgent.match(/iPhone|iPad|iPod/i)
export const BlackBerry = () => navigator.userAgent.match(/BlackBerry/i)
export const Windows = () => navigator.userAgent.match(/IEMobile/i)
//  判断是否是大拇指App
export const isApp = () => navigator.userAgent.match(/THUMB/i)

// 去支付页面
export const goPay = (productName, amount, lendNo, unRecevieAmount) => {
  if (Android() && isApp()) {
    dmz_android.androidGoPay(productName, amount, lendNo, unRecevieAmount);
  }
  if (iOS() && isApp()) {
    window.webkit.messageHandlers.applyPay.postMessage({productName: productName, amount: amount, lendNo: lendNo, unRecevieAmount: unRecevieAmount})  ;
  }
}

// 关闭h5页面
export const closeWebView = () => {
  if (Android() && isApp()) {
    dmz_android.androidFinish()
  }

  if (iOS() && isApp()) {
    window.webkit.messageHandlers.signResult.postMessage(null)  
  }
}
