function webDevTxt () {
    var x = document.getElementByClassName("devTxt");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}