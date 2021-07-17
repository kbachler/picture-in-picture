const videoElement = document.getElementById('video');
const button = document.getElementById('button');

/*  selectMediaStream - async function:
    1) Prompt user to select a media stream
    2) Pass to video element
    3) Play video
 */
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});

// On load
selectMediaStream();