let player1 = ("X", true)
let player2 = ("O", false)
let p1Color = document.getElementById('p1').style
let p2Color = document.getElementById('p2').style

//put all divs(boxes) into 1 object
let boxes = {
box1: document.getElementById('b1'),
box2: document.getElementById('b2'),
box3: document.getElementById('b3'),
box4: document.getElementById('b4'),
box5: document.getElementById('b5'),
box6: document.getElementById('b6'),
box7: document.getElementById('b7'),
box8: document.getElementById('b8'),
box9: document.getElementById('b9')
}

p1Color.backgroundColor = 'rgb(167, 237, 138)'
p2Color.backgroundColor = 'transparent'

//loop through the object, adding an event listener to each item
for(prop in boxes)
boxes[prop].addEventListener('click', addText)


//use evt.target to target the div clicked and trigger the event
function addText(evt){
  if(document.querySelector('h3').innerText) {
    alert("Refresh the Page to Start Again!")
  
  }else if(player1 && evt.target.innerText === "") {
    evt.target.innerText = "X"
    player1 = false
    player2 = true
    p1Color.backgroundColor = 'transparent'
    p2Color.backgroundColor = 'rgb(167, 237, 138)'

  }else if(player2 && evt.target.innerText === "") {
    evt.target.innerText = "O"
    player1 = true
    player2 = false
    p1Color.backgroundColor = 'rgb(167, 237, 138)'
    p2Color.backgroundColor = 'transparent'

  }else if(evt.target.innerText) {
  alert("This space has already been used")
  }


  let matchingLines = 
  [[boxes.box1, boxes.box2, boxes.box3], [boxes.box4, boxes.box5, boxes.box6], [boxes.box7, boxes.box8, boxes.box9], [boxes.box1, boxes.box4, boxes.box7], [boxes.box2, boxes.box5, boxes.box8], [boxes.box3, boxes.box6, boxes.box9], [boxes.box1, boxes.box5, boxes.box9], [boxes.box3, boxes.box5, boxes.box7]]
  let complete = Object.values(boxes).every(item => item.innerText);

  for(let i = 0; i < matchingLines.length; i++) {
    let winX = matchingLines[i].every(item => item.innerText === "X");
    let winO = matchingLines[i].every(item => item.innerText === "O");

    if (winX) {
        document.querySelector('h3').innerText = "***Player 1 won!***";
        break;
    } else if (winO) {
        document.querySelector('h3').innerText = "***Player 2 won!***";
        break;
    } else if (complete && i == matchingLines.length -1) {
        document.querySelector('h3').innerText = "***Draw!***"
    } else {
      continue;
    }
  }
}

// Old Check Wins
  // if(
  //   //Check if three X's have been made
  //   (boxes.box1.innerText === "X" && boxes.box2.innerText === "X" && boxes.box3.innerText === "X") ||
  //   (boxes.box4.innerText === "X" && boxes.box5.innerText === "X" && boxes.box6.innerText === "X") ||
  //   (boxes.box7.innerText === "X" && boxes.box8.innerText === "X" && boxes.box9.innerText === "X") ||
  //   (boxes.box1.innerText === "X" && boxes.box4.innerText === "X" && boxes.box7.innerText === "X") ||
  //   (boxes.box2.innerText === "X" && boxes.box5.innerText === "X" && boxes.box8.innerText === "X") ||
  //   (boxes.box3.innerText === "X" && boxes.box6.innerText === "X" && boxes.box9.innerText === "X") ||
  //   (boxes.box1.innerText === "X" && boxes.box5.innerText === "X" && boxes.box9.innerText === "X") ||
  //   (boxes.box3.innerText === "X" && boxes.box5.innerText === "X" && boxes.box7.innerText === "X")) {
  //       document.querySelector('h3').innerText = "Player 1 won!";
  //   //Check if three O's have been made
  // } else if(
  //   (boxes.box1.innerText === "O" && boxes.box2.innerText === "O" && boxes.box3.innerText === "O") ||
  //   (boxes.box4.innerText === "O" && boxes.box5.innerText === "O" && boxes.box6.innerText === "O")  ||
  //   (boxes.box7.innerText === "O" && boxes.box8.innerText === "O" && boxes.box9.innerText === "O") ||
  //   (boxes.box1.innerText === "O" && boxes.box4.innerText === "O" && boxes.box7.innerText === "O")  ||
  //   (boxes.box2.innerText === "O" && boxes.box5.innerText === "O" && boxes.box8.innerText === "O")  ||
  //   (boxes.box3.innerText === "O" && boxes.box6.innerText === "O" && boxes.box9.innerText === "O") ||
  //   (boxes.box1.innerText === "O" && boxes.box5.innerText === "O" && boxes.box9.innerText === "O")  ||
  //   (boxes.box3.innerText === "O" && boxes.box5.innerText === "O" && boxes.box7.innerText === "O")) {
  //     document.querySelector('h3').innerText = "Player 2 won!"
  //   //Check for tie
  //   } else if
  //   (boxes.box1.innerHTML && boxes.box2.innerHTML && boxes.box3.innerHTML && boxes.box4.innerHTML && boxes.box5.innerHTML && boxes.box6.innerHTML && boxes.box7.innerHTML && boxes.box8.innerHTML && boxes.box9.innerHTML) {
  //     document.querySelector('h3').innerText = "Draw!"
  //   }
  