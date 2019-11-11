/*
Given an array of integers, find and print the maximum number of integers
you can select from the array such that the absolute difference between any two of the chosen integers is less than or equal to 1.
For example, if your array is a = [1,1,2,2,2,4,4,5,5] , you can create two subarrays meeting the criterion: [1,1,2,2,2] and [4,4,5,5] . 
The maximum length subarray has 5 elements.
*/

function pickingNumbers(a) {
    let all = []
    for(let i = 0 ; i < a.length ; i++){
        let temp = []
        for(let j = 0; j < a.length ;j++){
            let div = Math.abs(a[i]-a[j])
            if(div <= 1){
                temp.push(a[j])
            }
        }
        all.push(temp)
    }
 
    for(let i = 0 ; i < all.length ; i++){
        for(let j = 0 ; j < all[i].length ; j++){
            for (let k = 0 ; k < all[i].length ; k++){
                let ok = Math.abs(all[i][j]-all[i][k])
                if(ok > 1){
                    all[i].splice(k,1)
                }
            }
        }
    }
    
    let total = []
    for(let i = 0 ; i < all.length ; i++){
        total.push(all[i].length)
    }

    return total.sort((a,b)=> b - a)[0]
}

//console.log(pickingNumbers([1, 2, 2, 3, 1, 2])) //5
//We choose the following multiset of integers from the array:[1,2,2,1,2] . 
//Each pair in the multiset has an absolute difference <=1  (i.e |1-2|= 1 ,|1-1|=0 and |2-2| = 0) 
//so we print the number of chosen integers 5 as our answer.


//console.log(pickingNumbers([4, 6, 5, 3, 3, 1])) //3
//We choose the following multiset of integers from the array:[4,3,3] . 
//Each pair in the multiset has an absolute difference <=1 (i.e.,|4-3| = 1 and |3-3| = 0 ), 
//so we print the number of chosen integers 3 , as our answer.

//console.log(pickingNumbers([84, 43, 11, 41, 2, 99, 31, 32, 56, 53, 42, 14, 98, 27, 64, 57, 16, 33, 48, 21, 46, 61, 87, 90, 28, 12, 62, 49, 29, 77, 82, 70, 80, 89, 95, 52, 13, 19, 9, 79, 35, 67, 51, 39, 7, 1, 66, 8, 17, 85, 71, 97, 34, 73, 75, 6, 91, 40, 96, 65, 37, 74, 20, 68, 23, 47, 76, 55, 24, 3, 30, 22, 55, 5, 69, 86, 54, 50, 10, 59, 15, 4, 36, 38, 83, 60, 72, 63, 78, 58, 88, 93, 45, 18, 94, 44, 92, 81, 25, 26]))
console.log(pickingNumbers([14, 18, 17, 10, 9, 20, 4, 13, 19, 19, 8, 15, 15, 17, 6, 5, 15, 12, 18, 2, 18, 7, 20, 8, 2, 8, 11, 2, 16, 2, 12, 9, 3, 6, 9, 9, 13, 7, 4, 6, 19, 7, 2, 4, 3, 4, 14, 3, 4, 9, 17, 9, 4, 20, 10, 16, 12, 1, 16, 4, 15, 15, 9, 13, 6, 3, 8, 4, 7, 14, 16, 18, 20, 11, 20, 14, 20, 12, 15, 4, 5, 10, 10, 20, 11, 18, 5, 20, 13, 4, 18, 1, 14, 3, 20, 19, 14, 2, 5, 13]))