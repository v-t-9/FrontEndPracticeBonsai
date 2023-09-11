function Toggle() {
    let price = document.getElementsByClassName("price");
    let descrip = document.getElementsByClassName("description")
    initialText = "$17"
        if (price[0].textContent.includes(initialText)) {
            
            price[0].textContent = "$24";
            price[1].textContent = "$39";
            price[2].textContent = "$79";
            descrip[0].textContent = "Ideal for freelancers and contractors just starting out."
            descrip[1].textContent = "Everything a growing independent business needs to thrive."
            descrip[2].textContent = "The perfect package for small businesses and agencies."
            document.getElementById("yearly").style.color = "var(--dark-green)";
            document.getElementById("monthly").style.color = "var(--light-grey)";
            document.documentElement.style.setProperty('--width', "100px");
            document.getElementById("professional-p").textContent = "Most popular";
            document.getElementById("professional-p").style.marginBottom = "682px"
            
        } else {

            price[0].textContent = "$17";
            price[1].textContent = "$32";
            price[2].textContent = "$52";
            descrip[0].textContent = "Ideal for freelancers and contractors just starting out. Billed annually."
            descrip[1].textContent = "Everything a growing independent business needs to thrive Billed annually."
            descrip[2].textContent = "The perfect package for small businesses and agencies. Billed annually."
            document.getElementById("monthly").style.color = "var(--dark-green)";
            document.getElementById("yearly").style.color = "var(--light-grey)";
            document.documentElement.style.setProperty('--width', "200px");
            document.getElementById("professional-p").textContent = "Best value for money";
            document.getElementById("professional-p").style.marginBottom = "700px"
        }       
}

    
    



