// pages/courses/courses.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courses: [],
    chapters: [],
    icon: true
  },
  btnicon() {
    this.setData({
      icon: !this.data.icon
    })
    // console.log(this.data.icon)
  },
  // 点击课程列表
  chapters(val) {
    let id = val.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/viedo/viedo?id=${id}`,
    })
    // console.log(val)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 修改页面title
    wx.setNavigationBarTitle({
      title: options.name
    })
    wx.request({
      url: `https://clwy.cn/video/api/v2/courses/${options.id}.json`,
      success: res => {
        console.log(res)
        this.setData({
          courses: res.data.course, //课程详情
          chapters: res.data.chapters, //课程列表
        })
      }
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