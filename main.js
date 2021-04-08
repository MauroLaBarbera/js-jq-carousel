$(document).ready(function(){


    //REFERENZE
    var nextBtn = $('.next');
    var prevBtn = $('.prev');

    /**
     * FUNZIONE PER NAVIGARE TRA LE FOTO
     **/
    //FOTO SUCCESSIVA
    nextBtn.click(function (){
        nextPrevFoto('next');
    });

    //FOTO PRECEDENTE
    prevBtn.click(function (){
        nextPrevFoto('prev');
    });

    //FINE LETTURA DOCUMENT
});


/**********************************************
 *              FUNCTIONS
***********************************************/


 //FUNZIONE PER NAVIGARE TRA LE FOTO
 function nextPrevFoto(direzione) {
    console.log(direzione);
 }

