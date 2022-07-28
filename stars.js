if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else{
    GetRating()
    Submit()
}

function GetRating() {
    var NumStars = document.getElementsByClassName("BotonesRating")
    var texto = ""
    for (var i = 0; i < NumStars.length; i++) {
        var button = NumStars[i];
        button.addEventListener("click", function(event) {
            var buttonClicked = event.target.innerText
            texto = `You selected ${buttonClicked} out of 5`
            Submit(texto)
        })
        }
        
    }

function Submit(texto) {
    var Submitting = document.getElementsByClassName("SubmitButton")
    for (var i = 0; i < Submitting.length; i++) {
            var SubmitBut = Submitting[i]
            SubmitBut.addEventListener("click", function(event) {
                ChangeHTML(texto)
            })
    }
}

function ChangeHTML(texto) {
        var Container = document.getElementById("Container")
        var ThankYouContainer = 
            `<div id="ThankYouBox">
            <img src="images\icon-star.svg" class="StarImg">
            <img src="images/illustration-thank-you.svg" class="ThankYouImg">
            <span class="Calificacion">${texto}</span>
            <h1>Thank you!</h1>
            <span class="centered">
                We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
            </span>
            </div>`
        Container.innerHTML = ThankYouContainer
       }
