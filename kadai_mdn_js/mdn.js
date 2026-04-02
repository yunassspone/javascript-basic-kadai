// 現在時刻の取得
let date = new Date();

const year = date.getFullYear();
const month = date.getMonth()+1;
const day = date.getDate();

let strDate = year + "年" + month + "月" + day + "日";

console.log(strDate);