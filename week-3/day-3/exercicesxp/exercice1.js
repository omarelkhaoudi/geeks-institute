// Change the article
// Instructions

// 1) Using a DOM property, retrieve the h1 and console.log it.
 
const h1 = document.querySelector("h1");
console.log(h1);

// 2) Using DOM methods, remove the last paragraph in the <article> tag.

const article = document.querySelector("article");
const paragraphs = article.getElementsByTagName("p");
article.removeChild(paragraphs[paragraphs.length - 1]);

// 3) Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

const h2 = document.querySelector("h2")
h2.addEventListener("click", () => {
    h2.style.backgroundColor = "red";
});

// 4) Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

const h3 = document.querySelector("h3")
h3.addEventListener("click", () => {
    h3.style.display = "none";
});

// 5) Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

const boldBtn = document.getElementById("boldBtn")
boldBtn.addEventListener("click", () => {
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(p => {
        p.style.fontWeight = "bold";
    });
});

// 6) BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

h1.addEventListener("mouseover"), () => {
    const randomSize = Math.floor(Math.random() * 101);
    h1.style.fontSize = randomSize + "px";
};

// 7) BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

const secondPara = document.querySelectorAll("p")[1];
secondPara.addEventListener("mouseover", () => {
    secondPara.classList.add("fade-out");
});

