let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let msgbox = document.querySelector(".msgcontainer");
let msg=document.querySelector(".msg")

let count = 0;
let type = "0";
let stop = true;

let arr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    
    if (type == "0") {
      box.innerHTML = type;
      type = "X";
    } else {
      box.innerHTML = type;
      type = "0";
    }
    box.disabled = true;
    count++;
    let iswinner =checkwinner();

    if(count === 9 && !iswinner){
      gameTie();
    }

   
  });
});

const showWinner=function(winner){
  if(winner){
    msg.innerText=`🎉 Winner is ${winner}`;
    msgbox.classList.remove("hide");
  }
  
}
const gameTie=function(){
  msg.innerText="😞 Game Tie";
  msgbox.classList.remove("hide");
}
const checklose = function () {};

const disable = function () {
  for (let box of boxes) box.disabled = stop;
};

const checkwinner = function () {
  for (let ele of arr) {
    // console.log(ele[0],ele[1],ele[2]);
    let pos1 = boxes[ele[0]].innerText;
    let pos2 = boxes[ele[1]].innerText;
    let pos3 = boxes[ele[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        // document.querySelector("p").textContent = val;
        showWinner(pos1);
        stop = true;
        disable();
        return true;
      }
    }
  }
};

resetbtn.addEventListener("click", function () {
  for (let box of boxes) {
    box.innerText = "";
  }
  msgbox.classList.add("hide")
  stop = false;
  disable();
  type = 0;
  count=0;
});
