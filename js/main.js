// Load your images on page-load
function preloader() {
    const imagesList = [
           "./img/masthead-4.jpg",
			"./img/masthead-2.jpg",
			"./img/masthead-3.jpg"
        ];

    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};


window.addEventListener("load", preloader);


const buttons = document.querySelectorAll(".buttons button");
const article = document.querySelector("article");


let topics = {

    energy: {
        headingContent: 'Renewable Energy',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec ex id libero blandit vestibulum id non elit. Phasellus imperdiet ultrices massa, id vulputate sem efficitur sed. Proin ut elementum magna. Integer vitae nulla orci. Phasellus mollis magna eget odio dignissim luctus. Ut interdum, odio in consequat suscipit, nisl augue finibus mi, ac luctus tellus ex ut massa. Duis tincidunt, tortor sed maximus varius, nulla orci ullamcorper dui, ac elementum massa urna quis augue. Donec vitae tempor tortor. Fusce consequat et nulla eu consectetur. Integer felis urna, sollicitudin ut dignissim vel, euismod vitae eros. Phasellus vitae aliquam nisl. Sed egestas quam eget semper malesuada. Cras justo nibh, venenatis et venenatis ac, eleifend vel dui. Suspendisse vehicula ante nec malesuada pretium. Ut congue ipsum risus, et vestibulum diam mollis nec.',
        imgUrl:'img/masthead-4.jpg',
        imgAlt: 'Renewable'
    },
    water: {
        headingContent: 'Water Energy',
        bodyText: 'Vestibulum fringilla id quam eu facilisis. Duis tristique sollicitudin tincidunt. Maecenas ligula felis, ornare id commodo pulvinar, viverra rhoncus ligula. Nulla facilisis augue a lacus consequat, quis vulputate erat lacinia. Etiam lorem nisi, auctor faucibus libero ut, sodales ullamcorper lacus. Nullam vitae tellus tincidunt, pretium tellus eu, laoreet enim.',
        imgUrl: 'img/masthead-2.jpg',
        imgAlt: 'water'
    },
    leaves: {
        headingContent: 'Green Leaves',
        bodyText: 'Vivamus et ante neque. Vivamus elementum enim nisi, eu rhoncus ante malesuada vel. Aliquam bibendum, magna eget porta laoreet, mi nibh ullamcorper erat, quis dignissim massa nisi a nibh. Mauris molestie nibh lectus, et ultrices justo egestas at. Etiam ullamcorper nisi nec enim malesuada dignissim. Donec consectetur, mauris convallis lacinia sagittis, massa dui vestibulum lectus, ac cursus ante velit at felis. Curabitur velit ante, mollis quis nunc sed, luctus dictum sapien. Donec bibendum sollicitudin arcu, nec aliquam erat placerat ac. Nulla nec nunc quis enim efficitur fermentum imperdiet quis ipsum. Etiam gravida vestibulum velit. Nam vel nulla eleifend, maximus mauris et, condimentum eros. Ut at venenatis mi. ',
        imgUrl: 'img/masthead-3.jpg',
        imgAlt: 'green'
    }

};

function handleSelection(ev) {


    for (let i = 0; i < buttons.length; i++) {

        if (buttons[i].hasAttribute("id")) {
            buttons[i].removeAttribute("id");
        }

        let clickedBtn = ev.target;
        clickedBtn.setAttribute("id", "active");
        let key = clickedBtn.getAttribute("data-content");

        article.innerHTML = "";


        article.innerHTML = `<h2>${topics[key].headingContent}</h2><img src="${topics[key].imgUrl}" alt="${topics[key].imgAlt}"><p>${topics[key].bodyText}</p>`;

    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleSelection);
}