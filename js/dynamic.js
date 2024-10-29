$(document).ready(function() {
    // Load Navbar
    $("#nav-placeholder").load("/dynamic/nav.html");

    // Load Footer
    $("#footer-placeholder").load("/dynamic/footer.html");

    // Scroll progress bar
    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var winHeight = $(window).height();
        var scrollPercent = (scrollTop) / (docHeight - winHeight);
        var scrollPercentRounded = Math.round(scrollPercent * 100);

        $('#scroll-progress').css('width', scrollPercentRounded + '%');
    });
});

$(document).ready(function() {
    $('.hamburger-icon').click(function() {
        $('.nav-links').toggleClass('active');
    });
});

function myFunction() {
    document.getElementById("navMobileContent").classList.toggle("show");  
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("navMobileContent");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

$(document).ready(function () {
  // Hide all answer sections initially
  $(".answer-wrapper").hide();

  $(".question-wrapper").click(function () {
    var container = $(this).parents(".accordion");
    var answer = container.find(".answer-wrapper");
    var trigger = container.find(".material-icons.drop");
    var state = container.find(".question-wrapper");

    answer.animate({ height: "toggle" }, 100);

    if (trigger.hasClass("icon-expend")) {
      trigger.removeClass("icon-expend");
      // state.removeClass("active");
    } else {
      trigger.addClass("icon-expend");
      // state.addClass("active");
    }

    if (container.hasClass("expanded")) {
      container.removeClass("expanded");
    } else {
      container.addClass("expanded");
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalSpan = document.querySelector('.close');
  const slides = document.querySelectorAll('.slide');
  const progressBar = document.querySelector('.progress');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentSlide = 0;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === index);
      });
      progressBar.style.width = ((index + 1) / slides.length) * 100 + '%';
      nextBtn.textContent = index === slides.length - 1 ? 'Finish' : 'Next';
  }

  openModalBtn.addEventListener('click', () => {
      modal.style.display = 'block';
      showSlide(currentSlide);
  });

  closeModalSpan.addEventListener('click', () => {
      modal.style.display = 'none';
      currentSlide = 0;
  });

  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = 'none';
          currentSlide = 0;
      }
  });

  prevBtn.addEventListener('click', () => {
      if (currentSlide > 0) {
          currentSlide--;
          showSlide(currentSlide);
      }
  });

  nextBtn.addEventListener('click', () => {
      if (currentSlide < slides.length - 1) {
          currentSlide++;
          showSlide(currentSlide);
      } else {
          modal.style.display = 'none';
          currentSlide = 0;
      }
  });
});