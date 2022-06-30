"use strict";

// Inital Pairs - Aperol Spritz, Cosmopolitan, Espresso Martini, Pina Colada, 

//Getting all card back images from HTML and putting into an array
let cards = Array.from(document.querySelectorAll("div.card > img"));

//Loading Content for Cards
const aperolImgSrc = "src/imgs/cards/cocktail-card-aperol-spritz.png";
const aperolTextSrc = "src/imgs/cards-text/cocktail-cards-text-aperol-spritz.png";
const cosmoImgSrc = "src/imgs/cards/cocktail-card-cosmopolitan.png";
const cosmoTextSrc = "src/imgs/cards-text/cocktail-cards-text-cosmopolitan.png";
const espressoMartiniImgSrc = "src/imgs/cards/cocktail-card-espresso-martini.png";
const espressoMartiniTextSrc = "src/imgs/cards-text/cocktail-cards-text-espresso-martini.png";
const pinaColadaImgSrc = "src/imgs/cards/cocktail-card-pina-colada.png";
const pinaColadaTextSrc = "src/imgs/cards-text/cocktail-cards-text-pina-colada.png";

//Array to store card content
let cardContentArray = [];

//Card contents object defined
function cardContent(cardImg, id) {
    this.cardImg = cardImg;
    this.id = id;
};

// Card content objects created
const aperolImg = new cardContent(aperolImgSrc, 1);
cardContentArray.push(aperolImg);
const aperolText = new cardContent(aperolTextSrc, 1);
cardContentArray.push(aperolText);
const cosmoImg = new cardContent(cosmoImgSrc, 2);
cardContentArray.push(cosmoImg);
const cosmoText = new cardContent(cosmoTextSrc, 2);
cardContentArray.push(cosmoText);
const espressoMartiniImg = new cardContent(espressoMartiniImgSrc, 3);
cardContentArray.push(espressoMartiniImg);
const espressoMartiniText = new cardContent(espressoMartiniTextSrc, 3);
cardContentArray.push(espressoMartiniText);
const pinaColadaImg = new cardContent(pinaColadaImgSrc, 4);
cardContentArray.push(pinaColadaImg);
const pinaColadaText = new cardContent(pinaColadaTextSrc, 4);
cardContentArray.push(pinaColadaText);

//shuffles card contents so they are randomly organised in an array.   https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
const shuffleCardContents = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

let shuffled = shuffleCardContents(cardContentArray);

// console.log("This is shuffled array:", shuffled);


// Assigning shuffled content to each card
// let contentAssign = () => {
//     for (let i = cards[i]; i < cards.length; i++) {
//        shuffled[i].cardImg;
//     };
// };
// contentAssign();

// // Logic for click event
// let cardFlip = (e) => {
//     let cardElement = e.srcElement.offsetParent;
//     let cardReplace = () => {
//         //selecting element containing card back
//         let imgBack = cardElement.querySelector(".card-img");
//         console.log(imgBack);
//         imgBack.src = aperolText.cardImg;  //REPLACE APEROLTEXT WITH RANDOM NUMBER MATCHING CARD 

//     }
//     cardReplace();
//     console.log(e);
// };



let clickEvent1Result = null;
// Get id of card clicked and match to index from cards array. 
let cardFlip = (e) => {
    let index = 0;
    let cardClicked = e.target.id;

    for (let i=0; i<cards.length; i++){
    //loop through cards until id matched cardClicked
        let cardsID = cards[i].id;
        if (cardsID === cardClicked){
            index = i;
            // console.log("This is the selected index:", index);
            break;
        }
    };

    // console.log("This is event object", e);

    if(clickEvent1Result == null){
        clickEvent1Result = shuffled[index];
        e.target.src = clickEvent1Result.cardImg;
        console.log("1st Click Event", clickEvent1Result);
    } else {
        let clickEvent2Result = shuffled[index];
        e.target.src = clickEvent2Result.cardImg;
        console.log("2nd Click Event")
        if(clickEvent1Result.id === clickEvent2Result.id){
            console.log("Congrats you've made a match");
        } else {
            console.log("This is not a match");
        }
        clickEvent1Result = null;
    };
    
    console.log("Current Index from shuffled", clickEvent1Result);
    index = 0;
    // cardsCompare(e);
};



console.log("0 Click Event", clickEvent1Result)

//Place index into content array to get content in same index. 

//Store ClickEvent1 & Get Click Event 2
// let cardsCompare = (e) => {
    
// };




//Compare Click Events 1&2 - create  a 'true' & 'false' result. 


// Clear Events 1&2



for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = cardFlip;
};  //end logic for click event


console.log(cards);


