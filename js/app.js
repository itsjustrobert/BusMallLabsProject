//  here is where we will define classes/instanctiate clickable






// get a random picture 
var mixer = () => { return Math.floor(Math.random())*imagesArray.length}






// define base set of properties for our object

class Pictures {
  // properties that I want but not pass in
  click = 0;
  diplayed = 0;
  // =========================================
  constructor(name, imgSrc) {
    this.name = name;
    this.imgSrc = imgSrc;
  }
}

// storage
let pageLeft = null;
let pageMiddle = null;
let pageRight = null;
// rules
const totalClicks = 0;
const maxClicksAllowed = 5;

// randomly pull from a list of image objects
let imagesArray = [
  new Pictures("helloooo", "./assets/images/music.jpg"),
  new Pictures("hellooo", "./assets/images/BLAKGOLD.jpg"),
  new Pictures("helloo", "./assets/images/basquiat.jpg"),
  new Pictures("helloo", "./assets/images/health.jpg"),
  new Pictures("helloo", "assets/images/blue_rhapsody_by_afremov_studio_by_leonidafremov_dej0gda-200h.jpg"),
  new Pictures("helloo", "./assets/images/images.jpg"),
  new Pictures("helloo", "./assets/images/bibliophile.jpg"),
   new Pictures("helloo", "./assets/images/food.jpg"),

];
console.log(imagesArray)

// set up our elements refrences in the dom
let header = document.getElementById("header");
let section = document.getElementById("allPics");
let finalScore = document.getElementById("finalScore");
let rightImage = document.getElementById("rightImage");
let leftImage = document.getElementById("leftImage");
let centerImage = document.getElementById("middleImage");
let rightImageText = document.getElementById("rightImageParagraph");
let centerImageText = document.getElementById("middleImageParagraph");
let leftImageText = document.getElementById("leftImageParagraph");
// =================================================================
// implement a function to pic 2 random pictures
function newPick() {
  let rightIndex = Math.floor(Math.random() * imagesArray.length);

  let leftIndex = Math.floor(Math.random() * imagesArray.length);

  let middleIndex = Math.floor(Math.random() * imagesArray.length);

  //  pick randomly from the list a left img
  leftImageText = imagesArray[leftIndex].name;
  leftImage.src = imagesArray[leftIndex].imgSrc;
  pageLeft = imagesArray[leftIndex];

  //  pick randomly from the list a right img
  rightImageText = imagesArray[rightIndex].name;
  rightImage.src = imagesArray[rightIndex].imgSrc;
  pageRight = imagesArray[rightIndex];

  //  pick randomly from the list a middle img
  pageMiddle = imagesArray[middleIndex];
  centerImageText = imagesArray[middleIndex].name;
  centerImage.src = imagesArray[middleIndex].imgSrc;

//   check for duplicates 
if(pageLeft === pageMiddle && pageLeft === pageRight &&  pageMiddle === pageRight) {
    
    pageRight = mixer(imagesArray)
    pageLeft = mixer(imagesArray);
    pageMiddle = mixer(imagesArray);
    console.log('hello world')
    }

  // keep up with the two randomly pickedi objects



  // to update click and count


}  

function clickOnProduct(evt) {
  console.log(`You clicked on this target element ${evt.target.id}`);
  const thingsClicked = evt.target;
  const id = thingsClicked.id;
  // check to see which event happened
}



// poe
section.addEventListener("click", clickOnProduct);
newPick();
