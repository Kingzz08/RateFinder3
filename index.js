function calculate(){
    let metre = parseInt(document.getElementById('metreOfRoll').value);
    let pob = parseInt(document.getElementById('pcsOfBedsheet').value);
    let poc = parseInt(document.getElementById('pcsOfPillowCutting').value);
    let rate = parseInt(document.getElementById('rate').value);
    let tax = parseInt(document.getElementById('tax').value);


    let finalRate = (rate+(rate*tax/100));
    // let avgRateBedsheet = (finalRate*metre)/(pob+poc);
    let rateOfBedsheet = finalRate*4.205;
    let rateOfPillowCutting = finalRate*4.410;
    let ratePillow = rateOfPillowCutting/15;
    let noPillow = poc*15;
    let ratePerInch = finalRate/39;

    // console.log("Final Rate : " + finalRate);
    // // console.log("Average Rate : " + avgRateBedsheet);
    // console.log("Rate of Bedsheet : " + rateBedsheet);
    // console.log("Rate of Pillow Cutting : " + ratePillowCutting);
    // console.log("Rate of Pillow : " + ratePillow);
    // console.log("No. of Pillow : " + noPillow);
    // console.log("Rate of 1-inch : " + ratePerInch);


    document.getElementById('rateBedsheet').textContent = rateOfBedsheet;
    document.getElementById('ratePillowCutting').textContent = rateOfPillowCutting;
    document.getElementById('ratePillow').textContent = ratePillow;
    document.getElementById('noPillow').textContent = noPillow;
    document.getElementById('rateInch').textContent = ratePerInch;

}


document.getElementById("go").addEventListener("click", calculate);