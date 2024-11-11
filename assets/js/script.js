
document.getElementById('artist-login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('artist-username').value;
    const password = document.getElementById('artist-password').value;
    
    if (username === 'artist' && password === 'password') {
        alert('Login successful!');
        window.location.href = 'artist-profile.html'; 
    } else {
        alert('Invalid credentials');
    }
});

document.getElementById('management-login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'admin123') {
        alert('Login successful!');
        window.location.href = 'admin-dashboard.html'; 
    } else {
        alert('Invalid credentials');
    }
});
