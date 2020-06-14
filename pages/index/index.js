var app = getApp(); //启用全局变量，以通过实例
// var GTUS = require('../../utils/GenerateTestUserSig.js') //可以调用utils里面的GenerateTestUserSig.js的函数


Page({


  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //开启on监听
    let onMessageReceived = function(event) {
      // 收到推送的单聊、群聊、群提示、群系统通知的新消息，可通过遍历 event.data 获取消息列表数据并渲染到页面
      // event.name - TIM.EVENT.MESSAGE_RECEIVED
      // event.data - 存储 Message 对象的数组 - [Message]
    };
    app.globalData.tim.on(app.globalData.TIM.EVENT.MESSAGE_RECEIVED, onMessageReceived);
    //开启on监听

    //登录
    let promise = app.globalData.tim.login({
      userID: 'sweetcoral',
      userSig: 'eJwtzE0LgkAUheH-MuuQO*qICi1SIoISosJxOThXvfmRqJgQ-fdEXZ7nwPtlj8vdGLFjPjMNYLtlk8ZmoIwW7j*IQ-ruVLW9vS5V25JmPrcBLNfh3FsfnFrqcHYhhAkAqw5UL*aZ3HYd4WwVyud4LK*nCnKZZPqFWCTnyqrxGCkYA5VOYfiMGkllcbjFyZ79-pa8NDc_'
    });
    promise.then(function(imResponse) {
      console.log(imResponse.data); // 登录成功
      if (imResponse.data.repeatLogin === true) {
        // 标识账号已登录，本次登录操作为重复登录。v2.5.1 起支持
        console.log(imResponse.data.errorInfo);
      }
    }).catch(function(imError) {
      console.warn('login error:', imError); // 登录失败的相关信息
    });
    //登录
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },


  //测试函数
  test:function() {
    let promise = app.globalData.tim.getMyProfile();
    promise.then(function (imResponse) {
      console.log(imResponse.data); // 个人资料 - Profile 实例
    }).catch(function (imError) {
      console.warn('getMyProfile error:', imError); // 获取个人资料失败的相关信息
    });
  }
  //测试函数
})