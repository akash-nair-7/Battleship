const board = document.querySelector('.board');
const cells = [];
const mapPiecePositions = [];

let chances = 8;
for (let i = 0; i < 16; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cells.push(cell);
      board.appendChild(cell);
}
mapPiecePositions.length=0;
for (var i = 0; i < 5; i++) {
  var randomNumber = Math.floor(Math.random() * 16) + 1;
  if (!mapPiecePositions.includes(randomNumber)) {
     
     mapPiecePositions.push(randomNumber);
    }
  else
    i--;
}
let remainingMapPiecePositions = mapPiecePositions.length;

 cells.forEach((cell, index) => {
      cell.addEventListener('click', () => {
         if (mapPiecePositions.includes(index)) 
         {
            cell.classList.add('hit');
            remainingMapPiecePositions--;
            if (remainingMapPiecePositions === 2) 
            {
                alert('Congratulations! You found all the map pieces!');
                cells.forEach((cell) => {
                    cell.classList.remove('hit', 'miss');
                    cell.style.pointerEvents = 'auto';
                });
              mapPiecePositions.length=0;
                for (var i = 0; i < 5; i++) {
                    var randomNumber = Math.floor(Math.random() * 16) + 1;
                     if (!mapPiecePositions.includes(randomNumber)) {
                        mapPiecePositions.push(randomNumber);
                      }
                      else
                        i--;
                }
             
              remainingMapPiecePositions = mapPiecePositions.length;
              chances = 8;
            }
          } 
          else 
          {
              cell.classList.add('miss');
          }
          cell.style.pointerEvents = 'none';
          chances--;
          if (chances === 0) 
          {
              alert('Game Over! You could not find all the map pieces.');
              cells.forEach((cell) => {
                  cell.classList.remove('hit', 'miss');
                  cell.style.pointerEvents = 'auto';
              });
               mapPiecePositions.length=0;
                for (var i = 0; i < 5; i++) {
                    var randomNumber = Math.floor(Math.random() * 16) + 1;
                     if (!mapPiecePositions.includes(randomNumber)) {
                        mapPiecePositions.push(randomNumber);
                      }
                      else
                        i--;
                }
               
              remainingMapPiecePositions = mapPiecePositions.length;
              chances = 8;
          }
      });
    });


    const resetButton = document.getElementById('bt');
    resetButton.addEventListener('click', () => {
      
      cells.forEach((cell) => {
        cell.classList.remove('hit', 'miss');
        cell.style.pointerEvents = 'auto';
      });

      remainingMapPiecePositions = mapPiecePositions.length;
      chances = 8;
    });
