function toggle() {
    let extraDiv = document.getElementById('extra');
    let button = document.querySelector('.head .button');

    if (extraDiv.style.display === 'block') {
        extraDiv.style.display = 'none';
        button.textContent = 'More';
    } else {
        extraDiv.style.display = 'block';
        button.textContent = 'Less';
    }
}
