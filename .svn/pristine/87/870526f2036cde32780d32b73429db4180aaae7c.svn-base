// components/login/login.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    login_hidden: {
      type: Boolean,
      value: ''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    phone: "",
    code: "",
    time: 0,
    buttonTip: "获取验证码",
    timer: null,
    isContent: "",
    show: true,
    disabled: false
  },

  /**
   * 组件的方法列表
   */

  methods: {
    hiddenShade() {
      setTimeout(() => {
        this.setData({
          show: true,
        })
      }, 2000);
    },
    getPhone(e) {
      this.setData({
        phone: e.detail.value
      })
      console.log(this.data.phone)
    },
    getCode(e) {
      if (e.detail.value === this.data.code) {
        return;
      }
      this.setData({
        code: e.detail.value
      }, () => {
        if (`${e.detail.value}`.length === 6) {
          this.submit();
        }
      })
    },
    // 安全登录
    submit() {
      app.globalData.$post("user/userLoginController/unionlogin", {
        phoneNum: this.data.phone,
        authCode: this.data.code,
        openId: wx.getStorageSync("openid"),
        source: "9"
      }, {
          interfaceType: "collect"
        }).then((res) => {
          if (res.code == 200) {
            for (let key in res.data) {
              wx.setStorageSync(key, res.data[key]);
            }
            this.close()
          }

        });
    },
    // 跳转页面
    turnRouter(route) {
      console.log(route)
      app.globalData.ctxPath = `https://www.guoanfamily.com/guoanjiaApp/${route}from=xiaochengxu`;
      console.log(app.globalData.ctxPath)
      wx.navigateTo({
        url: '/pages/first/first'
      })
    },
    getCodeInfo() {
      if (this.data.time !== 0) {
        return;
      }

      if (this.data.phone.length !== 11 || !/^\d+$/.test(this.data.phone) || !/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.data.phone)) {
        this.setData({
          isContent: "请输入正确的手机号",
          show: false
        })
        this.hiddenShade();
        return;
      }
      //开启获取验证码倒计时
      this.setData({
        time: 60,
        timer: setInterval(() => {
          if (this.data.time - 1 === 0) {
            clearInterval(this.data.timer);
            this.setData({
              timer: null,
              time: 0,
              buttonTip: "获取验证码",
              disabled: false
            })
          } else {
            let time = --this.data.time;
            this.setData({
              time: time,
              buttonTip: `${time}s后重新获取`,
              disabled: true
            })
          }
        }, 1000)
      });
      app.globalData.$post("user/smsAuthCodeController/unionSMSAuthCOde", {
        phoneNum: this.data.phone
      }).then((res) => {
        console.log(res)
        if (res.code == 200) {
          this.setData({
            isContent: "信息已发送,请注意查收！",
            show: false
          })
          this.hiddenShade();
        }
      });
    },
    close(e) {
      wx.navigateBack({
        delta:1
      })
    }
  }
})
