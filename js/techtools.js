const tech_tools = [{
    title: "proglangTitle",
    logos: [
        { src: "assets/logos/c.svg", title: "C" },
        { src: "assets/logos/python.svg", title: "Python" },
        { src: "assets/logos/c++.svg", title: "C++" },
        { src: "assets/logos/javascript.svg", title: "OpenMPI" },
        { src: "assets/logos/typescript.svg", title: "TypeScript" },
        { src: "assets/logos/sql.svg", title: "SQL" },
    ]
},
{
    title: "frameworkTitle",
    logos: [
        { src: "assets/logos/pytorch.svg", title: "PyTorch" },
        { src: "assets/logos/numpy.svg", title: "NumPy" },
        { src: "assets/logos/cuda.png", title: "Nvidia CUDA" },
        { src: "assets/logos/openmpi.png", title: "JavaScript" },
        { src: "assets/logos/spark.svg", title: "Apache Spark" },
        { src: "assets/logos/openmp.svg", title: "OpenMP" },
    ]
},
/*{
    title: "softenginesTitle",
    logos: [
        { src: "assets/logos/blender.svg", title: "Blender" },
        { src: "assets/logos/godot.svg", title: "Godot" },
        { src: "assets/logos/unity.svg", title: "Unity" }
    ]
},*/
]

const tech_tools_area = document.getElementById("technologies-tools");


tech_tools.forEach(evt => {
    const row = document.createElement("div");
    row.className = "techtools-row";

    const title = document.createElement("h3");
    title.className = "techtools-title";
    title.id = evt.title;

    const logosDiv = document.createElement("div");
    logosDiv.className = "techtools-logos";

    evt.logos.forEach(logo => {

        const img = document.createElement("img");
        img.src = logo.src;
        img.alt = logo.title;
        img.className = "techtools-logo";

        logosDiv.appendChild(img);
    });

    row.append(title, logosDiv);
    tech_tools_area.append(row);
});


