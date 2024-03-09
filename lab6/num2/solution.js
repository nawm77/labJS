function solve() {
    let text = document.getElementById('text').value;
    let namingConvention = document.getElementById('naming-convention').value.toLowerCase();
    if (namingConvention === "pascal case" || namingConvention === "camel case") {
        let words = text.split(" ");
        document.getElementById('result').textContent = words.map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join("");
    } else {
        document.getElementById('result').textContent = 'Ошибка!';
    }
}

