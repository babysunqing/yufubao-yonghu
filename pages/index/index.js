//index.js
//获取应用实例
const app = getApp()
let flag = true
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    showList: false,
    cardList:[
      {
        'cardId': '1',
        'cardName':'元旦回馈',
        'pay':'200',
        'give':'100' ,
        'time':'2018-01-02'    
      },
      {
        'cardId': '2',
        'cardName': '新年特惠',
        'pay': '500',
        'give': '500',
        'time': '2018-03-02'
      }
    ]
  },
  //事件处理函数
  linkToLogin: function () {
    wx.navigateTo({
      url: '../login/login'
    })
  },
  linkToCardDetail: function (e) {
    let index =e.currentTarget.dataset.index
    let cardId = this.data.cardList[index].cardId
    wx.navigateTo({
      url: '../cardDetail/cardDetail?cardId=' + cardId
    })
  },
  showList: function () {
    var that = this
    if (flag == true){
      that.setData({
        showList:true
      })
      flag = false
    }else{
      that.setData({
        showList: false
      })
      flag = true
    }
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
