// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword: '',
    search: '',
    hot: ['html', 'css', 'javascript','ruby']
  },

  // 搜索
  searchinp(val) {
    // console.log(val)
    this.setData({
      keyword: val.detail.value.trim()
    })
    if (this.data.keyword) {
      wx.navigateTo({
        url: `/pages/searchnew/searchnew?keyword=${this.data.keyword}`,
      })
      //input里面的值传出之后就清空掉 
      this.setData({
        search: ''
      })
    } else {
      wx.showToast({
        title: '不能为空',
        icon: 'error',
        duration: 2000
      })
      this.setData({
        search: ''
      })
    }

  },
  // 热搜
  hot(val) {
    // console.log(val)
    this.setData({
      keyword: val.currentTarget.dataset.hot
    })
    wx.navigateTo({
      url: `/pages/searchnew/searchnew?keyword=${this.data.keyword}`,
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