// pages/managerCustomerData_new/managerCustomerData_new.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,
    sliderOffset: 0,
    search: true,
    add: false,
    tabs: ["门店顾客", "我的顾客"],
    list: [
      { "id": 1, 'selected': false, "phone": '18272058288', "src": "http://www.hzmvip.com/images/customer.jpg", "name": "小金" },
      { "id": 2, 'selected': false, "phone": '18272058252', "src": "http://www.hzmvip.com/images/tou.png", "name": "小芳" },
      { "id": 3, 'selected': false, "phone": '18272058278', "src": "http://www.hzmvip.com/images/ceshi.jpg", "name": "小成" },
      { "id": 3, 'selected': false, "phone": '18272058278', "src": "http://www.hzmvip.com/images/ceshi.jpg", "name": "小成" },
      { "id": 3, 'selected': false, "phone": '18272058278', "src": "http://www.hzmvip.com/images/ceshi.jpg", "name": "小成" },
      { "id": 3, 'selected': false, "phone": '18272058278', "src": "http://www.hzmvip.com/images/ceshi.jpg", "name": "小成" },
      { "id": 3, 'selected': false, "phone": '18272058278', "src": "http://www.hzmvip.com/images/ceshi.jpg", "name": "小成" },
    ],
  },
  // 切换标签页
  toggleTab: function(e) {
    this.setData({
      activeIndex: e.currentTarget.id,
      sliderOffset: e.currentTarget.offsetLeft
    })
  },
  // 切换显示增加按钮操作框
  toggle: function(e) {
    this.setData({
      add: !this.data.add
    })
  },
  // 切换显示搜索框
  toggleSearchBox(e) {
    this.setData({
      search: !this.data.search
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