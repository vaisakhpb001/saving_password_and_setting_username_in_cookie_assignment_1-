// ✅ Step 1: Function to get a cookie by name
function getCookie(name) {
    let cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        let [key, value] = cookie.trim().split('=');
        if (key === name) {
            return value;
        }
    }
    return null;
}

// ✅ Step 2: Initialize the count cookie if it doesn't exist
function initializeCookie() {
    let count = getCookie('count');
    if (!count) {
        document.cookie = 'count=0; path=/';
    }
}

// ✅ Step 3: Display the current count on the webpage
function displayCount() {
    let count = getCookie('count') || 0;
    document.getElementById('counter').innerText = `Count: ${count}`;
}

// ✅ Step 4: Increment the count each time the page loads
function incrementCount() {
    let count = parseInt(getCookie('count')) || 0;
    count += 1;
    document.cookie = `count=${count}; path=/`;
    displayCount();
}

// ✅ Step 5: Run all functions on page load
window.onload = function() {
    initializeCookie();
    incrementCount(); // Automatically increase count on each load
};
