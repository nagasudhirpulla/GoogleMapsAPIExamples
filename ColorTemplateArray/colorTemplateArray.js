//vsourceError * Math.exp(-this.alpha_ * this.npx_ * Math.sqrt(xpx * xpx + this.npxRatioSquare_ * ypx * ypx));
//npx = 0.02197265625;
//npxRatioSquare = 0.8687978259661707;
function colorTemplateArray(npxRatioSquare) {
    /*This creates a template radiation damping pattern for a particular npx, npxRatioSquare so that the array can be
     scaled and used for all sources at all intensities
     Only the quadrant one of 8 quadrants is produced here, when replicating, copy the quadrant1 to all 8 quadrants
     */
    //var maxHueToDissipate = 90; //red(0) to green(90) or blue(180) to green(90).
    var dist = 576; //the number points required to dissipate the hue 90 to 0.35294117(90/255)
    //create an array of length and width 576
    var templateArray = [];
    var alpha, npx;
    for (var i = 0; i < 576; i++) {
        templateArray[i] = new Array(576);
        for (var j = 0; j <= i; j++) {
            templateArray[i][j] = Math.exp(Math.sqrt(i * i + npxRatioSquare * j * j));
        }
    }
    var resultTemplateArray = templateArray;
    var alphaNpxTemplateArray = templateArray;

    function calculateTemplateForAlphaAndNpx(alphaIn, npxIn) {
        for (var i = 0; i < 576; i++) {
            for (var j = 0; j <= i; j++) {
                alphaNpxTemplateArray[i][j] = Math.pow(templateArray[i][j], -alphaIn * npxIn);
            }
        }
        alpha = alphaIn;
        npx = npxIn;
    }

    this.calculateTemplate = function (hue, alphaIn, npxIn) {
        if (alpha != alphaIn || npx != npxIn) {
            calculateTemplateForAlphaAndNpx(alphaIn, npxIn);
        }
        for (var i = 0; i < 576; i++) {
            for (var j = 0; j <= i; j++) {
                resultTemplateArray[i][j] = alphaNpxTemplateArray[i][j] * hue;
            }
        }
    };

    this.getTemplate = function () {
        return resultTemplateArray;
    };

    this.getNpxRatioSquare = function () {
        return npxRatioSquare;
    };
}
/**
var templateCreator = new colorTemplateArray(0.8687978259661707);
templateCreator.calculateTemplate(90, 0.01, 0.02197265625);
templateCreator.getTemplate();
 **/