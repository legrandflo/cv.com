//fonction pour que quand on cliquesur menu on arrive a lasection demandée en scrollant toutes les sections pas a pas
$(function(){

    $(".navbar a, footer a").on("click", function(event){

        event.preventDefault();
        var hash = this.hash;

        //$('body').animate({scrollTop: $(hash).offset().top }, 900 , function(){window.location.hash = hash;})
        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})

    });
})

/*fonction pour afficher fenetre avec message au passage de la souris sur element*/
$(function(){
    $('[data-toggle="tooltip"]').tooltip();
})