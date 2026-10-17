const cam = document.getElementById('cam');
const bgcam = document.getElementById('bgcam');


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
