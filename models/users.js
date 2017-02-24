var User = require('../lib/mongo').User;

module.exports = {
  // 注册一个用户
  create: function create(user) {
    return User.create(user).exec();//creat创建一个对象的es5方法
  },

  // 通过getUserByName方法用户名获取用户信息
  getUserByName: function getUserByName(name) {
    return User
      .findOne({ name: name })
      .addCreatedAt()//addCreatedAt自定义插件（通过_id生成时间戳）
      .exec();
  }
};