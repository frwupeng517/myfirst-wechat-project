// pages/deductDetail/deductDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ['已完成', '进行中'],
    activeIndex: 0
  },
  // 切换标签页
  tabClick: function(e) {
    console.log(e)
    let currentIndex = e.currentTarget.dataset.current
    let offsetLeft = e.currentTarget.offsetLeft
    this.setData({
      activeIndex: currentIndex,
      slideOffset: offsetLeft
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.getSystemInfo({
      success: function(res) {
        console.log(res)
        _this.setData({
          width : res.windowWidth / _this.data.tabs.length,
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