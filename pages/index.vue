<template>
  <div class="font-sans bg-grey-100 min-h-screen py-20 lg:py-40">
    <div
      :class="[
        'bg-white px-10 py-4 border-t-2 border-blue text-grey-300 fixed top-0 inset-x-0 z-50 flex justify-between transition-opacity duration-300',
        notificationActive
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none',
      ]"
    >
      <span></span>
      <div class="flex items-center">
        <check class="text-blue mr-5 h-6" />
        <p class="text-xs uppercase">The location has been updated.</p>
      </div>
      <button @click="notificationActive = false">
        <times />
      </button>
    </div>
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
          :office="form"
          :editMode="false"
          :form-active="addForm"
          :next-id="nextId"
          @close-form="addForm = false"
          @add-office="addOffice"
        />
        <card
          v-for="(office, index) in offices"
          :office="office"
          :key="office.id"
          :index="index"
          @save-office="saveOffice"
          @delete-office="deleteOffice"
        />
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
import Check from "~/icons/Check";
import Times from "~/icons/Times";

export default {
  components: {
    Card,
    FormComponent,
    Plus,
    Check,
    Times,
  },
  data() {
    return {
      offices,
      editedTab: null,
      addForm: false,
      notificationActive: false,
      deletedIds: [],
      form: {
        color: "yellow",
        title: "",
        address: "",
        name: "",
        position: "",
        email: "",
        phone: "",
        id: 1,
      },
    };
  },
  methods: {
    addOffice(office) {
      this.offices.unshift({ ...office });
      this.addForm = false;
      this.resetForm();
    },
    saveOffice(office, index) {
      this.offices[index] = office;
      this.notificationActive = true;
    },
    deleteOffice(index, id) {
      this.notificationActive = false;
      this.offices.splice(index, 1);
      this.deletedIds.unshift(id);
      this.notificationActive = true;
      setTimeout(() => {
        this.notificationActive = false;
      }, 5000);
    },
    nextId() {
      return this.deletedIds.pop() || this.offices.length + 1;
    },
    resetForm() {
      this.form = {
        color: "yellow",
        title: "",
        address: "",
        name: "",
        position: "",
        email: "",
        phone: "",
        id: this.nextId(),
      };
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
