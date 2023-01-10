<script setup>
import WelcomeMessage from './components/WelcomeMessage.vue'
import Home from './components/Home.vue'
</script>

<template>
  <header>
    <img alt="Secret" class="logo" src="https://blog.mediasilo.com/hubfs/Feat%20image_Digiday.jpg" width="420" />
    <div class="wrapper">
      <WelcomeMessage />
    </div>
  </header>

  <main>
    <Home />
  </main>
</template>

<style scoped>

header {
  line-height: 1.5;
  background-color: black;
}

.logo {
  display: flex;
  margin: 2rem auto 2rem;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
