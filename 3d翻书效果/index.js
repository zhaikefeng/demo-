var book = document.querySelector("#book")
var div = book.querySelectorAll('div')
var pageNum = 5
var rote = -180

// book.onclick = function () {
//     book.style.left = "67%"
//     div[pageNum].style.transform = `rotateY(${rote}deg)`
//     pageNum--
//     rote += 10
//     if (pageNum < 0) {
//         for (let i = 0; i < div.length; i++) {
//             div[i].style.transform = 'rotateY(0deg)'
//         } 
//         book.style.left = "50%"
//         pageNum = 5
//         rote = -180
//     }
// }

book.addEventListener('click',function() {
    this.style.left = "80%"
    ;let timer = setInterval(()=>{
        div[pageNum].style.transform = `rotateY(${rote}deg)`
        pageNum--
        rote += 10
        console.log(1111)
        if (pageNum < 0) {
            for (let i = 0; i < div.length; i++) {
                div[i].style.transform = 'rotateY(0deg)'
            } 
            this.style.left = "50%"
            pageNum = 5
            rote = -180
            clearInterval(timer)
        }
    },2000)
    
})
			