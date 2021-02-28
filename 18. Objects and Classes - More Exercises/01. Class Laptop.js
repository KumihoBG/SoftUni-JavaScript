function laptop(input) {
    class Laptop {
        constructor(producer, age, brand) {
            this.info = {
                producer,
                age,
                brand
            }
            this.isOn = false;
            this.quality = 0;
        }

        get price() {
            return 800 - this.age * 2 + this.quality * 0.5
        }
        turnOn() {
            this.isOn = true
            return this.isOn
        }
        turnOff() {
            this.isOn = false
            return this.isOn
        }
        showInfo() {
            return JSON.stringify(this.producer, this.age, this.brand);
        }
    }
    const Laptop = result;

    let laptop = new Laptop({ producer: "Dell", age: 2, brand: "XPS" }, 10);

    laptop.turnOn()
    laptop.turnOff()
    laptop.turnOn()
    console.log(laptop);
}

laptop(let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)
);