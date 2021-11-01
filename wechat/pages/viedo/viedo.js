// pages/viedo/viedo.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    chapter: [],
    check: false,
    chapters: [],
    body: '',
    options: []
  },
  // 点击课程详情
  courselist() {
    this.setData({
      check: !this.data.check
    })
  },
  mengban() {
    this.setData({
      check: !this.data.check
    })
  },
  mainlist(val) {
    // console.log(val)
    this.setData({
      options: val.currentTarget.dataset,
      check: !this.data.check
    })
    this.init()
  },
  init() {
    wx.request({
      url: `https://clwy.cn/video/api/v2/chapters/${this.data.options.id}.json`,
      success: res => {
        console.log(res)
        let data = app.towxml.toJson(
          res.data.chapter.body, // `markdown`或`html`文本内容
          'markdown' // `markdown`或`html`
        );
        this.setData({
          chapter: res.data.chapter,
          chapters: res.data.chapters,
          body: data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      options: options
    })
    // console.log(options)
    this.init()
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