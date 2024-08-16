function slice() {
    var s1 = document.getElementById("str1").value;
    var s2 = document.getElementById("str2").value;
    var snum = document.getElementById("strslice").valueAsNumber;
    let res1 = s1.slice(snum);
    let res2 = s2.slice(snum);
    document.getElementById("sliceres1").innerHTML = "String 1 sliced at index " + snum +  " is: " + res1;
    document.getElementById("sliceres2").innerHTML = "String 2 sliced at index " + snum +  " is: " + res2;
}

function upper() {
    var s1 = document.getElementById("str1").value;
    var s2 = document.getElementById("str2").value;
    let res1 = s1.toUpperCase();
    let res2 = s2.toUpperCase();
    document.getElementById("upperres1").innerHTML = "String 1 uppercase is: " + res1;
    document.getElementById("upperres2").innerHTML = "String 2 uppercase is: " + res2;
}

function lower() {
    var s1 = document.getElementById("str1").value;
    var s2 = document.getElementById("str2").value;
    let res1 = s1.toLowerCase();
    let res2 = s2.toLowerCase();
    document.getElementById("lowerres1").innerHTML = "String 1 lowercase is: " + res1;
    document.getElementById("lowerres2").innerHTML = "String 2 lowercase is: " + res2;
}

function length() {
    var s1 = document.getElementById("str1").value;
    var s2 = document.getElementById("str2").value;
    let res1 = s1.length;
    let res2 = s2.length;
    document.getElementById("lengthres1").innerHTML = "String 1 length is: " + res1;
    document.getElementById("lengthres2").innerHTML = "String 2 length is: " + res2;   
}
function charat() {
    var s1 = document.getElementById("str1").value;
    var s2 = document.getElementById("str2").value;
    var snum = document.getElementById("strchar").valueAsNumber;
    let res1 = s1.charAt(snum);
    let res2 = s2.charAt(snum);
    document.getElementById("charatres1").innerHTML = "CharAt at " + snum +  " in String 1 is: " + res1;
    document.getElementById("charatres2").innerHTML = "CharAt at " + snum +  " in String 2 is: " + res2;
}

function concat() {
    var s1 = document.getElementById("str1").value;
    var s2 = document.getElementById("str2").value;
    let res = s1.concat(" ",s2);
    document.getElementById("concatres").innerHTML = "String 1 Concatenated with String 2: " + res;
}