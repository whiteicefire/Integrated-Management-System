// const Mock = require('mockjs') // 获取mock对象
// const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
// const domain = 'http://mockjs.com/api' // 定义默认域名，随便写
// const code = 200 // 返回的状态码

// // 随机生成文章数据
// const postData = req => {

//   console.log(req) // 请求体，用于获取参数

//   let posts = [] // 用于存放文章数据的数组

//   for (let i = 0; i < 10; i++) {
//     let post = {
//       title: Random.csentence(10, 25), // 随机生成长度为10-25的标题
//       icon: Random.dataImage('250x250', '文章icon'), // 随机生成大小为250x250的图片链接
//       author: Random.cname(), // 随机生成名字
//       date: Random.date() + ' ' + Random.time() // 随机生成年月日 + 时间
//     }

//     posts.push(post)
   
//   }

//   // 返回状态码和文章数据posts
//   return {
//     code,
//     posts
//   }
// }

// // 定义请求链接，类型，还有返回数据
// Mock.mock('/resetdb', 'get', postData);

// 引入mockjs

const Mock = require('mockjs');

// 获取 mock.Random 对象

const Random = Mock.Random;

// mock一组数据

const produceNewsData = function() {
    let articles = [];

    for (let i = 0; i < 10; i++) {

        let newArticleObject = {

            title: Random.csentence(5, 30), //  Random.csentence( min, max )

            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码

            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名

            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
    return {
        articles: articles
    }
}

 

// Mock.mock( url, post/get , 返回的数据)；

Mock.mock('/news/index', 'post', produceNewsData);

const accessTokenData = function(res) {
    console.log('res',res)
    // var obj = eval('(' + res.body + ')');
    if(res.body == "username=zzwzg&password=000000"){
        console.log('reslog')
        let accessToken = '';
        let statusCode = 100;
        accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiO…2NTd9.JLQDDReUqZFC_qcrVcEDCIf0BrlO1TaPCIR_rDBS_w8'
    
        return {
            accessToken: accessToken,
            statusCode: statusCode
        }
    }

}

Mock.mock('/auth/login', 'post', accessTokenData);