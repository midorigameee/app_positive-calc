// https://fuuno.net/cani/auto_letter/auto_letter.html

(window.onload = function() {
    //要素を取得 ..①
    const sample = document.getElementsByClassName("text");

    if(sample.length > 0){
        console.log("sample : " + sample.length);
        for(i=0; i<sample.length; i++){
            console.log("sample : " + sample[i]);
        }
    }
})();

/*
//変換後のHTMLをここに配置 ..②
let inner = "";

//１文字ずつ処理をする ..③
for(i=0;i<sample.innerText.length;i++) {

    //<span>〜</span>で囲み、innerに追加 ..④
    inner += `<span>${sample.innerText[i]}</span>`
}

//sampleのHTMLを変更 ..⑤
sample.innerHTML = inner;
*/