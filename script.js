document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');
    title.addEventListener('click', () => {
        const level2 = document.getElementById('level2');
        if (!level2.classList.contains('hidden')) {
            const hiddenPassword = document.createElement('div');
            hiddenPassword.id = 'hidden-password';
            hiddenPassword.className = 'hidden';
            hiddenPassword.textContent = 'the password';
            level2.appendChild(hiddenPassword);
            document.getElementById('hidden-password').classList.remove('hidden');
        }
    });
});

function checkPassword(level, correctPassword) {
    const input = document.getElementById(`input${level}`).value.toLowerCase();
    if (input === correctPassword.toLowerCase()) {
        document.getElementById(`level${level}`).classList.add('hidden');
        if (level < 3) {
            document.getElementById(`level${level + 1}`).classList.remove('hidden');
        } else {
            document.getElementById('congrats').classList.remove('hidden');
        }
    } else {
        alert('Incorrect password. Try again.');
    }
}
