$(document).ready(function(){


    //REFERENZE
    var nextBtn = $('.next');
    var prevBtn = $('.prev');
    var navDots = $('.nav i');

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

    //NAVIGAZIONE TRAMITE FRECCETTE
    $(document).keydown(function(event){
        console.log(event);
        console.log(event.keyCode); //CI AIUTA A CAPIRE IL CODICE CHE CORRISPONDE AL TASTO PREMUTO

        //SE PREMIAMO LA FRECCIA SINISTRA, RICOPIANDO LA FUNZIONE CREATA IN PRECEDENZA
        //TORNEREMO INDIETRO DI UNA FOTO
        if(event.keyCode == 37){
            nextPrevFoto('prev');

        //SE PREMIAMO LA FRECCIA DESTRA, RICOPIANDO LA FUNZIONE CREATA IN PRECEDENZA
        //ANDREMO AVANTI DI UNA FOTO
        } else if(event.keyCode == 39){
            nextPrevFoto('next');
        }
    });


    //DOT NAVIGATION 
    navDots.click(function(){
        nextPrevFoto( $(this) );
    })







    //FINE LETTURA DOCUMENT
});


/**********************************************
 *              FUNCTIONS
***********************************************/


 //FUNZIONE PER NAVIGARE TRA LE FOTO
 function nextPrevFoto(direzione) {
    console.log(direzione);
    var activeImg = $('.images img.active');
    var activeCrcl = $('.nav i.active');


    //RESET
    activeImg.removeClass('active');
    activeCrcl.removeClass('active');

    //NEXT
    if(direzione === 'next') {

        //SE RAGGIUNGIAMO L'ULTIMA FOTO/CERCHIO, RITORNIAMO AL PRIMO
        if(activeImg.hasClass('last')){
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        }

        //SE CLICCHIAMO LA FRECCIA, PASSA ALLA PROSSIMA FOTO/CERCHIO
        activeImg.next('img').addClass('active');
        activeCrcl.next('i').addClass('active');
    }
    
    //PREV
    else if (direzione === 'prev') {

        //SE RAGGIUNGIAMO LA PRIMA FOTO/CERCHIO, RITORNIAMO ALL'ULTIMA
        if(activeImg.hasClass('first')){
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        }

        else {//SE CLICCHIAMO LA FRECCIA SINISTRA, TORNA INDIETRO DI FOTO/CERCHIO
        activeImg.prev('img').addClass('active');
        activeCrcl.prev('i').addClass('active');}
    } else {
        //direzione -> $(this) -> referenza elemento che genera l'evento
        direzione.addClass('active');

        console.log(direzione.index());
        var pos = direzione.index();
        $('.images img').eq(pos).addClass('active');
    }

 }

