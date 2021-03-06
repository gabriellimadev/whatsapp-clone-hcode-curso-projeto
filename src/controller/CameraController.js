export class CameraController{

    constructor(videoEl) {
        
        this._videoEl = videoEl;

        navigator.mediaDevices.getUserMedia({
            video: true
        }).then(stream =>{

            this._stream = stream

            let mediaStream = new MediaStream(stream);
            this._videoEl.srcObject = mediaStream;
            this._videoEl.play();

        }).catch(err=>{
            console.error(err);
        })
    }

    stop (){
        this._stream.getTracks().forEach(track => {
            track.stop()
        });
    }
}