/** @format */

class Lottie {
  constructor(containerSelector, jsonPath) {
    this.container = document.querySelector(containerSelector);
    this.animationOptions = {
      container: this.container,
      renderer: "svg",
      loop: true,
      autoplay: false,
      path: jsonPath,
    };

    this.loadAnimation();
  }

  loadAnimation() {
    if (typeof lottie !== "undefined") {
      this.animation = lottie.loadAnimation(this.animationOptions);
    } else {
      console.error("Lottie library is not loaded.");
    }
  }

  startAnimation(delay) {

    setTimeout(()=>{

    this.animation.play();

    },delay)
    


  }


}



