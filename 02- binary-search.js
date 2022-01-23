const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

function search(arr, val){
    let lower = 0;
    let upper = arr.length - 1;

    while(lower <= upper){
        let middle = lower + Math.floor((upper - lower) / 2 )
        console.log(lower, upper, middle)
        if(val === arr[middle] || val === arr[lower] || val === arr[upper]){
            return val;
        }
        if(val < arr[middle]){
            upper = middle - 1;
        }else{
            lower = middle + 1;
        }
    
    }
    return -1

}

console.log(search(values, 2))