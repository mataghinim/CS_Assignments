//factorial
let factorial = 1;
function computeFactorial(number) {
    if (number<=0){
        return "Error"
    }
    else{
    for (i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial
    }
}

//get gcd
function getgcd (num1, num2) {
    let gcd = 0;
    for (let i = 1; i <= num1 && i <= num2; i++) {

        if( num1 % i == 0 && num2 % i == 0) {
        gcd = i;
        }
    }
    return gcd
}

//get lcm
function getlcm(num1, num2) {
    return num1*num2/getgcd(num1, num2);
}


//hexdecimal
function hexadecimal(number) {
    let result=[],i;
    for (i=number;i>0;i=Math.floor(i/16)) {
        result.push(i%16);
    }
    
    for (i=0;i<result.length;i++) {
        switch(result[i]) {
            case 10:
            result[i]="A";
            break;
            
            case 11:
            result[i]="B";
            break;
            
            case 12:
            result[i]="C";
            break;

            case 13:
                result[i]="D";
                break;
                
                case 14:
                result[i]="E";
                break;
                
                case 15:
                result[i]="F";
                break;
            }
        }
        return result.reverse().join("");
    }

    


    module.exports = {
        computeFactorial: computeFactorial,
        getlcm: getlcm,
        getgcd: getgcd,
        hexadecimal: hexadecimal,
    }