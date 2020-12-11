function cone(radius, height){
    let slantHeight = Math.sqrt(radius * radius + height * height);
    let volume = Math.PI * radius * radius * height / 3;
    let area = Math.PI * radius * (radius + slantHeight);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

cone(3,5);