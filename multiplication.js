let num1 = 100;
let num2 = 280;
let product = 0;

if (num1 == 0 || num2 == 0){
    result = 0;
    console.log (result);
}
else{
    while (num2 > 0){
          product += num1;
          num2 --;
    }
}
console.log (product)
