var bits = process.argv[process.argv.length-1] * 1;

console.error("Generating for", bits);

var items = 0x1 << bits;//Math.pow(2, bits);

var result = [];

for(var a=0; a < items; a++) {
    var line = []
    var mask = 0x1 << (bits -1);
    line.push(Math.random() > .5)
    while(mask) {
	line.push(mask & a ? true : false);
	mask = mask >> 1;
    }
    //console.log(line);
    result.push(line);
}

console.log(JSON.stringify(result, null, 1))
//console.log(result.join('\n'));
