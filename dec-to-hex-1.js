const arr = ['A', 'B', 'C', 'D', 'E', 'F'];
function toHexadecimal(x) {
    let hex = "";
    while (x >= 16){
        let r = x % 16;
        hex += reminderHex(r);

        x = Math.floor(x / 16);
    }

    hex += reminderHex(x);

    hex = reversText(hex); 
    console.log(hex);
    return hex;
}

function reminderHex(r) {
    if(r > 9) {
        return arr[r - 10];
    } 
    return r; 
}

function reversText(text) {
    let index = text.length - 1;
    let result = '';
    while (index >= 0) {
        result += text[index];
        index--;
    }
    return result;
}
return toHexadecimal(35);