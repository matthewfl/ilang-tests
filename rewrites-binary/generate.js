var bits = process.argv[process.argv.length-1] * 1;

console.error("Generating for", bits);

var items = 0x1 << bits;//Math.pow(2, bits);

var result = [];

for(var a=0; a < items; a++) {
    var line = "";
    var mask = 0x1 << (bits -1);
    line += (Math.random() > .5 ? "1" : "0");
    while(mask) {
	line += "," + (mask & a ? "1" : "0");
	mask = mask >> 1;
    }
    console.log(line);
    //result.push(line);
}

//console.log(result.join('\n'));
