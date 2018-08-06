// pages/customerOrder/customerOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["普通订单", "活动订单"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    hidden1: true,
    hidden2: false,
    A: 2,
  },
  // 切换标签页
  tabClick(e) {
    this.setData({
      activeIndex: e.currentTarget.id,
      slideOffset: e.currentTarget.offsetLeft
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.getSystemInfo({
      success: function(res) {
        _this.setData({
          width: res. windowWidth / _this.data.tabs.length,
          slideOffset: res.windowWidth / _this.data.tabs.length * _this.data.activeIndex
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