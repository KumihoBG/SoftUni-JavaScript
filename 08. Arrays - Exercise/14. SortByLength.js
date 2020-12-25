function sortByLength(strs) {
    strs.sort(function(a, b){
        return a.length - b.length
    });
    console.log(strs);
}

sortByLength(["abc", "", "aaa", "a", "zz"]);