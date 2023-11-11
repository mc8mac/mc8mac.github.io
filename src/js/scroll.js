window.addEventListener('scroll', function() {
    var headerBottom = document.querySelector('.header').getBoundingClientRect().bottom;
    var content = [".home-", ".about-",".education-", ".portfolio-", ".contact-", ".skills-"];
    for (var j = 0; j<content.length; j++){
        var divContent = document.querySelector(content[j] + "content");
        console.log(content[j] + "content");
        var sectionElements = divContent.children;

        for (var i = 0; i < sectionElements.length; i++) {
            var elem = sectionElements[i];
            var elemTop = elem.getBoundingClientRect().top;
            var distance = elemTop - headerBottom;

            if (distance <= 0) {
                elem.style.opacity = 0;
            } 
            else if (distance < 75) {
                // Calculate opacity based on element's position relative to the header
                var opacity = (distance / 75);
                elem.style.opacity = opacity;
            }
            else{
                elem.style.opacity = 1;
            }
        }
    }
});