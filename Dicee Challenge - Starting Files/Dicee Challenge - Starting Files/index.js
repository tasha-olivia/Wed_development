// function randomNumber(selector) {

//     var num1 = Math.random() ;
//     // random number to be in range 1 to 6
//     realnum = Math.floor(num1 * 6) + 1;
//     if (realnum === 1) 
//         selector.setAttribute('src', './images/dice1.png');
//     else if (realnum === 2) 
//         selector.setAttribute('src', './images/dice2.png');
//     else if (realnum === 3) 
//         selector.setAttribute('src', './images/dice3.png');
//     else if (realnum === 4) 
//         selector.setAttribute('src', './images/dice4.png');
//     else if (realnum === 5) 
//         selector.setAttribute('src', './images/dice5.png');
//     else if (realnum === 6)
//         selector.setAttribute('src', './images/dice6.png')
    
//     return realnum;
// }

// const selector1 = document.querySelector('.img1');
// const selector2 = document.querySelector('.img2');

// num1 = randomNumber(selector1);
// num2 = randomNumber(selector2);


//Changing the image for the first player
// random number to be in range 1 to 6
var num1 = Math.floor(Math.random() * 6) + 1;
//creates a variable 
var image1 = './images/dice' + num1 + '.png';
// alert(image1);

document.querySelectorAll('img')[0].setAttribute('src', image1);

//Changing the image for the second player
var num2 = Math.floor(Math.random() * 6) + 1;
var image2 = './images/dice'+num2+'.png';
document.querySelectorAll('img')[1].setAttribute('src', image2);

if (num1 > num2) 
    document.querySelector('h1').textContent = "🚩 Player 1 wins!";
else if (num1 < num2 )
    document.querySelector('h1').textContent = "Player 2 wins! 🚩";
else 
    document.querySelector('h1').textContent = 'Draw!';

// alert('Player1 has '+num1+ ' and player2 has '+num2);





