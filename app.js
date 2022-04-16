function reply_click(btnId, clicked_id) {
    const btns = document.querySelectorAll('.select-stars');
    btns.forEach((btn) => {
        if (btn == btnId) { btn.classList.add("active"); }
        else { btn.classList.remove("active"); }
    });
    let selected = clicked_id;
    document.getElementById("selectedRating").innerHTML = selected;
    toggleButton(btnId);
}

function toggleButton(value) {

    let element = document.getElementById(value);
    element.classList.toggle("active");
}

document.getElementById("submit-button").onclick = function () {
    document.getElementById("main-card").style.display = "none";
    document.getElementById("state-start").style.display = "unset";

}


document.getElementById("close_thank_you").onclick = function () {
    
    document.getElementById("state-start").style.display = "none";
    document.getElementById("main-card").style.display = "unset";
    const btns = document.querySelectorAll('.select-stars');
    btns.forEach((btn) => {
        btn.classList.remove("active"); 
    });
    
    
    // alert("I hear you");
}


