<template>
  <div class="page even" id="gallery">
    <h2 class="variative-font">Gallery</h2>
    <div class="card-container">
      <div class="card" v-for="card in cards" :key="card.id">
        <img :src="card.img" />
        <div class="card-content">
          <p>{{ card.title }}</p>
          <button class="button">
            <a :href="card.link" target="_blank" rel="noopener noreferrer"
              >more</a
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      cards: [
        {
          // id: 1,
          // img: "https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          // title: "Landing Page e-commerce",
          // link: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import "../assets/style.css";
</style>
