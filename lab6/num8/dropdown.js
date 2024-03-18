function addItem() {
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;
    let select = document.getElementById('menu');
    let option = document.createElement('option');
    option.text = text;
    option.value = value;
    select.appendChild(option);
}