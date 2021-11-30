var op1 = 0;
var operator = null;
var op2 = null;
var a = document.getElementsByClassName("btn");

for( var i = 0; i < a.length; i++)
{
    a[i].addEventListener("click" , function(){
        var val = this.getAttribute("data-value");
        var typ = this.getAttribute("data-type");
        if(typ == "op")
        {
            if(val == "AC")
            {
                display.innerText = "";
                op2 =  null;
            }
            else if(val == "comp")
            {
                display.innerText = display.innerText*(-1);
            }
            else if(val == "%")
            {
                display.innerText /= 100;
            }
            else if(val == "=")
            {
                op2 = display.innerText;
                var result = eval(op1 + " " +operator+" " +op2);
                display.innerText = parseFloat(result);
            }
            else{
                operator = val;
                op1 = display.innerText;
                display.innerText = "";
            }
        }
        else
        {
            display.innerText += val;
        }
       
    });
}