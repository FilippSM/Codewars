//DESCRIPTION
//I'm new to coding and now I want to get the sum of two arrays... 
//Собственно сумма всех их элементов. I'll appreciate for your help.

//SOLUTION
function arrayPlusArray(arr1, arr2) { 
    let summArr1 = 0;
    let summArr2 = 0;

    for (i = 0; i < arr1.length; i++) { 
        summArr1 += arr1[i];      
    }  
    for (i = 0; i < arr2.length; i++) { 
        summArr2 += arr2[i];     
    } 

    return summArr1 + summArr2;
}

console.log("arrayPlusArray: ", arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log("arrayPlusArray: ", arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
console.log("arrayPlusArray: ", arrayPlusArray([0, 0, 0], [4, 5, 6]));
console.log("arrayPlusArray: ", arrayPlusArray([100, 200, 300], [400, 500, 600]));