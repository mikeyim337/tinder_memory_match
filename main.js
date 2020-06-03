//cards
var firstCardClicked = null;
var secondCardClicked = null;
var totalPossibleMatches = 2;
var matchCounter = 0;
var triesCounter = 0;
var sortingArray = [];

//card objects are created
var bellaObject = { 
  images: ["bitmojis/bellaBat.JPG", "bitmojis/bellaCoffeeDrink.JPG", "bitmojis/bellaCoffeeTub.JPG", "bitmojis/bellaVampire.JPG" ],
  couple: "jakeAndBella" 
} 
var blairObject =  {
  images: ["bitmojis/blairLimo.JPG", "bitmojis/blairPose.JPG", "bitmojis/blairSunglasses.JPG", "bitmojis/blairWalk.JPG"],
  couple: "nateAndBlair"
}
var brettObject = {
  images: ["bitmojis/brettDj.JPG", "bitmojis/brettFunny.JPG", "bitmojis/brettGuitar.JPG", "bitmojis/brettMicDrop.JPG"],
  couple: "brettAndJenna"
}
var codyObject = {
  images: ["bitmojis/codyPlane.JPG", "bitmojis/codyTravel.JPG", "bitmojis/codyMap.JPG", "bitmojis/codyBird.JPG"],
  couple: "codyAndSabrina"
}
var dougObject = {
  images: ["bitmojis/dougBrushing.JPG", "bitmojis/dougCuddles.JPG", "bitmojis/dougSexy.JPG", "bitmojis/dougWhatUp.JPG"],
  couple: "dougAndKat"
}
var erinObject = {
  images: ["bitmojis/erinAcoustic.JPG", "bitmojis/erinViolin.JPG", "bitmojis/erinGuitar.JPG", "bitmojis/erinACoustic.JPG"],
  couple: "nekoAndErin"
}
var frankObject = {
  images: ["bitmojis/frankAlien.JPG", "bitmojis/frankDream.JPG", "bitmojis/frankEvilPlan.JPG", "bitmojis/frankPlanet.JPG"],
  couple: "frankAndNicki"
}
var jakeObject = {
  images: ["bitmojis/jakeCoffee1.JPG", "bitmojis/jakeCoffeeTub.JPG", "bitmojis/jakeNoSleep.JPG", "bitmojis/jakeBat.JPG"],
  couple: "jakeAndBella"
}
var jennaObject = {
  images: ["bitmojis/jennaBeach.JPG", "bitmojis/jennaFunny.JPG", "bitmojis/jennaGuitar.JPG", "bitmojis/jennaRapper.JPG"],
  couple: "brettAndJenna"
}
var katObject = {
  images: ["bitmojis/katCoffee.JPG", "bitmojis/katLoveYou.JPG", "bitmojis/katReading.JPG", "bitmojis/katSexy.JPG"],
  couple: "dougAndKat"
}
var kevinObject = {
  images: ["bitmojis/kevinGym.JPG", "bitmojis/kevinKbbq.JPG", "bitmojis/kevinLegDay.JPG", "bitmojis/kevinSoccer.JPG"],
  couple: "kevinAndPaulina"
}
var nateObject = {
  images: ["bitmojis/nateCelebrity.JPG", "bitmojis/nateFashionPolice.JPG", "bitmojis/nateLife.JPG", "bitmojis/nateMagazine.JPG"],
  couple: "nateAndBlair"
}

var nekoObject = {
  images: ["bitmojis/nekoAcoustic.JPG", "bitmojis/nekoDrums.JPG", "bitmojis/nekoPiano.JPG", "bitmojis/nekoSings.JPG"],
  couple: "nekoAndErin"
}
var nickiObject = {
  images: ["bitmojis/nickiDream.JPG", "bitmojis/nickiEvilPlan.JPG", "bitmojis/nickiHomeSick.JPG", "bitmojis/nickiMoon.JPG"],
  couple: "frankAndNicki"
}
var paulinaObject = {
  images: ["bitmojis/paulinaGoodNight.JPG", "bitmojis/paulinaGym.JPG", "bitmojis/paulinaKbbq.JPG", "bitmojis/paulinaSoccer.JPG"],
  couple: "kevinAndPaulina"
}
var sabrinaObject = {
  images: ["bitmojis/sabrinaLanded.JPG", "bitmojis/sabrinaSax.JPG", "bitmojis/sabrinaTravel.JPG", "bitmojis/sabrinaTreasureMap.JPG"],
  couple: "codyAndSabrina"
}
var sarahObject = {
  images: ["bitmojis/sarahJedi.JPG", "bitmojis/sarahFullHealth.JPG", "bitmojis/sarahMarioKart.JPG", "bitmojis/sarahSlain.JPG"],
  couple: "sudipAndSarah"
}
var sudipObject = {
  images: ["bitmojis/sudipJedi.JPG", "bitmojis/sudipLowHealth.JPG", "bitmojis/sudipMarioKart.JPG", "bitmojis/sudipSlayer.JPG"],
  couple: "sudipAndSarah"
}
var peopleArray = [bellaObject, blairObject, brettObject, codyObject, dougObject, erinObject, frankObject, jakeObject, jennaObject, katObject, kevinObject, nateObject, nekoObject, nickiObject, paulinaObject, sabrinaObject, sarahObject, sudipObject ]

$(document).ready(initializeApp);

//Description: shuffleArray function sorts the array elements in random order
//Input: array
//output: array
function shuffleArray(peopleArray){
  var index, elementHold, newIndex
  for (index = peopleArray.length -1; index > 0; index--) {
    newIndex = Math.floor(Math.random() * (index + 1));
    elementHold = peopleArray[index];
    peopleArray[index] = peopleArray[newIndex];
    peopleArray[newIndex] = elementHold ;
  }
  return peopleArray;
}

//Description: appendCards function adds the card images to the DOM using the peopleArray
//Input: array
function appendCards(peopleArray) {
    shuffleArray(peopleArray);
    for(var peopleIndex = 0; peopleIndex < peopleArray.length; peopleIndex++) {
      var cardImageDiv = $("<div>").addClass("cardImage");
      var personObject = peopleArray[peopleIndex];
      console.log(personObject);
      for (var imageIndex = 0; imageIndex < personObject.images.length; imageIndex++) {
        var classArray = ["lastImage", "image3", "image2", "image1"]
        var imageDiv=$("<div>").addClass(classArray[imageIndex]);
        var image = $("<img>", {
          src: personObject.images[imageIndex],
          alt: personObject.couple
        })
        $(imageDiv).append(image);
        $(cardImageDiv).append(imageDiv);
        var tinderCardDiv = $("<div>").addClass("back")
        var tinderCard = $("<img>", {
          src: "tinderCardBack.jpg"
        })
        $(tinderCardDiv).append(tinderCard);
        $(cardImageDiv).append(tinderCardDiv);
        $(".gameContainer").append(cardImageDiv);
      }


    }
}




//Description: initializeApp function adds click handlers to the DOM. Responsible for card-cycling feature. And calls matchCoupleUponLastImage function when the last image is clicked.
function initializeApp() {


  appendCards(peopleArray);
  $(".back").click(function() {
  });

  $(".image1").click(function() {
    if (secondCardClicked !== null){
      $(firstCardClicked).find('.image1').hide();
      $(secondCardClicked).find('.image1').hide();
    }
  });

  $(".image2").click(function() {
    $(firstCardClicked).find('.image2').hide();
    $(secondCardClicked).find('.image2').hide();
  });

  $(".image3").click(function() {
    $(firstCardClicked).find('.image3').hide();
    $(secondCardClicked).find('.image3').hide();
  });

  //Stay on the last image
  $(".cardImage").on("click", ".lastImage", matchCoupleUponLastImage);
  $(".cardImage").click(checkCard);


  //STATS
  $(".matchesLog").text(matchCounter);
  $(".triesLog").text(triesCounter);

  //Reset
  debugger;
  $("button").on("click", reset);
  
}

//Description: checkCard function selects two card stacks being compared and updates the tries counter
function checkCard() {
  if (firstCardClicked !== null && secondCardClicked !== null) {
      return;
  }

  if (!$(this).hasClass('revealed')) {
    $(this).find('.back').hide();
    $(this).addClass('revealed');

    if(firstCardClicked === null) {
      firstCardClicked = this;
      triesCounter++;
      $(".triesLog").text(triesCounter);
      return firstCardClicked;
    } else {
      secondCardClicked = this;
      firstCardClicked === secondCardClicked;
      if(firstCardClicked === this && secondCardClicked === this) {
        $(firstCardClicked).addClass("selected");
        $(secondCardClicked).addClass("selected");
        !$(this).off("click");
      }
    }
  }

}

//Description: matchCoupleUponLastImage is responsible for  
function matchCoupleUponLastImage() {
  $(this).show();
//  cycle  and maybe check for match
  if ($(firstCardClicked).find("img").attr("alt") === $(secondCardClicked).find("img").attr("alt")) {
    console.log("matched!")
    $("<img>").attr("src", "itsamatch.jpg").addClass("matchedImg").appendTo(firstCardClicked);
    $("<img>").attr("src", "itsamatch.jpg").addClass("matchedImg").appendTo(secondCardClicked);
    $(firstCardClicked).removeClass("cardImage").addClass("matchedCards");
    $(secondCardClicked).removeClass("cardImage").addClass("matchedCards");

    matchCounter++;
    $(".matchesLog").text(matchCounter);
    firstCardClicked = null;
    secondCardClicked = null;
  } else {
    setTimeout(function() {
      console.log($(firstCardClicked).parent());
      $(".cardImage > * ").show();
      $(firstCardClicked).removeClass("revealed");
      $(secondCardClicked).removeClass("revealed");
      firstCardClicked = null;
      secondCardClicked = null;
    }, 200)
  }
}


//Reset Button
$(".reset").click(reset);

function reset() {
  matchCounter = 0;
  triesCounter = 0;
  console.log("hello");
  $(".matchesLog").text(matchCounter);
  $(".triesLog").text(triesCounter);
  $(".matchedCards").addClass("cardImage").removeClass("matchedCards").removeClass("revealed");
  $(".cardImage > *").show();
  $(".matchedImg").remove();

}


