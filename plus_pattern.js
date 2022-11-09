let l = 1;
const rows = 5;
let pattern = "";

while (l <= rows) {
    let num = 1;
    while (num<= rows){
        pattern += "+";
        num++;
    }
  l++;
  pattern += "\n";
}
console.log(pattern)
