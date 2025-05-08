const copyButton = document.getElementById("copyEmail");

const email = "kevinshaopro@gmail.com";
const originalText = {
    en: "Copy Email",
    fr: "Copier l'email"
};
const copiedText = {
    en: "Copied!",
    fr: "Copié !"
};
copyButton.textContent = originalText[currentLang];

copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(email).then(() => {
        copyButton.textContent = copiedText[currentLang];
        setTimeout(() => {
            copyButton.textContent = originalText[currentLang];
        }, 2000);
    });
});