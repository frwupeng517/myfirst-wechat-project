// pages/work/work.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEmp: false,
    operations: [
      {
        "url": "../myOrder/myOrder",
        "icon": "http://www.hzmvip.com/images/work/dd.png",
        "text": "我的订单"
      },
      {
        "url": "../myPackage/myPackage",
        "icon": "http://www.hzmvip.com/images/work/hk.png",
        "text": "套餐划扣"
      },
      {
        "url": "../weekWorkSummary/weekWorkSummary",
        "icon": "http://www.hzmvip.com/images/work/gz.png",
        "text": "工作日志"
      },
      {
        "url": "../warning/warning",
        "icon": "http://www.hzmvip.com/images/work/yj.png",
        "text": "顾客预警"
      }
    ],
    managements: [
      {
        "url": "../managerArrange_new/managerArrange_new",
        "icon": "http://www.hzmvip.com/images/work/pb.png",
        "text": "排班"
      },
      {
        "url": "../templates/templates",
        "icon": "http://www.hzmvip.com/images/work/sp.png",
        "text": "审批"
      },
      {
        "url": "",
        "icon": "http://www.hzmvip.com/images/work/kc.png",
        "text": "库存"
      },
      {
        "url": "../arguments/arguments",
        "icon": "http://www.hzmvip.com/images/work/cs.png",
        "text": "参数管理"
      },
      {
        "url": "../applyActivity/applyActivity",
        "icon": "http://www.hzmvip.com/images/work/xd.png",
        "text": "下店申请"
      },
      {
        "url": "../mrsManage/mrsManage",
        "icon": "http://www.hzmvip.com/images/work/mrs.png",
        "text": "美容师管理"
      }
    ],
    marketings: [
      {
        "url": "../redPacketDetail/redPacketDetail",
        "icon": "http://www.hzmvip.com/images/work/hb.png",
        "text": "红包拓客"
      },
      {
        "url": "../templates/templates",
        "icon": "http://www.hzmvip.com/images/work/hd.png",
        "text": "活动创建"
      },
      {
        "url": "../activity/activity",
        "icon": "http://www.hzmvip.com/images/work/gl.png",
        "text": "活动管理"
      }
    ],
    analysis: [
      {
        "url": "../customerAnalysis/customerAnalysis",
        "icon": "http://www.hzmvip.com/images/work/gk.png",
        "text": "顾客分析"
      },
      {
        "url": "",
        "icon": "http://www.hzmvip.com/images/work/fx.png",
        "text": "员工分析"
      },
      {
        "url": "",
        "icon": "http://www.hzmvip.com/images/work/xm.png",
        "text": "项目分析"
      },
      {
        "url": "",
        "icon": "http://www.hzmvip.com/images/work/zh.png",
        "text": "综合分析"
      }
    ]
  },
  // 切换身份
  toggleRole() {
    this.setData({
      isEmp: !this.data.isEmp
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