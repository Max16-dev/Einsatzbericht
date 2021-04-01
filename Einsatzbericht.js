window.onload = function() {
    
}

function changeEinsatzTyp(){
    var selectElement = document.getElementById("einsatzArt").value;
    var anzeigeTypBrand = document.getElementById("anzeigeTypBrand");
    var anzeigeTypBrandmeldeanlage = document.getElementById("anzeigeTypBrandmeldeanlage");
    var anzeigeTypTechnischeHilfeleistung = document.getElementById("anzeigeTypTechnischeHilfeleistung");
    
    switch(selectElement){
        case "Brand":
            anzeigeTypBrand.removeAttribute("hidden");
            anzeigeTypTechnischeHilfeleistung.setAttribute("hidden", true);
            anzeigeTypBrandmeldeanlage.setAttribute("hidden", true);
            break;
        case "Brandmeldeanlage":
            anzeigeTypBrandmeldeanlage.removeAttribute("hidden");
            anzeigeTypTechnischeHilfeleistung.setAttribute("hidden", true);
            anzeigeTypBrand.setAttribute("hidden", true);
            break;
        case "Technische Hilfeleistung":
            anzeigeTypTechnischeHilfeleistung.removeAttribute("hidden");
            anzeigeTypBrand.setAttribute("hidden", true);
            anzeigeTypBrandmeldeanlage.setAttribute("hidden", true);
            break;
        case "Alles anzeigen":
            anzeigeTypBrand.removeAttribute("hidden");
            anzeigeTypBrandmeldeanlage.removeAttribute("hidden", true);
            anzeigeTypTechnischeHilfeleistung.removeAttribute("hidden");
            break;
        case "Auswählen":
            anzeigeTypBrand.setAttribute("hidden", true);
            anzeigeTypTechnischeHilfeleistung.setAttribute("hidden", true);
            anzeigeTypBrand.setAttribute("hidden", true);
            anzeigeTypBrandmeldeanlage.setAttribute("hidden", true);
    }
}
