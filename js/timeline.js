const events = [{
    year: "2025",
    themes: ["work", "ai"],
    title: "inriaTimelineTitle",
    description: "inriaTimelineDesc",
    thumbnail: { href: "https://www.inria.fr/fr/centre-inria-universite-bordeaux", src: "assets/logos/inria.svg", title: "Inria" },
    links: [],
    id: "inria-event"
},
{
    year: "2025",
    themes: ["personal"],
    title: "asahiTimelineTitle",
    description: "asahiTimelineDesc",
    thumbnail: { href: "https://asahilinux.org", src: "assets/logos/AsahiLinux_logo.svg", title: "Asahi linux" },
    links: [],
    id: null
},
{
    year: "2025",
    themes: ["education", "hpc"],
    title: "hpcprojectTimelineTitle",
    description: "hpcprojectTimelineDesc",
    thumbnail: null,
    links: [],
    id: null
},
{
    year: "2024",
    themes: ["education", "work", "ai"],
    title: "nthuTimelineTitle",
    description: "nthuTimelineDesc",
    thumbnail: { href: "https://nthu-en.site.nthu.edu.tw", src: "assets/logos/nthu.svg", title: "National Tsing Hua University" },
    links: [
        { href: "https://github.com/Larwive/RNNLGGnet", icon: "assets/logos/github-mark.svg", title: "RNNLGGNet GitHub repository" }
    ],
    id: null
},
{
    year: "2024",
    themes: ["education", "work"],
    title: "visualgoTimelineTitle",
    description: "visualgoTimelineDesc",
    thumbnail: { href: "https://pfa-visualgo.github.io/Visualgo/ui/index.html", src: "assets/logos/logo-github-pages.png", title: "Visualgo page" },
    links: [
        { href: "https://github.com/PFA-Visualgo/Visualgo", icon: "assets/logos/github-mark.svg", title: "Visualgo GitHub repository" }
    ],
    id: null
},
{
    year: "2023",
    themes: ["personal"],
    title: "gccTimelineTitle",
    description: "gccTimelineDesc",
    thumbnail: { href: "https://gcc.eirb.fr", src: "assets/logos/Logo_GCC.png", title: "Game Creation Club" },
    links: [],
    id: null
},
{
    year: "2023",
    themes: ["work"],
    title: "sove2023TimelineTitle",
    description: "sove2023TimelineDesc",
    thumbnail: { href: "https://solairevoltenergie.com", src: "assets/logos/sove.svg", title: "SOVE" },
    links: [],
    id: null
},
{
    year: "2023",
    themes: ["personal", "ai"],
    title: "lablabTimelineTitle",
    description: "lablabTimelineDesc",
    thumbnail: { href: "https://lablab.ai/event/google-vertex-ai-hackathon", src: "assets/logos/lablab-logo.webp", title: "Lablab AI" },
    links: [],
    id: null
},
{
    year: "2023",
    themes: ["personal", "ai"],
    title: "iapauTimelineTitle",
    description: "iapauTimelineDesc",
    thumbnail: { href: "https://iapau.org", src: "assets/logos/iapau_round.png", title: "IA Pau association" },
    links: [],
    id: null
},
/*{
    year: "2022",
    themes: ["work"],
    title: "sove2022TimelineTitle",
    description: "sove2022TimelineDesc",
    thumbnail: { href: "https://solairevoltenergie.com", src: "assets/logos/sove.svg", title: "SOVE" },
    links: [],
    id: null
},*/
{
    year: "2022",
    themes: ["education", "ai", "hpc"],
    title: "enseirbTimelineTitle",
    description: "enseirbTimelineDesc",
    thumbnail: { href: "https://enseirb-matmeca.bordeaux-inp.fr/fr", src: "assets/logos/logo_em.svg", title: "Enseirb-matmeca" },
    links: [],
    id: null
},
{
    year: "2021",
    themes: ["personal", "ai"],
    title: "sdcsTimelineTitle",
    description: "sdcsTimelineDesc",
    thumbnail: null,
    links: [
        { href: "https://github.com/Larwive/simple-digit-captcha-solver", icon: "assets/logos/github-mark.svg", title: "Simple digit-captcha solver GitHub repository" }
    ],
    id: null
},
/*{
    year: "2021",
    themes: ["work"],
    title: "sove2021TimelineTitle",
    description: "sove2021TimelineDesc",
    thumbnail: { href: "https://solairevoltenergie.com", src: "assets/logos/sove.svg", title: "SOVE" },
    links: [],
    id: null
},*/
{
    year: "2020",
    themes: ["education"],
    title: "cpgeTimelineTitle",
    description: "cpgeTimelineDesc",
    thumbnail: { href: "https://lyceefrancois1.net/index.php?summary=36", src: "assets/logos/Logo_lycee_François-Ier_Fontainebleau.png", title: "François 1er CPGE" },
    links: [],
    id: null
},
{
    year: "2020",
    themes: ["education"],
    title: "bacTimelineTitle",
    description: "bacTimelineDesc",
    thumbnail: { href: "https://lyceefrancois1.net", src: "assets/logos/Logo_lycee_François-Ier_Fontainebleau.png", title: "François 1er" },
    links: [],
    id: null
}
];


const timeline = document.getElementById("timeline");
const renderedYears = new Set();

[...events].reverse().forEach(evt => {
    const row = document.createElement("div");
    row.className = "timeline-row";

    if (!renderedYears.has(evt.year)) {
        const yearLabelRow = document.createElement("div");
        yearLabelRow.className = "timeline-year";

        const yearLabel = document.createElement("div");
        yearLabel.className = "timeline-year";
        yearLabel.textContent = evt.year;

        yearLabelRow.appendChild(yearLabel);
        timeline.prepend(yearLabelRow);
        renderedYears.add(evt.year);
    }

    const eventDiv = document.createElement("div");
    eventDiv.className = `timeline-event theme-${evt.themes[0]}`;
    eventDiv.setAttribute("data-theme", evt.themes);

    const content = document.createElement("div");
    content.className = "event-content";

    const thumbnail = document.createElement("a");
    if (evt.thumbnail !== null) {
        thumbnail.className = "event-thumbnail";
        thumbnail.href = evt.thumbnail.href;
        thumbnail.title = evt.thumbnail.title;
        thumbnail.target = "_blank";
        const thumbnailImg = document.createElement("img");
        thumbnailImg.src = evt.thumbnail.src;
        thumbnailImg.alt = "Event Thumbnail";
        thumbnail.appendChild(thumbnailImg);
    }

    const details = document.createElement("div");
    details.className = "event-details";

    const title = document.createElement("h3");
    title.className = "event-title";
    title.id = evt.title;

    const desc = document.createElement("p");
    desc.className = "event-description";
    desc.id = evt.description;

    const linksDiv = document.createElement("div");
    linksDiv.className = "event-links";

    evt.links.forEach(link => {
        const a = document.createElement("a");
        a.href = link.href;
        a.title = link.title;
        a.target = "_blank";

        const img = document.createElement("img");
        img.src = link.icon;
        img.alt = link.title;
        img.className = "link-icon";

        a.appendChild(img);
        linksDiv.appendChild(a);
    });

    if (evt.id !== null) content.id = evt.id;

    details.append(title, desc, linksDiv);
    if (evt.thumbnail !== null) content.append(thumbnail, details);
    else content.append(details);
    eventDiv.appendChild(content);
    row.appendChild(eventDiv);
    timeline.prepend(row);
});

const yearLabelRow = document.createElement("div");
yearLabelRow.className = "timeline-year";
const yearLabel = document.createElement("div");
yearLabel.className = "timeline-year";
yearLabel.id = "now"


yearLabelRow.appendChild(yearLabel);
timeline.prepend(yearLabelRow);

document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        document.querySelectorAll('.timeline-event').forEach(event => {
            const eventTheme = event.getAttribute('data-theme');
            if (filter === 'all' || eventTheme.includes(filter)) {
                event.style.display = '';
            } else {
                event.style.display = 'none';
            }
        });
    });
});

