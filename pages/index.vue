<template>
  <div class="font-sans bg-grey-100 min-h-screen py-20 lg:py-40">
    <div class="[ content-wrapper ] px-4 mx-auto">
      <h2 class="text-6xl text-blue font-light text-center">Offices</h2>
      <div class="mt-16">
        <add-tab />
        <transition-group name="list">
          <card
            v-for="(office, index) in offices"
            :office="office"
            :key="office.id"
            :index="index"
            @delete-office="deleteOffice"
          />
        </transition-group>
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
import offices from "~/data/offices.json";

import Card from "~/components/Card";
import AddTab from "~/components/AddTab";

export default {
  components: {
    Card,
    AddTab,
  },
  data() {
    return {
      offices,
    };
  },
  methods: {
    deleteOffice(index) {
      this.offices.splice(index, 1);
    },
  },
  computed: {
    officesLength() {
      return this.offices.length;
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

.list-enter-active,
.list-leave-active {
  @apply transition-all;
  @apply duration-300;
}

.list-enter,
.list-leave-active {
  @apply opacity-0;
  @apply transform;
  @apply -translate-x-16;
}

.content-wrapper {
  max-width: 360px;
}
</style>
