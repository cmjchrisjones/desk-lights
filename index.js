const { Control, Discovery } = require('magic-home');
console.clear();
// let discovery = new Discovery();
let red = process.argv[2];
let green = process.argv[3];
let blue = process.argv[4];
let brightness = process.argv[5];

console.log(process.argv);
console.log(red);
console.log(green);
console.log(blue);

// discovery.scan(500).then(d => {
//       d.forEach(l => {
//         let light = new Control(l.address);
//         // light.setColor(99,99,99)
//         light.setColor(255, 0, 255);
//         light.setPower(true);

//     });
// }).then(
//     console.log("Finished")
// );

// // console.log(devices);

// var deviceList =  new Discovery().scan(500).then(devices => {
//     // console.log(typeof(devices));
//     // console.log(devices);
//     // deviceList = { ...devices };
// });

// console.log(deviceList);


let devices = new Array();
let discovery = new Discovery();
let addresses = new Array();

discovery.scan(100, devices).then(d => {
    console.log(d.length);
    d.forEach(device => {
        console.log(device.address);
        addresses.push(device.address);
    });
    devices.push("something");
}).then((result) => {

    console.log(devices);
    console.log("----------- ADDRESSES of DEVICES ----------");
    console.log(addresses);

    addresses.forEach(light => {
        var c = new Control(light)
        console.log("setting light to " + red + " " + green + " " + blue)
        c.setColor(red, green, blue);
        c.setColorWithBrightness(red, green, blue, brightness);
        c.turnOn();
        return true;
    });

    result = true;

    console.log(result);
    return result;
});