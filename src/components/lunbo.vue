<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="title" data-swiper-parallax="-130%">
          <h3>Adidas NMD</h3>
        </div>
        <div class="img-box">
          <img src="../assets/img1.jpg" style="transform:translateX(0);" />
        </div>
      </div>
      <div class="swiper-slide">
        <div class="title" data-swiper-parallax="-130%">
          <h3>Marconatto</h3>
        </div>
        <div class="img-box">
          <img src="../assets/img2.jpg" />
        </div>
      </div>
      <div class="swiper-slide">
        <div class="title" data-swiper-parallax="-130%">
          <h3>CHANEL</h3>
        </div>
        <div class="img-box">
          <img src="../assets/img3.jpg" />
        </div>
      </div>
    </div>
    <div class="button-prev button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
        <g id="arrow-svg-home">
          <g id="circ" class="cls-1">
            <circle cx="42" cy="42" r="40" class="cls-4" />
          </g>
          <g id="arrow">
            <path id="arrow-trg" d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z" />
          </g>
          <path id="line" d="M120,0H0" class="cls-3" />
        </g>
      </svg>
    </div>
    <!--左箭头-->
    <div class="button-next button">
      <svg id="ppp"  xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
        <g id="arrow-svg-home">
          <g id="circ" class="cls-1">
            <circle cx="42" cy="42" r="40" class="cls-4" />
          </g>
          <g id="arrow">
            <path
              id="arrow-trg"
              d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"
              class="cls-2"
            />
          </g>
          <path id="line" d="M120,0H0" class="cls-3" />
        </g>
      </svg>
    </div>
    <!--右箭头-->
  </div>
</template>




<script>
import Swiper from "./js/swiper.min.js";
export default {
  name: "lunbo",
  methods: {
    go() {
      var lock = false;
      var bgColor = [
        "rgb(179, 189, 196)",
        "rgb(180, 183, 166)",
        "rgb(140, 152, 187)",
      ]; //背景色
      var mySwiper = new Swiper(".swiper-container", {
        speed: 1300,
        allowTouchMove: false, //禁止触摸滑动
        parallax: true, //文字位移视差
        on: {
          transitionStart: function () {
            lock = true; //锁住按钮
            let slides = mySwiper.slides;
            let imgBox = slides.eq(mySwiper.previousIndex).find(".img-box"); //图片包装器
            let imgPrev = slides.eq(mySwiper.previousIndex).find("img"); //当前图片
            let imgActive = slides.eq(mySwiper.activeIndex).find("img"); //下一张图片
            let derection = mySwiper.activeIndex - mySwiper.previousIndex;
            mySwiper.$el.css("background-color", bgColor[mySwiper.activeIndex]); //背景颜色动画

            imgBox.transform("matrix(0.6, 0, 0, 0.6, 0, 0)");
            imgPrev.transition(1000).transform("matrix(1.2, 0, 0, 1.2, 0, 0)"); //图片缩放视差
            mySwiper.slides
              .eq(mySwiper.previousIndex)
              .find("h3")
              .transition(1000)
              .css("color", "rgba(255,255,255,0)"); //文字透明动画

            imgPrev.transitionEnd(function () {
              imgActive
                .transition(1300)
                .transform("translate3d(0, 0, 0) matrix(1.2, 0, 0, 1.2, 0, 0)"); //图片位移视差
              imgPrev
                .transition(1300)
                .transform(
                  "translate3d(" +
                    60 * derection +
                    "%, 0, 0)  matrix(1.2, 0, 0, 1.2, 0, 0)"
                );
            });
          },
          transitionEnd: function () {
            mySwiper.slides
              .eq(mySwiper.activeIndex)
              .find(".img-box")
              .transform(" matrix(1, 0, 0, 1, 0, 0)");
            let imgActive = mySwiper.slides
              .eq(mySwiper.activeIndex)
              .find("img");
            imgActive.transition(1000).transform(" matrix(1, 0, 0, 1, 0, 0)");
            mySwiper.slides
              .eq(mySwiper.activeIndex)
              .find("h3")
              .transition(1000)
              .css("color", "rgba(255,255,255,1)");

            imgActive.transitionEnd(function () {
              lock = false;
            });
            //第一个和最后一个，禁止按钮
            if (mySwiper.activeIndex == 0) {
              mySwiper.$el.find(".button-prev").addClass("disabled");
            } else {
              mySwiper.$el.find(".button-prev").removeClass("disabled");
            }

            if (mySwiper.activeIndex == mySwiper.slides.length - 1) {
              mySwiper.$el.find(".button-next").addClass("disabled");
            } else {
              mySwiper.$el.find(".button-next").removeClass("disabled");
            }
          },
          init: function () {
            // mySwiper.emit("transitionEnd"); //在初始化时触发一次transitionEnd事件
          },
        },
      });

      //不使用自带的按钮组件，使用lock控制按钮锁定时间
      mySwiper.$el.find(".button-next").on("click", function () {
        if (!lock) {
          mySwiper.slideNext();
        }
      });
      mySwiper.$el.find(".button-prev").on("click", function () {
        if (!lock) {
          mySwiper.slidePrev();
        }
      });
    },
  },
  mounted() {
    this.go(),
      function () {
        var e = document.createEvent("MouseEvents");
        e.initEvent("click", true, true); //这里的click可以换成你想触发的行为
        document.getElementById("ppp").dispatchEvent(e);
      }();
  },
};
</script>

<style>
@import "./css/swiper.min.css";
.swiper-container {
  width: 100%;
  height: 800px;
  background-color: rgb(179, 189, 196);
  transition: 1s background-color 1.3s;
}
.swiper-wrapper {
  transition-delay: 1s;
  transition-timing-function: cubic-bezier(0.5, 0, 0, 1);
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.title {
  transition-delay: 1s;
  z-index: 10;
}
.title h3 {
  font-weight: 700;
  font-size: calc(55px + 54 * ((53vw + 53vh) - 520px) / 820);
  letter-spacing: -1px;
  color: rgba(255, 255, 255, 0);
  -webkit-text-stroke: 2px #fff;
}
.img-box {
  width: 100%;
  height: 100%;
  position: absolute;
  transform: scale(0.6, 0.6);
  transition-duration: 1s;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.5, 0, 0, 1);
  opacity: 0.9;
  overflow: hidden;
}
.img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.2, 1.2) translateX(50%);
  transition-timing-function: cubic-bezier(0.5, 0, 0, 1);
  transition-property: transform;
}
.button-prev,
.button-next {
  transition: 0.5s;
  outline: none;
  position: absolute;
  width: 140px;
  z-index: 10;
  top: 65vh;
  transform: translateY(-34px);
  cursor: pointer;
}
.button-prev {
  left: 4vw;
}
.button-next {
  right: 4vw;
}
.button.disabled {
  opacity: 0.2;
  cursor: default;
}
#arrow-svg-home {
  transform: translateY(353px);
}
.button-next #arrow-svg-home {
  transform: translateY(353px) rotateY(180deg);
  transform-origin: 80px 0px 0px;
}
svg {
  transition: 0.5s;
}
.cls-1 {
  transition: 0.5s;
  opacity: 0.4;
  transform-origin: -20px 40px;
  opacity: 1;
}
.cls-4 {
  transition: 0.5s;
  stroke-width: 2px;
  stroke: #fff;
  fill: none;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  opacity: 0.4;
  transform-origin: 0px 0px 0px;
}
#arrow-trg {
  transition: 0.5s;
  fill: #fff;
  transform: rotateY(180deg) translate(-53px, 39px);
}
#line {
  transition: 0.5s;
  stroke: #fff;
  transform: translate(50px, 42px);
}
.button-prev:not(.disabled):hover svg {
  transform: translateX(-25px);
}
.button-next:not(.disabled):hover svg {
  transform: translateX(25px);
}
.button:not(.disabled):hover .cls-1 {
  transform: scale(1.1);
}
.button:not(.disabled):hover .cls-4 {
  stroke-dasharray: 2px;
  stroke-dashoffset: 2px;
  opacity: 1;
}
.button:not(.disabled):hover #arrow-trg {
  transform: rotateY(180deg) translate(-37px, 39px);
}
.button:not(.disabled):hover #line {
  transform: translate(35px, 42px) scaleX(0.33);
}
</style>