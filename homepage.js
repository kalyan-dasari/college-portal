let slideIndex = 0;
        const slides = document.getElementsByClassName("slides");

        function showSlides(n) {
            if (n >= slides.length) { slideIndex = 0; }
            if (n < 0) { slideIndex = slides.length - 1; }
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex].style.display = "block";
        }

        function changeSlide(n) {
            showSlides(slideIndex += n);
        }

        function autoSlide() {
            changeSlide(1);
            setTimeout(autoSlide, 3000);
        }

        showSlides(slideIndex);
        setTimeout(autoSlide, 3000);