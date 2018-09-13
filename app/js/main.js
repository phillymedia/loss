$(document).ready(function() {
    $(".left-pullquote").append('<svg alignment="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>')

    require("./gallery")

    if ($( window ).width() <= 700) {


        $(".vignette").each(function() {
            var $this = $(this);
            var cutoffTop  = $this.find("p").eq(2).offset().top;
            var vignetteTop = $this.offset().top;

            $this.find(".container").css("max-height",cutoffTop - vignetteTop + 50 + "px")

            $this.find('.expandButton').click(function(){
                $this.find(".container").css("max-height","unset")
                $this.removeClass("afterShaddow");
                $this.find('.expandButton').css("display","none")

            })

        })
    } else {
        $(".expandButton").hide();
        $(".afterShaddow").removeClass("afterShaddow");
    }


});
