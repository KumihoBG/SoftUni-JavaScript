function distinct(arr){
    let unique = arr.filter(onlyUnique);

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }

    console.log(unique.join(' '));
}

// distinct([1, 2, 3, 4]);
distinct([7, 8, 9, 7, 2, 3, 4, 1, 2]);