    function area(arg1, arg2, arg3) {
        let  type = arg1;

        if (type === "square") {
            let size = Number(arg2);
            let squareArea = size * size;
            console.log(squareArea.toFixed(3))
        }
        else if (type === "rectangle") {
            let a = Number(arg2);
            let b = Number(arg3);
            let rectangleArea = a * b;
            console.log(rectangleArea.toFixed(3));
        } 
        else if (type === "circle") {
            let radius = Number(arg2);
            let circleArea = Math.PI * (radius * radius)
            console.log(circleArea.toFixed(3));
        }
        else if (type === "triangle") {
            let size = Number(arg2);
            let height = Number(arg3);
            let triangleArea = (size * height) / 2;
            console.log(triangleArea.toFixed(3));
        }
    }

    area("square", "5");
    area("rectangle", "7", "2.5");
    area("circle", "6");
    area("triangle", "4.5", "20");