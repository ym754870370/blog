module.exports = {//检查是否登陆
  checkLogin: function checkLogin(req, res, next) {
    if (!req.session.user) {//req.session.user从哪翻回出来的？？？？？在signup-routes中进行传值
      req.flash('error', '未登录'); 
      return res.redirect('/signin');//重定向返回之前的网页
    }
    next();
  },

  checkNotLogin: function checkNotLogin(req, res, next) {
    if (req.session.user) {
      req.flash('error', '已登录'); 
      return res.redirect('back');//返回之前的页面
    }
    next();
  }
};