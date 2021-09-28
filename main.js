Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 100
});
var cam= document.getElementById("camera");
Webcam.attach('#camera');

function capture(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="captured" src="'+data_uri+'">';
    });
}
console.log("ml5 version",ml5.version);
 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/KjfcZUi-D/model.json",modelLoaded);
 function modelLoaded(){
     console.log("modelLoaded");
 }

 function identification(){
     var pic= document.getElementById("captured");
     classifier.classify(pic, gotResults);
 }
 function gotResults(error, results){
     if (error){
         console.error(error);
     }
     else{
         console.log(results);
         document.getElementById("object_name").innerHTML=results[0].label;
         document.getElementById("object_identification_accuracy").innerHTML=results[0].confidence.toFixed(3);
     }
 }