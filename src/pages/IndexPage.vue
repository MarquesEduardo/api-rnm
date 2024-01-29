<script setup>
import { BaseText } from "src/components/ui/base";
</script>

<template>
  <div class="home-hero h-screen flex column justify-center items-center">
    <BaseText tag="h1">
      Welcome to <span class="rick">Rick</span> and<span class="morty">
        Morty's</span
      >
      madness multiverse.
    </BaseText>

    <BaseText tag="p">
      Here you can find your favorite Character from any dimension, find out if
      he is alive, where he came from, and much more.
    </BaseText>

    <RouterLink to="/characters-list/1">
      <q-btn
        class="btn is-yellow"
        icon-right="arrow_forward"
        label="Find my Character"
      />
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.home-hero {
  height: 100vh;
  background-color: #121e2f;
  .text-h1 {
    text-align: center;
    margin-bottom: 50px;

    .rick {
      color: $blue;
    }

    .morty {
      color: $yellow;
    }
  }

  .text-p {
    font-size: 18px;
    text-align: center;
    margin-bottom: 50px;
    width: 100%;

    @media (min-width: $sm) {
      font-size: 20px;
    }

    @media (min-width: $md) {
      font-size: 25px;
      max-width: 900px;
    }

    @media (min-width: $lg) {
      font-size: 30px;
    }
  }
}
</style>
