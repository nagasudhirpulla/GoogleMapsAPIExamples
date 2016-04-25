/**
 * Created by Nagasudhir on 4/25/2016.
 */
/*
 *An explanation about how to create a javascript class similar to OOPS class so that it has instance variables, type functions or prototype functions and static variables that will be shared by all instances
 *http://stackoverflow.com/questions/1535631/static-variables-in-javascript
 */
/*Our Mighty Canvas Controller*/
function AwesomePMUCanvasController(opt_options) {
    this.filterCanvas_ = null;
    this.filterCtx_ = null;
    this.filterDataArray_ = null;
    this.projection_ = null;
    this.plottedZoom_ = null;
    this.plottedTopLeft_ = null;
    this.overLayView_ = null;
    this.infowindow_ = null;
    this.iconImage_ = null;
    this.iconImageRed_ = null;
    this.myCenter_ = null;
    this.map_ = null;
    this.ctx_ = null;
    this.c_ = null;
    this.xp_ = null;
    this.yp_ = null;
    this.lat_width_ = null;
    this.long_hgt_ = null;
    this.npx_ = null;
    this.npy_ = null;
    this.npxRatioSquare_ = null;
    this.isBusy_ = null;
    this.sources_ = [[22.46, 73.39, 0.96, "WRLDC.PHASOR.WRDC1001", 400, "Vadodara", "OK"], [21.91, 77.34, 1.52, "WRLDC_B.PHASOR1.WRDC1160", 400, "NAME1", "OK"], [20.09, 79.11, 1.34, "WRLDC.PHASOR.WRDC0159", 400, "CHANDRAPUR", "OK"], [21.04, 75.77, 1.6, "WRLDC_B.PHASOR1.WRDC0935", 400, "JALGAON", "OK"], [24.17, 78.19, 0.91, "WRLDC.PHASOR.WRDC0336", 400, "Sagar", "OK"], [19.79, 72.72, 1.55, "WRLDC.PHASOR.WRDC0305", 400, "THANE", "OK"], [22.82, 69.53, 1.09, "WRLDC.PHASOR.WRDC0024", 400, "Kutch", "OK"], [19.95, 79.28, 1.23, "WRLDC_B.PHASOR1.WRDC1013", 400, "CHANDRAPUR", "OK"], [23.17, 72.81, 1.53, "WRLDC.PHASOR.WRDC0232", 400, "Gandhinagar", "OK"], [21.28, 79.98, 1.13, "WRLDC.PHASOR.WRDC1062", 400, "CHANDRAPUR", "OK"], [20.90, 74.76, 1.32, "WRLDC_B.PHASOR1.WRDC0857", 400, "DHULE", "OK"], [22.60, 77.75, 1.11, "WRLDC.PHASOR.WRDC0086", 400, "Hoshangabad", "OK"], [23.17, 79.98, 1.54, "WRLDC.PHASOR.WRDC0464", 400, "Jabalpur", "OK"], [21.73, 70.63, 1.48, "WRLDC_B.PHASOR1.WRDC0471", 400, "Rajkot", "OK"], [19.20, 73.00, 1.04, "WRLDC.PHASOR.WRDC0749", 400, "THANE", "OK"], [16.69, 74.22, 1.34, "WRLDC_B.PHASOR1.WRDC0584", 400, "KOLHAPUR", "OK"], [21.24, 79.09, 1.44, "WRLDC_B.PHASOR1.WRDC1121", 400, "NAGPUR", "OK"], [22.38, 82.68, 1.01, "WRLDC.PHASOR.WRDC0194", 400, "Korba", "OK"], [18.63, 74.02, 1.08, "WRLDC_B.PHASOR1.WRDC0701", 400, "PUNE", "OK"], [22.83, 69.73, 1.01, "WRLDC_B.PHASOR1.WRDC0004", 400, "Kutch", "OK"], [19.99, 73.64, 1.2, "WRLDC_B.PHASOR1.WRDC0857", 220, "NAME2", "OK"], [17.43, 73.66, 1.49, "WRLDC_B.PHASOR1.WRDC0623", 400, "SATARA", "OK"], [19.35, 73.17, 1.18, "WRLDC_B.PHASOR1.WRDC0662", 400, "THANE", "OK"], [18.84, 76.51, 1.53, "WRLDC_B.PHASOR1.WRDC0740", 400, "BEED", "OK"], [21.25, 81.62, 1.36, "WRLDC.PHASOR.WRDC1222", 400, "Raipur", "OK"], [23.82, 72.46, 1.23, "WRLDC_B.PHASOR1.WRDC0515", 400, "Mehsana", "OK"], [24.58, 80.87, 1.02, "WRLDC_B.PHASOR1.WRDC0249", 400, "Satna", "OK"], [17.68, 75.91, 1.18, "WRLDC.PHASOR.WRDC0804", 400, "SOLAPUR", "OK"], [17.65, 75.90, 1.45, "WRLDC.PHASOR.WRDC0870", 765, "NAME3", "OK"], [17.66, 75.94, 1.15, "WRLDC_B.PHASOR1.WRDC0896", 400, "SOLAPUR", "OK"], [24.03, 82.57, 1.28, "WRLDC.PHASOR.WRDC0412", 400, "Singrauli", "OK"], [24.47, 72.03, 1.32, "WRLDC_B.PHASOR1.WRDC0204", 400, "Banaskantha", "OK"]];
    //String for get request
    this.queryStringParamsForData_ = sources.map(function (obj) {
        return obj[3];
    }).join(',');
    this.alpha_ = 1.5;
    this.transparency_ = 120; //between 0 - 255
    this.canvasData_ = [];
    this.normalisedCanvasData_ = [];
    this.minVal_ = null;
    this.maxVal_ = null;
    this.maxHue_ = 120;
    this.minHue_ = 0;
    this.maxHueToDisplay_ = maxHue;
    this.hueDiff_ = maxHue - minHue; //Lets go for red color for now

    // set provided options, if any
    if (opt_options) {
        this.setOptions(opt_options);
    }
}

AwesomePMUCanvasController.prototype.setOptions = function (options) {
    if (options.consoleWriteFunction !== undefined) {
        this.setConsoleWriteFunction(options.animate);
    }
    if (options.mapCenter !== undefined) {
        this.setmapCenter(options.mapCenter);
    }
};

AwesomePMUCanvasController.prototype.setConsoleWriteFunction = function (opt_consoleWriteFunction) {
    this.WriteLineConsole_ = opt_consoleWriteFunction;
};

AwesomePMUCanvasController.prototype.setMapCenter = function (mapCenter) {
    this.myCenter_ = mapCenter;
};

AwesomePMUCanvasController.prototype.onMapStateChanged = function () {

};

AwesomePMUCanvasController.prototype.runAlgorithm = function () {

};

AwesomePMUCanvasController.prototype.getMapTopLeft = function () {

};

AwesomePMUCanvasController.prototype.onDomReady = function () {
    computeCanvasParams();
    //canvas resize listener
    new ResizeSensor(c, computeCanvasParams);
};

//Compute Canvas Parameters - Do this if canvas measurements change
AwesomePMUCanvasController.computeCanvasParams = function () {
    //Canvas initialization
    this.ctx_ = this.c_.getContext("2d");
    this.ctx_.strokeStyle = 'blue';
    this.ctx_.fillStyle = 'rgba(0, 0, 0, 1)';
    //ctx.fillStyle = "blue";
    //ctx.fillStyle = "rgb(255, 0, 0)";
    //Get the Width and Length of canvas
    this.xp_ = getComputedStyle(this.c_, null).getPropertyValue('width');
    this.xp_ = this.xp_.substring(0, this.xp_.length - 2);
    this.ctx_.canvas.width = this.xp_;
    this.yp_ = getComputedStyle(this.c_, null).getPropertyValue('height');
    this.yp_ = this.yp_.substring(0, this.yp_.length - 2);
    this.ctx_.canvas.height = this.yp_;
    this.WriteLineConsole_("*********************************", "warning");
    this.WriteLineConsole_("Writing DIV dimensions in pixels");
    this.WriteLineConsole_("Width of div is " + this.xp_, "info");
    this.WriteLineConsole_("Height of div is " + this.yp_, "info");
    //this.WriteLineConsole_("*********************************", "info");
};

AwesomePMUCanvasController.prototype.onMapSourceLoaded = function () {
    //initialize map
    //myCenter = new google.maps.LatLng(20.99340214457691, 77.10533410017817);
    //myCenter will come from options
    var mapProp = {
        center: this.myCenter_,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map_ = new google.maps.Map(document.getElementById("google_map"), mapProp);

    this.overLayView_ = new google.maps.OverlayView();
    this.overLayView_.draw = function () {
    };
    this.overLayView_.setMap(this.map_);
    //var parser = new geoXML3.parser({map: map, processStyles: true});
    //parser.parse("test.kml");
    ////Using the new technique that doesnot require the geoxml
    ////http://stackoverflow.com/questions/8187837/google-maps-zoom-gets-overriden-when-using-a-kml-file
    var nyLayer = new google.maps.KmlLayer(
        'https://raw.githubusercontent.com/nagasudhirpulla/GoogleMapsAPIExamples/gh-pages/test.kml',
        {
            suppressInfoWindows: true,
            map: this.map_,
            preserveViewport: true
        });

    infowindow = new google.maps.InfoWindow();
    iconImage = {
        url: 'locationCircleIcon.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(10, 10),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(5, 5)
    };
    iconImageRed = {
        url: 'locationCircleIconRed.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(10, 10),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(5, 5)
    };
    //set marker
    var marker = new google.maps.Marker({
        position: myCenter
    });
    marker.setMap(map);
    marker.addListener('click', toggleBounce);
    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    for (var i = 0; i < sources.length; i++) {
        createMarker(sources[i][5], sources[i][0], sources[i][1], i);
    } //source iterator
    //add listener for map bounds being changed
    //google.maps.event.addListener(map,'bounds_changed', onMapStateChanged); // end of listener callbck
    google.maps.event.addListener(map, 'idle', onMapStateChanged);
    google.maps.event.addListenerOnce(map, 'bounds_changed', function () {
        plottedTopLeft = getMapTopLeft();
    });
    map.setZoom(6);
    getAlpha();
    getTrans();
    getmaxDisplayHue();
};

AwesomePMUCanvasController.prototype.onMapTransparencyChanged = function () {

};

AwesomePMUCanvasController.prototype.getPaintCanvas = function () {
    return this.c_;
};

AwesomePMUCanvasController.prototype.setPaintCanvas = function (c) {
    this.c_ = c;
};

AwesomePMUCanvasController.prototype.getPaintContext = function () {
    return this.ctx_;
};

AwesomePMUCanvasController.prototype.setPaintContext = function (ctx) {
    this.ctx_ = ctx;
};

AwesomePMUCanvasController.prototype.getAlpha = function () {

};

AwesomePMUCanvasController.prototype.setAlpha = function () {

};

/*Transperency getter*/
AwesomePMUCanvasController.prototype.getTrans = function () {
    document.getElementById("transControl").value = "" + transparency;
    document.getElementById("transControl").style.color = 'blue';
};

/*Transperency setter*/
AwesomePMUCanvasController.prototype.setTrans = function () {
    var num = Number(document.getElementById("transControl").value);
    if (!isNaN(num) && num >= 0 && num <= 255) {
        document.getElementById("transControl").style.color = 'black';
        WriteLineConsole("Set the canvas Transperency to " + num, "success");
        transparency = num;
        ////onMapStateChanged();
        onMapTransparencyChanged();
    } else {
        WriteLineConsole("Please enter numeric Input between 0 and 255", "error");
        document.getElementById("transControl").style.color = 'red';
    }
};

/*MaxDisplayHue getter*/
AwesomePMUCanvasController.prototype.getmaxDisplayHue = function () {
    document.getElementById("maxDisplayHueControl").value = "" + maxHueToDisplay;
    document.getElementById("maxDisplayHueControl").style.color = 'blue';
};

/*MaxDisplayHue setter*/
AwesomePMUCanvasController.prototype.setmaxDisplayHue = function () {
    var num = Number(document.getElementById("maxDisplayHueControl").value);
    if (!isNaN(num) && num >= 0 && num <= 255) {
        document.getElementById("maxDisplayHueControl").style.color = 'black';
        WriteLineConsole("Set the canvas Max HueToDisplay to " + num, "success");
        maxHueToDisplay = num;
        ////onMapStateChanged();
        onMapTransparencyChanged();
    } else {
        WriteLineConsole("Please enter numeric Input between 0 and 255", "error");
        document.getElementById("maxDisplayHueControl").style.color = 'red';
    }
};

/*
 * HSV to RGB color conversion
 *
 * H runs from 0 to 360 degrees
 * S and V run from 0 to 1
 *
 * Ported from the excellent java algorithm by Eugene Vishnevsky at:
 * http://www.cs.rit.edu/~ncs/color/t_convert.html
 */
AwesomePMUCanvasController.prototype.hsvToRgb = function (h, s, v) {
    var r, g, b;
    var i;
    var f, p, q, t;
    // Make sure our arguments stay in-range
    h = Math.max(0, Math.min(360, h));
    ////s = Math.max(0, Math.min(1, s));
    ////v = Math.max(0, Math.min(1, v));
    /****if(s == 0) {
			// Achromatic (grey)
			r = g = b = v;
			return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
			}****/
    h /= 60; // sector 0 to 5
    i = Math.floor(h);
    f = h - i; // factorial part of h
    p = v * (1 - s);
    q = v * (1 - s * f);
    t = v * (1 - s * (1 - f));
    switch (i) {
        case 0:
            r = v;
            g = t;
            b = p;
            break;
        case 1:
            r = q;
            g = v;
            b = p;
            break;
        case 2:
            r = p;
            g = v;
            b = t;
            break;
        case 3:
            r = p;
            g = q;
            b = v;
            break;
        case 4:
            r = t;
            g = p;
            b = v;
            break;
        default: // case 5:
            r = v;
            g = p;
            b = q;
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};

/*
 * RGB to HSV color conversion
 http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
 */
AwesomePMUCanvasController.prototype.rgbToHsv = function (r, g, b) {
    r = r / 255, g = g / 255, b = b / 255;
    var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max == 0 ? 0 : d / max;

    if (max == min) {
        h = 0; // achromatic
    } else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h *= 60;
    }
    return [h, s, v];
};
