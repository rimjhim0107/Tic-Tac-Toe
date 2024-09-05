
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".toggle");
let turnO = true;
let newbtn = document.querySelector(".new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;
// let turnX = false;
const winningPattern = [[0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO==true){
            box.innerText = "O";
            box.style.color = "#F1FAEE";
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "#457B9D";
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
    });
});

resetbtn.addEventListener("click",()=>{
    turnO = true;
    // console.log("reset button is clicked");
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    })
    msgContainer.classList.add("hide");
});

const disbtn = () =>{
    boxes.forEach((box)=>{
        box.disabled = true;
    });
}

const enablebtn = () =>{
    for(let box of boxes){
        box.disabled = false;
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const checkWinner = ()=>{
    for(pattern of winningPattern){
       let posVal1 = boxes[pattern[0]].innerText;
       let posVal2 = boxes[pattern[1]].innerText;
       let posVal3 = boxes[pattern[2]].innerText;
       if(posVal1 !="" && posVal2!="" && posVal3!=""){
        if(posVal1===posVal2 && posVal2===posVal3){
           disbtn();
           showWinner(posVal1);
           return;
        }
    }

    if(count===9){
        msg.innerText = `Match Tie!`;
        msgContainer.classList.remove("hide");
    }
    }
};
 

