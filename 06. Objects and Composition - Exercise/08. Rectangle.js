function rectangle(width, height, color) {
    width = Number(width);
    height = Number(height);

    let obj = {
        width,
        height,
        color: toUpperCase(color),
        calcArea: function() {
            return this.width * this.height;
        } 
    }

    function toUpperCase(string) {
        let firstLetter = string.slice(0,1);
        string = string.replace(firstLetter, firstLetter.toUpperCase())
        return string;
    }
    return obj;
}

    let rect = rectangle(4, 5, 'red');
    console.log(rect.width);
    console.log(rect.height);
    console.log(rect.color);
    console.log(rect.calcArea());    



