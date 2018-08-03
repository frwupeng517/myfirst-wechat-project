// pages/timePicker/timePicker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "",
    selectedIndex: -1,
    order: [
      { "time": "10:00", "order": "不可预约", "num": "1" },
      { "time": "10:00", "order": "可预约", "num": "2" },
      { "time": "10:00", "order": "不可预约", "num": "1" },
      { "time": "10:00", "order": "可预约", "num": "2" },
      { "time": "10:00", "order": "可预约", "num": "1" },
      { "time": "10:00", "order": "可预约", "num": "2" },
      { "time": "10:00", "order": "不可预约", "num": "1" },
      { "time": "10:00", "order": "可预约", "num": "2" },
      { "time": "10:00", "order": "可预约", "num": "2" },
      { "time": "10:00", "order": "可预约", "num": "2" },
      { "time": "10:00", "order": "可预约", "num": "2" },
      { "time": "10:00", "order": "可预约", "num": "2" },
      { "time": "10:00", "order": "可预约", "num": "2" },
      { "time": "10:00", "order": "可预约", "num": "2" },
      { "time": "10:00", "order": "可预约", "num": "2" },
      { "time": "10:00", "order": "可预约", "num": "2" },
      { "time": "10:00", "order": "可预约", "num": "2" },
      { "time": "10:00", "order": "可预约", "num": "2" },
      { "time": "10:00", "order": "可预约", "num": "2" },
      { "time": "10:00", "order": "可预约", "num": "2" },
    ],
  },
  // 选择日期
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  // 预约
  order(e) {
    console.log(e)
    let order = e.currentTarget.dataset.order,
        selectedIndex = e.currentTarget.dataset.index
    if(order == '不可预约') {
      return
    } else{
      this.setData({
        selectedIndex: selectedIndex
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
    let now = new Date(),
        year = now.getFullYear(),
      month = (now.getMonth() + 1) < 10 ? `0` + (now.getMonth() + 1) : (now.getMonth() + 1),
        day = now.getDate() < 10 ? (`0` + now.getDate()) : now.getDate(),
        date = `${year}-${month}-${day}`
    this.setData({
      date: date
    })
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