# GoogleMapsAPIExamples
Sample Codes for Google Maps

Target - Use a base image to filter the canvas painting process

For canvas starter code see

https://www.youtube.com/watch?v=hUCT4b4wa-8

Steps
1.Load the image that contains the fill criteria data i.e., a black and white image with map area filled black

  Image left position = 23.621527, 68.191580 [lat, long]
  
  Image right position =  22.947168, 84.394126 [lat, long]
  
  Image bottom position =  14.898497, 74.095052 [lat, long]
  
  Image bottom position =  26.867768, 78.351759 [lat, long]
  
  This can be done by the following code
  
    http://stackoverflow.com/questions/11644192/how-to-fetch-image-from-system-to-load-in-canvas-in-html5
    
    var canvas = document.getElementById("myCanvas");
    
    var context = canvas.getContext("2d");
    
    var imageObj = new Image();
    
    imageObj.onload = function() {
    
      context.drawImage(imageObj, 69, 50);
      
    };
    
    imageObj.src = "C:\Images\Demo.jpg";
    
2.Obtain the image data of each corresponding pixel on the filtering canvas layer

  This can be done by the following code
  
    http://stackoverflow.com/questions/10754661/javascript-getting-imagedata-without-canvas
    
    var canvas = document.createElement('canvas');
    
    var context = canvas.getContext('2d');
    
    var img = document.getElementById('myimg');
    
    context.drawImage(img, 0, 0 );
    
    var myData = context.getImageData(0, 0, img.width, img.height);
    
The myData array can be used for filter data

3.The next challenge is to transform the filter image of canvas according to the maps zooming, dragging etc

  The assumptions about the filter image are that the filter image center has the lat, long coordinates and the width of image corresponds to a particular zoom level or lat, long widths

  For this we find the zooming of the map (map.getZoom()), map center (map.getCenter()) and transform the filter image on the canvas
  
  The original filter image will be matching with the maps when zooming level of maps is say 8 and the filter image center will be say x,y degrees latitude and longitude
  
  After fetching the filter image, we scale the filter image according to map zoom level and find the position of center of filter image latlong on the canvas and transform it's position on the canvas accordingly
  
  Now the filter image is placed on the canvas for filtering criteria

4.Canvas transformations like zoom, pan etc
