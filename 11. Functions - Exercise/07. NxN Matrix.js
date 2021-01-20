function matrix(num) {
    let res = "";
   
    for (let i = 1; i <= num; i++) {
      res += num + " ";
    }
   
    for (let j = 1; j <= num; j++) {
      console.log(`${res}`);
    }
}

console.log(matrix(7));