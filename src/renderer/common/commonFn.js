// 提示框

let tipPop = {
  Success(message) {
    window.ElementUI.Notification({
      title: '成功',
      message: message,
      type: 'success'
    })
  },
  warning(message) {
    window.ElementUI.Notification({
      title: '警告',
      message: message,
      type: 'warning'
    })
  },
  info(message) {
    window.ElementUI.Notification.info({
      title: '消息',
      message: message
    })
  },
  error(code, message) {
    window.ElementUI.Notification.error({
      title: '系统出错',
      message: message,
      iconClass: 'icon-baobiao iconfont',
      customClass: 'iconClass'
    })
  }
}

export default {
  tipPop
}
