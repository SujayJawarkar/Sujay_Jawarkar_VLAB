function sumAP() {
    var firstTerm = document.getElementById("firstTerm").valueAsNumber;
    var commonDifference = document.getElementById("commonDiff").valueAsNumber;
    var numberOfTerms = document.getElementById("noTerms").valueAsNumber;
    var resSum = (numberOfTerms / 2) * (2 * firstTerm + (numberOfTerms - 1) * commonDifference)
    document.getElementById("sumResult").innerHTML = "The Sum of an AP is: " + resSum;
}
