class Product {
    constructor(name = undefined, count = undefined) {
        this.name = name;
        this.count = count;
    }
}

function getSoldItemsCount(array1, array2) {
    const soldItems = {};

    for (let i = 0; i < array1.length; i += 2) {
        soldItems[array1[i]] = new Product(array1[i], Number(array1[i + 1]));
    }

    for (let i = 0; i < array2.length; i += 2) {
        const name = array2[i];
        const count = Number(array2[i + 1]);

        if (soldItems[name]) {
            soldItems[name].count += count;
        } else {
            soldItems[name] = new Product(name, count);
        }
    }

    for (const itemName in soldItems) {
        console.log(`${itemName} -> ${soldItems[itemName].count}`);
    }
}

getSoldItemsCount(['Chips', '5', 'CocaCola', '9', 'Bananas', '14'], ['Bananas', '9']);
