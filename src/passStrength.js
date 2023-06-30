export function calculatePassStrength(password) {
    let strength = 0;

    if (password.length >= 8) {
        strength += 1;
    }
    if (/[a-zа-яіїґ]/.test(password)) {
        strength += 1;
    }
    if (/[A-ZА-ЯІЇҐ]/.test(password)) {
        strength += 1;
    }
    if (/[0-9]/.test(password)) {
        strength += 1;
    }
    if (/[^A-Za-zА-Яа-я0-9іІїЇґҐ]/.test(password)) {
        strength += 1;
    }

    return strength;
}