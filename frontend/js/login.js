console.log("login.js loaded");

import { apiRequest } from "./api.js";

document.getElementById('loginBtn').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const res = await apiRequest('/user/login', 'POST', {
            email,
            password,
        });

        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));

        window.location.href = 'chat.html';
    } catch (err) {
        alert(err.message);
    }
});