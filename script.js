function PasswordGenerating(length)
{
    var text="";
    var Symbols = "!@#$%&";
    var Numbers = "1234567890";
    var Lowercase = "abcdefghijklmnopqrstuvwxyz";
    var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var mozliwe = "";

    var CheckSymbol = document.getElementById("Symbols")
    if(CheckSymbol.checked==true)
        mozliwe+=Symbols;

    var CheckNumber = document.getElementById("Numbers")
    if(CheckNumber.checked==true)
        mozliwe+=Numbers;    

    var CheckLower = document.getElementById("Lower")
    if(CheckLower.checked==true)
        mozliwe+=Lowercase;  

    var CheckUpper = document.getElementById("Upper")
    if(CheckUpper.checked==true)
        mozliwe+=Uppercase;  



    for(var i=0; i<length; i++)
        text+=mozliwe.charAt(Math.floor(Math.random() * mozliwe.length));

    return text;
}


function ChangingText()
{
    var leng = document.getElementById("length").value;
    if(leng < 8){
        leng = 8;
        document.getElementById("length").value=8;
        document.getElementById("Symbols").checked=true;
        document.getElementById("Numbers").checked=true;
        document.getElementById("Lower").checked=true;
        document.getElementById("Upper").checked=true;
        alert("Password length must be higher than 7!!");
    }
    var password = PasswordGenerating( leng );

    document.getElementById("box1").innerHTML = password;
    document.getElementById("box1").style.fontFamily = "Arial, Helvetica, sans-serif"
    document.getElementById("box1").style.fontStyle = "normal"
}
