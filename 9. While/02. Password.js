function password (input){
    let index = 0;
    let name = input[index++];
    let password = input[index++];
    let checkPass = input[index++];
    
    while (password !== checkPass) {
        if (checkPass === password){
            break;
        }
        checkPass = input[index++];
    }
    console.log(`Welcome ${name}!`);
}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"]);