/*var count=1;
function fill(control)
{
    if(count<=9)
    {
            if(count%2==0)
            {
                putData(control.id,"1");
            }
            else
            {
                putData(control.id,"0");
            }
            count++;
           if(checkWin())
            {
                alert("winner");
                reset();
            }
            
    }
    else
    {
        alert("Match draw");
        reset();
    }
    
   
}

function putData(div,data)
{
    document.getElementById(div).innerHTML=data;
}

function reset()
{
    for(var i=1;i<=9;i++)
    {
        putData("cell"+i,"");
    }
    count=1;
}
function checkWin()
{
    if(checkCondition('cell3','cell6','cell9')|| checkCondition('cell2','cell5','cell8') || checkCondition('cell3','cell5','cell7') 
|| checkCondition('cell1','cell4','cell7') || checkCondition('cell1','cell5','cell9') || checkCondition('cell1','cell2','div3') 
|| checkCondition('cell4','cell5','cell6') || checkCondition('cell7','cell8','cell9'))
    {
        return true;
    }
}
function checkCondition(div1,div2,div3)
{
    if(getData(div1)!="" && getData(div2)!="" && getData(div3)!="" && getData(div1)==getData(div2) && getData(div2)==getData(div3))
    {
        return true;
    }
}
function getData(div)
{
    return document.getElementById(div).innerHTML;
}
*/




var currentColor="green";
var currentState=[];
var draw=1;
const matrix=document.querySelectorAll(".cell");
//console.log(matrix);

for(var i=0;i<9;i++)
{   
     currentState[i]=-1;
}
matrix.forEach(function(data,index)
{
    data.style.backgroundColor="yellow";
    data.addEventListener("click",function()
    {
        if(currentColor=="green")
        {
            currentState[index]=1;
        }
        else
        {
            currentState[index]=0;
        }
        data.style.backgroundColor=currentColor;
        currentColor=currentColor=="green"?"red":"green";
        if(checkWin())
        alert("winner");
        console.log(currentState);
        draw++;
        if(draw===9)
        reload();
    });
});
function reload()
{
    matrix.forEach(function(data,index)
    { 
    data.style.backgroundColor="yellow";
    });
}
function checkWin()
{
    if(currentState[0]!==-1 && currentState[0]===currentState[1] && currentState[1]===currentState[2] ||
        currentState[3]!==-1 && currentState[3]===currentState[4] && currentState[4]===currentState[5] ||
        currentState[6]!==-1 && currentState[6]===currentState[7] && currentState[7]===currentState[8] ||
        currentState[0]!==-1 && currentState[0]===currentState[3] && currentState[3]===currentState[6] ||
        currentState[1]!==-1 && currentState[1]===currentState[4] && currentState[4]===currentState[7] ||
        currentState[2]!==-1 && currentState[2]===currentState[5] && currentState[5]===currentState[8] ||
        currentState[0]!==-1 && currentState[0]===currentState[4] && currentState[4]===currentState[8] ||
        currentState[2]!==-1 && currentState[2]===currentState[4] && currentState[4]===currentState[6]) 
        return true;
        
        return false;
}
