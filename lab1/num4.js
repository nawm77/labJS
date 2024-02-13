const map = new Map([
    ["Students", new Map([
        ["Friday", 8.45],
        ["Saturday", 9.80],
        ["Sunday", 10.46]
    ])],
    ["Corp", new Map([
        ["Friday", 10.90],
        ["Saturday", 15.60],
        ["Sunday", 16]
    ])],
    ["Regular", new Map([
        ["Friday", 15],
        ["Saturday", 20],
        ["Sunday", 22.50]
    ])]
]);

function calculatePrice(count, type, day) {
    const typeMap = map.get(type);
    if (typeMap) {
        const price = typeMap.get(day);
        if (price !== undefined) {
            if (type === "Students" && count >29) return Number((count * price * 0.85).toFixed(2))
            if (type === "Corp" && count >99) return Number((count * price * 0.9).toFixed(2))
            if (type === "Regular" && count >9 && count < 21) return Number((count * price * 0.95).toFixed(2))
            return Number((count * price).toFixed(2));
        } else {
            return `Incorrect day: ${day}`;
        }
    } else {
        return `Incorrect type: ${type}`;
    }
}

console.log(calculatePrice(29, "Students", "Friday"));