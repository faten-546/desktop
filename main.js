//letters
const letters ="abcdefghijklmnopqrstuvwxyz";
//get array from letters
let  lettersArray = Array.from(letters);
console.log(lettersArray);
//select  letters container
let lettersContainer =document.querySelector(".letters");
//generate letters
lettersArray.forEach(letter =>{
    //create span 
    let span =document.createElement("span");
    //create letter  text node
    let theLetter = document.createTextNode(letter);
    //Append the letter to span
    span.appendChild(theLetter);
     //add class on span 
     span.className ='letter-box';
     //append span  to the letter container
     lettersContainer.appendChild(span);
});
//object of words + categories
const  word ={
    programming :["php","javascript","go","scala","fortran","r","mysql","python"],
    movies:["prestige","inception","paradise","intersteller","whiplash","memento"],
    people:["Albert  Einstein"," Hitchock","Alexander","Cleopatre","Ghandi"],
    countries:["Syria","Palestine","Yemen","Egypt","Bahrain","Qatar"]
}
//get random property
let allKeys = Object.keys(word);
//random number depend on keys length
let randomPropertyNumber = Math.floor(Math.random() * allKeys.length);
//category
let randompropName= allKeys[randomPropertyNumber];
//category words
let randomPopValue= word[randompropName];
//random number depend on words
let randomValueNumber =Math.floor(Math.random() *randomPopValue.length);
//the choosen words
let randomValueValue = randomPopValue[randomValueNumber];
//set gategory  info
document.querySelector(".game-info .category span").innerHTML =randompropName;
//select letter guess container element
let letterGuessContainer = document.querySelector(".letters-guess");
//convert chossssen word to array
let letterAndSpace = Array.from(randomValueValue);
console.log(letterAndSpace);
//create spans depend on word
letterAndSpace.forEach(letters=> {
    //craete empty span 
    let emptySpan = document.createElement("span");
    //if lettert is space
    if(letters === ' '){
        //add class to the span
        emptySpan.className ='with-space';
    }
    //append span to the letter-guess container
    letterGuessContainer.appendChild(emptySpan);
});
//select guess span 
let guessSpans =document.querySelector(".letters-guess span")
//handle clicking on letters
document.addEventListener("click", (e) => {
  if(e.target.className ==='letter-box'){
    e.target.classList.add("clicked");
    //get clicked letter
    let  theclickedLetter= e.target.innerHTML.toLowerCase();
    //the chosen word
    let theChosenWord = Array.from(randomValueValue.toLowerCase());
       //console.log(letterAndSpace);

    theChosenWord.forEach((wordLetter, WordIndex) =>{
     //if the clicked letter equal to one of the chosen word letter
     if (theclickedLetter == wordLetter ){
       //lop on all guess span
    guessSpans.forEach((span ,spanIndex) =>{
           if (WordIndex === spanIndex){
                span.innerHTML = theclickedLetter;
           }
       });

   
    }
    });
  
}
});