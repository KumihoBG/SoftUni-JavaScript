function towns(strArr){
   
    let splitArr = strArr.toString().split(",");
    for (let i = 0; i < splitArr.length; i++){
        let [town, latitude, longitude] = splitArr[i].split(" | ");
        let newObj = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };
        console.log(newObj);
    };
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);