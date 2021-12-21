<template>
  <div class="site">
   <img src="https://ski-lakeridge.com/wp-content/uploads/banner-skiing-2.jpg" alt="Ski" id="banner_img"> 
    <div class="wrapper">
      <div class="sidebar filters">
        <div class="block">
          <h3 class="title">TYPE</h3>
          <ul>
            <li><a href="#" class="checked">Lorem del Ces</a></li>
            <li><a href="#">Ispum ce Peupil</a></li>
            <li><a href="#">Lorem del Ces</a></li>
            <li><a href="#">Ispum ce Peupil</a></li>
          </ul>
        </div>
        <div class="block">
          <h3 class="title">Color</h3>
          <ul>
            <li><a href="#">Blue</a></li>
            <li><a href="#" class="checked">Charcoal</a></li>
            <li><a href="#">Green</a></li>
            <li><a href="#">Red</a></li>
          </ul>
        </div>
        <div class="block">
          <h3 class="title">Size</h3>
          <ul>
            <li><a href="#">Petite</a></li>
            <li><a href="#" class="checked">Medium</a></li>
            <li><a href="#">Large</a></li>
          </ul>
        </div>
      </div>
      <div class="product-grid">
       <productCard/>
      </div>
    </div>
  </div>
</template>

<script>
import productCard from './product_card'

export default {
  name: "Product_list",
  props: {
    msg: String,
  },
  components: {
    productCard,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.site {
  width: 100%;
  margin: 0 auto;
  margin-top: 3%;
  clear: both;
}

a,
a:hover,
a:active,
a:focus {
  color: #444;
  text-decoration: none;
}

#banner_img{
  width:100%;
  height: 400px;
  position: relative;
  bottom: 1px;
  z-index: -1;
}

.wrapper{
  margin: 0 auto;
  width:80%;
  
}

.sidebar,
.product-grid {
  float: left;
  margin: 0;
  padding: 20px;
  outline: none;
}
.sidebar {
  width: 20%;
  text-align: left;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}
.sidebar .block {
  display: block;
  margin-bottom: 40px;
}
.sidebar .block .title {
  text-transform: uppercase;
  font-size: 2em;
  font-weight: 300;
  padding: 4px 0;
  margin: 4px 0;
  border-bottom: 1px solid #000;
}
.sidebar .block ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.sidebar .block ul li {
  margin: 5px 0;
}
.sidebar .block ul li a {
  color: #aaa;
  text-decoration: none;
  font-size: 1em;
  font-weight: 300;
}


.product-grid {
  display: flex;
  width: 80%;
  height:80vh;
}
</style>
