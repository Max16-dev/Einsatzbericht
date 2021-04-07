window.onload = function() {
    document.getElementById("TaetigkeitDerFeuerwehrMitBehandlungVerunglueckter").value = "\n" + "Einsatzende";
}

var ValidierungEinsatzTypBrandStatus;
var ValidierungEinsatzTypBrandmeldeanlageStatus;
var ValidierungEinsatzTypTechnischeHilfeleistungStatus;
var ValidierungEinsatzTypSonstigesStatus;

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
    ValidierungEinsatzTypBrandStatus = ValidierungEinsatzTypBrand();
    ValidierungEinsatzTypBrandmeldeanlageStatus = ValidierungEinsatzTypBrandmeldeanlage();
    ValidierungEinsatzTypTechnischeHilfeleistungStatus = ValidierungEinsatzTypTechnischeHilfeleistung();
    ValidierungEinsatzTypSonstigesStatus = ValidierungEinsatzTypSonstiges();

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

    if(brandKleinbrandA.checked === false && brandKleinbrandB.checked === false && brandMittelbrand.checked === false && brandGrossbrand.checked === false
         && brandBlinderAlarm.checked === false){
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
            fehlerText.textContent += "Keine Auswahl bei \"Art der Einsatzstelle\" getroffen";
        }
        else{
            fehlerText.textContent += ";" + " Keine Auswahl bei \"Art der Einsatzstelle\" getroffen";
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
    SetAlarmzeit();
    SetDatum();
    SetAlarmUeber();
    SetAlarmArt();
    SetEinsatztyp();
    SetArtEinsatzstelle();
    SetLageEinsatzstelle();
    SetNameAnschriftVerursacherGeschaedigten();
    SetGeretteteMenschen();
    SetToteMenschen();
    SetTierrettung();
    SetWasHatGebranntMitObjektUndLageBereich();
    SetTaetigkeitDerFeuerwehrMitBehandlungVerunglueckter();
    SetEntstehungsursache();
    SetBesondereVorkommnisseEinsatzstelle
    SetVorOt();
    SetVerbrauchtesMaterial();
    SetFragenZumEinsatzbreicht();
}

function SetAlarmzeit(){
    var alarmZeit = document.getElementById("alarmzeitStunden");
    var setAlarmzeit = document.getElementById("alarmzeitAuswertung");

    setAlarmzeit.textContent = alarmZeit.value;
}

function SetDatum(){
    var datum = document.getElementById("alarmzeitDate");
    var setDatumt = document.getElementById("alarmDatumAuswertung");

    datum = new Date(datum.value);
    datumDate = datum.getDate();
    datumMonth = datum.getMonth() + 1;
    datumYear = datum.getFullYear();
    ausgabeDatum = datumDate + "." + datumMonth + "." + datumYear;
    setDatumt.textContent = ausgabeDatum;
}

function SetAlarmUeber(){
    var alarmUeberLeitstelle = document.getElementById("alarmUeberLeitstelle").checked;
    var alarmArtUeberAuswertung = document.getElementById("alarmArtUeberAuswertung");

    if(alarmUeberLeitstelle === true){
        alarmArtUeberAuswertung.textContent = "Leistelle";
    }
    else{
        alarmArtUeberAuswertung.textContent = "Telefon";
    }
    
}

function SerAlarmUeber(){
    var alarmArtVollalarm = document.getElementById("alarmArtVollalarm").checked;
    var alarmArtKleinschleife = document.getElementById("alarmArtKleinschleife").checked;
    var alarmArtSonstiges = document.getElementById("alarmArtSonstiges");
    var text = document.getElementById("alarmArtAuswertung");

    if(alarmArtVollalarm === true){
        text.textContent = "Vollalarm";
    }
    if(alarmArtKleinschleife === true){
        text.textContent = "Kleinschleife";
    }
    if(alarmArtSonstiges.value != ""){
        text.textContent = alarmArtSonstiges.value;
    }
}

function SetEinsatztyp(){
    ValidierungEinsatzTyp();
    if(ValidierungEinsatzTypBrandStatus === 0){
        SetEinsatztypBrand();
    }
    if(ValidierungEinsatzTypBrandmeldeanlageStatus === 0){
        SetEinsatztypBrandmeldeanlage();
    }
    if(ValidierungEinsatzTypTechnischeHilfeleistungStatus === 0){
        SetEinsatztypTechnischeHilfeleistung();
    }
    if(ValidierungEinsatzTypSonstigesStatus === 0){
        SetEinsatztypSonstiges();
    }
}

function SetEinsatztypSonstiges(){
    var eingabe = document.getElementById("einsatzTypSonstiges");
    var text = document.getElementById("einsatztypAuswertung");

    text.textContent = eingabe.value;
}

function SetEinsatztypTechnischeHilfeleistung(){
    var technischeHilfeleistungMenschenrettungTueroeffnung = document.getElementById("technischeHilfeleistungMenschenrettungTueroeffnung").checked;
    var technischeHilfeleistungMenschenrettungPersonInAufzug = document.getElementById("technischeHilfeleistungMenschenrettungPersonInAufzug").checked;
    var technischeHilfeleistungMenschenrettungVerkehrsunfall = document.getElementById("technischeHilfeleistungMenschenrettungVerkehrsunfall").checked;
    var technischeHilfeleistungMenschenrettungPersonInWasser = document.getElementById("technischeHilfeleistungMenschenrettungPersonInWasser").checked;
    var technischeHilfeleistungMenschenrettungBauunfall = document.getElementById("technischeHilfeleistungMenschenrettungBauunfall").checked;
    var technischeHilfeleistungMenschenrettungPersonWillSpringen = document.getElementById("technischeHilfeleistungMenschenrettungPersonWillSpringen").checked;
    var technischeHilfeleistungMenschenrettungRettungUeberDL = document.getElementById("technischeHilfeleistungMenschenrettungRettungUeberDL").checked;
    var technischeHilfeleistungMitGefahrstoffe = document.getElementById("technischeHilfeleistungMitGefahrstoffe").checked;
    var technischeHilfeleistungOelspur = document.getElementById("technischeHilfeleistungOelspur").checked;
    var technischeHilfeleistungTierrettung = document.getElementById("technischeHilfeleistungTierrettung").checked;
    var technischeHilfeleistungInsekten = document.getElementById("technischeHilfeleistungInsekten").checked;
    var technischeHilfeleistungStrum = document.getElementById("technischeHilfeleistungStrum").checked;
    var technischeHilfeleistungSonstiges = document.getElementById("technischeHilfeleistungSonstiges").checked;
    var technischeHilfeleistungUeberlandhilfe = document.getElementById("technischeHilfeleistungUeberlandhilfe").checked;
    var text = document.getElementById("einsatztypAuswertung");


    if(technischeHilfeleistungMenschenrettungTueroeffnung === true){
        text.textContent = "Technische Hilfe mit Menschenrettung: Türöffnung";
    }
    if(technischeHilfeleistungMenschenrettungPersonInAufzug === true){
        text.textContent = "Technische Hilfe mit Menschenrettung: Person in Aufzug";
    }
    if(technischeHilfeleistungMenschenrettungVerkehrsunfall === true){
        text.textContent = "Technische Hilfe mit Menschenrettung: Verkehrunfall";
    }
    if(technischeHilfeleistungMenschenrettungPersonInWasser === true){
        text.textContent = "Technische Hilfe mit Menschenrettung: Person in Wasser";
    }
    if(technischeHilfeleistungMenschenrettungBauunfall === true){
        text.textContent = "Technische Hilfe mit Menschenrettung: Bauunfall";
    }
    if(technischeHilfeleistungMenschenrettungPersonWillSpringen === true){
        text.textContent = "Technische Hilfe mit Menschenrettung: Person will springen";
    }
    if(technischeHilfeleistungMenschenrettungRettungUeberDL === true){
        text.textContent = "Technische Hilfe mit Menschenrettung: Rettung über DL";
    }
    if(technischeHilfeleistungMitGefahrstoffe === true){
        text.textContent = "Technische Hilfe mit Gefahrstoffe";
    }
    if(technischeHilfeleistungOelspur === true){
        text.textContent = "Technische Hilfe Ölspur";
    }
    if(technischeHilfeleistungTierrettung === true){
        text.textContent = "Technische Hilfe Tierrettung";
    }
    if(technischeHilfeleistungInsekten === true){
        text.textContent = "Technische Hilfe Insekten";
    }
    if(technischeHilfeleistungStrum === true){
        text.textContent = "Technische Hilfe Hochwasser / Unwetter";
    }
    if(technischeHilfeleistungSonstiges === true){
        text.textContent = "Technische Hilfe Sonstiges";
    }
    if(technischeHilfeleistungUeberlandhilfe === true){
        text.textContent = "Technische Hilfe Überlandhilfe";
    }
}

function SetEinsatztypBrandmeldeanlage(){
    var brandKleinbrandA = document.getElementById("brandKleinbrandABMA").checked;
    var brandKleinbrandB = document.getElementById("brandKleinbrandBBMA").checked;
    var brandMittelbrand = document.getElementById("brandMittelbrandBMA").checked;
    var brandGrossbrand = document.getElementById("brandGrossbrandBMA").checked;
    var BMAFehlalarmTaeuschungsalarm = document.getElementById("BMAFehlalarmTaeuschungsalarm").checked;
    var BMAFehlalarmTechnischerFehlalarm = document.getElementById("BMAFehlalarmTechnischerFehlalarm").checked;
    var BMAFehlalarmBoeswilligerAlarm = document.getElementById("BMAFehlalarmBoeswilligerAlarm").checked;
    var text = document.getElementById("einsatztypAuswertung");

    if(brandKleinbrandA === true){
        text.textContent = "Kleinbrand A BMA";
    }
    if(brandKleinbrandB === true){
        text.textContent = "Kleinbrand B BMA";
    }
    if(brandMittelbrand === true){
        text.textContent = "Mittelbrand BMA";
    }
    if(brandGrossbrand === true){
        text.textContent = "Großbrand BMA";
    }
    if(BMAFehlalarmTaeuschungsalarm === true){
        text.textContent = "Täuschungsalarm BMA";
    }
    if(BMAFehlalarmTechnischerFehlalarm === true){
        text.textContent = "Technischer Fehlalarm BMA";
    }
    if(BMAFehlalarmBoeswilligerAlarm === true){
        text.textContent += "Böswilliger Alarm";
    }
}

function SetEinsatztypBrand(){
    var brandKleinbrandA = document.getElementById("brandKleinbrandA").checked;
    var brandKleinbrandB = document.getElementById("brandKleinbrandB").checked;
    var brandMittelbrand = document.getElementById("brandMittelbrand").checked;
    var brandGrossbrand = document.getElementById("brandGrossbrand").checked;
    var brandÜberlandhilfeBrand = document.getAnimations("brandÜberlandhilfeBrand").checked;
    var brandBlinderAlarm = document.getElementById("brandBlinderAlarm").checked;
    var brandBlinderAlarmRauchwarnmelder = document.getElementById("brandBlinderAlarmRauchwarnmelder").checked;
    var brandBoeswilligerAlarm = document.getElementById("brandBoeswilligerAlarm").checked;
    var text = document.getElementById("einsatztypAuswertung");

    if(brandKleinbrandA === true){
        text.textContent = "Kleinbrand A";
    }
    if(brandKleinbrandB === true){
        text.textContent = "Kleinbrand B";
    }
    if(brandMittelbrand === true){
        text.textContent = "Mittelbrand";
    }
    if(brandGrossbrand === true){
        text.textContent = "Großbrand";
    }
    if(brandÜberlandhilfeBrand === true){
        text.textContent = "Überlandhilfe Brand";
    }
    if(brandBlinderAlarm === true){
        text.textContent = "Blinder Alarm";
    }
    if(brandBlinderAlarmRauchwarnmelder === true){
        text.textContent += " (Rauchwarnmelder)";
    }
    if(brandBoeswilligerAlarm === true){
        text.textContent = "Böswilliger Alarm";
    }
}

function SetArtEinsatzstelle(){
    var artEinsatzstelleWohngebaeude = document.getElementById("artEinsatzstelleWohngebaeude").checked;
    var artEinsatzstelleIndustrielleUndGewerblicheBetriebe = document.getElementById("artEinsatzstelleIndustrielleUndGewerblicheBetriebe").checked;
    var artEinsatzstelleoeffentGebaeudeUndKulturbauten = document.getElementById("artEinsatzstelleoeffentGebaeudeUndKulturbauten").checked;
    var artEinsatzstelleoeffentSeniorenAltenPfelgeHeim = document.getElementById("artEinsatzstelleoeffentSeniorenAltenPfelgeHeim").checked;
    var artEinsatzstelleVerkaufsstaette = document.getElementById("artEinsatzstelleVerkaufsstaette").checked;
    var artEinsatzstelleStrasse = document.getElementById("artEinsatzstelleStrasse").checked;
    var artEinsatzstelleVersammlungsstaette = document.getElementById("artEinsatzstelleVersammlungsstaette").checked;
    var artEinsatzstelleGastwirtschaftsbetrieb = document.getElementById("artEinsatzstelleGastwirtschaftsbetrieb").checked;
    var artEinsatzstelleLandwirtschaftlicherBetrieb = document.getElementById("artEinsatzstelleLandwirtschaftlicherBetrieb").checked;
    var artEinsatzstelleWald = document.getElementById("artEinsatzstelleWald").checked;
    var artEinsatzstelleSonstiges = document.getElementById("artEinsatzstelleSonstiges");
    var text = document.getElementById("einsatztypAuswertung");

    if(artEinsatzstelleWohngebaeude === true){
        text.textContent = "Wohngebäude";
    }
    if(artEinsatzstelleIndustrielleUndGewerblicheBetriebe === true){
        text.textContent = "Industrielle und gewerbliche Betriebe";
    }
    if(artEinsatzstelleoeffentGebaeudeUndKulturbauten === true){
        text.textContent = "öffentl. Gebäude und Kulturbauten";
    }

    if(artEinsatzstelleoeffentSeniorenAltenPfelgeHeim === true){
        text.textContent = "Senioren-/ Alten-/ Pfelgeheim";
    }
    if(artEinsatzstelleVerkaufsstaette === true){
        text.textContent = "Verkaufsstätte";
    }
    if(artEinsatzstelleStrasse === true){
        text.textContent = "Straße (Verkehrsmittel - PKW, LKW, Bahn)";
    }
    if(artEinsatzstelleVersammlungsstaette === true){
        text.textContent = "Versammlungsstätte";
    }
    if(artEinsatzstelleGastwirtschaftsbetrieb === true){
        text.textContent = "Gastwirtschaftsbetrieb";
    }
    if(artEinsatzstelleLandwirtschaftlicherBetrieb === true){
        text.textContent = "Landwirtschaftlicher Betrieb";
    }
    if(artEinsatzstelleWald === true){
        text.textContent = "Wald";
    }
    if(artEinsatzstelleSonstiges.value !== ""){
        text.textContent = artEinsatzstelleSonstiges.value;
    }
}

function SetLageEinsatzstelle(){
    var lageEinsatzstelleStrasse = document.getElementById("lageEinsatzstelleStrasse");
    var lageEinsatzstelleOrt = document.getElementById("lageEinsatzstelleOrt");
    var lageEinsatzstelleOrtUeberlandhilfe = document.getElementById("lageEinsatzstelleOrtUeberlandhilfe");
    var lageEinsatzstelleGebaeudeUntergeschoss = document.getElementById("lageEinsatzstelleGebaeudeUntergeschoss").checked;
    var lageEinsatzstelleGebaeudeUntergeschossAnzahl = document.getElementById("lageEinsatzstelleGebaeudeUntergeschossAnzahl");
    var lageEinsatzstelleGebaeudeErdgeschoss = document.getElementById("lageEinsatzstelleGebaeudeErdgeschoss").checked;
    var lageEinsatzstelleGebaeudeObergeschoss = document.getElementById("lageEinsatzstelleGebaeudeObergeschoss").checked;
    var lageEinsatzstelleGebaeudeObergeschossAnzahl = document.getElementById("lageEinsatzstelleGebaeudeObergeschossAnzahl");
    var lageEinsatzstelleGebaeudeDachgeschoss = document.getElementById("lageEinsatzstelleGebaeudeDachgeschoss").checked;
    var lageEinsatzstelleFreigelaende = document.getElementById("lageEinsatzstelleFreigelaende").checked;
    var lageEinsatzstelleAufDemWasser = document.getElementById("lageEinsatzstelleAufDemWasser").checked;
    var text = document.getElementById("lageEinsatzstelleAuswertung");

    if(lageEinsatzstelleOrt.value === "Auswählen"){
        text.textContent = lageEinsatzstelleStrasse.value + " " + lageEinsatzstelleOrtUeberlandhilfe.value;
        if(lageEinsatzstelleGebaeudeUntergeschoss === true){
            text.textContent +=  " " + lageEinsatzstelleGebaeudeUntergeschossAnzahl.value + " " + "Untergeschoss";
        }
        if(lageEinsatzstelleGebaeudeErdgeschoss === true){
            text.textContent += " Erdgeschoss";
        }
        if(lageEinsatzstelleGebaeudeObergeschoss === true){
            text.textContent += " " + lageEinsatzstelleGebaeudeObergeschossAnzahl.value + " " + "Untergeschoss";
        }
        if(lageEinsatzstelleGebaeudeDachgeschoss === true){
            text.textContent += " Dachgeschoss";
        }
        if(lageEinsatzstelleFreigelaende === true){
            text.textContent += " Freigelände";
        }
        if(lageEinsatzstelleAufDemWasser === true){
            text.textContent += " auf dem Wasser";
        }
    }
    if(lageEinsatzstelleOrt.value !== "Auswählen"){
        text.textContent = lageEinsatzstelleStrasse.value + " " + lageEinsatzstelleOrt.value;
        if(lageEinsatzstelleGebaeudeUntergeschoss === true){
            text.textContent += " " + lageEinsatzstelleGebaeudeUntergeschossAnzahl.value + " " + "Untergeschoss";
        }
        if(lageEinsatzstelleGebaeudeErdgeschoss === true){
            text.textContent += " Erdgeschoss";
        }
        if(lageEinsatzstelleGebaeudeObergeschoss === true){
            text.textContent += " " + lageEinsatzstelleGebaeudeObergeschossAnzahl.value + " " + "Untergeschoss";
        }
        if(lageEinsatzstelleGebaeudeDachgeschoss === true){
            text.textContent += " Dachgeschoss";
        }
        if(lageEinsatzstelleFreigelaende === true){
            text.textContent += " Freigelände";
        }
        if(lageEinsatzstelleAufDemWasser === true){
            text.textContent += " auf dem Wasser";
        }
    }
    
}

function SetNameAnschriftVerursacherGeschaedigten(){
    var NameUndAnschriftVerursacherOderGeschaedigtenName = document.getElementById("NameUndAnschriftVerursacherOderGeschaedigtenName");
    var NameUndAnschriftVerursacherOderGeschaedigtenStrasse = document.getElementById("NameUndAnschriftVerursacherOderGeschaedigtenStrasse");
    var NameUndAnschriftVerursacherOderGeschaedigtenOrt = document.getElementById("NameUndAnschriftVerursacherOderGeschaedigtenOrt");
    var NameUndAnschriftVerursacherOderGeschaedigtenKennzeichen = document.getElementById("NameUndAnschriftVerursacherOderGeschaedigtenKennzeichen");
    var text = document.getElementById("nameAnschriftVerursacherGeschaedigtenAuswertung");

    if(NameUndAnschriftVerursacherOderGeschaedigtenKennzeichen.value === ""){
        text.textContent = NameUndAnschriftVerursacherOderGeschaedigtenName.value + " " + NameUndAnschriftVerursacherOderGeschaedigtenStrasse.value + " " + NameUndAnschriftVerursacherOderGeschaedigtenOrt.value;
    }
    else{
        text.textContent = NameUndAnschriftVerursacherOderGeschaedigtenName.value + " " + NameUndAnschriftVerursacherOderGeschaedigtenStrasse.value + " " + NameUndAnschriftVerursacherOderGeschaedigtenOrt.value + " " + NameUndAnschriftVerursacherOderGeschaedigtenKennzeichen.value;
    }
}

function SetGeretteteMenschen(){
    var GeretteteMenschenBrand = document.getElementById("GeretteteMenschenBrand").checked;
    var GeretteteMenschenBrandAnzahl = document.getElementById("GeretteteMenschenBrandAnzahl");
    var GeretteteMenschenBrandAnzahlFahrzeugbraende = document.getElementById("GeretteteMenschenBrandAnzahlFahrzeugbraende");
    var GeretteteMenschenBrandAnzahlMitRauchgasintoxikation = document.getElementById("GeretteteMenschenBrandAnzahlMitRauchgasintoxikation");
    var GeretteteMenschenTechnischeHilfe = document.getElementById("GeretteteMenschenTechnischeHilfe");
    var text = document.getElementById("geretteteMenschenAuswertung");

    if(GeretteteMenschenBrandAnzahl.value == 0 && GeretteteMenschenBrandAnzahlFahrzeugbraende.value == 0 && GeretteteMenschenBrandAnzahlMitRauchgasintoxikation.value == 0 && GeretteteMenschenTechnischeHilfe.value == 0){
        document.getElementById("geretteteMenschenAuswertung").setAttribute("hidden", true);
        document.getElementById("geretteteMenschenAuswertungHeader").setAttribute("hidden", true);
        document.getElementById("nameAnschriftVerursacherGeschaedigtenAuswertungDiv").classList.add('abstandEntferntemItem');
    }
    if(GeretteteMenschenBrand === true){
        if(GeretteteMenschenBrandAnzahlFahrzeugbraende.value != 0 && GeretteteMenschenBrandAnzahlMitRauchgasintoxikation == 0){
            text.textContent = "Bei Bränden: " + GeretteteMenschenBrandAnzahl.value + " - davon " + GeretteteMenschenBrandAnzahlFahrzeugbraende.value + " bei Fahrzeugbränden";
        }
        if(GeretteteMenschenBrandAnzahlFahrzeugbraende.value != 0 && GeretteteMenschenBrandAnzahlMitRauchgasintoxikation != 0){
            text.textContent = "Bei Bränden: " + GeretteteMenschenBrandAnzahl.value + " - davon " + GeretteteMenschenBrandAnzahlFahrzeugbraende.value + " bei Fahrzeugbränden" + " und " + GeretteteMenschenBrandAnzahlMitRauchgasintoxikation.value + " mit Rauchgasintoxikation";
        }
    }
    else{
        text.textContent = "Bei Technischer Hilfe: " + GeretteteMenschenTechnischeHilfe.value;
    }

}

function SetToteMenschen(){
    var ToteMenschenBrandCheck = document.getElementById("ToteMenschenBrandCheck").checked;
    var ToteMenschenBrand = document.getElementById("ToteMenschenBrand");
    var ToteMenschenBrandAnzahlFahrzeugbraende = document.getElementById("ToteMenschenBrandAnzahlFahrzeugbraende");
    var ToteMenschenTechnischeHilfeCheck = document.getElementById("ToteMenschenTechnischeHilfeCheck").checked;
    var ToteMenschenTechnischeHilfe = document.getElementById("ToteMenschenTechnischeHilfe");
    var ToteMenschentechnischeHilfeleistungAnzahlVerkehrsunfaelle = document.getElementById("ToteMenschentechnischeHilfeleistungAnzahlVerkehrsunfaelle");
    var text = document.getElementById("toteMenschenAuswertung");

    if(ToteMenschenBrandCheck === false && ToteMenschenTechnischeHilfeCheck === false){
        document.getElementById("toteMenschenAuswertung").setAttribute("hidden", true);
        document.getElementById("toteMenschenAuswertungHeader").setAttribute("hidden", true);
        document.getElementById("geretteteMenschenAuswertungDiv").classList.add('abstandEntferntemItem');
    }
    if(ToteMenschenBrandCheck === true){
        text.textContent = "Bei Bränden: " + ToteMenschenBrand.value + " - davon " + ToteMenschenBrandAnzahlFahrzeugbraende.value + " bei Fahrzeugbränden";
    }
    if(ToteMenschenTechnischeHilfeCheck === true){
        text.textContent = "Bei Technischer Hilfeleistung: " + ToteMenschenTechnischeHilfe.value + " - davon " + ToteMenschentechnischeHilfeleistungAnzahlVerkehrsunfaelle.value + " bei Verkehrsunfällen";
    }
    
}

function SetTierrettung(){
    var AnzahlTierRettung = document.getElementById("AnzahlTierRettung");
    var text = document.getElementById("tierrettungAuswertung");

    if(AnzahlTierRettung.value == 0){
        document.getElementById("tierrettungAuswertung").setAttribute("hidden", true);
        document.getElementById("tierrettungAuswertungHeader").setAttribute("hidden", true);
        document.getElementById("toteMenschenAuswertungDiv").classList.add('abstandEntferntemItem');
    }
    else{
        text.textContent = "Anzahl Tiere: " + AnzahlTierRettung.value;
    }
}

function SetWasHatGebranntMitObjektUndLageBereich(){
    var WasHatGebranntMitObjektUndLage = document.getElementById("WasHatGebranntMitObjektUndLage");
    var text = document.getElementById("WasHatGebranntMitObjektUndLageBereichAuswertung");

    text.textContent = WasHatGebranntMitObjektUndLage.value;
}

function SetTaetigkeitDerFeuerwehrMitBehandlungVerunglueckter(){
    var TaetigkeitDerFeuerwehrMitBehandlungVerunglueckter = document.getElementById("TaetigkeitDerFeuerwehrMitBehandlungVerunglueckter");
    var text = document.getElementById("TaetigkeitDerFeuerwehrMitBehandlungVerunglueckterAuswertung");

    text.textContent = TaetigkeitDerFeuerwehrMitBehandlungVerunglueckter.value;
}

function SetEntstehungsursache(){
    var Entstehungsursache = document.getElementById("Entstehungsursache");
    var text = document.getElementById("entstehungsursacheAuswertung");

    text.textContent = Entstehungsursache.value;
}

function SetBesondereVorkommnisseEinsatzstelle(){
    var BesondereVorkommnisseAnDerEinsatzstelle = document.getElementById("BesondereVorkommnisseAnDerEinsatzstelle");
    var text = document.getElementById("besondereVorkommnisseEinsatzstelleAuswertung");

    text.textContent = BesondereVorkommnisseAnDerEinsatzstelle.value;

}

function SetVorOrt(){
    var VorOrtKommandant = document.getElementById("VorOrtKommandant").checked;
    var VorOrtStellvKommandant = document.getElementById("VorOrtStellvKommandant").checked;
    var VorOrtOberbuegermeister = document.getElementById("VorOrtOberbuegermeister").checked;
    var VorOrtOrtsvorsteher = document.getElementById("VorOrtOrtsvorsteher").checked;    
    var VorOrtKBM = document.getElementById("VorOrtKBM").checked;
    var VorOrtNotarzt = document.getElementById("VorOrtNotarzt").checked;
    var VorOrtRettungsdienst = document.getElementById("VorOrtRettungsdienst").checked;
    var VorOrtSanitaetsdienst = document.getElementById("VorOrtSanitaetsdienst").checked;
    var VorOrtPolizei = document.getElementById("VorOrtPolizei").checked;    
    var VorOrtTHW = document.getElementById("VorOrtTHW").checked;
    var VorOrtSonstiges = document.getElementById("VorOrtSonstiges");
    var text = document.getElementById("vorOrtAuswertung");
    var textAusgabe = [];
    var textAusgabeSplit = [];
    var textAusgabeString;
    
        if(VorOrtKommandant === true){
            textAusgabe.push("Kommandant");
        }
        if(VorOrtStellvKommandant === true){
            textAusgabe.push("Stellv. Kommandant")
        }
        if(VorOrtOberbuegermeister === true){
            textAusgabe.push("Oberbürgermeister");
        }
        if(VorOrtOrtsvorsteher === true){
            textAusgabe.push("Ortvorsteher");
        }
        if(VorOrtKBM === true){
            textAusgabe.push("KBM");
        }
        if(VorOrtNotarzt === true){
            textAusgabe.push("Notarzt");
        }
        if(VorOrtRettungsdienst === true){
            textAusgabe.push("Rettungsdienst");
        }
        if(VorOrtSanitaetsdienst === true){
            textAusgabe.push("Sanitätsdienst");
        }
        if(VorOrtPolizei === true){
            textAusgabe.push("Polizei");
        }
        if(VorOrtTHW === true){
            textAusgabe.push("THW");
        }
        if(VorOrtSonstiges.value !== ""){
            textAusgabe.push(VorOrtSonstiges.value);
        }

    if(textAusgabe.length <= 1){
        text.textContent = textAusgabe[0];
    }
    else{
        textAusgabe.forEach(element => {
            textAusgabeString += " + " + element;
        });
        textAusgabeSplit = textAusgabeString.split(" + ");
        textAusgabeSplit.shift();
        textAusgabeSplit.forEach(element => {
            text.textContent += " + " + element;
            console.log(element);
        });
    }
}

function SetVerbrauchtesMaterial(){
    var VerbrauchtesMaterial = document.getElementById("VerbrauchtesMaterial");
    var text = document.getElementById("verbrauchtesMaterialAuswertung");

    text.textContent = VerbrauchtesMaterial;
}

function SetFragenZumEinsatzbreicht(){
    var FragenZumEinsatzBericht = document.getElementById("FragenZumEinsatzBericht");
    var text = document.getElementById("FragenZumEinsatzBerichtAuswertung");

    text.textContent = FragenZumEinsatzBericht;
}

function createPDF(){
    var pdfDoc = html2pdf().from(text).save();
}