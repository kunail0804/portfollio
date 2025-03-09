export default class Portfolio {
    constructor(title = 'My Portfolio', items = []) {
        this.title = title;
        this.items = items;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(index) {
        this.items.splice(index, 1);
    }

    updateItem(index, key, value) {
        if (this.items[index]) {
            this.items[index][key] = value;
        }
    }
}