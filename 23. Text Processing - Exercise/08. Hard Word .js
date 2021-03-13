function hardWord(arr) {
    let str = arr[0];
    let newArr = arr[1];
    str = str.split(' ');
    
    for (let hole of str) {
        if (hole.includes("_")){
            let length = hole.length;
            if(hole.endsWith('.') || hole.endsWith(',')) {
                length -= 1;
            }
            for (let word of newArr) {
                if (word.length == length) {
                let index = str.indexOf(hole);
                if(hole.endsWith('.')) {
                    str.splice(index, 1, word + ".");
                } else if (hole.endsWith(',')){
                    str.splice(index, 1, word + ",");
                } else {
                    str.splice(index, 1, word);
                }
                }
            }
        }
    }  
    console.log(str.join(' '));
}

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);