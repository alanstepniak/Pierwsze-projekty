function odliczanie() {
    let czas = new Date()
    let displayCzas = czas.toDateString() + '    ' + czas.toLocaleTimeString();
    document.getElementById("zegar").innerHTML = displayCzas;
    setTimeout("odliczanie()", 1000)
}