document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');
    title.addEventListener('click', () => {
        if (document.getElementById('level2').classList.contains('hidden')) {
            document.getElementById('hidden-password').classList.remove('hidden');
        }
    });
});

function checkPassword(level, correctPassword) {
    const input = document.getElementById(`input${level}`).value;
    if (input === correctPassword) {
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
