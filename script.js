// 1. HTML要素の取得（IDがHTMLと一致していることを確認）
// const buttonElement = document.getElementById('myButton'); 
// ↑ 元のIDは 'myButton' でしたが、今回は 'buttonElement' に変更しました。
const buttonElement = document.getElementById('buttonElement'); // ← 6行目付近
const messageElement = document.getElementById('messageArea'); // ← 7行目付近

// 2. ボタンにイベントリスナー（監視役）を追加
// 8行目付近: buttonElement.addEventListener('click', function() {
buttonElement.addEventListener('click', function() { 
    
    // ↓↓↓ ボタンがクリックされたときに実行される処理 ↓↓↓
    
    // ポップアップ（アラート）を表示
    alert("クリック成功！🎉");
    
    // メッセージエリアのテキストを更新
    messageElement.textContent = "ボタン";
    
    // メッセージの文字色を青にする
    messageElement.style.color = 'blue';
});