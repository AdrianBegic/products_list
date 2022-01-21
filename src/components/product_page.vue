<template>
  <div id="container">
    <div class="section-fluid-main">
      <div class="section">
        <img :src="products.Image" alt="avatar" id="image" />
        <div class="info-wrap mob-margin">
          <h2>{{ products.Title }}</h2>
          <h4>${{ products.Price }}</h4>
          <div class="section-fluid">
            <input
              class="desc-btn"
              type="radio"
              id="desc-1"
              name="desc-btn"
              checked
            />
            <label for="desc-1">Description</label>
            <input class="desc-btn" type="radio" id="desc-2" name="desc-btn" />
            <label for="desc-2">Details</label>
            <div class="section-fluid desc-sec accor-1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
            <div class="section-fluid desc-sec accor-2">
              <div class="section-inline">
                <p><span>76</span>cm<br />Lenght</p>
              </div>
              <div class="section-inline">
                <p><span>68</span>cm<br />Width</p>
              </div>
              <div class="section-inline">
                <p><span>87</span>cm<br />Height</p>
              </div>
              <div class="section-inline">
                <p><span>10</span>kg<br />Weight</p>
              </div>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>

        <label class="color-6" for="color-6"></label>
        <div class="clearfix"></div>
        <div class="info-wrap">
          <a href="#" class="btn"
            ><i class="uil uil-shopping-cart icon"></i> Add To Cart</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "../firebaseDb";

export default {
  name: "productPage",
  props: {
    msg: String,
  },
  data() {
    return {
      products: {},
    };
  },
  created() {
    db.collection("products")
      .where("ID", "==", this.$route.params.id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.products = {
            key: doc.id,
            Price: doc.data().Price,
            Title: doc.data().Title,
            Image: doc.data().Image,
            ID: doc.data().ID,
          };
        });
      });
  },
};
</script>

<style scoped>
#container {
  display: flex;
  -webkit-display: box;
  -moz-display: box;
  -ms-display: flexbox;
  -webkit-display: flex;
  flex-wrap: wrap;
  height: fit-content;
  margin-top: 5%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.7;
  color: #000;
  background-color: #1f2029;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: none;
}
p {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
  color: #000;
  margin: 0;
}

#image {
  position: absolute;
  height: fit-content;
}
.section-fluid-main {
  position: relative;
  display: block;
  width: 100%;
  overflow: hidden;
}
.section {
  position: relative;
  max-width: calc(100% - 40px);
  width: 860px;
  height: fit-content;
  margin: 0 auto;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 100px 0;
}
.section-fluid {
  position: relative;
  width: 100%;
  display: block;
}

[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  visibility: hidden;
}
.color-btn:checked + label,
.color-btn:not(:checked) + label {
  position: relative;
  height: 40px;
  transition: all 200ms linear;
  border-radius: 4px;
  width: 40px;
  overflow: hidden;
  border: none;
  cursor: pointer;
  color: #000;
  margin-right: 10px;
  box-shadow: 0 12px 35px 0 rgba(16, 39, 112, 0.25);
  z-index: 10;
  background-position: center;
  background-size: cover;
  border: 3px solid transparent;
}
.color-btn:checked + label {
  border-color: #434343;
  transform: scale(1.1);
}

.img-wrap {
  position: absolute;
  top: 100px;
  left: 0;
  width: 500px;
  height: 410px;
  display: inline-block;
  z-index: 9;
  transition: all 550ms linear;
  transition-delay: 100ms;
  background-position: center top;
  background-size: 100%;
  background-repeat: no-repeat;
  opacity: 0;
}

.info-wrap {
  position: relative;
  margin-left: 500px;
  z-index: 10;
  display: block;
  text-align: left;
}
h2 {
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 34px;
  line-height: 1.2;
  color: #000;
  margin-top: 0;
  margin-bottom: 10px;
}
h4 {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 26px;
  line-height: 1.2;
  color: #000;
  margin-top: 0;
  margin-bottom: 30px;
}
h4 span {
  text-decoration: line-through;
  font-size: 20px;
  opacity: 0.6;
  padding-left: 15px;
}
h5 {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: #000;
  margin-top: 0;
  margin-bottom: 20px;
}
.desc-btn:checked + label,
.desc-btn:not(:checked) + label {
  position: relative;
  transition: all 200ms linear;
  display: inline-block;
  border: none;
  cursor: pointer;
  color: #ffeba7;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: #000;
  margin-right: 25px;
  opacity: 0.5;
}
.desc-btn:checked + label {
  opacity: 1;
}
.desc-btn:not(:checked) + label:hover {
  opacity: 0.8;
}

.desc-sec {
  padding-bottom: 30px;
  transition: all 250ms linear;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  transform: translateY(20px);
}
.desc-sec.accor-2 {
  position: relative;
  left: 0;
  width: 100%;
  z-index: 2;
}
#desc-1:checked ~ .desc-sec.accor-1 {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}
#desc-2:checked ~ .desc-sec.accor-2 {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}
.section-inline {
  position: relative;
  display: inline-block;
  margin-right: 20px;
}
.section-inline p span {
  font-size: 30px;
  line-height: 1.1;
}

.btn {
  position: relative;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 2;
  height: 48px;
  border-radius: 4px;
  width: 210px;
  letter-spacing: 1px;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  overflow: hidden;
  background-color: transparent;
  color: #000;
  box-shadow: 0 6px 15px 0 rgba(16, 39, 112, 0.15);
  transition: all 250ms linear;
  text-decoration: none;
  margin-top: 50px;
}

.btn:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  z-index: -1;
  background-color: #fff;
  border: solid 2px #000;
  transition: background-color 250ms 300ms ease;
}
.btn:hover {
  box-shadow: 0 12px 35px 0 rgba(16, 39, 112, 0.25);
  background-color: #000;
  color: #fff;
}

.clearfix {
  width: 100%;
}
.clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.logo {
  position: fixed;
  top: 25px;
  left: 25px;
  display: block;
  z-index: 1000;
  transition: all 250ms linear;
}
.logo img {
  height: 26px;
  width: auto;
  display: block;
  transition: filter 250ms 700ms linear;
}

@media screen and (max-width: 991px) {
  .section {
    margin: 0 auto;
    text-align: center;
    max-width: calc(100% - 40px);
    width: 370px;
  }
  label.first-color {
    margin-left: 0;
  }
  .info-wrap {
    margin-left: 0;
    width: 370px;
    margin: 0 auto;
    text-align: center;
  }
  .img-wrap {
    width: 375px;
    height: 308px;
    left: 50%;
    margin-left: -190px;
  }
  .mob-margin {
    margin-top: 320px;
  }
  .desc-btn:checked + label,
  .desc-btn:not(:checked) + label {
    margin-right: 15px;
    margin-left: 15px;
  }
  .color-btn:checked + label,
  .color-btn:not(:checked) + label {
    height: 40px;
    width: 40px;
    margin: 5px auto;
    text-align: center;
  }
  .section-inline {
    margin: 0 5px;
  }
}

@media screen and (max-width: 575px) {
  .section {
    width: 280px;
  }
  .info-wrap {
    width: 280px;
  }
  .color-btn:checked + label,
  .color-btn:not(:checked) + label {
    height: 30px;
    width: 30px;
  }
  .section-inline p span {
    font-size: 24px;
    line-height: 1.1;
  }
  .section-inline p {
    font-size: 14px;
  }
}
</style>
