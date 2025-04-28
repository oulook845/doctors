/* visual ##################### */
const visualElem = document.getElementById("visual");
const visual_bg = visualElem.querySelector(".vsl_bg"),
  visual_bgList = visual_bg.querySelectorAll("li");
const visual_textBox = visualElem.querySelector(".vsl_textBox"),
  visual_textBoxList = visual_textBox.querySelectorAll("li");
const visual_slideNav = visualElem.querySelector(".vsl_nav"),
  visual_slideNavList = visual_slideNav.querySelectorAll("span");

// visual 페이드 슬라이드
function vsl_fadeSlide() {
  let idx = 0;
  visual_bgList[idx].classList.add("on");
  visual_textBoxList[idx].classList.add("on");
  visual_slideNavList[idx].classList.add("on");

  function visualSlide_interval() {
    // 실제 반복하는 슬라이드
    visual_bgList.forEach((bgList) => {
      bgList.classList.remove("on");
    });
    visual_textBoxList.forEach((textBox) => {
        textBox.classList.remove("on");
    });
    visual_slideNavList.forEach((slideNav) => {
        slideNav.classList.remove("on");
    });

    if (idx < visual_bgList.length - 1) {
      idx++;
    } else {
      idx = 0;
    }
    visual_bgList[idx].classList.add("on");
    visual_textBoxList[idx].classList.add("on");
    visual_slideNavList[idx].classList.add("on");
  }
  let visualSlide_intervalId = setInterval(visualSlide_interval, 6000);
}
vsl_fadeSlide();
