function lockedProfile() {
    let buttons = document.querySelectorAll('.profile button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            let profileDiv = button.parentNode;
            let lockedRadio = profileDiv.querySelector('input[type="radio"][value="lock"]');
            let hiddenFieldsDiv = profileDiv.querySelector('.profile div');
            if (hiddenFieldsDiv.style.display === 'none' || hiddenFieldsDiv.style.display === '') {
                if (lockedRadio.checked) {
                    alert('Profile is locked!');
                } else {
                    hiddenFieldsDiv.style.display = 'block';
                    button.textContent = 'Hide it';
                }
            } else {
                if (!lockedRadio.checked) {
                    hiddenFieldsDiv.style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        });
    });
}
