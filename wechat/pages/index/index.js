// pages/ss.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    introductory_courses: [], //推荐
    num: 0,
    calendar_courses: [], //课程发布日历
    popular_courses: [], //欢迎课程
    popular_documents: [], //人气教程
    recommended_courses: [], //入门课程
    recommended_documents: [], //推荐教程
  },

  change(val) {
    this.setData({
      num: val.detail.current
    })
  },

  // 新闻
  news(){
    wx.navigateTo({
      url: '/pages/news/news',
    })
  },
  // 搜索
  search(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  // 三点
  sandian(){
    wx.navigateTo({
      url: '/pages/sandian/sandian',
    })
  },
  // 点击课程发布日历
  calendar_courses(val){
    console.log(val)
    let id = val.currentTarget.dataset.id
    let name = val.currentTarget.dataset.name
    wx.navigateTo({
      url: `/pages/courses/courses?id=${id}&name=${name}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://clwy.cn/api/v2/home.json',
      success: res => {
        console.log(res.data)
        this.setData({
          introductory_courses: res.data.introductory_courses,
          calendar_courses: res.data.calendar_courses,
          popular_courses: res.data.popular_courses,
          popular_documents: res.data.popular_documents,
          recommended_courses: res.data.recommended_courses,
          recommended_documents: res.data.recommended_documents,
        })
      },
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