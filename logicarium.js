
//▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼-↓↓↓↓ SCRIPTS FOR THE CONVERTER SWAPPER ↓↓↓↓-▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
let slideIndex =1;  
showSlides(slideIndex);


function plusSlides(n){showSlides(slideIndex+=n);}  // Controlers for the NEXT/PREV controls
function currentSlide(n){showSlides(slideIndex=n);} // Controlers for the NEXT/PREV controls

//Thumbnail image controls

function showSlides(n){
    let i;
    let slides =document.getElementsByClassName("mySlides");
    let dots =document.getElementsByClassName("demo");
    let captionText= document.getElementById("caption");
    if (n>slides.length){slideIndex=1}  // if 'n' has overflown beyond the number of slides, reset to 1
    if (n<1){slideIndex=slides.length}  // if 'n' has undeflown? is that a word? bellow 1, resets to the number equal to the amount of slides
    for (i=0; i<slides.length;i++){slides[i].style.display ="none";}       // We loop through the indext
    for (i=0;i<dots.length;i++){
        dots[i].className= dots[i].className.replace(" active", ""); // we're replacing demo for active, honestly it's mainly just for CSS reasons.
    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML= dots[slideIndex-1].alt;
}
//▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲-↑↑↑↑ SCRIPTS FOR CONVERTER SWAPPER ↑↑↑↑-▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲

//▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼-↓↓↓↓ SCRIPTS FOR THE CONVERTOR ↓↓↓↓-▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
function convertValues(){
    const radioOption1 = document.getElementsByClassName("radialOptionA")[slideIndex-1].checked? true:false;
    const radioOption2 = document.getElementsByClassName("radialOptionB")[slideIndex-1].checked? true:false;
    let userInput =document.getElementById("userInput").value;
    let calculatedValue 
    if (radioOption1=== true && radioOption2 ===false && userInput!=="")
        {switch(slideIndex) {
                case 1:calculatedValue=((userInput *2.20462).toFixed(2)+" Pounds");break; 
                case 2:calculatedValue=((userInput/28.34952).toFixed(2)+" Ounces");break;
                case 3:calculatedValue=((userInput/1.609).toFixed(2)+" Miles");break;  
                case 4:calculatedValue=((userInput/2.54).toFixed(2)+" Inches");break;
                default: alert("IDK what happened, you win!")
                            } 
        }
            else if (radioOption1=== false && radioOption2 ===true &&  userInput!=="")
            {switch(slideIndex) {
                    case 1:calculatedValue=((userInput /2.20462).toFixed(2)+" Kilograms");break; 
                    case 2:calculatedValue=((userInput*28.34952).toFixed(2)+" Grams");break;
                    case 3:calculatedValue=((userInput*1.609).toFixed(2)+" Kilometres");break;
                    case 4:calculatedValue=((userInput*2.54).toFixed(2)+" Centimetres");break;
                    default: alert("IDK what happened, you win!")
                               } 
            }
            else (alert("No value selected and/or option"), calculatedValue="");
    document.getElementById("mySpan").innerHTML=calculatedValue;
    console.log(calculatedValue.length)

    }
function radialSwap(){this.userInput.value!==""?convertValues():console.log("no cheese louise");}
function widening(){
    let myInput = document.getElementById("userInput");
    myInput.value.lenght >15? myInput.style.width= (myInput.value.length*15)+"px":"60px"
    console.log(myInput.value)
    console.log(myInput.value.length)
    console.log(myInput.style.width)
}

this.convertBtn.addEventListener("click", this.convertValues);
this.userInput.addEventListener("change",this.widening)

//▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲-↑↑↑↑ SCRIPTS FOR CONVERTOR ↑↑↑↑▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲/