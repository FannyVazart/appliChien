<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Kikamangé ?</h1>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/summary">Derniers jours</RouterLink>
      </nav>
    </div>
  </header>

<div class="corps">
  <RouterView />
</div>
</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);

}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

h1{
  text-align: center;
  font-family: "Monsieur La Doulaise", cursive;
  font-size: 100px;
  font-weight: bolder;
  color: #3db43d;
}

  nav {
    text-align: center;
    margin-left: -1rem;
    font-size: 3rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
