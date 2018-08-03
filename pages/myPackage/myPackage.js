// pages/myPackage/myPackage.js
var statusArrs = [false]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showArr: statusArrs,
    itemList: [
      {
        "order": 1,
        "name": "头部拨筋醒脑",
        "list": [
          {
            "num": 0,
            "id": 1,
            "names": "香港阿萨德嘎哈",
            "order": 1,
          },
          {
            "num": 0,
            "id": 2,
            "names": "香港asadf德嘎哈",
            "order": 1,
          },
        ]
      },
      {
        "order": 2,
        "name": "水凝活肤",
        "list": [
          {
            "num": 0,
            "id": 3,
            "names": "香港asadf德嘎哈",
            "order": 2,
          },
          {
            "num": 0,
            "id": 4,
            "names": "香港a1哈",
            "order": 2,
          },
          {
            "num": 0,
            "id": 5,
            "names": "asd嘎哈",
            "order": 2,
          },
        ]
      }
    ]
  
  
  },
  // 切换选择服务
  trigger (e) { 
    let id = e.currentTarget.id
    statusArrs[id] = !statusArrs[id]
    this.setData({
      showArr: statusArrs,
      selected: id
    })
  },
  // 减
  minus(e) {
    let id = e.currentTarget.id,
        order = e.currentTarget.dataset.order,
        itemList = this.data.itemList
    for(let i = 0; i < itemList.length; i++) {
      if(itemList[i].order == order) {
        for(let j = 0; j < itemList[i].list.length; j++) {
          if(itemList[i].list[j].id == id && itemList[i].list[j].num > 0) {
            itemList[i].list[j].num--
          }
        }
      }
    }
    this.setData({
      itemList: itemList
    })
  },
  // 加
  plus(e) {
    let id = e.currentTarget.id,
      order = e.currentTarget.dataset.order,
      itemList = this.data.itemList
    for (var i = 0; i < itemList.length; i++) {
      if (itemList[i].order == order) {
        for (var j = 0; j < itemList[i].list.length; j++) {
          if (itemList[i].list[j].id == id) {
            itemList[i].list[j].num++
          }
        }
      }
    }
    this.setData({
      itemList: itemList
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