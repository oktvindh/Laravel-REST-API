<template>
  <header>
    <div class="jumbotron" id="home">
      <div class="jumbotron-content">
        <img src="" alt="Logo" />
        <h2 class="variative-font">Indah Oktaviana</h2>
        <h4>Fullstack Web Developer Wanna Be</h4>
        <br />
        <span class="button">
          <a href="#about" rel="noopener noreferrer">more</a>
        </span>
      </div>
    </div>
    <!-- NAVBAR -->
    <nav id="main-nav">
      <ul>
        <li class="right">
          <a href="#about">Menu</a>
          <ul class="dropdown">
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/gallery">Gallery</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </li>
        <li><a href="#" class="left">oktvindh</a></li>
      </ul>
    </nav>
    <!-- NAVBAR END -->
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");

@import "../assets/style.css";
</style>
