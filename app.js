const $gameContainer = $('#gameContainer')

const classes = ['x','o'];

let checkForTie = [];

let thatsAWin = [];

let tieCheck = 'move';

let classPos = 0;

$(()=>  {

const checkForWin = () => {
    // console.log('win check');

  // ========================
  // VERTICLE WIN CONDITIONS
  // ========================

    if ($('#0').attr('class') === 'x' && $('#3').attr('class') === 'x' && $('#6').attr('class') === 'x')  {
      thatsAWin.push(1)
      alert('X\'s win!!!')
      console.log(thatsAWin);
    }
    if ($('#0').attr('class') === 'o' && $('#3').attr('class') === 'o' && $('#6').attr('class') === 'o')  {
      thatsAWin.push(1)
      alert('O\'s win!!!')
      console.log(thatsAWin);
    }
    if ($('#1').attr('class') === 'x' && $('#4').attr('class') === 'x' && $('#7').attr('class') === 'x')  {
      thatsAWin.push(1)
      alert('X\'s win!!!')
      console.log(thatsAWin);

    }
    if ($('#1').attr('class') === 'o' && $('#4').attr('class') === 'o' && $('#7').attr('class') === 'o')  {
      thatsAWin.push(1)
      alert('O\'s win!!!')
      console.log(thatsAWin);
    }
    if ($('#2').attr('class') === 'x' && $('#5').attr('class') === 'x' && $('#8').attr('class') === 'x')  {
      thatsAWin.push(1)
      alert('X\'s win!!!')
      console.log(thatsAWin);
    }
    if ($('#2').attr('class') === 'o' && $('#5').attr('class') === 'o' && $('#8').attr('class') === 'o')  {
      thatsAWin.push(1)
      alert('O\'s win!!!')
      console.log(thatsAWin);
    }

  // ==========================
  // HORIZONTIAL WIN CONDITIONS
  // ==========================

  if ($('#0').attr('class') === 'x' && $('#1').attr('class') === 'x' && $('#2').attr('class') === 'x')  {
    thatsAWin.push(1)
    alert('X\'s win!!!')
    console.log(thatsAWin);
  }
  if ($('#0').attr('class') === 'o' && $('#1').attr('class') === 'o' && $('#2').attr('class') === 'o')  {
    thatsAWin.push(1)
    alert('O\'s win!!!')
    console.log(thatsAWin);
  }
  if ($('#3').attr('class') === 'x' && $('#4').attr('class') === 'x' && $('#5').attr('class') === 'x')  {
    thatsAWin.push(1)
    alert('X\'s win!!!')
    console.log(thatsAWin);
  }
  if ($('#3').attr('class') === 'o' && $('#4').attr('class') === 'o' && $('#5').attr('class') === 'o')  {
    thatsAWin.push(1)
    alert('O\'s win!!!')
    console.log(thatsAWin);
  }
  if ($('#6').attr('class') === 'x' && $('#7').attr('class') === 'x' && $('#8').attr('class') === 'x')  {
    thatsAWin.push(1)
    alert('X\'s win!!!')
    console.log(thatsAWin);
  }
  if ($('#6').attr('class') === 'o' && $('#7').attr('class') === 'o' && $('#8').attr('class') === 'o')  {
    thatsAWin.push(1)
    alert('O\'s win!!!')
    console.log(thatsAWin);
  }

  // ========================
  // DIAGONAL WIN CONDITIONS
  // ========================

  if ($('#0').attr('class') === 'x' && $('#4').attr('class') === 'x' && $('#8').attr('class') === 'x')  {
    thatsAWin.push(1)
    alert('X\'s win!!!')
    console.log(thatsAWin);
  }
  if ($('#0').attr('class') === 'o' && $('#4').attr('class') === 'o' && $('#8').attr('class') === 'o')  {
    thatsAWin.push(1)
    alert('O\'s win!!!')
    console.log(thatsAWin);
  }
  if ($('#2').attr('class') === 'x' && $('#4').attr('class') === 'x' && $('#6').attr('class') === 'x')  {
    thatsAWin.push(1)
    alert('X\'s win!!!')
    console.log(thatsAWin);
  }
  if ($('#2').attr('class') === 'o' && $('#4').attr('class') === 'o' && $('#6').attr('class') === 'o')  {
    thatsAWin.push(1)
    alert('O\'s win!!!')
    console.log(thatsAWin);
  }

  // ==========================
  // DRAW GAME CONDITION
  // ==========================

   if (checkForTie.length === 9 && thatsAWin.length === 0) {
    alert('The game is a draw!');
    console.log(checkForTie);
    console.log(checkForWin);
  }

}

const changeType = () => {
  if ($(event.target).attr('class') !== 'square') {
    return false
  }

  checkForTie.push(tieCheck)
  // console.log(thatsAWin);

  if (classPos > 1) {
    classPos = 0;
  }
  $(event.target).removeClass().addClass(classes[classPos])
  classPos++
  // console.log(classPos);
  checkForWin();
  // console.log(checkForTie);
}

const reset = () => {
  // $('newSquare').attr('class', 'square');
  classPos = 0;
  checkForTie = [];
  thatsAWin = [];
  location.reload(true);
}


const gameStart = () => {
  for (let i = 0; i < 9; i++)  {
    let $newSquare = $('<div>').addClass('square').attr('id', i).on('click', changeType)
    console.log($newSquare);
    $('#gameContainer').append($newSquare)
  }
}

$('#reset').on('click', reset)

gameStart();

})
