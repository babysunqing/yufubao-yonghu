// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    check: false,
    count: 0,
    reGet:false,
    phone: '',
    userInputCode: '',
    countDownNum:''
  },
  // 键盘输入时，触发此事件
  bindPhoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  bindVerificationCodeInput: function (e) {
    this.setData({
      userInputCode: e.detail.value
    })
  },
  // 设置 同意协议
  check: function () {
    if(this.data.check == false){
      this.data.check = true
      this.setData({
        check: true
      })
    }else{
      this.data.check = false
      this.setData({
        check: false
      })
    }
  },
  setTime: function () {
    let that = this
    if (this.data.count == 0) {
      this.data.reGet = true
      this.data.countDownNum = ''
      this.setData({
        reGet: this.data.reGet,
        countDownNum: this.data.countDownNum
      })
      return
    }else{
      this.data.countDownNum = this.data.count + 's后重试'
      this.data.count--
      this.setData({
        countDownNum: this.data.countDownNum
      })
    }
    setTimeout(function () {
      that.setTime()
    }, 1000)
  },
  getCode: function(){
    if (this.data.phone.length == 11){
      if (this.data.count > 0) {
        return
      }else{
        this.data.count = 60
        this.setTime()
      }
    }else{
      wx.showModal({
        content: '请输入手机号',
        showCancel: false,
        confirmText: '确定',
      })
    }
  },
  postRequest: function () {
    let that = this
    wx.request({
      url: 'https://31388152.qcloud.la/welsh/app/main/home',
      data: {
        phone: this.data.phone
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "post",
      success: function (res) {
        var verificationCode = res.data.data
        that.setData({
          verificationCode: verificationCode
        })
      },
      fail: function (err) {

      }
    })
  },
  login: function () {
    // debugger
    if (this.data.check == false) {
      return false
    }
    if (this.data.phone == '' || this.data.userInputCode == ''){
      wx.showModal({
        content: '请输入完整信息',
        showCancel: false,
        confirmText: '确定',
      })
      return false
    }
    // wx.request({
    //   url: 'http://192.168.0.143:8000/v1/member/checkUserByPhone',
    //   data: {
    //     phone: '15016500123',
    //     verificationCode:'456321'
    //   },
    //   header: {
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   },
    //   method: "get",
    //   success: function (res) {
    //     wx.redirectTo({
    //       url: '../index/index',
    //     })
    //   },
    //   fail: function (err) { },
    //   complete: function () { }
    // })
    wx.redirectTo({
      url: '../index/index',
    })
  },
  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    //
  }
})