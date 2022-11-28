function check_sketch(){
createCapture(VIDEO);
ml5.imageclassifier = classify();
}
function gotResult(){
    if (error) {
        console.error(error);
      }
}