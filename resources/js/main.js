

$(document).ready(function() {
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "View More") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("View Less");
      $("#more").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("View More");
      $("#more").slideUp();
    }
  });
});











$(document).ready(function() {
 
  //Sort random function
  function random(owlSelector){
    owlSelector.children().sort(function(){
        return Math.round(Math.random()) - 0.5;
    }).each(function(){
      $(this).appendTo(owlSelector);
    });
  }
 
  $("#owl-demo").owlCarousel({
    navigation: false,
    
      autoPlay:3000,
      items:3,
      responsive: {
        0: {
            items: 1
        },
        667: {
            items: 1
        },
        768: {
            items: 1
        },
        1024: {
          items: 3

      },
        
    },
      
    beforeInit : function(elem){
      //Parameter elem pointing to $("#owl-demo")
      random(elem);
    }
 
  });
 
});



function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
};

function openForm2() {
  document.getElementById("myForm2").style.display = "block";
}

function closeForm2() {
  document.getElementById("myForm2").style.display = "none";
};

function openvents() {
  document.getElementById("vents").style.display = "block";
}

function closevents() {
  document.getElementById("vents").style.display = "none";
};

var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
    x.style.left = "-400px"
    y.style.left = "50px"
    z.style.left = "210px"
}

function login() {
    x.style.left = "50px"
    y.style.left = "550px"
    z.style.left = "0px"
  };
 

