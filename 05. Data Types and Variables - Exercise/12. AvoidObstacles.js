function avoidObstacles(nums) {
    let arraySorted = nums.sort();
    let jump = 2;

    for (let i = 0; i < arraySorted.length; i++) {
        if (arraySorted[i] % jump == 0) {
            i = -1;
            jump++;
        }
    }
    return jump;
    console.log(jump);
}

// Driver Code 
//     function drive() {
//     arraySorted.every(avoidObstacles)
//     console.log(jump);
// }

avoidObstacles([5, 3, 6, 7, 9]);