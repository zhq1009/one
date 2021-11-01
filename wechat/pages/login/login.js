// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: ['登录', '会员注册'],
    num: 0,
    registered: [],
    error: []
  },
  btnuser(val) {
    this.setData({
      num: val.currentTarget.dataset.index
    })
  },
  btnindex() {
    wx.switchTab({
      url: '/pages/user/user',
    })
  },
  registered(val) {
    //console.log(val)
    // this.setData({
    //   registered: val.detail.value
    // })
    const data = {
      email: val.detail.value.email,
      password: val.detail.value.password,
      login: val.detail.value.login,
      name: val.detail.value.name,
    }
    wx.request({
      url: 'https://clwy.cn/api/v2/users.json',
      method: "POST",
      data: {
        user: data
      },
      success: res => {
        if (res.statusCode == 422) {
          this.setData({
            error: res.data.errors
          })
        } else {
          //console.log(res,11)
          // wx.setStorage({
          //   key: res.data.token_type,
          //   data: res.data.access_token
          // })
          wx.setStorageSync('token_type', res.data.token_type)
          wx.setStorageSync('access_token', res.data.access_token)

          wx.showModal({
            title: '提示',
            content: '注册成功',
            success(res) {
              if (res.confirm) {
                wx.navigateTo({
                  url: '/pages/login/login',
                })
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
      }
    })
  },
  login(val) {
    console.log(val)
    const data = {
      grant_type: 'password',
      client_id: 'RCnGmwJv15EIuTT9tH0VU5LR4XnfTHLS1EZ32svVmEc',
      client_secret: 'oQYcSZ6lbGSk-EusazGBdb7_4e8v2TAWBn9vVmmkD6k',
      username: val.detail.value.username,
      password: val.detail.value.password
    }
    wx.request({
      url: 'https://clwy.cn/oauth/token.json',
      method: "POST",
      data: data,
      success: res => {
        console.log(res)
        if (res.statusCode == 200) {
          // wx.setStorage({
          //   key: res.data.token_type,
          //   data: res.data.access_token
          // })
          wx.setStorageSync('token_type', res.data.token_type)
          wx.setStorageSync('access_token', res.data.access_token)

          wx.showModal({
            title: '提示',
            content: '登录成功',
            success(res) {
              if (res.confirm) {
                wx.switchTab({
                  url: '/pages/user/user',
                })
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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