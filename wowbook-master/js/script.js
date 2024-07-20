document.addEventListener("DOMContentLoaded", function () {
    const pdfData = {
        "All": [],
        "2024": [
            { title: "May Media Speak-2024", link: "https://rgicdn.s3.ap-south-1.amazonaws.com/raisoni/pdf/media-speak/media-speak-march-24.pdf" },
            { title: "April Media Speak-2024", link: "https://rgicdn.s3.ap-south-1.amazonaws.com/raisoni/pdf/media-speak/media-speak-april-24.pdf" },
            // Add more entries for 2024
        ],
        "2023": [
            { title: "December Media Speak-2023", link: "https://rgicdn.s3.ap-south-1.amazonaws.com/raisoni/pdf/media-speak/media-speak-dec-23.pdf" },
            { title: "November Media Speak-2023", link: "https://rgicdn.s3.ap-south-1.amazonaws.com/raisoni/pdf/media-speak/media-speak-nov-23.pdf" },
            // Add more entries for 2023
        ],
        // Add entries for other years
    };

    const buttonGroup = document.querySelector(".button-group");
    const pdfContainer = document.getElementById("pdf-container");

    buttonGroup.addEventListener("click", function (event) {
        if (event.target.classList.contains("btn")) {
            const year = event.target.textContent.trim();
            const pdfs = pdfData[year];

            // Clear previous content
            pdfContainer.innerHTML = "";

            // Display PDF links for the selected year
            pdfs.forEach(pdf => {
                const col = document.createElement("div");
                col.classList.add("col-2", "pb-5", "text-center");

                const link = document.createElement("a");
                link.href = pdf.link;
                link.target = "_blank";

                const card = document.createElement("div");
                card.classList.add("card");
                card.style.height = "100px";

                const img = document.createElement("img");
                img.src = "assets/img/pdf.png";
                img.style.width = "40px";
                img.style.height = "48.8px";
                img.style.margin = "auto";
                img.style.display = "block";

                const title = document.createElement("h6");
                title.textContent = pdf.title;

                card.appendChild(img);
                link.appendChild(card);
                link.appendChild(title);
                col.appendChild(link);
                pdfContainer.appendChild(col);
            });

            // Toggle active class for buttons
            const activeButton = document.querySelector(".btn.active");
            activeButton.classList.remove("active");
            event.target.classList.add("active");
        }
    });

    // Initialize with the default data
    const defaultYear = "All";
    const defaultPdfs = pdfData[defaultYear];

    defaultPdfs.forEach(pdf => {
        const col = document.createElement("div");
        col.classList.add("col-2", "pb-5", "text-center");

        const link = document.createElement("a");
        link.href = pdf.link;
        link.target = "_blank";

        const card = document.createElement("div");
        card.classList.add("card");
        card.style.height = "100px";

        const img = document.createElement("img");
        img.src = "assets/img/pdf.png";
        img.style.width = "40px";
        img.style.height = "48.8px";
        img.style.margin = "auto";
        img.style.display = "block";

        const title = document.createElement("h6");
        title.textContent = pdf.title;

        card.appendChild(img);
        link.appendChild(card);
        link.appendChild(title);
        col.appendChild(link);
        pdfContainer.appendChild(col);
    });

    // Set the 'All' button as active initially
    const allButton = document.getElementById("nav-one-tab");
    allButton.classList.add("active");
});
