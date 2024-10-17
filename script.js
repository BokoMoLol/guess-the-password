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
        if (level < 6) {
            document.getElementById(`level${level + 1}`).classList.remove('hidden');
        } else {
            document.getElementById('congrats').classList.remove('hidden');
        }
    } else {
        triggerShake();
        showError('Incorrect password. Try again.');
    }
}

function checkPasswordLevel5() {
    const input = document.getElementById('input5').value.toLowerCase();
    if (input === 'password') {
        showError('Incorrect, try again.');
    } else if (input === 'again') {
        document.getElementById('level5').classList.add('hidden');
        document.getElementById('level6').classList.remove('hidden');
    } else {
        triggerShake();
        showError('Incorrect password. Try again.');
    }
}

function revealPassword() {
    document.getElementById('hidden-password').classList.remove('hidden');
}

function triggerShake() {
    document.body.classList.add('shake');
    setTimeout(() => {
        document.body.classList.remove('shake');
    }, 500);
}

function showError(message) {
    const errorElement = document.createElement('div');
    errorElement.textContent = message;
    errorElement.className = 'error-message';
    document.body.appendChild(errorElement);
    setTimeout(() => {
        document.body.removeChild(errorElement);
    }, 2000);
}

function openMenu() {
    document.getElementById('checkbox-menu').classList.remove('hidden');
}

function showNextCheckbox(number) {
    if (number < 7) {
        document.getElementById(`checkbox${number + 1}-container`).classList.remove('hidden');
    }
}

function confirmCheckbox() {
    const checkbox1 = document.getElementById('checkbox1').checked;
    const checkbox2 = document.getElementById('checkbox2').checked;
    const checkbox3 = document.getElementById('checkbox3').checked;
    const checkbox4 = document.getElementById('checkbox4').checked;
    const checkbox5 = document.getElementById('checkbox5').checked;
    const checkbox6 = document.getElementById('checkbox6').checked;
    const checkbox7 = document.getElementById('checkbox7').checked;

    if (checkbox1 && checkbox2 && checkbox3 && checkbox4 && checkbox5 && !checkbox7) {
        document.getElementById('level4').classList.add('hidden');
        document.getElementById('level5').classList.remove('hidden');
    } else if (checkbox1 && checkbox2 && checkbox3 && checkbox4 && checkbox5 && checkbox7) {
        document.body.innerHTML = "<h1>You are blocked from this website!</h1>";
    } else {
        showError('Checkbox selection invalid. Try again.');
    }
}
