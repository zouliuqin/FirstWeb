var i = 11;
let cats = 'askdfkahsdf'
let info = ''

 

 while (i < cats.length)
 {
    
    console.log(i);
   if (i === cats.length - 1) {
       info += 'and ' + cats[i] + '.';
   } else {
       info += cats[i] + ', ';
   }
   console.log(info);
   i++;

}






//初始化状态 0-未开始 1-进行中 
let gameState = 0
//答案
let resultNum = 0
//猜测次数
let guessCount = 0

//开始游戏按钮
const startButton = document.querySelector(".start")
//开始游戏div
const startGameDiv = document.querySelector('.startGame')
//提示结果
const tips = document.querySelector(".resultParas")
const tipsContent = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const guesses = document.querySelector(".guesses")
//输入框的数字
const guessNum = document.querySelector(".guessField")
//确定输入的数字按钮
const guessSubmitButton = document.querySelector(".guessSubmit")


/*
*开始游戏
*1.设置答案
*2.隐藏开始按钮
*/
startButton.addEventListener("click", function () {
    gameState = 1
    guesses.textContent = ""
    lowOrHi.textContent = ""
    tipsContent.textContent = ""
    guessSubmitButton.removeAttribute('disabled')
    resultNum = Math.round(Math.random() * 100)
    console.log(resultNum);
    //todo-隐藏开始按钮
    startGameDiv.style.display = "none"
})

//猜测
guessSubmitButton.addEventListener("click", function () {

    if (guessNum.value == '') {
        tipsContent.textContent = "请输入数字"
        return
    }
    guessCount++
    let currGuessNum = guessNum.value
    //显示猜测的数字集合
    guesses.textContent = guesses.textContent + " " + currGuessNum

    //获取输入框的数字和答案对比
    if (currGuessNum > resultNum) {
        tipsContent.textContent = "猜测的数字大了"
    } else if (currGuessNum < resultNum) {
        tipsContent.textContent = "猜测的数字小了"
    } else if (currGuessNum == resultNum) {
        tipsContent.textContent = ""
        gameState = 0
    } else {
        tipsContent.textContent = "输入格式错误"
    }

    if (gameState == 0) {
        //猜对了
        guessSubmitButton.setAttribute('disabled', 'disabled')
        lowOrHi.textContent = "恭喜猜对了"
        startGameDiv.style.display = ""
    } else if (guessCount == 10) {
        lowOrHi.textContent = "游戏结束"
        //禁用确定按钮
        guessSubmitButton.setAttribute('disabled', 'disabled')
        //展示开始游戏按钮

        startGameDiv.style.display = ""
    } else {
        //清除上次猜测的数字
        guessNum.value = ""
    }

})




