let isAnimationActive = true;
const diceValues = [1, 2, 3, 4, 5, 6];
let currentIndex = 0;
let intervalId;
function rollDice(){
    const diceContainer = document.querySelector(`.imgContainer`);
    const diceImage = document.querySelector(".mainImg");
    diceImage.classList.remove("rotate", "fadeIn");
    void diceImage.offsetWidth; 
    diceImage.classList.add("rotate");

    intervalId = setInterval(() => {
        diceImage.src = `images_dice/${diceValues[currentIndex]}.png`;
        currentIndex = (currentIndex + 1) % diceValues.length;
    }, 100);
    setTimeout(() => {
        clearInterval(intervalId);
        const value = Math.floor(Math.random() * 6) + 1; 
        diceImage.src = `images_dice/${value}.png`;   

        if (isAnimationActive) {
            diceImage.classList.add("fadeIn");
        }

        isAnimationActive = !isAnimationActive;
    }, 1000); 
 


}