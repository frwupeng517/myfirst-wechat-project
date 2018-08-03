// pages/shopArrange/shopArrange.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    MRS: [
      { 'id': '1' },
      { 'id': '2' },
      { 'id': '3' },
      { 'id': '4' },
      { 'id': '5' },
    ],
    go: ''
  },
  gonext() {
    switch(this.data.go) {
      case 1:
        wx.navigateTo({
          url: '../serviceTime/serviceTime',
        })
        break
      case 2:
        wx.navigateTo({
          url: '../addWorkSummary/addWorkSummary',
        })
        break
      default:
        wx.navigateTo({
          url: '../timePicker/timePicker',
        })
    } 
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