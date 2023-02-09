$(".cijela_mapa").on("mouseleave", function () {
    let opstina_projekti = document.getElementsByClassName("opstina_projekti");
    for(j = 0; j < opstina_projekti.length; j++) {
        opstina_projekti[j].style.display = "none";
    }
})

$(".cls-1, .cls-2, .cls-3").on("mouseenter", function () {
    let opstina_projekti = document.getElementsByClassName("opstina_projekti");
        for(j = 0; j < opstina_projekti.length; j++) {
            opstina_projekti[j].style.display = "none";
            if(this.getAttribute("data-name")==opstina_projekti[j].getAttribute("data-name")) {
                    opstina_projekti[j].style.display = "block";
            }    
        }
});



/* FILTERI  - BOJANJE TERITORIJE */
$(".projekat-filter").on("click", function(){
    $(".opstina_projekti").removeAttr("category_show");
    let  projekti  = document.getElementsByClassName("opstinaProjekat");
    let cityField = document.querySelectorAll("path, polygon");
    for(let k = 0; k < cityField.length; k++){
            cityField[k].style.fill="#006BB1";        
    }
    for(let i =0; i < projekti.length; i++){
        let parentElement = projekti[i].parentNode.parentNode;
       if(this.getAttribute("data-filter")==projekti[i].getAttribute("data-filter")|| this.getAttribute("data-filter") == "#svi"){
            projekti[i].style.display="block"; 
            for(let k = 0; k < cityField.length; k++){

                if(cityField[k].getAttribute("data-name")==parentElement.getAttribute("data-name")){
                    cityField[k].style.fill="#029852";
                }
            }
        }else {
 
            projekti[i].style.display="none";
        }
    }

});

