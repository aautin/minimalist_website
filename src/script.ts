function switchPanel(name: string) {
    // Hide panels
    document.querySelectorAll('.panel').forEach(panel => {
        panel.classList.remove('active');
    });
    // Hide buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.classList.remove('active');
    });


    // Show selected panel and btn
    document.getElementById(`${name}Panel`).classList.add('active');
    document.getElementById(`${name}Btn`).classList.add('active');
}

function login() {
    const username = document.getElementById('username') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    console.log("LOGIN", username.value, password.value);
    username.value = "";
    password.value = "";
}

function register() {
    const username = document.getElementById('username') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    console.log("REGISTER", username.value, password.value);
    username.value = "";
    password.value = "";
}