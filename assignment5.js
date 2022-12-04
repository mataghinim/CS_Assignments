function matrixProduct(mat1, mat2){
    //row-i
    //column-j
   let result = [];
        for(let i = 0; i < mat1.length; i++){
            result[i] = [];
            for(let j = 0; j < mat2[0].length; j++){
                let sum = 0;
                for (let k = 0; k < mat1[0].length; k++) {
                    sum += mat1[i][k] * mat2[k][j];
                }
                result[i][j] = sum;
            }     
        }
        console.table(result);
        return result;
        
}


function sumOfMatrices(mat1, mat2){

   let result = [];
        for(let i = 0; i < mat1.length; i++){
            result[i] = [];
            for(let j = 0; j < mat1[0].length; j++){
                result[i][j] = mat1[i][j]+mat2[i][j];
            }
        }
        console.table(result);
        return result;
    
}


function sumOfArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

function sumOfEachRow(mat){
    
    let result = [];
    for(let i = 0; i < mat.length; i++){
        result[i] = sumOfArray(mat[i]);
    }
    console.table(result);
    return result;
}



function wordCount(text){
    
    let count = 0;
    for(let i = 0; i < text.length; i++){
        if(text[i] === " " && text[i+1] !== " "){
            count++;
        }
    }
    if(text[text.length-1] !== " "){
        count++;
    }
    if(text[0] === " "){
        count--;
    }
    console.log(`There are ${count} words in this sentence.`);
    return count;
}


function trimTheString(text){
    
    let count1 = 0;
    for(let i = 0; i < text.length; i++){
        if(text[i] !== " "){
            break;
        }
        else{
            if(text[i] === " " && text[i+1] === " "){
                count1++;
            }
        }
        
    }
    count1++;
       
    let count2 = 0;
    for(let j = text.length-1; j >= 0; j--){
        if(text[j] !== " "){
            break;
        }
        else{
            if(text[j] === " " && text[j-1] === " "){
                count2++;
            }
        }
        
    }
    count2++;
       
    let result = "";
    for(i = count1; i < text.length-count2; i++){
        result += text[i];
    }
    console.log(result);
    return result;
}


module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfEachRow,
    wordCount,
    trimTheString
}

matrixProduct ([[1,2], [3,5]], [[1,2], [3,5]])
sumOfMatrices([[1,2], [3,5]], [[1,2], [3,5]])
sumOfArray([[1,2], [3,5]], [[1,2], [3,5]])
trimTheString(text)
trimTheString(text)
