<template>
  <div class="font-sans bg-grey-100 min-h-screen py-20 lg:py-40">
    <div class="[ content-wrapper ] px-4 mx-auto">
      <h2 class="text-6xl text-blue font-light text-center">Offices</h2>
      <div class="mt-16">
        <div
          :class="[
            '[ card-base ] py-6 mb-6 transition-all duration-300 bg-red text-white cursor-pointer',
            addForm && 'opacity-0',
          ]"
          @click="addForm = true"
        >
          <div
            class="flex items-center justify-between"
            @click="addForm = true"
          >
            <p>Add New Location</p>
            <plus />
          </div>
        </div>
        <form-component
          :form="form"
          :editMode="false"
          @close-form="addForm = false"
          :form-open="addForm"
        />
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
import FormComponent from "~/components/Form";
import Plus from "~/icons/Plus";

export default {
  components: {
    Card,
    FormComponent,
    Plus,
  },
  data() {
    return {
      offices,
      officesLength: 0,
      editedTab: null,
      addForm: false,
      form: {
        color: "yellow",
        title: "",
        address: "",
        name: "",
        position: "",
        email: "",
        phone: "",
        id: this.officesLength + 1,
      },
    };
  },
  methods: {
    addOffice(office) {
      this.offices.unshift(office);
    },
    deleteOffice(index) {
      this.offices.splice(index, 1);
    },
  },
  mounted() {
    this.officesLength = this.offices.length;
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
