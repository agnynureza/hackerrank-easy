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
        temp.push(a[i])
        for(let j = 0; j < a.length ;j++){
            if(i != j){
                let div = Math.abs(a[i]-a[j])
                if(div <= 1){
                    temp.push(a[j])
                }
            }
        }
        all.push(temp)
    }
    for(let i = 0 ; i < all.length ; i++){
        for(let j = 0 ; j < all[i].length ; j++){
            for (let k = 0 ; k < all[i].length ; k++){
                let ok = Math.abs(all[i][j]-all[i][k])
                if(ok > 1){
                    all[i] = [0]
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

console.log(pickingNumbers([1, 2, 2, 3, 1, 2])) //5
//We choose the following multiset of integers from the array:[1,2,2,1,2] . 
//Each pair in the multiset has an absolute difference <=1  (i.e |1-2|= 1 ,|1-1|=0 and |2-2| = 0) 
//so we print the number of chosen integers 5 as our answer.


console.log(pickingNumbers([4, 6, 5, 3, 3, 1])) //3
//We choose the following multiset of integers from the array:[4,3,3] . 
//Each pair in the multiset has an absolute difference <=1 (i.e.,|4-3| = 1 and |3-3| = 0 ), 
//so we print the number of chosen integers 3 , as our answer.