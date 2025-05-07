function generateTOC() {
    const tocList = document.getElementById("toc-list");
    tocList.innerHTML = "";

    const content = document.getElementById("homeSection");
    const headers = content.querySelectorAll("h1, h2"); // h3

    headers.forEach((header, index) => {
        //const id = `section-${index}`;
        //header.id = id;

        const li = document.createElement("li");
        li.style.marginLeft = `${(parseInt(header.tagName[1]) - 1) * 1.5}em`;

        const link = document.createElement("a");
        link.href = `#${header.id}`;
        link.textContent = header.textContent;

        li.appendChild(link);
        tocList.appendChild(li);
    });
}