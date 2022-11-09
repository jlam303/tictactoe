let buttons = [];
let turnOrder = 1;
let tie = 0;
let xWins = 0;
let oWins = 0;
for(let i = 1; i <= 9; i++)
{
    buttons.push(document.getElementById(i))
}
function win(){
    for(let i = 0; i < buttons.length; i++)
    {
        buttons[i].disabled = "";
    }
    if(turnOrder == 2)
    {
        alert("P1 wins")
        xWins++;
        document.getElementById("text").innerHTML = "P1 Wins: " + xWins + " P2 Wins: " + oWins
    }
    else if(turnOrder == 1)
    {
        alert("P2 wins")
        oWins++;
        document.getElementById("text").innerHTML = "P1 Wins: " + xWins + " P2 Wins: " + oWins
    }
    for(let i = 0;i<buttons.length;i++)
    {
        buttons[i].style.backgroundColor = "white"
        buttons[i].innerHTML = ""
    }
    turnOrder = 1;
    tie=0;
}
function disableButtons(){
    for(let i = 0; i < buttons.length; i++)
    {
        buttons[i].disabled = "true";
    }
}
function changeCell(button){
    if(turnOrder == 1 && buttons[button-1].innerHTML == "" )
    {
        buttons[button-1].innerHTML = "X"
        turnOrder++;
        tie++;
    }
    else if(turnOrder ==2 && buttons[button-1].innerHTML == "")
    {
        buttons[button-1].innerHTML = "O"
        turnOrder--;
        tie++;
    }

    if(buttons[0].innerHTML==buttons[1].innerHTML && buttons[0].innerHTML==buttons[2].innerHTML && buttons[0].innerHTML!="")
    {
        buttons[0].style.backgroundColor = "yellow"
        buttons[1].style.backgroundColor = "yellow"
        buttons[2].style.backgroundColor = "yellow"
        disableButtons()
        setTimeout(win, 1500)
    }
    else if(buttons[3].innerHTML==buttons[4].innerHTML && buttons[3].innerHTML==buttons[5].innerHTML && buttons[3].innerHTML!="")
    {
        buttons[3].style.backgroundColor = "yellow"
        buttons[4].style.backgroundColor = "yellow"
        buttons[5].style.backgroundColor = "yellow"
        disableButtons()
        setTimeout(win, 1500)
    }
    else if(buttons[6].innerHTML==buttons[7].innerHTML && buttons[6].innerHTML==buttons[8].innerHTML && buttons[6].innerHTML!="")
    {
        buttons[6].style.backgroundColor = "yellow"
        buttons[7].style.backgroundColor = "yellow"
        buttons[8].style.backgroundColor = "yellow"
        disableButtons()
        setTimeout(win, 1500)
    }
    else if(buttons[0].innerHTML==buttons[3].innerHTML && buttons[0].innerHTML==buttons[6].innerHTML && buttons[0].innerHTML!="")
    {
        buttons[0].style.backgroundColor = "yellow"
        buttons[3].style.backgroundColor = "yellow"
        buttons[6].style.backgroundColor = "yellow"
        disableButtons()
        setTimeout(win, 1500)
    }
    else if(buttons[1].innerHTML==buttons[4].innerHTML && buttons[1].innerHTML==buttons[7].innerHTML && buttons[1].innerHTML!="")
    {
        buttons[1].style.backgroundColor = "yellow"
        buttons[4].style.backgroundColor = "yellow"
        buttons[7].style.backgroundColor = "yellow"
        disableButtons()
        setTimeout(win, 1500)
    }
    else if(buttons[2].innerHTML==buttons[5].innerHTML && buttons[2].innerHTML==buttons[8].innerHTML && buttons[2].innerHTML!="")
    {
        buttons[2].style.backgroundColor = "yellow"
        buttons[5].style.backgroundColor = "yellow"
        buttons[8].style.backgroundColor = "yellow"
        disableButtons()
        setTimeout(win, 1500)
    }
    else if(buttons[0].innerHTML==buttons[4].innerHTML && buttons[0].innerHTML==buttons[8].innerHTML && buttons[0].innerHTML!="")
    {
        buttons[0].style.backgroundColor = "yellow"
        buttons[4].style.backgroundColor = "yellow"
        buttons[8].style.backgroundColor = "yellow"
        disableButtons()
        setTimeout(win, 1500)
    }
    else if(buttons[2].innerHTML==buttons[4].innerHTML && buttons[2].innerHTML==buttons[6].innerHTML && buttons[2].innerHTML!="")
    {
        buttons[2].style.backgroundColor = "yellow"
        buttons[4].style.backgroundColor = "yellow"
        buttons[6].style.backgroundColor = "yellow"
        disableButtons()
        setTimeout(win, 1500)
    }
    else if(tie == 9)
    {
        alert("Tie")
        for(let i = 0;i<buttons.length;i++)
        {
            buttons[i].style.backgroundColor = "white"
            buttons[i].innerHTML = ""
        }
        turnOrder = 1;
        tie=0;
    }
}
function reset()
{
    for(let i = 0;i<buttons.length;i++)
        {
            buttons[i].style.backgroundColor = "white"
            buttons[i].innerHTML = ""
        }
    turnOrder = 1;
    tie=0;
}