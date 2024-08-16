function triangle() {
    var a = document.getElementById("side_A").valueAsNumber;
    var b = document.getElementById("side_B").valueAsNumber;
    var c = document.getElementById("side_C").valueAsNumber;
    var s = (a + b + c)/2
    var area = s*(s-a)*(s-b)*(s-c)
    document.getElementById("resT").innerHTML ="Area of Triangle is: " + Math.sqrt(area);
}

function circle() {
    var r = document.getElementById("radi_C").valueAsNumber;
    area = Math.PI *r*r
    document.getElementById("resC").innerHTML = "Area of Circle is : " + area;
}


function getCount() {
    var str = document.getElementById("strV").value;    
    var vowelsCount = 0
    const vowels = ['a','e','i','o','u','A','E','I','O','U']
    for(let char of str){
        if(vowels.includes(char)){
            vowelsCount+=1
        }
    }
    document.getElementById("resV").innerHTML = "No of Vowels in String are: " + vowelsCount;
}

function sical() {
    var p = document.getElementById("prin_C").valueAsNumber;
    var r = document.getElementById("rate_C").valueAsNumber;
    var t = document.getElementById("time_C").valueAsNumber;
    var si = (p * r * t)/100
    document.getElementById("resSI").innerHTML = "Simple Interest is: " + si;
}

function prim(){
    var n = document.getElementById("prnum").valueAsNumber;
    var i, flag=true;
    for(i = 2; i<=(n-1); i++)
    if(n%i==0){
        flag = false;
        break;
    }
    if(flag == true)
    document.getElementById("respr").innerHTML = n + " is Prime";
    else
    document.getElementById("respr").innerHTML = n + " is Not Prime";
}

function fact(){  
    var i, num, f;  
    f = 1;  
    num = document.getElementById("facnum").value;  
    for(i = 1; i <= num; i++)    
    {  
    f = f * i;  
    }  
    i = i - 1;    
    document.getElementById("resft").innerHTML = "The factorial of the number " + i + " is: " + f ;  
    }  