function dropdownFuncTemp() {
        document.getElementById("my-dropdown-temp").classList.toggle("show");

}
function dropdownFuncProp() {
    document.getElementById("my-dropdown-prop").classList.toggle("show");

}
function dropdownFuncInv() {
    document.getElementById("my-dropdown-inv").classList.toggle("show");
}
function dropdownFuncForms() {
    document.getElementById("my-dropdown-forms").classList.toggle("show");
}
function dropdownFuncQuotes() {
    document.getElementById("my-dropdown-quotes").classList.toggle("show");
}
function dropdownFuncScope() {
    document.getElementById("my-dropdown-scope").classList.toggle("show");
}
function dropdownFuncAg() {
    document.getElementById("my-dropdown-ag").classList.toggle("show");
}
function dropdownFuncBriefs() {
    document.getElementById("my-dropdown-briefs").classList.toggle("show");
}

//Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-options");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}