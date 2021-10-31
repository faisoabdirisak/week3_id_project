function total(){
    var shed1 = parseInt(document.getElementById("shedA").value);
    var shed2 = parseInt(document.getElementById("shedB").value);
    var shed3 = parseInt(document.getElementById("shedC").value);
    var shed4 = parseInt(document.getElementById("shedD").value);
    if(shed1<1 || shed2<1 || shed3<1 || shed4<1){
        alert("please enter the correct production")
    }
    else{
        var totol=shed1+shed2+shed3+shed4;
        document.getElementById("totol").innerHTML="Your production in shed A :" +shed1+" Litters of Milk"+
        "<br> Your production in shed B :" +shed2+" Litters of Milk"+ "<br> Your production in shed C :" +shed3 +" Litters of Milk"+
        "<br> Your production in shed D :" +shed4 +" Litters of Milk"+ "<br>--------------------------------<br> Your Total Product is :"
        +totol+" Litters of Milk";
    }
}
function weekly(){
    var shed1 = parseInt(document.getElementById("shedA").value);
    var shed2 = parseInt(document.getElementById("shedB").value);
    var shed3 = parseInt(document.getElementById("shedC").value);
    var shed4 = parseInt(document.getElementById("shedD").value);
    if(shed1<1 || shed2<1 || shed3<1 || shed4<1){
        alert("please enter the correct production")
    }
    else{
        var totol=shed1+shed2+shed3+shed4;
        const rate=45;
        const days = 7;
        var week=totol*rate*days;
        document.getElementById("week").innerHTML = "Your Weekly Income :"+week+" Ksh.";
    }
}
function yearly(){
    var shed1 = parseInt(document.getElementById("shedA").value);
    var shed2 = parseInt(document.getElementById("shedB").value);
    var shed3 = parseInt(document.getElementById("shedC").value);
    var shed4 = parseInt(document.getElementById("shedD").value);
    if(shed1<1 || shed2<1 || shed3<1 || shed4<1){
        alert("please enter the correct production")
    }
    else{
        var totol=shed1+shed2+shed3+shed4;
        const rate=45;
        const days = 7;
        var week=totol*rate*days;
        var jan=31;
        var january=week*jan;
        document.getElementById("january").innerHTML="Your income for january is : "+january+" Ksh.";
        //var februar=29;
        var feb=week*29;
        document.getElementById("feb").innerHTML="Your income for february is : "+feb;
        var mar=31;
        var march=week*mar;
        document.getElementById("march").innerHTML="Your income for march is : "+march;
        var apr=30;
        var april=week*apr;
        document.getElementById("april").innerHTML="Your income for April is : "+april;
        var ma=31;
        var may=week*ma;
        document.getElementById("may").innerHTML="Your income for may is : "+may;
        var jun=30;
        var june=week*jun;
        document.getElementById("june").innerHTML="Your income for june is : "+june;
        var jul=31;
        var july=week*jul;
        document.getElementById("july").innerHTML="Your income for july is : "+july;
        var aug=31;
        var august=week*aug;
        document.getElementById("august").innerHTML="Your income for august is : "+august;
        var sep=30;
        var september=week*sep;
        document.getElementById("september").innerHTML="Your income for september is : "+september;
        var oct=31;
        var october=week*oct;
        document.getElementById("october").innerHTML="Your income for october is : "+october;
        var nov=30;
        var november=week*nov;
        document.getElementById("november").innerHTML="Your income for november is : "+november;
        var dec=31;
        var december=week*dec;
        document.getElementById("december").innerHTML="Your income for december is : "+december;
        var year=january+feb+march+april+may+june+july+august+september+october+november+december;
        document.getElementById("year-income").innerHTML="You Yearly Income is : "+year;

    }
}