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

function BMAFehlalarmAuswaehlen(){
    var BMAFehlalarm = document.getElementById("BMAFehlalarm");
    var BMAFehlalarmTaeuschungsalarm = document.getElementById("BMAFehlalarmTaeuschungsalarm").checked;
    var BMAFehlalarmTechnischerFehlalarm = document.getElementById("BMAFehlalarmTechnischerFehlalarm").checked;
    var BMAFehlalarmBoeswilligerAlarm = document.getElementById("BMAFehlalarmBoeswilligerAlarm").checked;

    if(BMAFehlalarmTaeuschungsalarm === true || BMAFehlalarmTechnischerFehlalarm === true
        || BMAFehlalarmBoeswilligerAlarm === true ){
            BMAFehlalarm.checked = true;
       }
    else{
        BMAFehlalarm.checked = false;
    }
}

function THMenschenrettungAuswaehlen(){
    var technischeHilfeleistungMenschenrettung = document.getElementById("technischeHilfeleistungMenschenrettung");
    var technischeHilfeleistungMenschenrettungTueroeffnung = document.getElementById("technischeHilfeleistungMenschenrettungTueroeffnung").checked;
    var technischeHilfeleistungMenschenrettungPersonInAufzug = document.getElementById("technischeHilfeleistungMenschenrettungPersonInAufzug").checked;
    var technischeHilfeleistungMenschenrettungVerkehrsunfall = document.getElementById("technischeHilfeleistungMenschenrettungVerkehrsunfall").checked;
    var technischeHilfeleistungMenschenrettungPersonInWasser = document.getElementById("technischeHilfeleistungMenschenrettungPersonInWasser").checked;
    var technischeHilfeleistungMenschenrettungBauunfall = document.getElementById("technischeHilfeleistungMenschenrettungBauunfall").checked;
    var technischeHilfeleistungMenschenrettungPersonWillSpringen = document.getElementById("technischeHilfeleistungMenschenrettungPersonWillSpringen").checked;
    var technischeHilfeleistungMenschenrettungRettungUeberDL = document.getElementById("technischeHilfeleistungMenschenrettungRettungUeberDL").checked;

    if(technischeHilfeleistungMenschenrettungTueroeffnung === true || technischeHilfeleistungMenschenrettungPersonInAufzug === true || technischeHilfeleistungMenschenrettungVerkehrsunfall === true
        || technischeHilfeleistungMenschenrettungPersonInWasser === true || technischeHilfeleistungMenschenrettungBauunfall === true || technischeHilfeleistungMenschenrettungPersonWillSpringen === true
        || technischeHilfeleistungMenschenrettungRettungUeberDL === true){
            technischeHilfeleistungMenschenrettung.checked = true;
       }
    else{
        technischeHilfeleistungMenschenrettung.checked = false;
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


function erstellenUebersichtMitValidierung(){
    document.getElementById("invalideEingabe").textContent = "";
    var ValidierungAlarmUeberStatus = ValidierungAlarmUeber();
    var ValidierungAlarmArtStatus = ValidierungAlarmArt();
    var ValidierungEinsatzTypStatus = ValidierungEinsatzTyp();
    var ValidierungArtEinsatzstelleStatus = ValidierungArtEinsatzstelle();
    var ValidierungLageEinsatzstelleStatus = ValidierungLageEinsatzstelle();
    /*ValidierungNameAnschriftVerursacher();
    ValidierungGeretteUndToteMeschenuUndTiere();*/
    var ValidierungWasHatGebranntStatus = ValidierungWasHatGebrannt();
    var ValidierungTaetigkeitFeuerwehrStatus = ValidierungTaetigkeitFeuerwehr();
    var ValidierungEntstehungsursacheStatus = ValidierungEntstehungsursache();
    var ValidierungFragenEinsatzberichtStatus = ValidierungFragenEinsatzbericht();

    if(ValidierungAlarmUeberStatus === 0 && ValidierungAlarmArtStatus === 0 && ValidierungEinsatzTypStatus === 0
        && ValidierungArtEinsatzstelleStatus === 0 && ValidierungLageEinsatzstelleStatus === 0
        && ValidierungWasHatGebranntStatus === 0 && ValidierungTaetigkeitFeuerwehrStatus === 0
        && ValidierungEntstehungsursacheStatus === 0 && ValidierungFragenEinsatzberichtStatus === 0)
        {
            UebersichtErstellen();
        }
}

function ValidierungAlarmUeber(){
    var alarmUeberLeitstelle = document.getElementById("alarmUeberLeitstelle");
    var alarmUeberTelefon = document.getElementById("alarmUeberTelefon");
    var fehlerText = document.getElementById("invalideEingabe");

    if(alarmUeberLeitstelle.checked === false && alarmUeberTelefon.checked === false){
        if(fehlerText.textContent === ""){
            fehlerText.textContent += "Keine Auswahl bei \"Alarm über\" getroffen";
        }
        else{
            fehlerText.textContent += ";" + " Keine Auswahl bei \"Alarm über\" getroffen";
        }
        return 1;
    }

    return 0;
}

function ValidierungAlarmArt(){
    var alarmArtVollalarm = document.getElementById("alarmArtVollalarm");
    var alarmArtKleinschleife = document.getElementById("alarmArtKleinschleife");
    var alarmArtSonstiges = document.getElementById("alarmArtSonstiges");
    var fehlerText = document.getElementById("invalideEingabe");

    if(alarmArtVollalarm.checked === false && alarmArtKleinschleife.checked === false && alarmArtSonstiges.value === ""){
        if(fehlerText.textContent === ""){
            fehlerText.textContent += "Keine Auswahl bei \"Alarmart\" getroffen";
        }
        else{
            fehlerText.textContent += ";" + " Keine Auswahl bei \"Alarmart\" getroffen";
        }
        return 1;
    }

    return 0;
}

function ValidierungEinsatzTyp(){
    var fehlerText = document.getElementById("invalideEingabe");
    var ValidierungEinsatzTypBrandStatus = ValidierungEinsatzTypBrand();
    var ValidierungEinsatzTypBrandmeldeanlageStatus = ValidierungEinsatzTypBrandmeldeanlage();
    var ValidierungEinsatzTypTechnischeHilfeleistungStatus = ValidierungEinsatzTypTechnischeHilfeleistung();
    var ValidierungEinsatzTypSonstigesStatus = ValidierungEinsatzTypSonstiges();

    if(ValidierungEinsatzTypBrandStatus === 1 && ValidierungEinsatzTypBrandmeldeanlageStatus === 1 && ValidierungEinsatzTypTechnischeHilfeleistungStatus === 1 &&
        ValidierungEinsatzTypSonstigesStatus === 1){
        if(fehlerText.textContent === ""){
            fehlerText.textContent += "Keine Auswahl bei \"Einsatztyp\" getroffen";
        }
        else{
            fehlerText.textContent += ";" + " Keine Auswahl bei \"Einsatztyp\" getroffen";
        }
        return 1;
    }

    return 0;
}

function ValidierungEinsatzTypBrand(){
    var brandKleinbrandA = document.getElementById("brandKleinbrandA");
    var brandKleinbrandB = document.getElementById("brandKleinbrandB");
    var brandMittelbrand = document.getElementById("brandMittelbrand");
    var brandGrossbrand = document.getElementById("brandGrossbrand");
    var brandÜberlandhilfeBrand = document.getElementById("brandÜberlandhilfeBrand");
    var brandBlinderAlarm = document.getElementById("brandBlinderAlarm");
    var brandBlinderAlarmRauchwarnmelder = document.getElementById("brandBlinderAlarmRauchwarnmelder");
    var brandBoeswilligerAlarm = document.getElementById("brandBlinderAlarmRauchwarnmelder");

    if(brandKleinbrandA.checked === false && brandKleinbrandB.checked === false && brandMittelbrand.checked === false && brandGrossbrand.checked === false && 
        brandÜberlandhilfeBrand.checked === false && brandBlinderAlarm.checked === false && brandBlinderAlarmRauchwarnmelder.checked === false && brandBoeswilligerAlarm.checked === false){
        return 1;
    }

    return 0;
}

function ValidierungEinsatzTypBrandmeldeanlage(){
    var brandKleinbrandA = document.getElementById("brandKleinbrandABMA");
    var brandKleinbrandB = document.getElementById("brandKleinbrandBBMA");
    var brandMittelbrand = document.getElementById("brandMittelbrandBMA");
    var brandGrossbrand = document.getElementById("brandGrossbrandBMA");
    var brandÜberlandhilfeBrand = document.getElementById("brandÜberlandhilfeBrandBMA");
    var brandBlinderAlarm = document.getElementById("BMAFehlalarm");

    if(brandKleinbrandA.checked === false && brandKleinbrandB.checked === false && brandMittelbrand.checked === false && brandGrossbrand.checked === false
        && brandÜberlandhilfeBrand.checked === false && brandBlinderAlarm.checked === false){
        return 1;
    }

    return 0;
}

function ValidierungEinsatzTypTechnischeHilfeleistung(){
    var technischeHilfeleistungMenschenrettung = document.getElementById("technischeHilfeleistungMenschenrettung");
    var technischeHilfeleistungMitGefahrstoffe = document.getElementById("technischeHilfeleistungMitGefahrstoffe");
    var technischeHilfeleistungOelspur = document.getElementById("technischeHilfeleistungOelspur");
    var technischeHilfeleistungTierrettung = document.getElementById("technischeHilfeleistungTierrettung");
    var technischeHilfeleistungInsekten = document.getElementById("technischeHilfeleistungInsekten");
    var technischeHilfeleistungHochwasserOderUnwetter = document.getElementById("technischeHilfeleistungHochwasserOderUnwetter");
    var technischeHilfeleistungStrum = document.getElementById("technischeHilfeleistungStrum");
    var technischeHilfeleistungSonstiges = document.getElementById("technischeHilfeleistungSonstiges");
    var technischeHilfeleistungUeberlandhilfe = document.getElementById("technischeHilfeleistungUeberlandhilfe");

    if(technischeHilfeleistungMenschenrettung.checked === false && technischeHilfeleistungMitGefahrstoffe.checked === false 
        && technischeHilfeleistungOelspur.checked === false && technischeHilfeleistungTierrettung.checked === false && 
        technischeHilfeleistungInsekten.checked === false && technischeHilfeleistungHochwasserOderUnwetter.checked === false && technischeHilfeleistungStrum.checked === false
        && technischeHilfeleistungTierrettung.checked === false && technischeHilfeleistungSonstiges.checked === false && technischeHilfeleistungUeberlandhilfe.checked === false){
        return 1;
    }

    return 0;
}

function ValidierungEinsatzTypSonstiges(){
    var text = document.getElementById("einsatzTypSonstiges");

    if(text.value === ""){
        return 1;
    }
    else{
        return 0;
    }
}

function ValidierungArtEinsatzstelle(){
    var fehlerText = document.getElementById("invalideEingabe");
    var artEinsatzstelleWohngebaeude = document.getElementById("artEinsatzstelleWohngebaeude");
    var artEinsatzstelleIndustrielleUndGewerblicheBetriebe = document.getElementById("artEinsatzstelleIndustrielleUndGewerblicheBetriebe");
    var artEinsatzstelleoeffentGebaeudeUndKulturbauten = document.getElementById("artEinsatzstelleoeffentGebaeudeUndKulturbauten");
    var artEinsatzstelleoeffentSeniorenAltenPfelgeHeim = document.getElementById("artEinsatzstelleoeffentSeniorenAltenPfelgeHeim");
    var artEinsatzstelleVerkaufsstaette = document.getElementById("artEinsatzstelleVerkaufsstaette");
    var artEinsatzstelleStrasse = document.getElementById("artEinsatzstelleStrasse");
    var artEinsatzstelleVersammlungsstaette = document.getElementById("artEinsatzstelleVersammlungsstaette");
    var artEinsatzstelleGastwirtschaftsbetrieb = document.getElementById("artEinsatzstelleGastwirtschaftsbetrieb");
    var artEinsatzstelleLandwirtschaftlicherBetrieb = document.getElementById("artEinsatzstelleLandwirtschaftlicherBetrieb");
    var artEinsatzstelleWald = document.getElementById("artEinsatzstelleWald");
    var artEinsatzstelleSonstiges = document.getElementById("artEinsatzstelleSonstiges");

    if(artEinsatzstelleWohngebaeude.checked === false && artEinsatzstelleIndustrielleUndGewerblicheBetriebe.checked === false && artEinsatzstelleoeffentGebaeudeUndKulturbauten.checked === false
        && artEinsatzstelleoeffentSeniorenAltenPfelgeHeim.checked === false && artEinsatzstelleVerkaufsstaette.checked === false 
        && artEinsatzstelleStrasse.checked === false && artEinsatzstelleVersammlungsstaette.checked === false
        && artEinsatzstelleGastwirtschaftsbetrieb.checked === false && artEinsatzstelleLandwirtschaftlicherBetrieb.checked === false
        && artEinsatzstelleWald.checked === false && artEinsatzstelleSonstiges.value === ""){
        if(fehlerText.textContent === ""){
            fehlerText.textContent += "Keine Auswahl bei \"Einsatzstelle\" getroffen";
        }
        else{
            fehlerText.textContent += ";" + " Keine Auswahl bei \"Einsatzstelle\" getroffen";
        }
        return 1;
    }

    return 0;
}

function ValidierungLageEinsatzstelle(){
    var fehlerText = document.getElementById("invalideEingabe");
    var lageEinsatzstelleStrasse = document.getElementById("lageEinsatzstelleStrasse");
    var lageEinsatzstelleGebaeudeUntergeschoss = document.getElementById("lageEinsatzstelleGebaeudeUntergeschoss");
    var lageEinsatzstelleGebaeudeErdgeschoss = document.getElementById("lageEinsatzstelleGebaeudeErdgeschoss");
    var lageEinsatzstelleGebaeudeObergeschoss = document.getElementById("lageEinsatzstelleGebaeudeObergeschoss");
    var lageEinsatzstelleGebaeudeDachgeschoss = document.getElementById("lageEinsatzstelleGebaeudeDachgeschoss");
    var lageEinsatzstelleFreigelaende = document.getElementById("lageEinsatzstelleFreigelaende");
    var lageEinsatzstelleAufDemWasser = document.getElementById("lageEinsatzstelleAufDemWasser");

    if(lageEinsatzstelleStrasse.checked === false && lageEinsatzstelleGebaeudeUntergeschoss.checked === false && lageEinsatzstelleGebaeudeErdgeschoss.checked === false
        && lageEinsatzstelleGebaeudeObergeschoss.checked === false && lageEinsatzstelleGebaeudeDachgeschoss.checked === false 
        && lageEinsatzstelleFreigelaende.checked === false && lageEinsatzstelleAufDemWasser.checked === false){
        if(fehlerText.textContent === ""){
            fehlerText.textContent += "Keine Auswahl bei \"Lage der Einsatzstelle getroffen\" getroffen";
        }
        else{
            fehlerText.textContent += ";" + " Keine Auswahl bei \"Lage der Einsatzstelle getroffen\" getroffen";
        }
        return 1;
    }

    return 0;    
}

function ValidierungWasHatGebrannt(){
    var fehlerText = document.getElementById("invalideEingabe");
    var WasHatGebranntMitObjektUndLage = document.getElementById("WasHatGebranntMitObjektUndLage");

    if(WasHatGebranntMitObjektUndLage.value === ""){
        if(fehlerText.textContent === ""){
            fehlerText.textContent += "Keine Auswahl bei \"Was hat gebrannt, mit den Angaben des betroffenen Objekts / Lage bei Eintreffen\" getroffen";
        }
        else{
            fehlerText.textContent += ";" + " Keine Auswahl bei \"Was hat gebrannt, mit den Angaben des betroffenen Objekts / Lage bei Eintreffen\" getroffen";
        }
        return 1;
    }

    return 0; 
}

function ValidierungTaetigkeitFeuerwehr(){
    var fehlerText = document.getElementById("invalideEingabe");
    var TaetigkeitDerFeuerwehrMitBehandlungVerunglueckter = document.getElementById("TaetigkeitDerFeuerwehrMitBehandlungVerunglueckter");

    if(TaetigkeitDerFeuerwehrMitBehandlungVerunglueckter.value.length == 12){
        if(fehlerText.textContent === ""){
            fehlerText.textContent += "Keine Auswahl bei \"Tätigkeit der Feuerwehr, einschließlich Behandlung Verungklückter (Anzahl)\" getroffen";
        }
        else{
            fehlerText.textContent += ";" + " Keine Auswahl bei \"Tätigkeit der Feuerwehr, einschließlich Behandlung Verungklückter (Anzahl)\" getroffen";
        }
        return 1;
    }

    return 0; 
}

function ValidierungEntstehungsursache(){
    var fehlerText = document.getElementById("invalideEingabe");
    var Entstehungsursache = document.getElementById("Entstehungsursache");

    if(Entstehungsursache.value === ""){
        if(fehlerText.textContent === ""){
            fehlerText.textContent += "Keine Auswahl bei \"Entstehungsursache\" getroffen";
        }
        else{
            fehlerText.textContent += ";" + " Keine Auswahl bei \"Entstehungsursache\" getroffen";
        }
        return 1;
    }

    return 0;
}

function ValidierungFragenEinsatzbericht(){
    var fehlerText = document.getElementById("invalideEingabe");
    var FragenZumEinsatzBericht = document.getElementById("FragenZumEinsatzBericht");

    if(FragenZumEinsatzBericht.value === ""){
        if(fehlerText.textContent === ""){
            fehlerText.textContent += "Keine Auswahl bei \"Bei Fragen zum Einsatzbericht bitte an wenden\" getroffen";
        }
        else{
            fehlerText.textContent += ";" + " Keine Auswahl bei \"Bei Fragen zum Einsatzbericht bitte an wenden\" getroffen";
        }
        return 1;
    }

    return 0;
}

function UebersichtErstellen(){
    /*SetAlarmzeit();
    SetDatum();
    SetAlarmUeber();
    SetEinsatztyp();
    SetArtEinsatzstelle();
    SetLageEinsatzstelle();
    SetNameAnschriftVerursacherGeschaedigten();
    SetGeretteteMenschen();
    SetToteMenschen();
    SetTierrettung();
    SetWasHatGebranntMitObjektUndLageBereich();
    SetTaetigkeitDerFeuerwehrMitBehandlungVerunglueckter();
    SetVorOt();
    SetVerbrauchtesMaterial();
    SetFragenZumEinsatzbreicht();*/
}







function createPDF(){
    var pdfDoc = html2pdf().from(text).save();
}