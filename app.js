function reply_click(value, clicked_id) {
    let selected = clicked_id;



    document.getElementById("selectedRating").innerHTML = selected;
    toggleButton(value);
}

function toggleButton(value) {

    let element = document.getElementById(value);
    element.classList.toggle("clickedButton");


}

document.getElementById("submit-button").onclick = function () {
    document.getElementById("main-card").style.display = "none";
    document.getElementById("state-start").style.display = "unset";

}

