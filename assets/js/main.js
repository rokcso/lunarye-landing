document.addEventListener('DOMContentLoaded', function () {
    const user = 'rokcso';
    const domain = 'lunarye.com';
    const emailElement = document.getElementById('email-contact');
    if (emailElement) {
        emailElement.innerHTML = `<a href="mailto:${user}@${domain}">${user}@${domain}</a>`;
    }
});