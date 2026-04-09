//btnというidを持つHTML要素を取得し、定数に代入する
const clickBtn = document.getElementById('btn');
//textというidを持つHTML要素を取得し、定数に代入する
const dispText = document.getElementById('text');

//クリックしたときにテキストを変更する関数
clickBtn.addEventListener('click', () => {
  dispText.textContent = "ボタンをクリックしました"
})