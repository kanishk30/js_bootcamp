const isValidPassword = (password) => {
    if (password.includes('password') || password.length < 9) {
        console.log('Invalid password');
    } else {
        console.log('Valid password');
    }
}
const password1 = 'hjfkjkjkjjkbwf';
isValidPassword(password1);
const password2 = 'fsf';
isValidPassword(password2);
const password3 = 'hhgfpassword';
isValidPassword(password3);
const password4 = 'n4567890-..;dwd';
isValidPassword(password4);