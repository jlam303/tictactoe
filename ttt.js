let buttons = [];
let turnOrder = 1;
for(let i = 1; i <= 9; i++)
{
    buttons.push(document.getElementById(i))
}
function changeCell(button){
    if(turnOrder == 1 && buttons[button-1].innerHTML == "")
    {
        buttons[button-1].innerHTML = "X"
        turnOrder++;
    }
    else if(turnOrder ==2 && buttons[button-1].innerHTML == "")
    {
        buttons[button-1].innerHTML = "O"
        turnOrder--;
    }
    if(buttons[0].innerHTML==buttons[1].innerHTML && buttons[0].innerHTML==buttons[2].innerHTML)
    {
        
    }
    else if(buttons[3].innerHTML==buttons[4].innerHTML && buttons[3].innerHTML==buttons[5].innerHTML)
    {
        
    }
    else if(buttons[6].innerHTML==buttons[7].innerHTML && buttons[6].innerHTML==buttons[8].innerHTML)
    {
        
    }
    else if(buttons[0].innerHTML==buttons[3].innerHTML && buttons[0].innerHTML==buttons[6].innerHTML)
    {
        
    }
    else if(buttons[1].innerHTML==buttons[4].innerHTML && buttons[1].innerHTML==buttons[7].innerHTML)
    {
        
    }
    else if(buttons[2].innerHTML==buttons[5].innerHTML && buttons[2].innerHTML==buttons[8].innerHTML)
    {
        
    }
    else if(buttons[0].innerHTML==buttons[4].innerHTML && buttons[0].innerHTML==buttons[8].innerHTML)
    {
        
    }
    else if(buttons[2].innerHTML==buttons[4].innerHTML && buttons[2].innerHTML==buttons[6].innerHTML)
    {
        
    }
}

console.log(buttons)