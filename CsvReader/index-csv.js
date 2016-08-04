var csvReader = new CSVReader();
window.onload = function () {
    var fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', function (e) {
        csvReader.resetAndCreateArrays();
        for (var b = 0; b < fileInput.files.length; b++) {
            csvReader.pushFiles(fileInput.files[b]);
        }
        fileInput.value = "";
        csvReader.afterEachRead();
    });
};
