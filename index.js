//1
function countToTen(num){
  for (let i = 1; i <= num; i++){
      console.log(i);
  }
}

//2
function countFromOne(int){
    for (let i = 1; i <= int; i++){
        if (i % 2 === 1){
            console.log(i);
        }
    }
}

//3
function countEveryEven(num){
    if (num > 0)
        console.log('false');
    else(num < 0)
        console.log('true');
  
}

//4
function countEveryOdd(int){
    if (4 < int){
        console.log('true');
    }else if (int >21){
        console.log('true');
    }else{
        console.log('false');
}
    
}

//5 
function isAllLowerCase(aa){
    
}

function countMultiplesOfFive (num){
    let aRR = [];
    for (let i = 1; i <= num; i++){
        if (i % 5 === 0){
            aRR.push(i);
        }
    }  
    console.log(aRR);
}

