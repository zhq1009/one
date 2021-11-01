// pages/searchnew/searchnew.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courses: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: `https://clwy.cn/api/v2/search.json?q=${options.keyword}`,
      success: res => {
        this.setData({
          courses: res.data.courses
        })
        if (this.data.courses.length == 0) {
          wx.navigateTo({
            url: '/pages/search/search',
          })
          wx.showToast({
            title: '无搜索结果',
            icon: 'error',
            duration: 2000
          })
        }
        // console.log(res)

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