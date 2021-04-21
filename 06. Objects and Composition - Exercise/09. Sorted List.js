function createSortedList() {
    let collection = [];

    let list = {
        size: 0,
        add,
        remove,
        get,
    };

    function add(element) {
        collection.push(element);
        this.size++;
        collection.sort((a, b) => a - b);
    }

    function remove(index) {
        if (index >= 0 && index < collection.length) {
            collection.splice(index, 1);
            this.size--;
        }
    }

    function get(index) {
        let element = collection[index];
        if (index >= 0 && index < collection.length) {
            return element;
        }
    }
    return list;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));