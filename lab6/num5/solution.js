function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   function onClick() {
      let searchField = document.getElementById('searchField').value.toLowerCase();
      let rows = document.querySelectorAll('tbody tr');
      rows.forEach(function(row) {
         let cells = row.querySelectorAll('td');
         let found = false;
         cells.forEach(function(cell) {
            let cellText = cell.textContent.toLowerCase();
            if (cellText.includes(searchField) || cellText.split(' ').some(word => word.startsWith(searchField))) {
               found = true;
            }
         });
         if (found) {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }
      });
   }
}
