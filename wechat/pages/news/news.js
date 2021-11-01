// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles: [],
    page: 1,
    id: '',
  },
  init() {
    wx.request({
      url: `https://clwy.cn/information/api/v2/articles.json?page=${this.data.page}`,
      success: res => {
        console.log(res)
        this.setData({
          articles: res.data.articles
        })
      }
    })
  },
  maintitle(val) {
    console.log(val)
    this.setData({
      id: val.currentTarget.dataset.id
    })
    wx.navigateTo({
      url: `/pages/webview/webview?id=${this.data.id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    console.log("已经触底"),
      this.setData({
        page: ++this.data.page
      })
    wx.request({
      url: `https://clwy.cn/information/api/v2/articles.json?page=${this.data.page}`,
      success: res => {
        // 将上一页的数据和下一页的数据拼接成一个大数组
        this.data.articles.concat(res.data.articles)
        this.setData({
          articles: this.data.articles
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})