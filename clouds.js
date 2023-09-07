
const playClouds = () => {
  const cloud1 = new Lottie(".lottie-container", "photos/cloud.json");

  const cloud2 = new Lottie(".lottie-container1", "photos/cloud.json");

  const cloud3 = new Lottie(".lottie-container2", "photos/cloud.json");

  const cloud4 = new Lottie(".lottie-container3", "photos/cloud.json");

  const cloud5 = new Lottie(".lottie-container4", "photos/cloud.json");

  const cloud6 = new Lottie(".lottie-container5", "photos/cloud.json");



  cloud1.startAnimation(500);

  cloud2.startAnimation(2000);

  cloud3.startAnimation(3000);

  cloud4.startAnimation(1500);

  cloud5.startAnimation(1000);

  cloud6.startAnimation(2500);
};


const playArrow = () => {
const arrow = new Lottie(".lottie-container6", "photos/arrow.json");

arrow.startAnimation(3800);


}


const playIntro = () => {
  const nameArray = [
    "I",
    "´",
    "m",
    " ",
    "A",
    "l",
    "e",
    "x",
    "a",
    "n",
    "d",
    "r",
    "a",
    ".",
  ];
  const titleArray = [
    "a",
    " ",
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  const name = document.querySelector(".name");
  const subtitle = document.querySelector(".subtitle");

  console.log(subtitle);

  let delay = 800;

  let nameString = "";

  let titleString = "";

  let intro = async () => {
    try {
      await nameArray.forEach((letter) => {
        setTimeout(() => {
          nameString += letter;
          name.innerHTML = nameString;
        }, delay);

        delay += 80;
      });

      await titleArray.forEach((letter) => {
        setTimeout(() => {
          titleString += letter;
          subtitle.innerHTML = titleString;
        }, delay);

        delay += 60;
      });

      await playArrow();
    } catch (error) {
      console.error("Error loading Intro ", error);
    }
  };

  intro();
};

const startCarousel = () => {
  const carousel = document.querySelector(".carousel");

  const right = document.querySelector("#slide-arrow-next");

  const left = document.querySelector("#slide-arrow-prev");

  const slide = document.querySelector(".slide");

  const test = document.querySelector(".test");

  right.addEventListener("click", (e) => {
    console.log("click");
    const width = slide.clientWidth;
    carousel.scrollLeft += width;
  });

  left.addEventListener("click", (e) => {
    console.log("click");

    const width = slide.clientWidth;
    carousel.scrollLeft -= width;
  });
};

class CloudGame {
  constructor() {
    this.clouds = document.querySelectorAll(".cloud-click");

    console.log(this.clouds);

    this.value = this.clouds.length;

    console.log(this.value);
  }

  start() {

    const gameIntro = this.clouds[0];
    const text = document.createElement("p");
    text.innerHTML = "click me!";
    text.style.position = "relative";
    text.style.fontSize = "1vw";
    text.style.top = "60%";
    text.style.left = "2%";
    text.style.zIndex = "1";
    text.style.color = "lightblue";
    gameIntro.appendChild(text);



         ///////////// ///count///////////////////
        const count = document.createElement("div");
          

          const body = document.querySelector(".grid-container");

          const countText = document.createElement("h3");

          count.appendChild(countText);
          
          body.appendChild(count);
        ////////////////////////////////////////




    this.clouds.forEach((cloud) => {
      console.log("hey");

      cloud.addEventListener("click", (e) => {
        cloud.style.visibility = "hidden";
        this.value -= 1;
        console.log("remaining clouds" + this.value);
        console.log("gone");



        if (this.value < 5 && this.value > 0) {

          count.classList.add("count");
          countText.innerHTML = `${this.value}/5`;


        }

        if (this.value === 0) {
          console.log("blue skies!");
          count.remove();
          const div = document.querySelector(".grid-container");
          const sun = document.createElement("div");

          sun.style.width = "50%";
          sun.style.height = "100%";
          sun.style.position = "relative";
          sun.classList.add("sun");
          sun.classList.add("game");

          div.appendChild(sun);

          const sunLottie = new Lottie(".sun", "photos/sun.json");
          sunLottie.startAnimation(2000);

          sun.addEventListener("click", (e) => {
            location.reload();
          });
        }
      });
    });
  }
}

const letMeKnow = () => {
  fetch("https://mail-server-5cbw.vercel.app/portfolio", { method: "POST" })
    .then((res) => {
      console.log("Thanks for visiting my profile! :)");
    })
    .catch((err) => console.log("Oh well..."));
};


           