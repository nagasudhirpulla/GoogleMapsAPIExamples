/**
 * Created by Nagasudhir on 4/25/2016.
 */
/*
 *An explanation about how to create a javascript class similar to OOPS class so that it has instance variables, type functions or prototype functions and static variables that will be shared by all instances
 *http://stackoverflow.com/questions/1535631/static-variables-in-javascript
 */
"use strict";
/*Our Mighty Canvas Controller*/
function AwesomePMUCanvasController(opt_options) {
    this.filterCanvas_ = null;
    this.filterCtx_ = null;
    this.crapCanvas_ = null;
    this.crapCtx_ = null;
    this.filterDataArray_ = null;
    this.projection_ = null;
    this.plottedZoom_ = null;
    this.plottedTopLeft_ = null;
    this.overLayView_ = null;
    this.infowindow_ = null;
    this.iconImage_ = null;
    this.iconImageRed_ = null;
    this.mapCenter_ = null;
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
    this.isPaintBusy_ = false;
    this.sources_ = [[22.46, 73.39, 0.96, "WRLDC.PHASOR.WRDC1001", 400, "Vadodara", "OK"], [21.91, 77.34, 1.52, "WRLDC_B.PHASOR1.WRDC1160", 400, "NAME1", "OK"], [20.09, 79.11, 1.34, "WRLDC.PHASOR.WRDC0159", 400, "CHANDRAPUR", "OK"], [21.04, 75.77, 1.6, "WRLDC_B.PHASOR1.WRDC0935", 400, "JALGAON", "OK"], [24.17, 78.19, 0.91, "WRLDC.PHASOR.WRDC0336", 400, "Sagar", "OK"], [19.79, 72.72, 1.55, "WRLDC.PHASOR.WRDC0305", 400, "THANE", "OK"], [22.82, 69.53, 1.09, "WRLDC.PHASOR.WRDC0024", 400, "Kutch", "OK"], [19.95, 79.28, 1.23, "WRLDC_B.PHASOR1.WRDC1013", 400, "CHANDRAPUR", "OK"], [23.17, 72.81, 1.53, "WRLDC.PHASOR.WRDC0232", 400, "Gandhinagar", "OK"], [21.28, 79.98, 1.13, "WRLDC.PHASOR.WRDC1062", 400, "CHANDRAPUR", "OK"], [20.90, 74.76, 1.32, "WRLDC_B.PHASOR1.WRDC0857", 400, "DHULE", "OK"], [22.60, 77.75, 1.11, "WRLDC.PHASOR.WRDC0086", 400, "Hoshangabad", "OK"], [23.17, 79.98, 1.54, "WRLDC.PHASOR.WRDC0464", 400, "Jabalpur", "OK"], [21.73, 70.63, 1.48, "WRLDC_B.PHASOR1.WRDC0471", 400, "Rajkot", "OK"], [19.20, 73.00, 1.04, "WRLDC.PHASOR.WRDC0749", 400, "THANE", "OK"], [16.69, 74.22, 1.34, "WRLDC_B.PHASOR1.WRDC0584", 400, "KOLHAPUR", "OK"], [21.24, 79.09, 1.44, "WRLDC_B.PHASOR1.WRDC1121", 400, "NAGPUR", "OK"], [22.38, 82.68, 1.01, "WRLDC.PHASOR.WRDC0194", 400, "Korba", "OK"], [18.63, 74.02, 1.08, "WRLDC_B.PHASOR1.WRDC0701", 400, "PUNE", "OK"], [22.83, 69.73, 1.01, "WRLDC_B.PHASOR1.WRDC0004", 400, "Kutch", "OK"], [19.99, 73.64, 1.2, "WRLDC_B.PHASOR1.WRDC0857", 220, "NAME2", "OK"], [17.43, 73.66, 1.49, "WRLDC_B.PHASOR1.WRDC0623", 400, "SATARA", "OK"], [19.35, 73.17, 1.18, "WRLDC_B.PHASOR1.WRDC0662", 400, "THANE", "OK"], [18.84, 76.51, 1.53, "WRLDC_B.PHASOR1.WRDC0740", 400, "BEED", "OK"], [21.25, 81.62, 1.36, "WRLDC.PHASOR.WRDC1222", 400, "Raipur", "OK"], [23.82, 72.46, 1.23, "WRLDC_B.PHASOR1.WRDC0515", 400, "Mehsana", "OK"], [24.58, 80.87, 1.02, "WRLDC_B.PHASOR1.WRDC0249", 400, "Satna", "OK"], [17.68, 75.91, 1.18, "WRLDC.PHASOR.WRDC0804", 400, "SOLAPUR", "OK"], [17.65, 75.90, 1.45, "WRLDC.PHASOR.WRDC0870", 765, "NAME3", "OK"], [17.66, 75.94, 1.15, "WRLDC_B.PHASOR1.WRDC0896", 400, "SOLAPUR", "OK"], [24.03, 82.57, 1.28, "WRLDC.PHASOR.WRDC0412", 400, "Singrauli", "OK"], [24.47, 72.03, 1.32, "WRLDC_B.PHASOR1.WRDC0204", 400, "Banaskantha", "OK"]];
    //String for get request
    this.queryStringParamsForData_ = this.sources_.map(function (obj) {
        return obj[3];
    }).join(',');
    this.alpha_ = 1.5;
    this.transparency_ = 120; //between 0 - 255
    this.canvasData_ = [];
    this.normalisedCanvasData_ = [];
    this.minVal_ = null;
    this.maxVal_ = null;
    this.maxHue_ = 180;
    this.minHue_ = 0;
    this.maxHueToDisplay_ = this.maxHue_;
    this.hueDiff_ = this.maxHue_ - this.minHue_; //Lets go for red color for now
    this.hotColorPU_ = 1.05;
    this.coolColorPU_ = 0.95;
    /**
     * Simple bind for functions with no args for bind-less browsers (Safari).
     * @param {Object} thisArg The this value used for the target function.
     * @param {function} func The function to be bound.
     */
    function simpleBindShim(thisArg, func) {
        return function() { func.apply(thisArg); };
    }

    // set provided options, if any
    if (opt_options) {
        this.setOptions(opt_options);
    }
}

AwesomePMUCanvasController.prototype.setOptions = function (options) {
    if (options.consoleWriteFunction !== undefined) {
        this.setConsoleWriteFunction(options.consoleWriteFunction);
    }
    if (options.mapCenter !== undefined) {
        this.setMapCenter(options.mapCenter);
    }
    if (options.sources !== undefined) {
        this.setVoltagePoints(options.sources);
    }
};

AwesomePMUCanvasController.prototype.setConsoleWriteFunction = function (opt_consoleWriteFunction) {
    this.WriteLineConsole_ = opt_consoleWriteFunction;
};

AwesomePMUCanvasController.prototype.setMapCenter = function (opt_mapCenter) {
    this.mapCenter_ = opt_mapCenter;
};

AwesomePMUCanvasController.prototype.getMapCenter = function () {
    return this.mapCenter_;
};

AwesomePMUCanvasController.prototype.onMapMoveZoom = function () {
    //We know that the canvas zoom is fit for zoom level 6 and canvas center latLong are 22.532853026644325, 78.16772421874998
    if(this.isPaintBusy_){
    	return;
    }
    this.isPaintBusy_ = true;
    var currZoom = this.map_.getZoom();
    var zoomRatio = Math.pow(2, currZoom - this.plottedZoom_);
    this.projection_ = this.overLayView_.getProjection();
    var offset = this.projection_.fromLatLngToContainerPixel(this.plottedTopLeft_);
    this.ctx_.clearRect(0, 0, this.xp_, this.yp_);
    this.ctx_.drawImage(this.crapCanvas_, 0, 0, this.xp_, this.yp_, offset.x, offset.y, zoomRatio * this.xp_, zoomRatio * this.yp_);
    this.isPaintBusy_ = false;
}

AwesomePMUCanvasController.prototype.onMapStateChanged = function () {
    //get map bounds
    var ne = this.map_.getBounds().getNorthEast();//topRight
    var sw = this.map_.getBounds().getSouthWest();//bottomLeft
    var latx1 = sw.lng();
    var latx2 = ne.lng();
    var longy1 = sw.lat();
    var longy2 = ne.lat();
    //View Port Width in degrees
    this.lat_width_ = latx2 - latx1;
    this.long_hgt_ = longy2 - longy1;
    //No of degrees per pixel on X axis
    this.npx_ = this.lat_width_ / this.xp_;
    //No of degrees per pixel on Y axis
    this.npy_ = this.long_hgt_ / this.yp_;
    //npxRatio = npy/npx;
    this.npxRatioSquare_ = (this.npy_ * this.npy_) / (this.npx_ * this.npx_);

    WriteLineConsole("*********************************", "warning");
    WriteLineConsole("Writing DIV dimensions in degrees");
    WriteLineConsole("Width of div is " + this.lat_width_, "info");
    WriteLineConsole("Height of div is " + this.long_hgt_, "info");
    WriteLineConsole("Longitude bounds are " + latx1 + " and " + latx2, "info");
    WriteLineConsole("Latitude bounds are " + longy1 + " and " + longy2, "info");
    WriteLineConsole("degrees / pixel on X axis is " + this.npx_, "info");
    WriteLineConsole("degrees / pixel on Y axis is " + this.npy_, "info");

    //Draw the filter image to the canvas
    this.filterCtx_ = this.filterCanvas_.getContext('2d');
    //Clear filter canvas
    this.filterCtx_.clearRect(0, 0, this.filterCanvas_.width, this.filterCanvas_.height);

    this.projection_ = this.overLayView_.getProjection();
    /*
    *Commented because temporary resizing handled seperately
    //We know that the canvas zoom is fit for zoom level 6 and canvas center latLong are 22.532853026644325, 78.16772421874998
    var zoomRatio = Math.pow(2, this.map_.getZoom() - this.plottedZoom_);
    var canvas = document.createElement('canvas');
    canvas.width = this.xp_;
    canvas.height = this.yp_;
    //ctx.setTransform(a, b, c, d, e, f);
    //a (m11) Horizontal scaling. b (m12) Horizontal skewing. c (m21) Vertical skewing. d (m22) Vertical scaling. e (dx) Horizontal moving. f (dy) Vertical moving.
    ////ctx.setTransform(1, 0, 0, 1, 0, 0);
    ////ctx.scale(zoomRatio, zoomRatio);
    var offset = this.projection_.fromLatLngToContainerPixel(this.plottedTopLeft_);
    canvas.getContext("2d").drawImage(this.c_, 0, 0);
    this.ctx_.clearRect(0, 0, this.xp_, this.yp_);
    this.ctx_.drawImage(canvas, 0, 0, this.xp_, this.yp_, offset.x, offset.y, zoomRatio * this.xp_, zoomRatio * this.yp_);
    canvas = null;
    */
    var point = this.projection_.fromLatLngToContainerPixel(new google.maps.LatLng(26.8598, 68.1435));
    var point2 = this.projection_.fromLatLngToContainerPixel(new google.maps.LatLng(14.898497, 84.394126));
    
    ////////filterCtx.drawImage(document.getElementById("filter"), filterTopLeft[0], filterTopLeft[1], parseInt((xp / lat_width) * 16.202546), parseInt((yp / long_hgt) * 11.969271));
    
    ////////this.filterCtx_.drawImage(document.getElementById("filter"), point.x, point.y, parseInt((this.xp_  * 16.2098) / this.lat_width_), parseInt((this.yp_ * 11.9725) / this.long_hgt_));
    this.filterCtx_.drawImage(document.getElementById("filter"), point.x, point.y, point2.x - point.x , point2.y - point.y);
    //Get the filter data
    this.filterDataArray_ = this.filterCtx_.getImageData(0, 0, this.xp_, this.yp_);

    //Run the plotting algorithm
    var self = this;
    setTimeout(function () {
    	requestAnimationFrame(self.runAlgorithm.bind(self));
    }, 20); // 20 ms - should be enough to draw something simple
};

/*Get all Voltage sources locations and p.u values as a [nx3] array */
AwesomePMUCanvasController.prototype.getVoltagePoints = function () {
    // [[1,2],[3,4]];//items[0][0] = 1
    return this.sources_;
};

/*Set all Voltage sources locations and p.u values as a [nx3] array */
AwesomePMUCanvasController.prototype.setVoltagePoints = function (sources) {
    this.sources_ = sources;
};

/*Set all Voltage sources locations and p.u values as a [nx3] array */
AwesomePMUCanvasController.prototype.addVoltPoint = function (source) {
    this.sources_.push(source);
    this.onMapStateChanged().bind(this);
};

AwesomePMUCanvasController.prototype.runAlgorithm = function () {
    this.plottedZoom_ = this.map_.getZoom();
    this.plottedTopLeft_ = this.getMapTopLeft();
    /*
     ******************Algorithm******************
     calculate npx, npxRatioSquare which change when map bounds change
     clear the result image data array
     foreach source
     calculate the per unit value of source voltage
     get the source location in pixels
     foreach canvaspixel
     calcualate pixel intensity according to the formula and add it to result image data array
     end
     end
     foreach result image data array pixel
     update maximum intensity value
     update minimum intensity value
     end
     calculate normalisation factor for result image data array
     multiply each pixel of result image data array with normalisation factor to get the hue of the pixel
     assign each pixel the hue obtained from normalised image data array
     */
    //clear and initialize
    this.canvasData_ = [];
    for (var iter = 0; iter < this.xp_ * this.yp_; iter++) {
        this.canvasData_[iter] = 0;
    }
    this.normalisedCanvasData_ = [];
    //For each source
    var point;
    var pointTopLeft;
    var pointBottomRight;
    var vsource;
    var xpsource;
    var ypsource;
    var xpx;
    var ypx;
    var xpdestStart = 0;
    var ypdestStart = 0;
    var xpdestEnd = this.xp_;
    var ypdestEnd = this.yp_;
    var ypdest;
    var sources = this.getVoltagePoints();
    for (var i = 0; i < sources.length; i++) {
        //skip from the for loop if sources status is not "OK"
        if (sources[i][6] != "OK") {
            continue;
        }
        vsource = sources[i][2];
        point = this.projection_.fromLatLngToContainerPixel(new google.maps.LatLng(sources[i][0], sources[i][1]));
        pointTopLeft = this.projection_.fromLatLngToContainerPixel(new google.maps.LatLng(sources[i][0] + 0.1, sources[i][1] - 0.1));
        pointBottomRight = this.projection_.fromLatLngToContainerPixel(new google.maps.LatLng(sources[i][0] - 0.1, sources[i][1] + 0.1));
        xpdestStart = pointTopLeft.x < 0 ? 0 : Math.round(pointTopLeft.x);
        ypdestStart = pointTopLeft.y < 0 ? 0 : Math.round(pointTopLeft.y);
        xpdestEnd = pointBottomRight.x < 0 ? 0 : Math.round(pointBottomRight.x);
        ypdestEnd = pointBottomRight.y < 0 ? 0 : Math.round(pointBottomRight.y);
        xpsource = point.x;
        ypsource = point.y;
        //calculate the xpdest ypdest bounding boxes for 11 km or 0.1 degrees of radius lat long from source
        for (var xpdest = xpdestStart; xpdest < xpdestEnd; xpdest++) {
            for (var ypdest = ypdestStart; ypdest < ypdestEnd; ypdest++) {
                //i = source iterator; xpdest = x axis iterator; ypdest = y axis iterator
                ////if xpdest and ypdest belong to filter, then calculate the intensity
                if (this.filterDataArray_.data[(ypdest * this.xp_ + xpdest) * 4] == 255) {
                    xpx = xpdest - xpsource;
                    ypx = ypdest - ypsource;
                    this.canvasData_[(xpdest + ypdest * this.xp_)] += vsource * Math.exp(-this.alpha_ * this.npx_ * Math.sqrt(xpx * xpx + this.npxRatioSquare_ * ypx * ypx));
                }
            } //y iterator
        } //x iterator
    } //source iterator
    //Find max and min voltage value in canvasData
    /*
    *max and min vals required for normalising the canvas values but here we are not normalisind the canvas values for coloring
    this.minVal_ = 1000;
    this.maxVal_ = 0;
    for (xpdest = 0; xpdest < this.xp_; xpdest++) {
        for (ypdest = 0; ypdest < this.yp_; ypdest++) {
            //xpdest = x axis iterator; ypdest = y axis iterator
            if (this.filterDataArray_.data[(ypdest * this.xp_ + xpdest) * 4] == 255) {
                var val = this.canvasData_[(xpdest + ypdest * this.xp_)];
                if (val < this.minVal_) {
                    this.minVal_ = val;
                } else if (val > this.maxVal_) {
                    this.maxVal_ = val;
                }
            }
        } //y iterator
    } //x iterator
    
    //Do Normalisation
    //normalisedValue = hueDiff * (1 - value/(maxval-minval));
    //normalisedValue = hueDiff * (1 - value/(valDiff)); where valDiff = maxval-minval;
    var valDiff = this.maxVal_ - this.minVal_;
    for (xpdest = 0; xpdest < this.xp_; xpdest++) {
        for (ypdest = 0; ypdest < this.yp_; ypdest++) {
            //i = source iterator; xpdest = x axis iterator; ypdest = y axis iterator
            //normalisedCanvasData[xpdest,ypdest] = hueDiff * (1 - canvasData[xpdest,ypdest]/(valDiff));//Use this for hue version
            if (this.filterDataArray_.data[(ypdest * this.xp_ + xpdest) * 4] == 255) {
                this.normalisedCanvasData_[(xpdest + ypdest * this.xp_)] = this.hueDiff_ * ((this.canvasData_[(xpdest + ypdest * this.xp_)] - this.minVal_) / (valDiff));//Use this for RGB version
            }
        } //y iterator
    } //x iterator
    */
    
    //Convert pu data values to color values so that <=0.95 is blue and >=1.05 is red
    //normalisedValue = hueDiff * (1 - value/(maxval-minval));
    //normalisedValue = hueDiff * (1 - value/(valDiff)); where valDiff = maxval-minval;
    for (xpdest = 0; xpdest < this.xp_; xpdest++) {
        for (ypdest = 0; ypdest < this.yp_; ypdest++) {
            //i = source iterator; xpdest = x axis iterator; ypdest = y axis iterator
            var tempColor;
            var tempVal;
            var hotColorPU = this.hotColorPU_;
            var coolColorPU = this.coolColorPU_;
            var hotCoolPUDiff = hotColorPU - coolColorPU;
            if (this.filterDataArray_.data[(ypdest * this.xp_ + xpdest) * 4] == 255) {
            	//if data is under the filter...
            	tempColor = this.maxHue_; //this is for hottest color pu value
		tempVal = this.canvasData_[(xpdest + ypdest * this.xp_)];
		if(tempVal<=coolColorPU){
			tempColor = 0;	//this is for coolest color pu value
		} else if(tempVal<hotColorPU){
			tempColor = this.hueDiff_ * ((tempVal - coolColorPU)/hotCoolPUDiff);
		}
                this.normalisedCanvasData_[(xpdest + ypdest * this.xp_)] = tempColor;//Use this for RGB version
            }

        } //y iterator
    } //x iterator
    //canvas putImageData reference - http://www.w3schools.com/tags/canvas_putimagedata.asp
    //canvas createImageData reference - http://www.w3schools.com/tags/canvas_createimagedata.asp
    //Clear Canvas Data
    this.canvasData_ = [];
    var hue;
    this.ctx_ = this.c_.getContext("2d");
    var imageData = this.ctx_.getImageData(0, 0, this.xp_, this.yp_);//imageData context.getImageData(x,y,width,height);
    for (xpdest = 0; xpdest < this.xp_; xpdest++) {
        for (ypdest = 0; ypdest < this.yp_; ypdest++) {
            //i = source iterator; xpdest = x axis iterator; ypdest = y axis iterator
            hue = this.maxHue_ - this.normalisedCanvasData_[(xpdest + ypdest * this.xp_)];
            var tempColorRGB = this.hsvToRgb(hue, 1, 1);
            imageData.data[(ypdest * this.xp_ + xpdest) * 4] = tempColorRGB[0];
            imageData.data[(ypdest * this.xp_ + xpdest) * 4 + 1] = tempColorRGB[1];
            imageData.data[(ypdest * this.xp_ + xpdest) * 4 + 2] = tempColorRGB[2];
            tempColorRGB = null;
            //If pixel is in the filter area then display
            if (this.filterDataArray_.data[(ypdest * this.xp_ + xpdest) * 4] != 255) {
                imageData.data[(ypdest * this.xp_ + xpdest) * 4 + 3] = 0;
            } else {
                imageData.data[(ypdest * this.xp_ + xpdest) * 4 + 3] = (hue > this.maxHueToDisplay_) ? 0 : this.transparency_;
            }
        } //y iterator
    } //x iterator
    //Clear normalisedCanvasData
    this.normalisedCanvasData_ = [];
    this.ctx_.putImageData(imageData, 0, 0);
    this.ctx_.strokeStyle = 'black';
    this.ctx_.lineWidth = 1;//LINE WIDTH IN PIXELS
    ////Use source status to create alternate source markers
    for (i = 0; i < sources.length; i++) {
        if (sources[i][6] != "OK") {
            //Use red marker
            sources[i][7].setIcon(this.iconImageRed_);
        } else {
            //Use black marker
            sources[i][7].setIcon(this.iconImage_);
        }
    }
    this.crapCtx_.clearRect(0, 0, this.crapCanvas_.width, this.crapCanvas_.height);
    this.crapCtx_.drawImage(this.c_, 0, 0);
};

AwesomePMUCanvasController.prototype.onDomReady = function () {
    this.computeCanvasParams();
    //canvas resize listener
    new ResizeSensor(this.c_, this.computeCanvasParams);
};

AwesomePMUCanvasController.prototype.onDomComplete = function () {
    //DOM load initialization function
    if (document.getElementById("filter")) {
        this.filterCanvas_ = document.createElement('canvas');
        this.filterCanvas_.style.width = this.xp_;
        this.filterCanvas_.style.height = this.yp_;
        this.filterCanvas_.setAttribute('width', this.xp_);
        this.filterCanvas_.setAttribute('height', this.yp_);
        this.filterCtx_ = this.filterCanvas_.getContext('2d');
        
        this.crapCanvas_ = document.createElement('canvas');
        this.crapCanvas_.style.width = this.xp_;
        this.crapCanvas_.style.height = this.yp_;
        this.crapCanvas_.setAttribute('width', this.xp_);
        this.crapCanvas_.setAttribute('height', this.yp_);
        this.crapCtx_ = this.crapCanvas_.getContext('2d');
    }
    google.maps.event.addDomListener(window, 'load', this.onMapSourceLoaded.bind(this));
};

//Compute Canvas Parameters - Do this if canvas measurements change
AwesomePMUCanvasController.prototype.computeCanvasParams = function () {
    //Canvas initialization
    this.ctx_ = this.c_.getContext("2d");
    this.ctx_.strokeStyle = 'blue';
    this.ctx_.fillStyle = 'rgba(0, 0, 0, 1)';
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
        center: this.mapCenter_,
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

    this.infowindow_ = new google.maps.InfoWindow();
    this.iconImage_ = {
        url: 'locationCircleIcon.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(10, 10),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(5, 5)
    };
    this.iconImageRed_ = {
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
        position: this.mapCenter_
    });
    marker.setMap(this.map_);
    marker.addListener('click', toggleBounce);
    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    for (var i = 0; i < this.sources_.length; i++) {
        this.createMarker(this.sources_[i][5], this.sources_[i][0], this.sources_[i][1], i);
    } //source iterator
    //add listener for map bounds being changed
    //google.maps.event.addListener(map,'bounds_changed', onMapStateChanged); // end of listener callbck

    //Using self variable for accessing the object variables inside the listener - http://stackoverflow.com/questions/1081499/accessing-an-objects-property-from-an-event-listener-call-in-javascript
    //there is also an interesting feature of binding 'this' to the listener and using it in the listener - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
    google.maps.event.addListenerOnce(this.map_, 'bounds_changed', function () {
        this.plottedTopLeft_ = this.getMapTopLeft();
        google.maps.event.addListener(this.map_, 'idle', this.onMapStateChanged.bind(this));
        google.maps.event.addListener(this.map_, 'zoom_changed', this.onMapMoveZoom.bind(this));
        google.maps.event.addListener(this.map_, 'center_changed', this.onMapMoveZoom.bind(this));
    }.bind(this));
    this.map_.setZoom(6);
};

AwesomePMUCanvasController.prototype.getMapTopLeft = function () {
    var top = this.map_.getBounds().getNorthEast().lat();
    var center = this.map_.getCenter();
    var scale = Math.pow(2, this.map_.getZoom());
    var left = center.lng() - (this.xp_ * 180) / (256 * scale);
    return new google.maps.LatLng(top, left);
};

// Utility Function to create a marker
AwesomePMUCanvasController.prototype.createMarker = function (add, lat, lng, sourceIterator) {
    var contentString = add;
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map: this.map_,
        icon: this.iconImage_,
        zIndex: 1000
    });
    var self = this;
    google.maps.event.addListener(marker, 'click', function () {
        self.infowindow_.setContent(contentString);
        self.infowindow_.open(self.map_, marker);
    });
    //Assign the marker to the sources array
    this.sources_[sourceIterator][7] = marker;
};

AwesomePMUCanvasController.prototype.onMapTransparencyChanged = function () {
    var xp = this.xp_;
    var yp = this.yp_;
    var imageData = this.c_.getContext("2d").getImageData(0, 0, xp, yp);//imageData context.getImageData(x,y,width,height);
    var hue;
    for (var xpdest = 0; xpdest < xp; xpdest++) {
        for (var ypdest = 0; ypdest < yp; ypdest++) {
            //i = source iterator; xpdest = x axis iterator; ypdest = y axis iterator
            ////hue = maxHue - normalisedCanvasData[(xpdest + ypdest * xp)];
            hue = this.rgbToHsv(imageData.data[(ypdest * xp + xpdest) * 4], imageData.data[(ypdest * xp + xpdest) * 4 + 1], imageData.data[(ypdest * xp + xpdest) * 4 + 2])[0];
            //If pixel is in the filter area then display
            if (this.filterDataArray_.data[(ypdest * xp + xpdest) * 4] != 255) {
                imageData.data[(ypdest * xp + xpdest) * 4 + 3] = 0;
            } else {
                imageData.data[(ypdest * xp + xpdest) * 4 + 3] = (hue > this.maxHueToDisplay_ || imageData.data[(ypdest * xp + xpdest) * 4 + 3] == 0) ? 0 : this.transparency_;
            }
        } //y iterator
    } //x iterator
    this.ctx_.putImageData(imageData, 0, 0);
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
    return this.alpha_;
};

AwesomePMUCanvasController.prototype.setAlpha = function (num) {
    this.alpha_ = num;
    this.onMapStateChanged.apply(this);
};

/*Transperency getter*/
AwesomePMUCanvasController.prototype.getTrans = function () {
    return this.transparency_;
};

/*Transperency setter*/
AwesomePMUCanvasController.prototype.setTrans = function (num) {
    var isRequired = (this.transparency_ == 0 && num > 0);
    this.transparency_ = num;
    if(isRequired){
        this.onMapStateChanged.apply(this);
    } else{
        this.onMapTransparencyChanged.apply(this);
    }
};

/*MaxDisplayHue getter*/
AwesomePMUCanvasController.prototype.getMaxDisplayHue = function () {
    return this.maxHueToDisplay_;
};

/*MaxDisplayHue setter*/
AwesomePMUCanvasController.prototype.setMaxDisplayHue = function (num) {
    var isRequired = num > this.maxHueToDisplay_;
    this.maxHueToDisplay_ = num;
    if(isRequired){
        this.onMapStateChanged.apply(this);
    } else {
        this.onMapTransparencyChanged.apply(this);
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
    r = r / 255;
    g = g / 255;
    b = b / 255;
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
