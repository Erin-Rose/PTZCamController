const cam = document.getElementById('cam');
const bgcam = document.getElementById('bgcam');
const joystick = document.getElementById("joystick");



let stream = null;



async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: {
                width: { ideal: 4096 },
                height: { ideal: 2160 },
            },
        });
        cam.srcObject = stream;
        bgcam.srcObject = stream;
    } catch (err) {
        alert('Error accessing webcam: ' + err.message);
    }
}

startCamera().catch(console.error);


function joystickClick() {
    joystick.addEventListener("pointermove", joystickData);
    document.getElementById("joystick").style.cursor = "move";
}

function joystickRelease( event ) {
    joystick.removeEventListener("pointermove", joystickData);
    document.getElementById("joystick").style.cursor = "default";
}

function joystickData() {
    var bounds = joystick.getBoundingClientRect();
    let x = event.clientX - bounds.left;
    let y = event.clientY - bounds.top;

    console.log(x, y);
}


