function matrixProduct(mat1, mat2){
    
   let result = [];
        for(let row = 0; row < mat1.length; row++){
            result[row] = [];
            for(let col = 0; col < mat2[0].length; col++){
                let sum = 0;
                for (let k = 0; k < mat1[0].length; k++) {
                    sum += mat1[row][k] * mat2[k][col];
                }
                result[row][col] = sum;
            }     
        }
        console.table(result);
        return result;
        
}


function sumOfMatrices(mat1, mat2){

    if(mat1.length !== mat2.length || mat1[0].length !== mat2[0].length){
        console.log("The sum is undefined");
    }
    else{
        let result = [];
        for(let row = 0; row < mat1.length; row++){
            result[row] = [];
            for(let col = 0; col < mat1[0].length; col++){
                result[row][col] = mat1[row][col]+mat2[row][col];
            }
        }
        console.table(result);
        return result;
    }
}



// Exercise 3: Sum of Each Row of a Matrix

function sumOfArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

function sumOfEachRow(mat){
    
    let result = [];
    for(let row = 0; row < mat.length; row++){
        result[row] = sumOfArray(mat[row]);
    }
    console.table(result);
    return result;
}



function wordCount(sen){
    
    let count = 0;
    for(let i = 0; i < sen.length; i++){
        if(sen[i] === " " && sen[i+1] !== " "){
            count++;
        }
    }
    if(sen[sen.length-1] !== " "){
        count++;
    }
    if(sen[0] === " "){
        count--;
    }
    console.log(`There are ${count} words in this sentence.`);
    return count;
}


// Exercise 5: String Trim

function trimTheString(str){
    
    let count1 = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] !== " "){
            break;
        }
        else{
            if(str[i] === " " && str[i+1] === " "){
                count1++;
            }
        }
        
    }
    count1++;
       
    let count2 = 0;
    for(let j = str.length-1; j >= 0; j--){
        if(str[j] !== " "){
            break;
        }
        else{
            if(str[j] === " " && str[j-1] === " "){
                count2++;
            }
        }
        
    }
    count2++;
       
    let res = "";
    for(i = count1; i < str.length-count2; i++){
        res += str[i];
    }
    console.log(res);
    return res;
}


module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfEachRow,
    wordCount,
    trimTheString
}

matrixProduct ([[1,2], [3,5]], [[1,2], [3,5]])