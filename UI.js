const cam = document.getElementById('cam');
const bgcam = document.getElementById('bgcam');
const joystick = document.getElementById("joystick");
const joystickWidth = joystick.offsetWidth;
const joystickX = document.getElementById("joystickX")
const joystickY = document.getElementById("joystickY")





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
    let normalX = (x) * (256) / (184);
    let normalY = (y) * (256) / (184);
    let clampedX = Math.min(Math.max(normalX, 0), 256)
    let clampedY = Math.min(Math.max(normalY, 0), 256)
    joystickX.value = clampedX;
    joystickY.value = clampedY;



    console.log(clampedX, clampedY);
}


