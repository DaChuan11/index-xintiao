<template>
  <div style="position: relative;">
    <div class="img1 imgurl"></div>
    <div id="top">
      <div></div>
      <div class="divnav">
        <div class="hove navwenzi" @mouseenter="changetex(0)">--产品介绍--</div>
        <div class="navwenzi" @mouseenter="changetex(1)">--给患者--</div>
        <div class="navwenzi" @mouseenter="changetex(2)">--给供应商--</div>
        <div class="navwenzi" @mouseenter="changetex(3)">--给供应商--</div>
        <div class="navwenzi" @mouseenter="changetex(4)">--联系我们--</div>
        <div class="navwenzi" @mouseenter="changetex(5)">--给患者--</div>
      </div>
      <div></div>
    </div>
    <div id="bottom">
      <div style="display:inline-block">
        <div
          class="listnav"
          v-for="(item,i) in showtex"
          :key="i"
          @mouseenter="changecol(i)"
        >{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "titleF",
  data() {
    return {
      tex: [
        ["天马0", "流星0", "泰罗0", "迪迦0"],
        ["天马1", "流星1", "泰罗1", "迪迦1", "德玛西亚", "啦啦啦啦"],
        ["天马2", "流星2", "泰罗2", "迪迦2", "德玛西亚", "啦啦啦啦"],
        ["天马3", "流星3", "泰罗3", "迪迦3", "德玛西亚", "啦啦啦啦"],
        ["天马4", "流星4", "泰罗4", "迪迦4", "德玛西亚", "啦啦啦啦"],
        ["天马5", "流星5", "泰罗5", "迪迦5", "德玛西亚", "啦啦啦啦"],
      ],
      showtex: ["天马0", "流星0", "泰罗0", "迪迦0"],
      panduan: true,
    };
  },
  methods: {
    changetex(temp) {
      this.showtex = this.tex[temp];
      let doc = document.querySelectorAll(".navwenzi");
      for (let i = 0; i < 6; i++) {
        doc[i].classList.remove("hove");
        if (i == temp) {
          doc[i].classList.add("hove");
        }
      }
    },
    changecol(temp) {
      let doc = document.querySelectorAll(".listnav");
      for (let i = 0; i < doc.length; i++) {
        doc[i].classList.remove("colorc");
        if (i == temp) {
          doc[i].classList.add("colorc");
        }
      }
    },
    scroll1() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop >= 100 && this.panduan) {
        let doc = document.querySelector(".imgurl");
        let temp = document.querySelector("#bottom");
        temp.classList.add("bott");
        doc.classList.remove("img1");
        doc.classList.add("img1flex");
        this.panduan = !this.panduan;
      }
      if (scrollTop < 100 && !this.panduan) {
        this.panduan = !this.panduan;
        let doc = document.querySelector(".imgurl");
        doc.classList.remove("img1flex");
        doc.classList.add("img1");

        let temp = document.querySelector("#bottom");
        temp.classList.remove("bott");
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scroll1);
  },
};
</script>

<style>
.bott {
  position: fixed;
  top: 0;
  left: 0;
}
.img1flex {
  position: fixed;
  top: 30px;
  left: 40px;
  animation: 1.5s my4 linear forwards;
}
@keyframes my4 {
  0% {
    top: -10px;
  }
  25% {
    transform: rotate(60deg);
    top: 20px;
  }
  60% {
    transform: rotate(-60deg);
    top: 20px;
  }
  85% {
    top: 10px;
    transform: rotate(30deg);
  }
  95% {
    top: 30px;
    transform: rotate(-30deg);
  }
  100% {
    top: 20px;
    transform: rotate(0deg);
  }
}
.imgurl {
  width: 40px;
  height: 40px;
  background-image: url("../assets/logo.png");
  background-size: 100%;
  z-index: 50;
}
.img1 {
  position: absolute;
  top: 22px;
  left: 40px;
}
.listnav {
  padding: 25px;
  color: whitesmoke;
  display: inline-block;
}

.checked::before {
  width: 80%;
  height: 5px;
  content: "";
  position: absolute;
  bottom: -5px;
  left: 12%;
}
.hove {
  position: relative;
  animation: 0.15s myfirst linear forwards;
}

.hove::before {
  width: 80%;
  height: 5px;
  background: #65c69a;
  content: "";
  position: absolute;
  left: 11%;
  animation: 0.15s mysec linear forwards;
}
.colorc {
  animation: 0.15s my3 linear forwards;
}
@keyframes my3 {
  0% {
    color: black;
  }
  100% {
    color: #65c69a;
  }
}
@keyframes myfirst {
  0% {
    color: black;
  }
  100% {
    color: #65c69a;
  }
}
@keyframes mysec {
  0% {
    bottom: -10px;
  }
  100% {
    bottom: -5px;
  }
}
.navwenzi {
  float: left;
  font-size: 28px;
  padding: 25px;
}
.divnav {
  width: 1210px;
  /* margin-left: 15%; */
  height: 100px;
}

#top {
  height: 100px;
  width: 100%;
  position: relative;
  display: -webkit-flex;
  display: -moz-flex;
  display: -o-flex;
  display: -ms-flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: blueviolet; */
}
#bottom {
  height: 80px;
  width: 100%;
  background-color: black;
}
</style>