function domainType(domains) {
    let domain = domains.toString().split(',');
    let type = "";
    let newArr = [];
    for (let i = 0; i < domain.length; i++){
        if (domain[i].includes('.com')){
            type = "commercial";
            newArr.push(type);
        }
        else if (domain[i].includes('.net')){
            type = "network";
            newArr.push(type);
        }
        else if (domain[i].includes('.org')){
            type = "organization";
            newArr.push(type);
        }
        else if (domain[i].includes('.info')){
            type = "information";
            newArr.push(type);
        }
    }
    return newArr;
}

domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]);