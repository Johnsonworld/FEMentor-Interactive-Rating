function reply_click(value, clicked_id) {
    let selected = clicked_id;


    // alert(selected);
    // document.getElementsById(`button-${selected}`).style.backgroundColor = "red";

    document.getElementById("selectedRating").innerHTML = selected;
    // let btn = document.getElementById(value);
    // btn.style.backgroundColor = "hsl(217, 12%, 63%)";
    // btn.style.borderColor = "hsl(217, 12%, 63%)";
    // btn.style.color = "hsl(0, 0%, 100%)";
    toggleButton(value);
}

function toggleButton(value) {
    let element = document.getElementById(value);
    element.classList.toggle("clickedButton");
}