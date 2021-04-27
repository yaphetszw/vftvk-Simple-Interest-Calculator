function compute(){  
    if (document.getElementById('principal').value=="" || document.getElementById('principal').value<=0){
        alert("Enter a positive number!!!");
        document.getElementById("principal").focus();
        return 
    }
    var deposit=document.getElementById('principal').value;
    var rate= document.getElementById('rate').value;
    var year=document.getElementsByTagName('select')[0].value;
    document.getElementById('result1').innerHTML=deposit; 
    document.getElementById('result2').innerHTML=rate.toString()+"%"; 
    document.getElementById('result3').innerHTML=deposit*Number(year)*rate/100; 
    document.getElementById('result4').innerHTML=2021+Number(year);    
    document.getElementsByTagName('article')[0]. style.display="block";
}

function updateTextInput(val) {
          document.getElementById('range').innerHTML=val; 
        }
