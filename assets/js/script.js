$(document).ready(function(){

    $(".navbar .nav-link").click(function(e) {
        e.preventDefault();

        if ($(this).hasClass("active")) {
            return;
        }

        $(".navbar .nav-link").removeClass("active");
        $(this).addClass("active");
        
        var target = $(this).data("target");
        var image = $(this).data("image");

        $(".navbar, footer").removeClass("fade-in");
        setTimeout(function() {
            $(".navbar, footer").addClass("fade-in");
        }, 10);

        $(".content").addClass("d-none");
        $(target).removeClass("d-none").addClass("fade-in");
        $(".background-image").css("background-image", "url('" + image + "')");
    });

    $('#showLongForm').click(function() {
      $('#shortFormCarousel').hide();
      $('#showLongForm').addClass('active');
      $('#longFormCarousel').show();
      $('#showShortForm').removeClass('active');
    });

    $('#showShortForm').click(function() {
        $('#longFormCarousel').hide();
        $('#showLongForm').removeClass('active');
        $('#shortFormCarousel').removeClass('d-none').show();
        $('#showShortForm').addClass('active');
    });

    $(".carousel-item").each(function(){
        $(this).append('<div class="play-button position-absolute top-50 start-50 translate-middle"><i class="fas fa-play"></i></div>');
    });


    //Long form
    const longFormLinks = [
        "https://www.youtube.com/watch?v=yRdzj27d2nA",
        "https://www.youtube.com/watch?v=oVf3Pk7RyNE",
        "https://www.youtube.com/watch?v=Y6h6TAF7imE",
        "https://www.youtube.com/watch?v=WzzvH_Adqs8",
        "https://www.youtube.com/watch?v=laG98_-scHE",
        "https://www.youtube.com/watch?v=idw1Zl3UAgA",
        "https://youtu.be/UFaK_OXDELE?si=CsZYj2hKmTnmu3Ix",
        "https://www.youtube.com/watch?v=ywG4PjltMC4",
        "https://www.youtube.com/watch?v=SbRQqaGlwHI",
        "https://www.youtube.com/watch?v=8cMkt6lBag8",
        "https://www.youtube.com/watch?v=tqJJQVqJ9xo",
    ];

    const shortFormLinks = [
        "https://www.instagram.com/reel/CxKwWL3MmIs/",
        "https://www.instagram.com/reel/CtMYFv8s3D3/",
        "https://www.instagram.com/reel/CkQdJwqOYcw/",
        "https://www.instagram.com/reel/CiNw3N4jmVI/",
        "https://www.instagram.com/reel/CzRvPX6tido/",
        "https://www.instagram.com/reel/CivXbCzjD5i/",
        "https://www.instagram.com/reel/CpK_pfEsHs_/",
        "https://www.instagram.com/reel/CtU3CxUMnSc/",
        "https://www.instagram.com/reel/CsEXE_1O6FU/",
        "https://www.instagram.com/reel/Cq5msYcqmIR/",
        "https://www.instagram.com/reel/CvXbQpOs-lq/",
        "https://www.instagram.com/reel/CrgypwJN5s9/",
        "https://www.instagram.com/p/Cr3ozC_uO9Z/",
        "https://www.instagram.com/reel/CrV4UjoMEtm/",
        "https://www.instagram.com/reel/CqitEQEjpel/",
        "https://www.instagram.com/reel/CzEBvhfseLe/",
        "https://www.instagram.com/p/CvCt6nsMPce/",
    ];
    
    const playButtons = document.querySelectorAll('#longFormCarousel .play-button');
    const playButtonsShort = document.querySelectorAll('#shortFormCarousel .play-button');
    
    playButtons.forEach((playButton, index) => {
        playButton.addEventListener('click', function(event) {
            event.preventDefault();
    
            const link = document.createElement('a');
            link.href = longFormLinks[index];
            link.target = '_blank';
            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);
        });
    });

    playButtonsShort.forEach((playButtonsShort, index) => {
        playButtonsShort.addEventListener('click', function(event) {
            event.preventDefault();
    
            const link = document.createElement('a');
            link.href = shortFormLinks[index];
            link.target = '_blank';
            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);
        });
    });

    function updateZoom() {
        if ($(window).width() < 250) {
            const zoom = $(window).width() / 250;
            $('body').css('zoom', zoom);
        } else {
            $('body').css('zoom', 1);
        }
    }

    $(window).on('resize', function() {
       updateZoom();
    });

    updateZoom();
});