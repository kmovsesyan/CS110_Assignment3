function gcd(x,y) {
    while (y>0){
        let t = y;
        y = x % y;
        x = t;
    }
    return x; 
}
function lcm(x,y){
    let Gcd = gcd(x,y);
    let lcm = (x * y) / Gcd;
    console.log(lcm)
}
return lcm(6, 25);