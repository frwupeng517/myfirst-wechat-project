// pages/setCustomerData/setCustomerData.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '', value: '女性', checked: 'true' },
      { name: '', value: '男性' },
    ],
    items1: [
      { name: '', value: '否', checked: 'true' },
      { name: '', value: '是' },
    ],
    itemList1: [
      { title: '肩颈酸胀痛' },
      { title: '女性痛经' },
      { title: '乳房胀痛' },
      { title: '头晕、头痛' },
      { title: '四肢酸痛' },
      { title: '女性宫寒' },
      { title: '颈椎酸痛' },
      { title: '手脚冰凉' },
      { title: '失眠' },
      { title: '腰部酸胀' },
    ],
    itemList2: [
      { title: '皮肤干燥' },
      { title: '皮肤暗黄' },
      { title: '过敏性肌肤' },
      { title: '皱纹' },
      { title: '粉刺、痘痘' },
      { title: '毛孔粗大' },
      { title: '松弛' },
      { title: '眼袋' },
      { title: '黑眼圈' },
      { title: '斑痕、痘印' },
    ],
    date: '请选择',
    marryDate: '请选择',
    itemListShow1: true,
    itemListShow2: true,
    array1: ['选择类型', 'A类', 'B类', 'C类', 'D类'],
    index1: 0,
    array2: ['未知', 'A型', 'B型', 'O型', 'AB型'],
    index2: 0,
    array3: ['未设置', '未婚', '已婚'],
    index3: 0,
    xingzuo: ['请选择', '水瓶座', '双鱼座', '白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '室女座', '天秤座', '天蝎座', '人马座', '摩羯座'],
    indexXZ: 0,
  },
  // 选择生日
  bindDateChange(e) {
    let value = e.detail.value
    this.setData({
      date: value
    })
  },
  // 选择星座
  bindPickerChange(e) {
    console.log(e)
    let index = e.detail.value
    this.setData({
      indexXZ: index
    })
  },
  // 选择类型
  bindChangeType(e) {
    let index = e.detail.value
    this.setData({
      index1: index
    })
  },
  // 选择血型
  bindChangeBlood(e) {
    let index = e.detail.value
    this.setData({
      index2: index
    })
  },
  // 选择婚姻
  bindChangeMarry(e) {
    let index = e.detail.value
    this.setData({
      index3: index
    })
  },
  // 选择婚姻纪念日
  bindChangeMarryDate(e) {
    let date = e.detail.value
    this.setData({
      marryDate: date
    })
  },
  // 切换身体信息
  toggleItemList1() {
    this.setData({
      itemListShow1: !this.data.itemListShow1
    })
  },
  // 切换面部信息
  toggleItemList2() {
    this.setData({
      itemListShow2: !this.data.itemListShow2
    })
  },
  // 保存
  save() {
    this.setData({
      maskActive: true
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