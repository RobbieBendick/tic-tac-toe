let main = () => {
 
    // set DOM to all boxes or input field
    let b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    let player_won = player => {
        document.getElementById('print').innerHTML = `Player ${player} won`;
        for (let i = 1; i < 10; i++) document.getElementById(`b${i}`).disabled = true;
        window.alert(`Player ${player} won`);
    }

    let checkWin = (a1, a2, a3, marker) => (a1 == marker.toLowerCase() || a1 == marker) && (a2 == marker.toLowerCase() || a2 == marker) && (a3 == marker.toLowerCase() || a3 == marker);

    // check if player X wins
    if (checkWin(b1, b2, b3, 'X')) player_won("X");
    else if (checkWin(b1, b4, b7, 'X')) player_won("X");
    else if (checkWin(b7, b8, b9, 'X')) player_won("X");
    else if (checkWin(b3, b6, b9, 'X')) player_won("X");
    else if (checkWin(b1, b5, b9, 'X')) player_won("X");
    else if (checkWin(b3, b5, b7, 'X')) player_won("X");
    else if (checkWin(b2, b5, b8, 'X')) player_won("X");
    else if (checkWin(b4, b5, b6, 'X')) player_won("X");
   
    // check if player 0 wins
    if (checkWin(b1,b2,b3, '0')) player_won("0");
    else if (checkWin(b1, b4, b7, '0')) player_won("0");
    else if (checkWin(b7, b8, b9, '0')) player_won("0");
    else if (checkWin(b3, b6, b9, '0')) player_won("0");
    else if (checkWin(b1, b5, b9, '0')) player_won("0");
    else if (checkWin(b3, b5, b7, '0')) player_won("0");
    else if (checkWin(b2, b5, b8, '0')) player_won("0");
    else if (checkWin(b4, b5, b6, '0')) player_won("0");
 
    // check tie
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') &&
        (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
        b5 == '0') && (b6 == 'X' || b6 == '0') &&
        (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
        b8 == '0') && (b9 == 'X' || b9 == '0')) {
        document.getElementById('print').innerHTML = "Match Tie";
        window.alert('Match Tie');
    }
    else {
        // display result to user
        if (turn == 1) document.getElementById('print').innerHTML = "Player X Turn";
        else document.getElementById('print').innerHTML = "Player 0 Turn";
    }
}

// check turns
turn = 1;
let place_mark = id => {
    if (turn == 1) {
        document.getElementById(id).value = "X";
        document.getElementById(id).disabled = true;
        turn = 0;
    }
    else {
        document.getElementById(id).value = "0";
        document.getElementById(id).disabled = true;
        turn = 1;
    }
}

// reset game
let reset = () => {
    location.reload();
    for (let i = 1; i < 10; i++) document.getElementById(`b${i}`).value = '';
}
 