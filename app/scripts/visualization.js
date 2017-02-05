var visOptions = [];
var bgVisOptions = []

function Visualization(name, start, update, clean){
    this.name = name;
    this.start = start;
    this.clean = clean;
    this.update = update;
}

function BackgroundVisualization(name, update) {
    this.name = name;
    this.update = update;
}
