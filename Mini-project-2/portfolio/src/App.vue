<template>
  <div :class="appTheme" class="pt-0.5">
    <!-- App header -->
    <AppHeader />

    <!-- Render active component contents with vue transition -->
    <!-- <transition name="fade" mode="out-in">
      <router-view :theme="appTheme" />
    </transition> -->
    <router-view :theme="appTheme" v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- Scroll to top -->
    <back-to-top
      visibleoffset="500"
      right="30px"
      bottom="20px"
      class="shadow-lg"
    >
      <i data-feather="chevron-up"></i>
    </back-to-top>

    <!-- App footer -->
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/shared/AppHeader.vue";
import AppFooter from "./components/shared/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  data: () => {
    return {
      appTheme: localStorage.getItem("theme"),
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.vue-back-to-top {
  @apply p-2 bg-teal-600
                 hover:bg-teal-700
                 dark:hover:bg-cyan-300
                 dark:bg-cyan-100
                 text-white transition
                 dark:text-gray-800 

                duration-500
                ease-in-out
                transform
                hover:-translate-y-1 hover:scale-110;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}

.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.4s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
