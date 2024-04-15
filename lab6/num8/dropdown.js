function addItem() {
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;
    let select = document.getElementById('menu');
    let option = document.createElement('option');
    option.text = text;
    option.value = value;
    const optionLabels = Array.from(select.options).map((opt) => opt.value);
    const hasOption = optionLabels.includes(option.value);
    if(!hasOption) {
        select.appendChild(option);
    } else {
        console.log("Select already contains this option")
    }
}