// pages/addRecords/addRecords.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiIndex: ["0", "0"],
    result: [
      {
        "teach_area_id": "0",　　//值为模拟 加密数据
        "teach_area_name": "铺垫期"
      },
      {
        "teach_area_id": "1",
        "teach_area_name": "销售期"
      },
      {
        "teach_area_id": "2",
        "teach_area_name": "问题期"
      },
      {
        "teach_area_id": "3",
        "teach_area_name": "感动期"
      },
      {
        "teach_area_id": "4",
        "teach_area_name": "预警期"
      },
      {
        "teach_area_id": "5",
        "teach_area_name": "服务期"
      }
    ],
    result1: [
      {
        "teach_instance_id": "0",　　　　//加密数值
        "teach_instance_name": "情绪不好"
      },
      {
        "teach_instance_id": "1",
        "teach_instance_name": "不愿交流"
      },
      {
        "teach_instance_id": "2",
        "teach_instance_name": "问题繁琐"
      },
    ]
  },
  // value 改变时触发 change 事件，event.detail = {value: value}
  multiSelectorChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
    
  },
  // 某一列的值改变时触发 columnchange 事件, event.detail = {column: column, value: value}
  // column 的值表示改变了第几列（下标从0开始），value 的值表示变更值的下标
  // https://developers.weixin.qq.com/miniprogram/dev/component/picker.html?search-key=picker
  multiSelectorColumnChange(e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value)
    let data = {
      multiSelectorArr: this.data.multiSelectorArr,
      multiIndex: this.data.multiIndex
    }
    data.multiIndex[e.detail.column] = e.detail.value
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取某某期的数组
    let result = this.data.result
    let computedResult = []
    result.forEach(item => {
      computedResult.push(item.teach_area_name)
    })
    // 获取原因的数组
    let result1 = this.data.result1
    let computedResult1 = []
    result1.forEach(item => {
      computedResult1.push(item.teach_instance_name)
    })
    this.setData({
      multiSelectorArr: [computedResult, computedResult1]
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