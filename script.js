let boxes = document.querySelectorAll(".box");
let resestBtn = document.querySelector(".resetbtn");
let newgameBtn = document.querySelector("#newgameBtn");
let hideall = document.querySelector(".hideall");
let para = document.querySelector(".para");


let turn0 = true;

const winPatterns = [
    [0,1,2], 
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];

let count = 0;

const draw = (count) => {
    if(count === 9){
        hideall.classList.remove("hideall")
        para.innerText = `Match was Draw No Winner`
        boxes.disabled = true;
    }
}


const resetGame = () => {
    turn0 = true;
    enableBoxes();
    hideall.classList.add("hideall");
    
}

boxes.forEach((box)=> {
    box.addEventListener("click", ()=> {
        if (turn0 == true){
            box.innerText = "0"
            turn0 = false;
            count++;
        } else {
            box.innerText = "X"
            turn0 = true;
            count++
        }
        box.disabled = true;
        console.log(count);
        draw(count);
        checkWinner();
        
    })
});

const showWinner =(winner)=> {
    para.innerText = `Congralulation Winner is ${winner}`;
    hideall.classList.remove("hideall");

}



const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled= true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


const checkWinner = () => {
    for (pattern of winPatterns) {
           let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val =boxes[pattern[1]].innerText;
           let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val) {
                console.log("winner",pos1Val)
                disabledBoxes();
                showWinner(pos1Val);
                
            }
          }
        
        }
};



resestBtn.addEventListener("click",resetGame);
newgameBtn.addEventListener("click",resetGame);













































