function building(input) {
    let i = 0;
    let j = 0;

    let floors = Number(input[i++]);
    let appartments = Number(input[i++]);

    for (i = floors; i >= 1; i--){
       let printline = "";
        for (j = 0; j < appartments; j++){
            if (i === floors){
                printline += (`L${i}${j} `);  
            }
            else if (i % 2 === 0){
                printline += (`O${i}${j} `);
            }
            else {
                printline += (`A${i}${j} `); 
            }                    
        }
        console.log(printline);;  
    }  
}

building(["6", "4"]);