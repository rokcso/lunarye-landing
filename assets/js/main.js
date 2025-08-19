document.addEventListener('DOMContentLoaded', function () {
    const user = 'hi';
    const domain = 'rokcso.com';
    const emailElement = document.getElementById('email-contact');
    if (emailElement) {
        emailElement.innerHTML = `<a href="mailto:${user}@${domain}">${user}@${domain}</a>`;
    }
});