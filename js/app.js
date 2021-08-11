//  here is where we will define classes/instantiate clickable
// all instances will be stored in this array

const allPictures = [];
// get a random picture
function mixer() {
  return Math.floor(Math.random() * imagesArray);
};

// define base set of properties for our object

class Pictures {
  // properties that I want but not pass in
  click = 0;
  diplayed = 0;
  // =========================================
  constructor(name, imgSrc) {
    this.name = name;
    this.imgSrc = imgSrc;
    allPictures.push(this);
 
  }
}

// storage
let pageLeft = null;
let pageMiddle = null;
let pageRight = null;
// rules
let totalClicks = 0;
const maxClicksAllowed = 5;

// randomly pull from a list of image objects
let imagesArray = [
  new Pictures("helloooo", "./assets/images/music.jpg"),
  new Pictures("hellooo", "./assets/images/BLAKGOLD.jpg"),
  new Pictures("helloo", "./assets/images/basquiat.jpg"),
  new Pictures("helloo", "./assets/images/health.jpg"),
  new Pictures(
    "helloo",
    "assets/images/blue_rhapsody_by_afremov_studio_by_leonidafremov_dej0gda-200h.jpg"
  ),
  new Pictures("helloo", "./assets/images/images.jpg"),
  new Pictures("helloo", "./assets/images/bibliophile.jpg"),
  new Pictures("helloo", "./assets/images/food.jpg"),
];
console.log(imagesArray);
console.log(allPictures);
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
let start = document.getElementById("startBtn");
let startText = document.createTextNode("Start");
start.appendChild(startText);
// =================================================================
// implement a function to pic 3 random pictures
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
  // change pictues
  const changePictues = () => {
    rightImage.addEventListener("click", newPick);
    leftImage.addEventListener("click", newPick);
    centerImage.addEventListener("click", newPick);

    if (
      imagesArray[rightIndex] === imagesArray[leftIndex] ||
      imagesArray[middleIndex] === imagesArray[rightIndex] ||
      imagesArray[middleIndex] === imagesArray[leftIndex]
    ) {
      // logic is correct  
      console.log("you have a dupe");
      // imagesArray[rightIndex] = mixer();
      // imagesArray[middleIndex] = mixer();
      // imagesArray[leftIndex] = mixer();

    }
  };
  changePictues();


  //   check for duplicates

  // if(
  //     pageLeft === pageMiddle ||
  //     pageLeft === pageRight ||
  //     pageMiddle === pageRight
  //   ) {
  //     pageRight = mixer(imagesArray);
  //     pageLeft = mixer(imagesArray);
  //     pageMiddle = mixer(imagesArray);
  //     // console.log('hello world')
  //   }

  // keep up with the two randomly picked objects

  // to update click and count
}

function clickOnProduct(evt) {
  console.log(`You clicked on this target element ${evt.target.id}`);
  const thingsClicked = evt.target;
  const id = thingsClicked.id;
  // check to see which event happened
}
function renderChart() {
  const ctx = document.getElementById("canvas").getContext("2d");

  const productVotes = [];
  const productTitles = [];
  const productViews = [];

  for (let index = 0; index < allPictures.length; index++) {
    const product = allPictures[index];
  }

  chart = new Chart(ctx, {
    type: "horizontalBar",
    data: {
      labels: productTitles,
      datasets: [
        {
          label: "# of Votes",
          data: productVotes,
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(153, 102, 255, 0.7)",
            "rgba(255, 159, 64, 0.7)",
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(153, 102, 255, 0.7)",
            "rgba(255, 159, 64, 0.7)",
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(153, 102, 255, 0.7)",
            "rgba(255, 159, 64, 0.7)",
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
          ],
          borderWidth: 1,
        },
        {
          label: "# of views",
          data: productViews,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              stepSize: 1,
            },
            gridLines: {
              display: false,
            },
          },
        ],
      },
    },
  });
}

// poe
start.addEventListener("click", newPick);
section.addEventListener("click", clickOnProduct);
newPick();
