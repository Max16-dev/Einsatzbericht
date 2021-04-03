window.onload = function() {
    document.getElementById("TaetigkeitDerFeuerwehrMitBehandlungVerunglueckter").value = "\n" + "Einsatzende";
}

function changeEinsatzTyp(){
    var selectElement = document.getElementById("einsatzArt").value;
    var anzeigeTypBrand = document.getElementById("anzeigeTypBrand");
    var anzeigeTypBrandmeldeanlage = document.getElementById("anzeigeTypBrandmeldeanlage");
    var anzeigeTypTechnischeHilfeleistung = document.getElementById("anzeigeTypTechnischeHilfeleistung");
    var anzeigeTypSonstiges = document.getElementById("anzeigeTypSonstiges");

    switch(selectElement){
        case "Brand":
            anzeigeTypBrand.removeAttribute("hidden");
            anzeigeTypTechnischeHilfeleistung.setAttribute("hidden", true);
            anzeigeTypBrandmeldeanlage.setAttribute("hidden", true);
            anzeigeTypSonstiges.setAttribute("hidden", true);
            break;
        case "Brandmeldeanlage":
            anzeigeTypBrandmeldeanlage.removeAttribute("hidden");
            anzeigeTypTechnischeHilfeleistung.setAttribute("hidden", true);
            anzeigeTypBrand.setAttribute("hidden", true);
            anzeigeTypSonstiges.setAttribute("hidden", true);
            break;
        case "Technische Hilfeleistung":
            anzeigeTypTechnischeHilfeleistung.removeAttribute("hidden");
            anzeigeTypBrand.setAttribute("hidden", true);
            anzeigeTypBrandmeldeanlage.setAttribute("hidden", true);
            anzeigeTypSonstiges.setAttribute("hidden", true);
            break;
        case "Alles anzeigen":
            anzeigeTypBrand.removeAttribute("hidden");
            anzeigeTypBrandmeldeanlage.removeAttribute("hidden", true);
            anzeigeTypTechnischeHilfeleistung.removeAttribute("hidden");
            anzeigeTypSonstiges.removeAttribute("hidden", true);
            break;
        case "Sonstige Einsätze":
            anzeigeTypTechnischeHilfeleistung.setAttribute("hidden", true);
            anzeigeTypBrand.setAttribute("hidden", true);
            anzeigeTypBrandmeldeanlage.setAttribute("hidden", true);
            anzeigeTypSonstiges.removeAttribute("hidden");
            break;
        case "Auswählen":
            anzeigeTypBrand.setAttribute("hidden", true);
            anzeigeTypTechnischeHilfeleistung.setAttribute("hidden", true);
            anzeigeTypBrand.setAttribute("hidden", true);
            anzeigeTypBrandmeldeanlage.setAttribute("hidden", true);
            anzeigeTypSonstiges.setAttribute("hidden", true);
    }
}

function TextBetreffenenObjekt(){
    var text = document.getElementById("WasHatGebranntMitObjektUndLage");
    var addTextBMAMelder = document.getElementById("addTextBMAMelder").checked;
    if(addTextBMAMelder == true && (!text.value.includes("Ausgelöst"))){
        text.value += "Ausgelöst hat die Meldergruppe x Melder x im x Geschoss / Gebäude x ";
    }
}

function TaetigkeitDerFeuerwehrMitBehandlungVerunglueckter(){
    var text = document.getElementById("TaetigkeitDerFeuerwehrMitBehandlungVerunglueckter");
    var addTextBMAErkundung = document.getElementById("addTextBMAErkundung").checked;
    var addTextBMAAusloesungBauarbeiten = document.getElementById("addTextBMAAusloesungBauarbeiten").checked;
    var addTextBMAAusloesungNichtErsichtlich = document.getElementById("addTextBMAAusloesungNichtErsichtlich").checked;
    var addTextBMABetreiberAusserBetrieb = document.getElementById("addTextBMABetreiberAusserBetrieb").checked;
    var addTextBMAFeuerwehrZurueckgestellt = document.getElementById("addTextBMAFeuerwehrZurueckgestellt").checked;
    var einsatzEnde = "\n" + "Einsatzende";

    if(addTextBMAErkundung == true && (!text.value.includes("Erkundung"))){
        text.value = text.value.replace(einsatzEnde, "");
        text.value += "Nach der Erkundung wurde festgestellt, dass es sich um ein Fehlalarm handelte. " + "\n" + "Einsatzende";
    }
    if(addTextBMAAusloesungBauarbeiten == true && (!text.value.includes("Bauarbeiten"))){
        text.value = text.value.replace(einsatzEnde, "");
        text.value += "Der Auslösegrund waren Bauarbeiten. " + "\n" + "Einsatzende";
    }
    if(addTextBMAAusloesungNichtErsichtlich == true && (!text.value.includes("nicht ersichtlich"))){
        text.value = text.value.replace(einsatzEnde, "");
        text.value += "Der Auslösegrund war nicht ersichtlich. " + "\n" + "Einsatzende";
    }
    if(addTextBMABetreiberAusserBetrieb == true && (!text.value.includes("Betreiber"))){
        text.value = text.value.replace(einsatzEnde, "");
        text.value += "Der defekte Melder wurde vom Betreiber außer Betrieb genommen. " + "\n" + "Einsatzende";
    }
    if(addTextBMAFeuerwehrZurueckgestellt == true && (!text.value.includes("zurückgestellt"))){
        text.value = text.value.replace(einsatzEnde, "");
        text.value += "Die BMA wurde von der Feuerwehr mehr stummgestellt. " + "\n" + "Einsatzende";
    }
}

function TestPDF(){
    const text = document.getElementById("GeretteteMenschen");
    html2pdf().from(text).save();
}