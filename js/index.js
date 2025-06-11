import { getScrollData } from "./commonScroll.js";

/* break points ##################### */
const desktop_Breakpoint = Number(1440);
const tablet_Breakpoint = Number(830);
const mobile_Breakpoint = Number(358);

const currentMidea = window.outerWidth;

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

/* con1 ##################### */
const con1Elem = document.getElementById("con1"),
  con1_imgBox = con1Elem.querySelectorAll(".con1_img");
const con1Elem_top = con1Elem.offsetTop, // con1 위치
  con1Elem_height = con1Elem.clientHeight, // con1 높이
  con1Elem_end = con1Elem_top + con1Elem_height; // con1 끝

/* 
  1. 현재 스크롤이 con1 위치에 다다르면 이벤트 시작
  2. 스크롤만큼 opacity와 translateY 값 변경
  2-1. 지나간 거리 = 현재 높이 - con1높이
  2-2. 백분율 = (con1높이 / 지나간 거리) * 100
*/

const con2Elem = document.getElementById("con2"),
  con2_conBox = con2Elem.querySelector(".conBox");
const con2Elem_top = con2Elem.offsetTop;

function content_scroll() {
  window.addEventListener("scroll", function () {
    const currentScroll = getScrollData(); // 현재 스크롤 위치

    // con1
    const event_start = con1Elem_top - 200, // 이벤트 시작
      progress = Math.floor(currentScroll + 300 - con1Elem_height),
      percent = progress / con1Elem_height;

    if (currentScroll > event_start) {
      con1_imgBox.forEach((imgBox) => {
        imgBox.style.opacity = percent.toFixed(1) * 2;
        imgBox.style.transform = `translateY(${60 - percent * 200}%)`;
      });
    }

    //con2
    if (currentScroll > con2Elem_top - 400) {
      con2_conBox.classList.add("on");
    }
  });
}
if (currentMidea > tablet_Breakpoint) {
  content_scroll();
}
