let res=document.getElementById('display');
function display(input)
{
    res.value+=input;
}
function calculate()
{
    try{
        res.value=eval(res.value);
    }catch(error){
        res.value="Error";
    }
}
function clear1()
{
    res.value="";
}
function withenter(event)
{
    if(event.key==='Enter')
    {
        calculate();
    }
    else if(event.key==='Escape')
    {
        clear1();
    }
}
function backspace()
{
    res.value=res.value.slice(0,-1);
}
function percentage()
{
    res.value=res.value*0.01;
}