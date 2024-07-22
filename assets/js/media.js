document.addEventListener("DOMContentLoaded", function () {
    const pdfData = {
        "All": [
            { title: "May Media Speak-2024", link: "https://rgicdn.s3.ap-south-1.amazonaws.com/raisoni/pdf/media-speak/media-speak-march-24.pdf" },
            { title: "April Media Speak-2024", link: "https://rgicdn.s3.ap-south-1.amazonaws.com/raisoni/pdf/media-speak/media-speak-april-24.pdf" },
            { title: "March Media Speak-2024", link: "https://rgicdn.s3.ap-south-1.amazonaws.com/raisoni/pdf/media-speak/media-speak-march-24.pdf" },
            { title: "February Media Speak-2024", link: "https://rgicdn.s3.ap-south-1.amazonaws.com/raisoni/pdf/media-speak/media-speak-feb-24.pdf" },
            { title: "January Media Speak-2024", link: "https://rgicdn.s3.ap-south-1.amazonaws.com/raisoni/pdf/media-speak/media-speak-jan-24.pdf" },
            { title: "December Media Speak-2023", link: "https://drive.google.com/file/d/1CYbzW7pXRphV3-zNHhZmEefcsNe3_uFl/view?usp=sharing" },
            { title: "November Media Speak-2023", link: "https://drive.google.com/file/d/11wIXT8B699Tf73JF-W12tgxAKNNR_ApU/view?usp=sharing" },
            { title: "October Media Speak-2023", link: "https://drive.google.com/file/d/1gmozgdD7A2cI6J5tKKHN1o7eFezUmNRn/view?usp=sharing" },
            { title: "September Media Speak-2023", link: "https://drive.google.com/file/d/1giUEYVECoJNo-yWNbdkZ6oZRkU9aqQGz/view?usp=sharin" },
            { title: "August Media Speak-2023", link: "https://drive.google.com/file/d/1Zqc9vmRX245caU_vvjwzprJgucMKm4jq/view?usp=sharing" },
            { title: "July Media Speak-2023", link: "https://drive.google.com/file/d/1doNh744ThUSPbwU99L1_0TNdtAECOp33/view?usp=sharing" },
            { title: "June Media Speak-2023", link: "https://drive.google.com/file/d/1Jjmx1ZqRRKE1-vR1IYpiy3HqHciw1gtT/view?usp=sharing"},
            { title: "May Media Speak-2023", link: "https://drive.google.com/file/d/1eNuUC7DbxDpcSyv84qBldH2cO0kndNuv/view?usp=sharing"},
            { title: "April Media Speak-2023", link: "https://drive.google.com/file/d/1XFXQh1q2Q6_d1vrBYMEw3aH1HXFBG6gc/view?usp=sharing" },
            { title: "March Media Speak-2023", link: "https://drive.google.com/file/d/1X6PTvK3tHFzvqQdBa7KZbszh_YHz6BmM/view?usp=sharing" },
            { title: "February Media Speak-2023", link: "https://drive.google.com/file/d/1JkYY9OPNjQZBR183IYSFpPPOAEzPl859/view?usp=sharing"},
            { title: "January Media Speak-2023", link: "https://drive.google.com/file/d/1WKI-Z5qFqoMEXhMIqnCe2Yuv9L_s_Xu5/view?usp=sharing"},
            { title: "December Media Speak-2022", link: "https://drive.google.com/file/d/1B0MjcwOqkv08CnxyD6ndIG84oCxY5xtY/view?usp=sharing" },
            { title: "November Media Speak-2042", link: "https://drive.google.com/file/d/1CYbzW7pXRphV3-zNHhZmEefcsNe3_uFl/view?usp=sharing" },
            { title: "October Media Speak-2022", link: "https://drive.google.com/file/d/11wIXT8B699Tf73JF-W12tgxAKNNR_ApU/view?usp=sharing" },
            { title: "September Media Speak-2022", link: "https://drive.google.com/file/d/1b7vrPui5Dg-dQNV7dDonNt7BC_8MryGF/view?usp=sharing" },
            { title: "August Media Speak-2022", link: "https://drive.google.com/file/d/1Zqc9vmRX245caU_vvjwzprJgucMKm4jq/view?usp=sharing"},
            { title: "July Media Speak-2022", link: "https://drive.google.com/file/d/1doNh744ThUSPbwU99L1_0TNdtAECOp33/view?usp=sharing" },
            { title: "June Media Speak-2022", link: "https://drive.google.com/file/d/1Jjmx1ZqRRKE1-vR1IYpiy3HqHciw1gtT/view?usp=sharing"  },
            { title: "May Media Speak-2022", link: "https://drive.google.com/file/d/1eNuUC7DbxDpcSyv84qBldH2cO0kndNuv/view?usp=sharing" },
            { title: "April Media Speak-2022", link: "https://drive.google.com/file/d/1XFXQh1q2Q6_d1vrBYMEw3aH1HXFBG6gc/view?usp=sharing"},
            { title: "March Media Speak-2022", link: "https://drive.google.com/file/d/1X6PTvK3tHFzvqQdBa7KZbszh_YHz6BmM/view?usp=sharing" },
            { title: "February Media Speak-2022", link:"https://drive.google.com/file/d/1JkYY9OPNjQZBR183IYSFpPPOAEzPl859/view?usp=sharing"  },
            { title: "January Media Speak-2022", link: "https://drive.google.com/file/d/1WKI-Z5qFqoMEXhMIqnCe2Yuv9L_s_Xu5/view?usp=sharing" },
            { title: "December Media Speak-2021", link: "https://drive.google.com/file/d/1C6zcEtsmgh056j12Piaqbmsto4u3IQ0z/view?usp=sharing" },
            { title: "November Media Speak-2021", link: "https://drive.google.com/file/d/10537Ba-fPNY7rTIU2uNrwKqGt1QviuSb/view?usp=sharing" },
            { title: "October Media Speak-2021", link: "https://drive.google.com/file/d/1Ni6q55hViKMG7lt0OdOjkHnS131PKNK3/view?usp=sharing" },
            { title: "September Media Speak-2021", link: "https://drive.google.com/file/d/1sJPDIPW0MCQUhtfT3pKQ6wtcP7zPirKD/view?usp=sharingl" },
            { title: "August Media Speak-2021", link: "https://drive.google.com/file/d/1Ypju2K0NZ9L_YDDRx65eQ_4Bx5IfsCVg/view?usp=sharing"},
            { title: "July Media Speak-2021", link: "https://drive.google.com/file/d/1hwB18bhHcwBrbrMn-z6pvgnUDV3kclNP/view?usp=sharing" },
            { title: "June Media Speak-2021", link: "https://drive.google.com/file/d/1CWh7l0JwvRFvDL34MjmlEWl9LVFsFqBa/view?usp=sharing"},
            { title: "May Media Speak-2021", link: "https://drive.google.com/file/d/1ndozJAFoEAlOqGJuqZz-27Km5QMmB6Cm/view?usp=sharing" },
            { title: "April Media Speak-2021", link: "https://drive.google.com/file/d/1XpwIadSX0FtHKzxgmNb1VCw1ZMbBXwcu/view?usp=sharing"},
            { title: "February Media Speak-2021", link: "https://drive.google.com/file/d/1eNxERioAYToJpgmRMQ3npzSs2-Y7eQLu/view?usp=sharing" },
            { title: "March Media Speak-2020", link: "wowbook-master/index-march20.html"},
            { title: "February Media Speak-2020", link: "wowbook-master/index-feb20.html" },
            { title: "January Media Speak-2020", link: "wowbook-master/index-jan20.html" },
            { title: "December Media Speak-2019", link: "wowbook-master/index-dec19.html" },
            { title: "October Media Speak-2019", link: "wowbook-master/index-oct19.html" },
            { title: "July Media Speak-2019", link: "wowbook-master/index-july19.html" },
            { title: "April Media Speak-2019", link: "wowbook-master/index-april19.html" },
            { title: "February Media Speak-2019", link: "wowbook-master/index-feb19.html" },
            { title: "January Media Speak-2019", link: "wowbook-master/index-jan19.html" },
            { title: "November Media Speak-2018", link: "wowbook-master/index-nov18.html"},
            { title: "September Media Speak-2018", link: "wowbook-master/index-sept18.html" },
            { title: "June Media Speak-2018", link: "wowbook-master/index-june18.html" },
            { title: "May Media Speak-2018", link: "wowbook-master/index-may18.html" },
            { title: "April Media Speak-2018", link: "wowbook-master/index-april18.html" },
            { title: "January Media Speak-2018", link: "wowbook-master/index-jan18.html"},
        ],
        "2024": [
            { title: "May Media Speak-2024", link: "https://rgicdn.s3.ap-south-1.amazonaws.com/raisoni/pdf/media-speak/media-speak-march-24.pdf" },
            { title: "April Media Speak-2024", link: "https://rgicdn.s3.ap-south-1.amazonaws.com/raisoni/pdf/media-speak/media-speak-april-24.pdf" },
            { title: "March Media Speak-2024", link: "https://rgicdn.s3.ap-south-1.amazonaws.com/raisoni/pdf/media-speak/media-speak-march-24.pdf" },
            { title: "February Media Speak-2024", link: "https://rgicdn.s3.ap-south-1.amazonaws.com/raisoni/pdf/media-speak/media-speak-feb-24.pdf" },
            { title: "January Media Speak-2024", link: "https://rgicdn.s3.ap-south-1.amazonaws.com/raisoni/pdf/media-speak/media-speak-jan-24.pdf" },
        ],
        "2023": [
            { title: "December Media Speak-2023", link: "https://drive.google.com/file/d/1CYbzW7pXRphV3-zNHhZmEefcsNe3_uFl/view?usp=sharing" },
            { title: "November Media Speak-2023", link: "https://drive.google.com/file/d/11wIXT8B699Tf73JF-W12tgxAKNNR_ApU/view?usp=sharing" },
            { title: "October Media Speak-2023", link: "https://drive.google.com/file/d/1gmozgdD7A2cI6J5tKKHN1o7eFezUmNRn/view?usp=sharing"  },
            { title: "September Media Speak-2023", link: "https://drive.google.com/file/d/1giUEYVECoJNo-yWNbdkZ6oZRkU9aqQGz/view?usp=sharin" },
            { title: "August Media Speak-2023", link: "https://drive.google.com/file/d/1Zqc9vmRX245caU_vvjwzprJgucMKm4jq/view?usp=sharing" },
            { title: "July Media Speak-2023", link: "https://drive.google.com/file/d/1doNh744ThUSPbwU99L1_0TNdtAECOp33/view?usp=sharing" },
            { title: "June Media Speak-2023", link: "https://drive.google.com/file/d/1Jjmx1ZqRRKE1-vR1IYpiy3HqHciw1gtT/view?usp=sharing"},
            { title: "May Media Speak-2023", link: "https://drive.google.com/file/d/1eNuUC7DbxDpcSyv84qBldH2cO0kndNuv/view?usp=sharing"},
            { title: "April Media Speak-2023", link: "https://drive.google.com/file/d/1XFXQh1q2Q6_d1vrBYMEw3aH1HXFBG6gc/view?usp=sharing" },
            { title: "March Media Speak-2023", link: "https://drive.google.com/file/d/1X6PTvK3tHFzvqQdBa7KZbszh_YHz6BmM/view?usp=sharing" },
            { title: "February Media Speak-2023", link: "https://drive.google.com/file/d/1JkYY9OPNjQZBR183IYSFpPPOAEzPl859/view?usp=sharing"},
            { title: "January Media Speak-2023", link: "https://drive.google.com/file/d/1WKI-Z5qFqoMEXhMIqnCe2Yuv9L_s_Xu5/view?usp=sharing"},
        ],
        "2022": [
            { title: "December Media Speak-2022", link: "https://drive.google.com/file/d/1B0MjcwOqkv08CnxyD6ndIG84oCxY5xtY/view?usp=sharing" },
            { title: "November Media Speak-2022", link: "https://drive.google.com/file/d/1CYbzW7pXRphV3-zNHhZmEefcsNe3_uFl/view?usp=sharing" },
            { title: "October Media Speak-2022", link: "https://drive.google.com/file/d/11wIXT8B699Tf73JF-W12tgxAKNNR_ApU/view?usp=sharing" },
            { title: "September Media Speak-2022", link: "https://drive.google.com/file/d/1b7vrPui5Dg-dQNV7dDonNt7BC_8MryGF/view?usp=sharing" },
            { title: "August Media Speak-2022", link: "https://drive.google.com/file/d/1Zqc9vmRX245caU_vvjwzprJgucMKm4jq/view?usp=sharing"},
            { title: "July Media Speak-2022", link: "https://drive.google.com/file/d/1doNh744ThUSPbwU99L1_0TNdtAECOp33/view?usp=sharing" },
            { title: "June Media Speak-2022", link: "https://drive.google.com/file/d/1Jjmx1ZqRRKE1-vR1IYpiy3HqHciw1gtT/view?usp=sharing"  },
            { title: "May Media Speak-2022", link: "https://drive.google.com/file/d/1eNuUC7DbxDpcSyv84qBldH2cO0kndNuv/view?usp=sharing" },
            { title: "April Media Speak-2022", link: "https://drive.google.com/file/d/1XFXQh1q2Q6_d1vrBYMEw3aH1HXFBG6gc/view?usp=sharing"},
            { title: "March Media Speak-2022", link: "https://drive.google.com/file/d/1X6PTvK3tHFzvqQdBa7KZbszh_YHz6BmM/view?usp=sharing" },
            { title: "February Media Speak-2022", link:"https://drive.google.com/file/d/1JkYY9OPNjQZBR183IYSFpPPOAEzPl859/view?usp=sharing"  },
            { title: "January Media Speak-2022", link: "https://drive.google.com/file/d/1WKI-Z5qFqoMEXhMIqnCe2Yuv9L_s_Xu5/view?usp=sharing" },
        ],
        "2021": [
            { title: "December Media Speak-2021", link: "https://drive.google.com/file/d/1C6zcEtsmgh056j12Piaqbmsto4u3IQ0z/view?usp=sharing" },
            { title: "November Media Speak-2021", link: "https://drive.google.com/file/d/10537Ba-fPNY7rTIU2uNrwKqGt1QviuSb/view?usp=sharing" },
            { title: "October Media Speak-2021", link: "https://drive.google.com/file/d/1Ni6q55hViKMG7lt0OdOjkHnS131PKNK3/view?usp=sharing" },
            { title: "September Media Speak-2021", link: "https://drive.google.com/file/d/1sJPDIPW0MCQUhtfT3pKQ6wtcP7zPirKD/view?usp=sharingl" },
            { title: "August Media Speak-2021", link: "https://drive.google.com/file/d/1Ypju2K0NZ9L_YDDRx65eQ_4Bx5IfsCVg/view?usp=sharing"},
            { title: "July Media Speak-2021", link: "https://drive.google.com/file/d/1hwB18bhHcwBrbrMn-z6pvgnUDV3kclNP/view?usp=sharing" },
            { title: "June Media Speak-2021", link: "https://drive.google.com/file/d/1CWh7l0JwvRFvDL34MjmlEWl9LVFsFqBa/view?usp=sharing"},
            { title: "May Media Speak-2021", link: "https://drive.google.com/file/d/1ndozJAFoEAlOqGJuqZz-27Km5QMmB6Cm/view?usp=sharing" },
            { title: "April Media Speak-2021", link: "https://drive.google.com/file/d/1XpwIadSX0FtHKzxgmNb1VCw1ZMbBXwcu/view?usp=sharing"},
            { title: "February Media Speak-2021", link: "https://drive.google.com/file/d/1eNxERioAYToJpgmRMQ3npzSs2-Y7eQLu/view?usp=sharing" },
        ],
        "2020": [
            { title: "March Media Speak-2020", link: "wowbook-master/index-march20.html"},
            { title: "February Media Speak-2020", link: "wowbook-master/index-feb20.html" },
            { title: "January Media Speak-2020", link: "wowbook-master/index-jan20.html" },
        ],
        "2019": [
            { title: "December Media Speak-2019", link: "wowbook-master/index-dec19.html" },
            { title: "October Media Speak-2019", link: "wowbook-master/index-oct19.html" },
            { title: "July Media Speak-2019", link: "wowbook-master/index-july19.html" },
            { title: "April Media Speak-2019", link: "wowbook-master/index-april19.html" },
            { title: "February Media Speak-2019", link: "wowbook-master/index-feb19.html" },
            { title: "January Media Speak-2019", link: "wowbook-master/index-jan19.html" },
        ],
        "2018": [
            { title: "November Media Speak-2018", link: "wowbook-master/index-nov18.html"},
            { title: "September Media Speak-2018", link: "wowbook-master/index-sept18.html" },
            { title: "June Media Speak-2018", link: "wowbook-master/index-june18.html" },
            { title: "May Media Speak-2018", link: "wowbook-master/index-may18.html" },
            { title: "April Media Speak-2018", link: "wowbook-master/index-april18.html" },
            { title: "January Media Speak-2018", link: "wowbook-master/index-jan18.html"},
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
                link.target = "_self";

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
        link.target = "_self";

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
const ninaAssistant = document.getElementById("nina-assistant");
const ninaHover = document.getElementById("nina-hover");
const assistantCloseBtn = document.getElementById("assistant-close-btn");
const ninaChatCloseBtn = document.getElementById("nina-chat-close-btn");
const ninaChatBlock = document.getElementById("nina-chat-block");

//nina assistant
window.document.addEventListener("DOMContentLoaded", () => {
  ninaHover.style.display = "block";
});
assistantCloseBtn.addEventListener("click", () => {
  ninaHover.style.display = "none";
});

ninaAssistant.addEventListener("click", () => {
  ninaChatBlock.style.display = "block";
  ninaChatBlock.classList.add("in-amin");
});
ninaChatCloseBtn.addEventListener("click", () => {
  ninaChatBlock.style.display = "none";
});
document.addEventListener("DOMContentLoaded", function () { 
fetch("navbar.html").then((response) => response.text())
.then((data) => {  document.getElementById("navbar-placeholder").innerHTML = data;  })
.catch((error) => console.error("Error loading header:", error)); 
});
