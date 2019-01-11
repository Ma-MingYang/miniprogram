const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
// 时间格式化
const formattimestamp = function (number, format) {

  var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  var returnArr = [];

  var date = new Date(number * 1000);
  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));

  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  returnArr.push(formatNumber(date.getSeconds()));

  for (var i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;

}

//时间处理
const formattimes = function (time) {
  //时间处理
  var current = new Date();
  var currentyear = current.getFullYear();
  var currentmounth = current.getMonth() + 1;
  var currentdate = current.getDate();
  var currenthour = current.getHours();
  var currentmin = current.getMinutes();
  //接收的时间
  var time = parseInt(time);
  var now = new Date(time * 1000);
  var year = now.getFullYear();
  var mounth = now.getMonth() + 1;
  var date = now.getDate();
  var hour = now.getHours();
  var min = now.getMinutes();

  let minustramp = parseInt((current.getTime() - new Date(time * 1000).getTime()) / 1000)
  // console.log(minustramp)//毫秒
  // 相差多少天
  let minusday = Math.floor(minustramp / 3600 / 24);
  // console.log(minusday +'day')
  // 相差多少分钟
  let minushour = Math.floor(minustramp % 86400 / 3600);
  // console.log(minushour + 'minushour')
  // 相差多少秒
  let minusminute = Math.floor(minustramp % 86400 % 3600 / 60);
  // console.log(minusminute + 'minute')


  if (minusday > 0) {
    var clock = minusday + '天前'
  } else if (!minusday && (minushour > 0)) {
    var clock = minushour + '小时前'
  } else if (!minushour && !minushour && (minusminute > 0)) {
    var clock = minusminute + '分钟前'
  } else {
    var clock = '一分钟前'
  }
  return clock;
}
// 数组扁平化
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
// 获取所有id
const arrId = function (arr, id) {
  var b = [];
  var idArr = id.split(".")

  for (var i = 0; i < arr.length; i++) {
    var object = arr[i];
    for (var j = 0; j < idArr.length; j++) {
      object = object[idArr[j]]
      if (j == idArr.length - 1) {
        b.push(object)
      }
    }

  }
  return b;
}
module.exports = {
  formatTime: formatTime,
  formattimestamp, // 时间格式化，['Y', 'M', 'D', 'h', 'm', 's']
  formattimes, //时间戳处理变成多少天前，多少小时前，多少分钟前
  deepFlatten, // 数组扁平化-降维，嵌套数组变成单层数组
  arrId, //获取所有传入字段

}
