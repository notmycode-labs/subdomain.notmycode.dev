document.addEventListener("DOMContentLoaded", function() {
    const subdomains = [
        "notmycode.dev",
        "subdomain.notmycode.dev",
        "guidelines.notmycode.dev"
    ];

    const subdomainList = document.getElementById('subdomain-list');

    subdomains.forEach(subdomain => {
        const li = document.createElement('li');
        li.textContent = subdomain;
        subdomainList.appendChild(li);
    });
});
