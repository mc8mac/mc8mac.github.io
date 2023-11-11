/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',

{
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 600
        }
      },
      "color": {
        "value": "#ff568c"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#ff568c"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 189.39543399174545,
        "color": "#ff568c",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "right",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 10000,
          "rotateY": 10000
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 100,
          "size": 10,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": false,

    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

function toggleMenu() {
  var menu = document.querySelector('.navbar');
  var btn = document.querySelector('button.toggle-menu');
  var btn1 = document.querySelector('button.untoggle-menu');
  menu.classList.toggle('show');
  btn.classList.toggle('active');
  btn1.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
  var toggleButton = document.querySelector('button.toggle-menu');
  var untoggleButton = document.querySelector('button.untoggle-menu');
  if (toggleButton) {
    toggleButton.addEventListener('click', toggleMenu);
  }
  if (untoggleButton) {
    untoggleButton.addEventListener('click', toggleMenu);
  }
});

// DYNAMIC TEXT WRITING
var _CONTENT = [ 
	"Software Developer.", 
	"Student from Madeira Island.",
    "Passionate About Technology.",
    "I Love Chess."
];

var _PART = 0;
var _PART_INDEX = 0;
var _INTERVAL_VAL;
var _ELEMENT = document.querySelector("#text");

function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	if(text === '') {
		clearInterval(_INTERVAL_VAL);
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}
_INTERVAL_VAL = setInterval(Type, 100);


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