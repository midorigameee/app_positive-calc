// https://fuuno.net/cani/auto_letter/auto_letter.html

(window.onload = function() {
    //要素を取得 ..①
    const word_elem_list = document.getElementsByClassName("sabu-word");

    if(word_elem_list.length <= 0){
        return;
    }

    let whole_animation_times = 0;

    // 要素の数だけfor文回す
    for(let elem_num=0; elem_num<word_elem_list.length; elem_num++){
        let elem = word_elem_list[elem_num];
        let current_inner = elem.innerText;  // 現在の要素内の文字列
        let new_inner = "";

        // 要素内の文字数だけfor文回す
        for(let char_num=0; char_num<current_inner.length; char_num++){
            // 1文字ずつ<span>〜</span>で囲み、innerに追加
            new_inner += '<span>' + current_inner[char_num] + '</span>'
        }

        // 要素の中身を書き換える
        elem.innerHTML = new_inner;

        // 1文字ずつクラスを付与する
        for(let child_num=0;child_num<elem.children.length;child_num++){
            elem.children[child_num].classList.add("each");
            elem.children[child_num].style.animationDelay = `${whole_animation_times*0.1}s`

            whole_animation_times++;
        }

    }
})();
