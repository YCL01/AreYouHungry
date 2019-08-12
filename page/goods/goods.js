Page({

  /**
   * 页面的初始数据
   */
  data: {
    comData:[],
    comList:[]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var _this = this
    wx.request({
    url:"https://www.easy-mock.com/mock/5bc320ecb0bf35423bd75398/ele/goods",//json数据地址
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //console.log(res.data.imgListData)
        //console.log(res.data.imgListData[0].tag)
        //将获取到的json数据，存在名字叫list_data的这个数组中
        for (var i = 0; i < res.data.goods.length;i++){
          console.log(res.data.goods[i].foods[0])
          _this.setData({
            comData: res.data.goods,
            // foods:res.data.goods[i].foods,
            comList: res.data.goods[i].foods
            //res代表success函数的事件对，data是固定的，imgListData是上面json             数 据中imgListData
          })
        }
        
        
        // _this.data.messg = res.data.goods
        console.log(_this.comData)
        // console.log(res.data.goods[])
      }
    })
    console.log(_this.data)
    var aa = _this.data
    console.log(options)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  Toxiang: function (e){
    var aa = e.currentTarget.dataset.xiang

    var xiang = encodeURIComponent( JSON.stringify(aa))
    
    console.log(xiang)
    
    wx.navigateTo({
      url: '../details/details?xiang='+xiang,
    })
  },
  Toshang:function(e){
    wx.navigateTo({
      url: '../business/business',
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