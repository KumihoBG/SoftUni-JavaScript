function employees(strArr) {
  class Employee {
    constructor(name) {
      this.name = name;
      this.number = name.length;
    }

    print() {
      return `Name: ${this.name} -- Personal Number: ${this.number}`;
    }
  }

  strArr
    .map((x) => new Employee(x))
    .forEach((element) => {
      console.log(element.print());
    });
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
