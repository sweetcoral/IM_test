var app = getApp(); //启用全局变量，以通过实例



Page({


  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    genTestUserSig
    console.log(app.globalData.tim)
    let promise = app.globalData.tim.login({ userID: "sweetcoral", userSig: "123456" });
    promise.then(function (imResponse) {
      console.log(imResponse.data); // 登录成功
      if (imResponse.data.repeatLogin === true) {
        // 标识账号已登录，本次登录操作为重复登录。v2.5.1 起支持
        console.log(imResponse.data.errorInfo);
      }
    }).catch(function (imError) {
      console.warn('login error:', imError); // 登录失败的相关信息
    });
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