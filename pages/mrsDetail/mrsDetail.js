// pages/mrsDetail/mrsDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["已完成", "进行中"],
    activeIndex: 0,
    details: [
      { "item": "香黛精油护理套餐", "customer": "白子涵", "mrs": '欢欢、 迎迎、 贝贝、 晶晶', "time": "2018-08-08 12:06", "yeji": "3389.0", "shougong": "3389.0", "huakou": "3389.0", "xianjin": "3389.0", "status": "完成"}, 
      { "item": "香黛精油护理套餐", "customer": "白子涵", "mrs": '欢欢、 迎迎、 贝贝、 晶晶', "time": "2018-08-08 12:06", "yeji": "3389.0", "shougong": "3389.0", "huakou": "3389.0", "xianjin": "3389.0", "status": "完成" }, 
      { "item": "香黛精油护理套餐", "customer": "白子涵", "mrs": '欢欢、 迎迎、 贝贝、 晶晶', "time": "2018-08-08 12:06", "yeji": "3389.0", "shougong": "3389.0", "huakou": "3389.0", "xianjin": "3389.0", "status": "完成" }
    ]
  },
  // 切换标签页
  toggleTab(e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      activeIndex: index,
      scrollLeft: e.currentTarget.offsetLeft
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
          width: res.windowWidth / _this.data.tabs.length,
          scrollLeft: res.windowWidth / _this.data.tabs.length * _this.data.activeIndex
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