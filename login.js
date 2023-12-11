
document.getElementById('productsLink').addEventListener('click', function() {
    this.classList.add('clicked');
    document.getElementById('usersLink').classList.remove('clicked');
    document.getElementById('loginBox').style.display = 'none'; 
});

document.getElementById('usersLink').addEventListener('click', function() {
    this.classList.add('clicked');
    document.getElementById('productsLink').classList.remove('clicked');
    document.getElementById('loginBox').style.display = 'none'; 
});

document.getElementById('loginBtn').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'qaifi' && password === 'qaifi') {
        alert('Login successful!');
        window.location.href = 'order.html';
    } else {
        alert('Please Enter Valid Credentials.');
    }
});

// Function to show the login box again
function showLoginBox() {
    document.getElementById('loginBox').style.display = 'block';
}

