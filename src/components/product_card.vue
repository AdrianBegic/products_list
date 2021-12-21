<template>
  <div id="container">
    <div id="content" v-for="products in products" :key="products.key">
      <img :src="products.Image" alt="avatar" id="image" />
      <h1>{{ products.Title }}</h1>
      <h2>{{ products.Price }}</h2>
    </div>
  </div>
</template>

<script>
import { db } from "../firebaseDb";

export default {
  name: "productCard",
  props: {
    msg: String,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    db.collection("products").onSnapshot((snapshotChange) => {
      this.products = [];
      snapshotChange.forEach((doc) => {
        this.products.push({
          key: doc.id,
          Price: doc.data().Price,
          Title: doc.data().Title,
          Image: doc.data().Image,
        });
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
}

#content {
  margin: 20px;
  background-color: #fff;
  width: 300px;
  height: fit-content;
  text-align: center;
  cursor: pointer;
}

#image {
  width: 100%;
  height: 500px;
}
</style>
v-for="products in product" :key="product.key"
