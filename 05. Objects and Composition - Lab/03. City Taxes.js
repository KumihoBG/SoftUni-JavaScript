function cityTaxes(name, population, treasury) {
    let taxRate = 10;

    let towns = {
        name, 
        population,
        treasury,
        taxRate,
        collectTaxes() {
            this.treasury = this.treasury + (this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            this.population = this.population + (this.population * (percentage/100));
        },
        applyRecession(percentage) {
            this.treasury = this.treasury - (this.treasury * percentage/100);
        },
    }
    return towns;
}

// const city = 
// cityTaxes('Tortuga',
// 7000,
// 15000);
// console.log(city);

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(5);
console.log(city.treasury);

