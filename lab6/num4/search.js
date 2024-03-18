function search() {
    let searchText = document.getElementById('searchText').value.toLowerCase();
    let towns = document.querySelectorAll('#towns li');
    let matches = 0;
    towns.forEach(function(town) {
        let townName = town.textContent.toLowerCase();

        if (townName.includes(searchText)) {
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
            matches++;
        } else {
            town.style.fontWeight = 'normal';
            town.style.textDecoration = 'none';
        }
    });
    let resultDiv = document.getElementById('result');
    resultDiv.textContent = matches + ' matches found';
}
