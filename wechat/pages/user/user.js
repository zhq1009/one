// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    token: false,
    title: ['我的主页', '喜欢的课程', '观看历史'],
    ind: 0,
    token_type: '',
    access_token: '',
    user: [],
    courses: [],
    histories: [],
  },
  login() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  Storage() {
    let token_type = wx.getStorageSync('token_type')
    let access_token = wx.getStorageSync('access_token')
    if (access_token) {
      this.setData({
        token: true,
        token_type: token_type,
        access_token: access_token
      })
      // 我的主页
      wx.request({
        url: 'https://clwy.cn/api/v2/users/me.json',
        header: {
          // Accept: 'application/json',
          'Authorization': `${this.data.token_type} ${this.data.access_token}`,
        },
        success: res => {
          this.setData({
            user: res.data.user
          })
          // console.log(this.data.user)
        }
      })
      // 喜欢的课程
      wx.request({
        url: 'https://clwy.cn/api/v2/users/favorite_courses.json',
        header: {
          // Accept: 'application/json',
          'Authorization': `${this.data.token_type} ${this.data.access_token}`,
        },
        success: res => {
          this.setData({
            courses: res.data.courses
          })

        }
      })
      // 观看历史
      wx.request({
        url: 'https://clwy.cn/api/v2/users/course_histories.json',
        header: {
          // Accept: 'application/json',
          'Authorization': `${this.data.token_type} ${this.data.access_token}`,
        },
        success: res => {

          this.setData({
            histories: res.data.histories
          })

        }
      })
    } else {
      this.setData({
        token: false
      })
    }
  },
  changetitle(val) {
    this.setData({
      ind: val.currentTarget.dataset.index
    })
  },
  // 点击退出
  btnexit() {
    // 清除所有缓存
    wx.clearStorageSync()
    this.Storage()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Storage()
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
    this.Storage()
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