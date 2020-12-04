window.addEventListener('DOMContentLoaded', () => {


  // Red Class - assigned to 'click targets class



  // Black Class - player turn




  // method placeToken()
  // event listener - which div target was clicked? create new div
  // -set class of new div to token - set token class to = player color (red/black)
  // look at lowest div, if div childElement.length !== 0, move up 1 element, else
  // placeToken - recursion? loop?
  //the event target will have an id - last # will be col
  //check in group of square div cols (i.e -0's ) -
  //squares = queryselectorall('token-square') - gives node list - of all squares
  //filter last num of square id against last num in event target id




  // checkColumn() - checking to see if col is full - if so changing click target to full
  //column is full when first num in square id (row) is occupied(true?)
  //run a function for each click




  // playerTurn()
  //When game has started - start with Red player - to div with id 'click-target'
  //place event listener on div ^^ - each time click - class will switch (playerTurn)

  function playerTurn() {
    let target = document.getElementById('click-targets');
    target.className = 'black';
    target.addEventListener('click', e => {
      if (target.className === 'black') {
        target.className = 'red';
      } else {
        target.className = 'black';
      }
    })

  }
  playerTurn();
})
