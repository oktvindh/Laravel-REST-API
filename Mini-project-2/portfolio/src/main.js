import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/app.css";

const appTheme = localStorage.getItem("theme");

// Check what is the active theme and change theme when user clicks on the theme button in header.
if (
  appTheme === "dark" &&
  document.querySelector("body").classList.contains("app-theme")
) {
  document.querySelector("body").classList.add("bg-primary-dark");
} else {
  document.querySelector("body").classList.add("bg-primary-light");
}
