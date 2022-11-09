let bin = '';

for (let dec = 7; dec > 0; dec = Math.floor(dec/2)) {
    if (dec%2==1){
        bin +="1";
    }
    else {
        bin +="0";
    }
    
}
console.log(bin);