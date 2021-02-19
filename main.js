const container = document.querySelector(".container")

for(var i = 0; i <= 100; i++ ){
    const blocks = document.createElement("div")
    blocks.classList.add("block")
    container.appendChild(blocks)
}

//!產生方塊隨機位置
function animateBlocks(){
    anime({
        targets:".block",
        translateX: function(){
            return anime.random(-700,700)
        },
        translateY: function(){
            return anime.random(-500,500)
        },
        scale:function(){
            return anime.random(1,5)
        },
        
        //easing:"linear", //去除彈跳預設，改成線性縮放
        duration:1600,
        delay: anime.stagger(10), //方塊之間非同步，動畫間隔
        complete:animateBlocks, //循環顯示，透過結束，並由外部再次呼叫
    })
}

//!呼叫動畫
animateBlocks()