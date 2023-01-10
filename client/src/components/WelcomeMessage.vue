

<template>
  <div class="greetings">
    <h1 class="green">Pssssst..!</h1>
    <h3>
      Give me a gossip, trust me I keep it as a secret.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h1:hover {
  font-size: 3rem;
}

h3 {
  font-size: 1.3rem;
  color: var(vt-c-indigo);
  margin: 0.8rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
