// pages/cardDetail/cardDetail.js\
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardId:''
  },
  linkToCashFlow: function(){
    let cardId = this.data.cardId
    wx.navigateTo({
      url: '../cashFlow/cashFlow?cardId=' + cardId
    })
  },
  linkToQRcode: function () {
    let cardId = this.data.cardId
    wx.navigateTo({
      url: '../QRcode/QRcode?cardId=' + cardId
    })
  },
  linkToDeleteCard: function () {
    let cardId = this.data.cardId
    wx.navigateTo({
      url: '../deleteCard/deleteCard?cardId=' + cardId
    })
  },
  linkToInstruction: function () {
    let cardId = this.data.cardId
    wx.navigateTo({
      url: '../instruction/instruction?cardId=' + cardId
    })
  },
  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    this.setData({ 
      cardId: options.cardId 
    })
  }
})