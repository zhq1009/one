// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: [],
    id: 0,
    courses: [],
    courseslist: false,
  },
  // 点击事件，点击跳转
  change(val) {
    //console.log(val)
    this.setData({
      id: val.target.dataset.id
    })
    this.init()
  },
  init() {
    wx.request({
      url: `https://clwy.cn/video/api/v2/categories/${this.data.id}.json`,
      success: res => {
        //console.log(res)
        if (res.data.courses.length == 0) {
          this.setData({
            courses: res.data.courses,
            courseslist: true
          })
          return
        }
        this.setData({
          courses: res.data.courses,
          courseslist: false
        })


      }
    })
  },
  // 点击跳转到课程详情页
  courses(val) {
    // console.log(val)
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
    this.setData({
      id: 1
    })
    wx.request({
      url: 'https://clwy.cn/video/api/v2/categories.json',
      success: res => {
        console.log(res.data)
        this.setData({
          categories: res.data.categories,
        })
        this.init()
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