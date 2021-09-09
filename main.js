Webcam.set({
    width:350,
    height:300,
    image_format :'png'
    png_quality:90

});

camera=document.getElementById("camera")

Webcam.attach('#camera');


function take_snap_shot()
{
    Webcam.snap(function(data_uri)
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>
});

console.log('ml5 version:', ml5.version);

claasifier=.imgeClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelloaded)

function modellaoaded() {
    console.log('Model loded!');
}

function speak(){
    var synth =window.speechSynthesis;
    speak_data_1 = "The first prediction is"+ prediction_1;
    speak_data_2 = "The second prediction is"+ prediction_2;
    var utterThis =new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterthis);
}