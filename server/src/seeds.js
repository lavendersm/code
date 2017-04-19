const mongoose = require('mongoose');
const Product = require('./product');

mongoose.connect('mongodb://127.0.0.1:27017/dglist');

mongoose.connection.once('open', () => {

  Product.remove({}, (error) => {
    if (error) process.exit(1);

    Product.create([
      {
        title: '苹果Apple iPhone7 手机 黑色 32GB',
        price: 4498.00,
        image: 'http://img14.360buyimg.com/n1/s450x450_jfs/t3754/265/902031417/103522/d308968f/581af17fN1057992a.jpg'
      },
      {
        title: 'vivo Xplay6 库里定制版 全网通 6GB+128GB 双卡双待 冠军蓝',
        price: 4998.00,
        image: 'http://img13.360buyimg.com/n1/s450x450_jfs/t4663/247/2031415534/330573/a9ebb478/58ea3f62N9778eb8b.jpg'
      },
      {
        title: '三星 SAMSUNG S8 曲面屏设计 超大屏幕占比 智能手机 新品发布 预售 星夜黑 64G',
        price: 6999.00,
      //   image: 'http//img13.360buyimg.com/n5/s450x450_jfs/t4681/241/1353979042/210865/ad83ce32/58dce03fN992e0003.jpg'
      // 
      image: 'dglist/src/app/enviroments/1.jpg'
    }
    ], () => {
      mongoose.disconnect();
    });

  });

});