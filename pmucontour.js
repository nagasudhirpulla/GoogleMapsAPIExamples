/**
 * Created by Nagasudhir on 4/26/2016.
 */
"use strict";
//TODO APPEND BEFORE FOR CONSOLE OUTPUT - DONE
//TODO TIMER FOR MAP REFRESH - DONE BY USING idle listener event of maps API
//TODO DISPLAY SOURCES LATITUDES, LONGITUDES SERVICE NAMES POINT IDS VALUES IN A TABLE - DONE
//TODO CREATE AN EVAL BOX FOR DEBUGGING
//TODO add delete voltage point button - DONE
//TODO perform validations on voltage point like check if lat long already exists
<!--Map Setting Script-->
var isBusy = false;
var mConsole;
var mSourceTable;
var pmuVisualizer;
//http://gomakethings.com/a-native-javascript-equivalent-of-jquerys-ready-method/
//https://developer.mozilla.org/en/docs/web/api/document/readystate
// alternative to DOMContentLoaded event
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        pmuVisualizer = new AwesomePMUCanvasController(
            {
                'consoleWriteFunction': WriteLineConsole,
                'computingExpressFunction' : function(){ document.getElementById("wrapper").style.border = "2px solid rgb(255,0,0)"; },
                'computingStopExpressFunction' : function(){ document.getElementById("wrapper").style.border = "2px solid rgb(0,255,0)"; }
            }
        );

        onDomReady();
    } else if (document.readyState == "complete") {
        //DOM load initialization function
        google.maps.event.addDomListener(window, 'load', onMapSourceLoaded);
        pmuVisualizer.onDomComplete();
    }
};
//Utility Functions
function doStyling(style, tag) {
    style.display = 'block';
    style.fontSize = '0.9em';
    style.fontFamily = "Courier New";
    if (tag == 'error') {
        style.color = 'red';
    } else if (tag == 'warning') {
        style.color = '#FF8C00';
    } else if (tag == 'info') {
        style.color = 'blue';
    } else if (tag == 'success') {
        style.color = 'blue';
    }
}
//Utility Functions
function WriteLineConsole(str, tag) {
    var currentDate = new Date();
    var para = document.createElement("span");
    var n = currentDate.getDate() + "/"
        + (currentDate.getMonth() + 1) + "/"
        + currentDate.getFullYear() + " @ "
        + currentDate.getHours() + ":"
        + currentDate.getMinutes() + ":"
        + currentDate.getSeconds() + " - ";
    var node = document.createTextNode(n + str);
    para.appendChild(node);
    //mConsole.appendChild(para);
    mConsole.insertBefore(para, mConsole.firstChild);
    doStyling(para.style, tag);
}
//Utility Functions
function clearConsole() {
    mConsole.innerHTML = "";
}
//Utility Functions
function addVoltPointsToTable() {
    clearTable();
    var sources = pmuVisualizer.getVoltagePoints();
    for (var i = 0; i < sources.length; i++) {
        addRow(i + 1, sources[i][5], sources[i][0], sources[i][1], (sources[i][2]).toFixed(4));
    }
}
//Utility Functions
function addRow() {
    var rowCount = mSourceTable.rows.length;
    //var colCount = table.rows[0].cells.length;
    var row = mSourceTable.insertRow(rowCount);//if row to inserted at last then insert at rowCount
    for (var i = arguments.length - 1; i >= 0; i--) {
        //alert(arguments[i]);
        var newCell = row.insertCell(0);
        var t = document.createTextNode(arguments[i]);
        var s = document.createElement("span");
        s.appendChild(t);
        newCell.appendChild(s);
    }
    newCell = row.insertCell(arguments.length);
    t = document.createTextNode("Delete");
    s = document.createElement("button");
    s.appendChild(t);
    newCell.appendChild(s);
    s.onclick = function () {
        var confirmDelete = confirm("Delete the Voltage point number " + this.parentNode.parentNode.rowIndex + " ?");
        if (confirmDelete) {
            //mSourceTable.deleteRow(this.parentNode.parentNode.rowIndex - 1);
            pmuVisualizer.sources_.splice(this.parentNode.parentNode.rowIndex - 1, 1);
            addVoltPointsToTable();
            pmuVisualizer.onMapStateChanged();
        }
    };
    //row inserted in to the table
}
//Utility Functions
function clearTable() {
    mSourceTable.innerHTML = "";
}
//Utility Functions
//Numeric text input listener
//http://stackoverflow.com/questions/33251052/allow-only-numbers-and-ctrla-ctrlv-ctrlc-to-a-textbox
function numericListener(e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: Ctrl+C
        (e.keyCode == 67 && e.ctrlKey === true) ||
            // Allow: Ctrl+X
        (e.keyCode == 88 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
}
//Utility Functions
function showHide(el, txt1, txt2) {
    //Toggle Display button for the table
    var div = findSibling(el, "hidingClass");
    if (div.style.display !== "none") {
        div.style.display = "none";
        el.textContent = txt1;
    } else {
        div.style.display = "block";
        el.textContent = txt2;
    }
}
//Utility Functions
function findSibling(el, cls) {
    while (!el.classList.contains(cls)) {
        el = el.nextElementSibling;
    }
    return el;
}
//Utility Functions
function isNumberKey(evt, id) {
    //charcodes info http://www.cambiaresearch.com/articles/15/javascript-key-codes
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if(charCode == 13){
        if(id == "alphaTextControl"){
            setAlpha();
            return true;
        } else if (id == "transControl"){
            setTrans();
            return true;
        } else if (id == "maxDisplayHueControl"){
            setMaxDisplayHue();
            return true;
        } else if (id == "sourceRadiusControl"){
            setSourceRadius();
            return true;
        }
        return true;
    }
    return !!(charCode < 32 || (charCode > 47 && charCode < 58) || (charCode == 46));
}

//On DOM ready for manipulation, sources and assets may not have been loaded
function onDomReady() {
    //get Console and SourceTable objects
    mConsole = document.getElementById("console");
    mSourceTable = document.getElementById("mSourceTable");
    pmuVisualizer.setPaintCanvas(document.getElementById("myCanvas"));
    pmuVisualizer.onDomReady();
    addVoltPointsToTable();
    createLegend();
}

function createLegend(){
    var legendCanvas = document.getElementById("right_pane_canvas");
    var legendCanvasCtx = legendCanvas.getContext("2d");
    var canvasHgt = legendCanvas.style.height;
    var hueScalingFactor = (180 - 0)/canvasHgt;
    var hue;
    var rgbColor;
    legendCanvasCtx.lineWidth = 1;
    for(var i = 0; i < canvasHgt; i++){
        hue = i * hueScalingFactor;
        rgbColor = pmuVisualizer.hsvToRgb(hue , 1, 1);
        legendCanvasCtx.strokeStyle = "rgb("+rgbColor[0]+","+rgbColor[1]+","+rgbColor[2]+")";
        legendCanvasCtx.beginPath();
        legendCanvasCtx.moveTo(0,i);
        legendCanvasCtx.lineTo(20,i);
        legendCanvasCtx.stroke();
    }
}
function onMapSourceLoaded() {
    //initialize controller
    pmuVisualizer.setMapCenter(new google.maps.LatLng(20.99340214457691, 77.10533410017817));
    getAlpha();
    getTrans();
    getMaxDisplayHue();
    getSourceRadius();
}

/*Alpha getter*/
function getAlpha() {
    document.getElementById("alphaTextControl").value = "" + pmuVisualizer.getAlpha();
    document.getElementById("alphaTextControl").style.color = 'blue';
}
/*Alpha setter*/
function setAlpha() {
    var num = Number(document.getElementById("alphaTextControl").value);
    if (!isNaN(num)) {
        document.getElementById("alphaTextControl").style.color = 'black';
        pmuVisualizer.setAlpha(num);
        WriteLineConsole("Set the canvas Alpha to " + num, "success");
    } else {
        WriteLineConsole("Please enter numeric Input ", "error");
        document.getElementById("alphaTextControl").style.color = 'red';
    }
}
/*Transperency getter*/
function getTrans() {
    document.getElementById("transControl").value = "" + pmuVisualizer.getTrans();
    document.getElementById("transControl").style.color = 'blue';
}
/*Transperency setter*/
function setTrans() {
    var num = Number(document.getElementById("transControl").value);
    if (!isNaN(num) && num >= 0) {
        if(num > 255){
            num = 255;
        }
        document.getElementById("transControl").style.color = 'black';
        WriteLineConsole("Set the canvas opacity to " + num, "success");
        pmuVisualizer.setTrans(num);
    } else {
        WriteLineConsole("Please set canvas opacity between 0 and 255", "error");
        document.getElementById("transControl").style.color = 'red';
    }
}
/*MaxDisplayHue getter*/
function getMaxDisplayHue() {
    document.getElementById("maxDisplayHueControl").value = "" + pmuVisualizer.getMaxDisplayHue();
    document.getElementById("maxDisplayHueControl").style.color = 'blue';
}
/*MaxDisplayHue setter*/
function setMaxDisplayHue() {
    var num = Number(document.getElementById("maxDisplayHueControl").value);
    if (!isNaN(num) && num >= 0 && num <= 255) {
        document.getElementById("maxDisplayHueControl").style.color = 'black';
        WriteLineConsole("Set the canvas Max HueToDisplay to " + num, "success");
        pmuVisualizer.setMaxDisplayHue(num);
    } else {
        WriteLineConsole("Please enter numeric Input between 0 and 255", "error");
        document.getElementById("maxDisplayHueControl").style.color = 'red';
    }
}
/*SourceRadius getter*/
function getSourceRadius() {
    document.getElementById("sourceRadiusControl").value = "" + pmuVisualizer.getSourceRadius();
    document.getElementById("sourceRadiusControl").style.color = 'blue';
}
/*SourceRadius setter*/
function setSourceRadius() {
    var num = Number(document.getElementById("sourceRadiusControl").value);
    if (!isNaN(num) && num >= 0 && num <= 20) {
        document.getElementById("sourceRadiusControl").style.color = 'black';
        WriteLineConsole("Set the sourceRadius to " + num, "success");
        pmuVisualizer.setSourceRadius(num);
    } else {
        WriteLineConsole("Please set sourceRadius between 0 and 20", "error");
        document.getElementById("sourceRadiusControl").style.color = 'red';
    }
}
/*MinPerUnit setter*/
function setMinDisplayPU() {
    var num = Number(document.getElementById("maxDisplayHueControl").value);
    var hotpu = pmuVisualizer.hotColorPU_;
    if (!isNaN(num) && num >= 0 && num <= hotpu) {
        document.getElementById("maxDisplayHueControl").style.color = 'black';
        WriteLineConsole("Set the canvas Min Per Unit Display to " + num, "success");
        pmuVisualizer.setMaxDisplayHue(pmuVisualizer.getHueFromPU(num));
    } else {
        WriteLineConsole("Please set minimum display per unit between 0 and " + hotpu, "error");
        document.getElementById("maxDisplayHueControl").style.color = 'red';
    }
}
/*MinPerUnit getter*/
function getMinDisplayPU() {
    document.getElementById("maxDisplayHueControl").value = "" + pmuVisualizer.getMinDisplayPU();
    document.getElementById("maxDisplayHueControl").style.color = 'blue';
}
//Utility functions
function addVoltPoint() {
    var newName = document.getElementById("newVoltPointName").value;
    var newLat = document.getElementById("newVoltPointLat").value;
    var newLong = document.getElementById("newVoltPointLong").value;
    var newBaseVoltage = document.getElementById("newVoltPointBaseVoltage").value;
    var newEDNAAddress = document.getElementById("newVoltPointEDNAAddress").value;

    //TODO perform validations
    pmuVisualizer.addVoltPoint([newLat, newLong, 1, newEDNAAddress, newBaseVoltage, newName, "notSynced", null]);
    addVoltPointsToTable();
    document.getElementById("newVoltPointName").value = "";
    document.getElementById("newVoltPointLat").value = "";
    document.getElementById("newVoltPointLong").value = "";
    document.getElementById("newVoltPointVal").value = "";
}

var timingVar;

//Timing function
function startFetching() {
    pauseFetching();
    WriteLineConsole("Starting Server Data Fetch", "info");
    timingVar = setInterval(getFromPointsDataServer, 1000);
}

//Timing function
function pauseFetching() {
    WriteLineConsole("Pausing Server Data Fetch", "warning");
    clearInterval(timingVar);
}

//Timing function
function getFromServer() {
    var point = "WRLDC.PHASOR.WRDC0783";
    $.get("http://localhost:4542/values?dnapoint=" + point, function (data, status) {
        if (status == "success") {
            //console.log(JSON.parse(data));
            console.log(data);
        }
    });
}

//Timing function
function getFromServerTest() {
    if (getIsBusy()) {
        return;
    }
    setIsBusy(true);
    var sources = pmuVisualizer.getVoltagePoints();
    //Math.random() returns random number between 0 and 1
    for (var i = 0; i < sources.length; i++) {
        sources[i][2] = 0.9 + Math.random();
    }
    pmuVisualizer.runAlgorithm();
    setIsBusy(false);
}

//Timing function
function getFromPointsDataServer() {
    if (getIsBusy()) {
        return;
    }
    setIsBusy(true);
    //express server fetch start
    document.getElementById("wrapper").style.border = "2px solid rgb(0,255,0)";
    $.get("http://localhost:4542/values?dnapoints=" + pmuVisualizer.queryStringParamsForData_, function (data, status) {
        if (status == "success") {
            //express server fetch stop / finish
            document.getElementById("wrapper").style.border = "2px solid #999999";
            //console.log(JSON.parse(data));
            //We get pointsArray in the order of sources Array
            var pointsArray = JSON.parse(data);
            //MODIFY THE sources ARRAY from pointsArray
            for (var i = 0; i < pointsArray.result.length; i++) {
                pmuVisualizer.sources_[i][2] = (pointsArray.result[i].value * 1.73205080757) / pmuVisualizer.sources_[i][4];
                pmuVisualizer.sources_[i][6] = pointsArray.result[i]["status"];
            }
            //For now we are just logging the data fetched from server
            //console.log(pointsArray);
            console.log(JSON.stringify(pointsArray, null, '\t'));
            //RUN the plotting algorithm
            pmuVisualizer.runAlgorithm();
            setIsBusy(false);
        }
    });
}

//isBusy getter
function getIsBusy() {
    return isBusy;
}

//isBusy setter
function setIsBusy(val) {
    isBusy = val;
}

var frameTimingVar;
var frameToFetch = 0;
//Timing function
function startFrameFetching() {
    pauseFetching();
    WriteLineConsole("Starting Frame Data Fetch", "info");
    frameTimingVar = setInterval(getFromFrames, 2000);
}

//Timing function
function pauseFrameFetching() {
    frameToFetch = 0;
    WriteLineConsole("Pausing Frame Data Fetch", "warning");
    clearInterval(frameTimingVar);
}

var isFrameBusy = false;

//Timing function
function getFromFrames() {
    if (getIsFrameBusy()) {
        return;
    }
    getIsFrameBusy(true);
    //express frame fetch start
    document.getElementById("wrapper").style.border = "2px solid rgb(0,255,0)";
    var frameData = timeFrames.frames[frameToFetch];
    //MODIFY THE sources ARRAY from pointsArray
    for (var i = 0; i < frameData.length; i++) {
        pmuVisualizer.sources_[i][2] = frameData[i] / pmuVisualizer.sources_[i][4];
    }
    //RUN the plotting algorithm
    pmuVisualizer.runAlgorithm();
    setIsFrameBusy(false);
    //express server fetch stop / finish
    document.getElementById("wrapper").style.border = "2px solid #999999";
    frameToFetch++;
    if(frameToFetch == 97){
        pauseFrameFetching();
    }
}
//isBusy getter
function getIsFrameBusy() {
    return isFrameBusy;
}

//isBusy setter
function setIsFrameBusy(val) {
    isFrameBusy = val;
}
