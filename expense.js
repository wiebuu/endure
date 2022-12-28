function addExpense()
{
    var tr = document.createElement("tr"); 
    tr.className="row";
    var td1 = document.createElement("td"); 
    td1.className="column";
    var td2 = document.createElement("td"); 
    td2.className="column";
    var td3 = document.createElement("td"); 
    td3.className="column";

    var name= document.getElementById("name").value;
    var date= document.getElementById("date").value;
    var amount= document.getElementById("amount").value;
    var n= document.createTextNode(name);
    var d=document.createTextNode(date);
    var a= document.createTextNode(amount);

    if(name&&date&&amount!="")
    {
    td1.appendChild(n);
    td2.appendChild(d);
    td3.appendChild(a);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    document.getElementById("table").appendChild(tr);
    }
    document.getElementById("name").value="";
    document.getElementById("date").value="";
    document.getElementById("amount").value="";

    var delet = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    delet.className = "close";
    delet.appendChild(txt);
    tr.appendChild(delet);

    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
}
function clearele()
{
    document.getElementById("table").innerHTML ="";
}