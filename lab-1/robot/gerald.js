// Cameron Yon's Lab 1 - Gerald's Slalom
let distance = 34;
let speed = 80;
async function startProgram() {
    setMainLed({
        r: 255,
        g: 141,
        b: 41
    });
    await setHeading(0);
	await speak("And away we go!", true);
    for(let i = 0; i < 3; i++) {
        await rollToDistance(0, speed, distance);
        await rollToDistance(90, speed, distance);
        await rollToDistance(0, speed, distance);
        if(i != 2) {
            await rollToDistance(270, speed, distance);
        }
    }
    await speak("I should have arrived at B 2");
    exitProgram();
}