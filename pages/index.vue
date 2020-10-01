<template>
  <div class="font-sans bg-grey-100 py-20 lg:py-40">
    <div class="[ content-wrapper ] px-4 mx-auto">
      <h2 class="text-6xl text-blue font-light text-center">Offices</h2>
      <div class="mt-16 grid grid-cols-1 row-gap-6">
        <add-tab />
        <card v-for="card in cards" :card="card" :key="card.id" />
        <div class="text-center">
          <p class="text-grey-200">This project is for test purpose only.</p>
          <p class="text-blue text-xs uppercase mt-2">
            www.dogandponystudios.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cards from "~/data/cards.json";

import Card from "~/components/Card";
import AddTab from "~/components/AddTab";

export default {
  components: {
    Card,
    AddTab,
  },
  data() {
    return {
      cards,
    };
  },
  computed: {
    cardsLength() {
      return this.cards.length;
    },
  },
};
</script>

<style>
html,
body,
#__nuxt,
#__layout {
  min-height: 100%;
  @apply h-full;
}

.card-base {
  @apply relative;
  @apply px-6;
  @apply rounded-lg;
  @apply shadow-base;
}

.content-wrapper {
  max-width: 360px;
}
</style>
