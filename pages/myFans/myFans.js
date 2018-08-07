// pages/myFans/myFans.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedIndex: 1,
    slider: ['全部粉丝', '一级粉丝', '二级粉丝']
  },
  // 切换标签页
  toggleSlider(e) {
    let index = e.currentTarget.dataset.index,
        offsetLeft = e.currentTarget.offsetLeft
    this.setData({
      scrollLeft: offsetLeft,
      selectedIndex: index
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
          width: res.windowWidth / _this.data.slider.length,
          scrollLeft: res.windowWidth / _this.data.slider.length * _this.data.selectedIndex
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