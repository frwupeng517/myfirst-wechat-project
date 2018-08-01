// pages/customerCenter/customerCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shade: true,
    list: [
      { "name": "王金", "reader": 3, "done": "今天对王大师进行了头部护理,大师感觉效果还不错,说下次还会光临。", "plan": "王大师人很好,很亲切。", "commentNumber": 1, "mark": 50 },
      { "name": "王金", "reader": 3, "done": "今天对王大师进行了头部护理,大师感觉效果还不错,说下次还会光临。", "plan": "王大师人很好,很亲切。", "commentNumber": 1, "mark": 50 },
      { "name": "王金", "reader": 3, "done": "今天对王大师进行了头部护理,大师感觉效果还不错,说下次还会光临。", "plan": "王大师人很好,很亲切。", "commentNumber": 1, "mark": 50 },
    ]
  },
  // 顾客管理弹层
  showCustomerManagement() {
    this.setData({
      shade: false
    })
  },
  hideShade() {
    this.setData({
      shade: true
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