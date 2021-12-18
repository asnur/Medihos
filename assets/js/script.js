function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

function scrollFunction() {
    var elmnt = document.getElementById("myBody");
    var y = elmnt.scrollTop;
    console.log(y)
              if (y > 100) {
                  document.getElementById("myNav").style.backgroundColor = `#fff`;
              }
              else{
                  document.getElementById("myNav").style.backgroundColor = `rgba(0,0,0,0)`;
              }
          }