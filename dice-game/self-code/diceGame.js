let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", `./imgs/images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src", `./imgs/images/dice${randomNumber2}.png`);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "😜 Player 1 WON THE GAME!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "😎👌 Player 2 has BEATEN YOU!"
} else {
    document.querySelector("h1").innerHTML = "It ended in a tie! 😢"
}