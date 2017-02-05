var canvas = document.getElementById('graph');

console.log("BG");

bgVisOptions.push(new BackgroundVisualization('Max Pitch',
    function(data) {
        var data = data.splice(1, data.length);
        console.log("called");

        function maxValueIndex(arr, currentIndex, maxIndexSofar) {
            if (currentIndex == arr.length - 1) {
                return maxIndexSofar;
            } else {
                if (arr[currentIndex] > arr[maxIndexSofar]) {
                    return maxValueIndex(arr, currentIndex + 1, currentIndex);
                } else {
                    return maxValueIndex(arr, currentIndex + 1, maxIndexSofar);
                }
            }
        }
        var maxPitch = maxValueIndex(data, 0, 0);
        if (maxPitch === 0) {
            maxPitch = 1;
        }
        var rgb = getColor(Math.floor(getNote(MULTIPLIER * maxPitch)));
        var str =  "rgb(" + Math.floor(rgb[0]) + "," + Math.floor(rgb[1]) + "," + Math.floor(rgb[2]) +")";
        $("body").css("background", str);
    }
));
