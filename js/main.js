// PRELOADER

window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('close-preloader');
});

// SWITCHER

    var themeSwitcher = document.querySelector('.theme-switcher input');
    var currentTheme = localStorage.getItem('theme');
    
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeSwitcher.checked = true;
        }
    }
    
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {        
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }    
    }
    
    themeSwitcher.addEventListener('change', switchTheme, false);

// UNFOLDING FOOTER

const socialLinks = document.querySelector('.footer-social').addEventListener("click", function(){
    const socialMediaDiv = document.querySelector(".social-media");
    socialMediaDiv.classList.toggle("social-media-visible");
});

// TIMER

function countDown() {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    const stream = "Jun 18, 2021 18:00:00",
        countDown = new Date(stream).getTime(),

        // setInterval ustawia czas wykonywania sie funkcji
        interval = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / (second));
  
          // Zachowanie po skonczeniu odliczania
          if (distance < 0) {
            document.querySelector("#ended-counting").innerText = "Stream trwa! Wejdź na twitcha z linku poniżej";
            document.getElementById("days").innerText = 0;
            document.getElementById("hours").innerText = 0;
            document.getElementById("minutes").innerText = 0;
            document.getElementById("seconds").innerText = 0;
        }

        }, 1000)
    };

    countDown();


    // Nieudana proba stworzenia algorytmu dodajacego 2 lub 3 dni 4h po zakończeniu odliczania (mechanizm dobry, ale kafelski sie nie odswiezaja)
            // // Dodawanie dni po zakonczeniu
            // let newStreamDate = new Date(stream); 
            // document.querySelector("#ended-counting").innerText += "\n Stara data: " + newStreamDate;

            // if(newStreamDate.getHours()>18 || newStreamDate.getHours()<22){
            //     document.querySelector("#ended-counting").innerText = "Stream trwa! Wejdź na twitcha z linku poniżej";
            //     document.getElementById("days").innerText = 0,
            //     document.getElementById("hours").innerText = 0,
            //     document.getElementById("minutes").innerText = 0,
            //     document.getElementById("seconds").innerText = 0;
            // }

            // if(newStreamDate.getDay()==5){
            //     // +3 dni
            //     newStreamDate.setDate(newStreamDate.getDate()+3);
            // }else{
            //     // +2 dni
            //     newStreamDate.setDate(newStreamDate.getDate()+2);
            // }

            // newStreamDate.setHours(newStreamDate.getHours()+4);