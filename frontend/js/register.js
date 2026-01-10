import { apiRequest } from './api.js';

document.getElementById('registerBtn').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
        const res = await apiRequest('/user/register', 'POST', {
            username,
            email,
            password,
        });
        
        alert(res.message);
        window.location.href = 'login.html';
    } catch (err) {
        alert(err.message);
    }
});