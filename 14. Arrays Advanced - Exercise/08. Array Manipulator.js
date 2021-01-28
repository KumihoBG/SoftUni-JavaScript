function arrayManipulation(array, commands) {
    let arr = commands.shift().split(' ');
    let singleCommand = arr.shift();
    let index = Number(arr[0]);
    let element = Number(arr[1]);


    while (singleCommand !== 'print') {
        for (let i = 0; i < commands.length; i++) {
            switch (singleCommand) {
                case 'add': array.splice(index, 0, element);
                    break;
                case 'addMany': addMany(array, index, element);
                    break;
                case 'contains': console.log(array.includes(element));
                    break;
                case 'remove': array.splice(index, 1);
                    break;
                case 'shift': arrayMove(array, index, array.length - 1);
                    break;
                case 'sumPairs': sumElements(array);
                    break;
                case 'sumPairs': sumElements(array);
                    break;
                case 'print': console.log(array);
                    break;
            }
        }
    }

    function addMany(arr, index, el) {
        return arr.splice(index, 0, el);
    }

    function arrayMove(arr, oldIndex, newIndex) {
        if (newIndex >= arr.length) {
            var k = newIndex - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
        return arr; // for testing
    };

    function sumElements(arr) {
        let sum = 0;
        let result = 0;

        for (let i = 0; i < arr.length - 1; i++) {
            num1 = arr[i++];
            num2 = arr[i];
            sum = num1 + num2;
            if (sum > result) {
                result = sum;
            } else {
                sum = sum;
            }
            num1 = arr[i--];
            sum = 0;
        }
        return result;
    }
}

arrayManipulation([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print'])