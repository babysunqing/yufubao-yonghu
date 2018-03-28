// pages/deleteCard/deleteCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    memberName: '',
    memeberAccount: ''
  },
  memberNameInput: function (e) {
    this.setData({
      memberName: e.detail.value
    })
  },
  memeberAccountInput: function (e) {
    this.setData({
      memeberAccount: e.detail.value
    })
  },
  DeleteCard: function() {
    // debugger
    wx.request({
      url: 'https://31388152.qcloud.la/welsh/app/ticket/myticket',
      data: {
        cardId: this.data.cardId,
        mcardCode: '12314',
        phone: 'werwq',
        memberName: this.data.memberName,
        memeberAccount: this.data.memeberAccount,
        deviceIp: '',
        deviceName: ''
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "post",
      success: function (res) {
        wx.navigateTo({
          url: '../deleteCardDone/deleteCardDone',
        })       
      }
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      cardId: options.cardId 
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})