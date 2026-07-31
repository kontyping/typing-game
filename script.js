const targetWord = "vulnerable";
const typingInput = document.getElementById("typing-input");
const resultArea = document.getElementById("result-area");
const usernameInput = document.getElementById("username-input");
const submitBtn = document.getElementById("submit-btn");
const rankingList = document.getElementById("ranking-list");

// 1. タイピング判定の処理
typingInput.addEventListener("input", () => {
    if (typingInput.value === targetWord) {
        typingInput.disabled = true;
        resultArea.classList.remove("hidden"); // クリア画面を表示
    }
});

// 2. 名前の登録処理（★ここに脆弱性があります）
submitBtn.addEventListener("click", () => {
    const username = usernameInput.value;
    
    if (username.trim() !== "") {
        // ❌ 脆弱なコード: ユーザー入力をエスケープせず、innerHTML で直接代入している
        // これにより、入力された文字列が「HTMLコード」としてブラウザに解釈されてしまいます。
        rankingList.innerHTML += `<p>プレイヤー: ${username}</p>`;
        
        // フォームのリセット
        usernameInput.value = "";
        resultArea.classList.add("hidden");
        typingInput.disabled = false;
        typingInput.value = "";
    }
});
