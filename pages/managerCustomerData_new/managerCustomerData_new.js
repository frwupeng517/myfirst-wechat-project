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
    isAssign: false,
    showMask: false,
    autoFocus: false,
    selectedNum: 0,
    tabs: ["门店顾客", "我的顾客"],
    list: [
      { "id": 1, 'selected': false, "phone": '18272058288', "src": "http://www.hzmvip.com/images/customer.jpg", "name": "小金" },
      { "id": 2, 'selected': false, "phone": '18272058252', "src": "http://www.hzmvip.com/images/tou.png", "name": "小芳" },
      { "id": 3, 'selected': false, "phone": '18272058278', "src": "http://www.hzmvip.com/images/ceshi.jpg", "name": "小成" },
      { "id": 4, 'selected': false, "phone": '18272058278', "src": "http://www.hzmvip.com/images/ceshi.jpg", "name": "小成" },
      { "id": 5, 'selected': false, "phone": '18272058278', "src": "http://www.hzmvip.com/images/ceshi.jpg", "name": "小成" },
      { "id": 6, 'selected': false, "phone": '18272058278', "src": "http://www.hzmvip.com/images/ceshi.jpg", "name": "小成" },
      { "id": 7, 'selected': false, "phone": '18272058278', "src": "http://www.hzmvip.com/images/ceshi.jpg", "name": "小成" },
    ],
    list1: [
      { "id": 1, 'selected': false, "phone": '18272058288', "src": "http://www.hzmvip.com/images/customer.jpg", "name": "小金" },
      { "id": 2, 'selected': false, "phone": '18272058252', "src": "http://www.hzmvip.com/images/tou.png", "name": "小芳" },
      { "id": 3, 'selected': false, "phone": '18272058278', "src": "http://www.hzmvip.com/images/ceshi.jpg", "name": "小成" },
      { "id": 4, 'selected': false, "phone": '18272058278', "src": "http://www.hzmvip.com/images/ceshi.jpg", "name": "小成" },
      { "id": 5, 'selected': false, "phone": '18272058278', "src": "http://www.hzmvip.com/images/ceshi.jpg", "name": "小成" },
      { "id": 6, 'selected': false, "phone": '18272058278', "src": "http://www.hzmvip.com/images/ceshi.jpg", "name": "小成" },
      { "id": 7, 'selected': false, "phone": '18272058278', "src": "http://www.hzmvip.com/images/ceshi.jpg", "name": "小成" },
      { "id": 8, 'selected': false, "phone": '18272058278', "src": "http://www.hzmvip.com/images/ceshi.jpg", "name": "小成" },
      { "id": 9, 'selected': false, "phone": '18272058278', "src": "http://www.hzmvip.com/images/ceshi.jpg", "name": "小成" },
    ],
    characteristicList: [{
      text: "A类"
    }, {
      text: "B类"
    }, {
      text: "C类"
    }, {
      text: "D类"
    }, {
      text: "E类"
    }],
    discountList: [{
      icon: "A",
      iconColor: "#FF635B",
      text: "A类"
    }, {
      icon: "B",
      iconColor: "#FF7298",
      text: "B类"
    }, {
      icon: "C",
      iconColor: "#FB4343",
      text: "C类"
    }, {
      icon: "D",
      iconColor: "#C183E2",
      text: "D类"
    }, {
      icon: "E",
      iconColor: "#6FDF64",
      text: "E类"
    }, {
      icon: "F",
      iconColor: "#FDC41E",
      text: "F类"
    }, {
      icon: "G",
      iconColor: "#43B697",
      text: "G类"
    }],
  },
  // 切换标签页
  toggleTab: function(e) {
    this.setData({
      activeIndex: e.currentTarget.id,
      sliderOffset: e.currentTarget.offsetLeft
    })
  },
  // 切换显示增加按钮操作框
  toggle: function() {
    this.setData({
      add: !this.data.add
    })
  },
  // 切换显示搜索框
  toggleSearchBox() {
    this.setData({
      search: !this.data.search,
      autoFocus: true
    })
  },
  // 输入框搜索
  onSearch() {
    wx.showToast({
      title: '找不到搜索结果',
    })
  },
  // 分配
  assign() {
    this.setData({
      isAssign: !this.data.isAssign,
      add: !this.data.add
    })
  },
  // 单选
  selectItem(e) {
    let index = e.currentTarget.dataset.index
    let list = this.data.list1
    let selected = list[index].selected
    if(this.data.isAssign) { // 分配
      selected ? list[index].selected = false : list[index].selected = true
      this.setData({
        list1: list
      })
      let selectedItems = []
      list.forEach((item, index) => {
        if(item.selected) {
          selectedItems.push(item.id)
        }
      })
      this.setData({
        selectedItems: selectedItems
      })
    } else { // 无需点击分配
      wx.navigateTo({
        url: '../customerCenter/customerCenter'
      })
    }
  },
  // 取消分配
  cancelAssign() {
    let list = this.data.list1
    list.forEach((item, index) => {
      if(item.selected) {
        item.selected = false
      }
    })
    this.setData({
      isAssign: false,
      list1: list
    })
  },
  // 确认分配
  confirmAssign() {
    let list = this.data.list1
    let selectedItems = []
    for(var i = list.length - 1; i >= 0; i--) { // 删除一个元素最好倒序遍历，因为index一直在变
      if(list[i].selected) {
        selectedItems.push(list[i])
        list.splice(i, 1)
      }
    }
    this.setData({
      isAssign: false,
      list1: list
    })
    if(selectedItems && selectedItems.length > 0) {
      wx.navigateTo({
        url: '../selectMRS/selectMRS'
      })
    }
  },
  // 点击打开筛选弹层
  sortItem() {
    this.setData({
      showMask: true
    })
  },
  // 点击切换选择分类
  selectCatlog(e) {
    let index = e.currentTarget.dataset.index
    let discountList = this.data.discountList
    if (!discountList[index].selectedIndex) { // 选中
      discountList[index]['selectedIndex'] = true
      this.setData({
        discountList: discountList,
        selectedNum: this.data.selectedNum + 1
      })
    } else{ // 取消选中
      discountList[index]['selectedIndex'] = false
      this.setData({
        discountList: discountList,
        selectedNum: this.data.selectedNum - 1
      })
    }
  },
  // 清除筛选
  clearSort() {
    let discountList = this.data.discountList
    discountList.forEach(item => {
      if(item.selectedIndex) {
        item.selectedIndex = false
      }
    })
    this.setData({
      showMask: false,
      discountList: discountList,
      selectedNum: 0
    })
  },
  // 确认筛选
  confirmSort() {
    this.setData({
      showMask: false
    })
  },
  // 打电话
  makeCall(e) {
    let phone = e.currentTarget.dataset.phone
    wx.makePhoneCall({
      phoneNumber: phone,
      success() {
        console.log('呼叫成功')
      },
      fail() {
        console.log('呼叫失败')
      }
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