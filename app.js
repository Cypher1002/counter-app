//set initial count 
let count = 0;

//select value and buttons 
let scoreCount = document.getElementById("value-el");

// let scoreCountTwo = document.querySelectorAll(".btn");



function increment(){
  count += 1 ;
  scoreCount.textContent = count;
};

function decrement(){
    count -= 1 ;
    scoreCount.textContent = count;
  };

//   let save


// btns.forEach(function (btn) {
//   btn.addEventListener("click",function(e){
//    let styles = e.currentTarget.classList;

//    if(styles.contains("decrease")){
//        count--;
//    }else if(styles.contains("increase")){
//        count++;
//    } 
//    else{
//        count =0 
//    }
//    if(count>0){
//        value.styles.color = 'green';
//    }
//    if(count<0){
//        value.styles.color = 'red';
//    }
//    if(count ==0){
//        value.styles.color = 'black';
//    }
//    value. = count;
//   });
// });
