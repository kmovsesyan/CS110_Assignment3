function gcd(x,y){

while (y>0){
    let d = y;
    y = x % y;
    x = d;
}
console.log(x); 
}
return gcd(6,18)
