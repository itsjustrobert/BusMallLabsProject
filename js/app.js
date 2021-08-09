
//  here is where we will define classes/instanctiate clickable
// add an even listener

// define base set of properties for our object

class pictures {
    // properties that I want but not pass in
    click = 0;
    diplayed = 0;
    // =========================================
    construtor(name, imgSrc) {
      this.name = name;
      this.imgSrc = imgSrc;
    }
  }
  // storage
  let pageleft = null;
  let pageCenter = null;
  let pageRight = null;
  // rules
  const totalClicks = 0;
  const maxClicksAllowed = 5;
  
  // randomly pull from a list of image objects
  let imagesArray = [
    new pictures("best pic ever", "./assets/images/music.jpg"),
    new pictures("best pic ever", "./assets/images/BLAKGOLD.jpg"),
    new pictures("best pic ever", "./assets/images/basquiat.jpg"),
  ];
  
  // set up our elements refrences in the dom
  let header = document.getElementById("header");
  let section = document.getElementById("allPics");
  let finalScore = document.getElementById("finalScore");
  let rightImage = document.getElementById("rightImage");
  let leftImage = document.getElementById("leftImage");
  let middleImage = document.getElementById("middleImage");
  let rightImageText = document.getElementById("rightImageParagraph");
  let middleImageText = document.getElementById("middleImageParagraph");
  let leftImageText = document.getElementById("leftImageParagraph");
  // =================================================================
  // implement a function to pic 2 random pictures
   function newPick() {
    //  pick randomly from the list a left img
  rightIndex = Math.floor(Math.random() * imagesArray.length);
  
  leftIndex = Math.floor(Math.random() * imagesArray.length);
  
  let centerIndex = Math.floor(Math.random() * imagesArray.length);
  
    leftImageText = imagesArray[leftIndex].name;
    leftImage.src = imagesArray[leftIndex].imgSrc;
  
    //  pick randomly from the list a right img
  
    //  pick randomly from the list a middle img
  
    // check for duplicates
    // keep up with the two randomly picked objects
    // to update click and count
  };
  
  function clickOnProduct(evt){
  console.log(`You clicked on this target element ${evt.target.id}` );
  const thingsClicked = evt.target;
  const id = thingsClicked.id;
  // check to see which event happened
   
  
  
  }
  
  
  // poe
  section.addEventListener('click',clickOnProduct)
  newPick();