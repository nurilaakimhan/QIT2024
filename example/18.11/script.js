//function welcom(){
    //alert("welcom to my site" + "\n" + Date());
//}

//let number = +prompt("Enter any  number");

//function sum(num){
   // let result = 0;
    //for (let i = 1; i <= num; i++ ){
    //    result += i;
   // }
    
    //return "Result is " + result; 
//}
//console.log(sum(number));


//let number = +prompt("Enter any  number");
//let degree = +prompt("e");

//function sum(num){
//    let result = 0;
    
//    for (let i = 1; i <= num; i++ ){
//        result += i;
  //  }
    
  //  return "Result is " + result; 
//}
//console.log(sum(number));


//function findDegree(a,b){
    //let result = 1;

    //for (let i = 1; i <= b; i++){
    //    result = result * a;
    //}
    //return result;
//}
//console.log(findDegree(number, degree ));

//let number = +prompt("Enter any  number");

//function findFactorial(num){
//     let result = 1;

//    for (let i = 1; i <= num; i++){
//        result *= i;
 //   }
//    return result;
//}
//console.log(findFactorial(number));

let num1 = +prompt("Enter first  number:");
let num2 = +prompt("Enter second  number:");


function findMax(a, b){

    if(a > b){
        return a + "ulken, " + b + "kishi"
     }else if(b > a){
        return b + "ulken," + a + "kishi"
     }else if(a == b){
        return "a = b"
     }else{
        return "san jaz"
     }
}
console.log(findMax(num1, num2))

    

        