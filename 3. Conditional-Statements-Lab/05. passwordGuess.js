function password(pass) {
    let realPassword = "s3cr3t!P@ssw0rd";
    if(pass === realPassword){
        console.log("Welcome");
    }
    else{
        console.log("Wrong password!");
    }
}

password("s3cr3t!p@ss");