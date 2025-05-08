let currentLang = localStorage.getItem("lang") || "en";


const toggleButton = document.getElementById("lang-toggle");

async function updateText(lang) {
    const response = await fetch(`lang/${lang}.json`);
    const data = await response.json();

    Object.keys(data).forEach(el => {
        const element = document.getElementById(el);
        if (element) {
            element.textContent = data[el];
        }
    });

    toggleButton.textContent = lang === "en" ? "EN" : "FR";
    localStorage.setItem("lang", lang);

    generateTOC();
    copyButton.textContent = originalText[currentLang]
}

toggleButton.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "fr" : "en";
    toggleButton.textContent = currentLang === "en" ? "EN" : "FR";
    updateText(currentLang);
});


updateText(currentLang);