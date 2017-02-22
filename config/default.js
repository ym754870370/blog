//当浏览器访问服务器并发送第一次请求时，服务器端会创建一个session对象，生成一个类似于key,value的键值对， 
//然后将key(cookie)返回到浏览器(客户)端，浏览器下次再访问时，携带key(cookie)，找到对应的session(value)。
//客户的信息都保存在session中。 
module.exports = {
  port: 3000,
  session: {
    secret: 'myblog',//一个String类型的字符串，作为服务器端生成session的签名。 
    key: 'myblog',//返回客户端的key的名称，默认为connect.sid,也可以自己设置。 
    maxAge: 2592000000//最大上限
  },
  mongodb: 'mongodb://localhost:27017/myblog'
};