<template>
  <div>
    <div
      :class="[
        '[ new-tab-wrapper card-base ] bg-white text-grey-300',
        formOpen && 'is-active',
      ]"
    >
      <div class="flex items-center justify-between">
        <p v-if="editMode" class="font-bold">Edit Location</p>
        <p v-else class="font-bold">New Location</p>
        <button class="p-2 -m-2" @click="$emit('close-form')">
          <times class="text-grey-200" />
        </button>
      </div>
      <div class="text-white">
        <button
          :class="[
            `flex items-center justify-center rounded-lg py-12 w-full cursor-pointer transition-all duration-300 shadow-base mt-6 bg-${
              form.color || 'bg-grey-200'
            }`,
          ]"
          @click="colorMenu = !colorMenu"
        >
          <p>Select Color</p>
          <angle-down
            :class="[
              'w-3 stroke-2 ml-2 transition-transform duration-300',
              colorMenu && 'transform rotate-180',
            ]"
          />
        </button>
        <div :class="['[ color-menu ]', colorMenu && '[ color-menu--active ]']">
          <button
            :class="[`[ colorbox ] bg-${color.colorClass}`]"
            v-for="color in colors"
            :id="color.id"
            :key="color.id"
            @click="onColorChange(color.colorClass)"
            :tabindex="!colorMenu && -1"
          >
            <div
              :class="[
                'transition-opacity duration-300',
                form.color === color.colorClass
                  ? 'opacity-1 cursor-default'
                  : 'opacity-0',
              ]"
            >
              <div class="absolute inset-0 bg-white opacity-25" />
              <check class="[ selected-icon ] text-white absolute" />
            </div>
          </button>
        </div>
      </div>
      <ValidationObserver v-slot="{ invalid, reset }">
        <form class="[ form-wrapper ]" @submit.prevent="handleSubmit()">
          <input-base
            rules="required"
            label="Title *"
            @input="
              (v) => {
                form.title = v;
              }
            "
          />
          <input-base
            rules="required"
            label="Enter the address *"
            @input="
              (v) => {
                form.address = v;
              }
            "
          />
          <p class="text-xs text-blue uppercase mt-8">Contact information</p>
          <hr class="border-grey-100 mt-3" />
          <input-base
            rules="required|alpha_spaces"
            label="Full name *"
            @input="
              (v) => {
                form.name = v;
              }
            "
          />
          <input-base
            rules="required"
            label="Job position *"
            @input="
              (v) => {
                form.position = v;
              }
            "
          />
          <input-base
            rules="required|email"
            label="Email address *"
            placeholder="name@example.com"
            @input="
              (v) => {
                form.email = v;
              }
            "
          />
          <input-base
            rules="required|min:14"
            placeholder="(xxx) xxx-xxxx"
            label="Phone *"
            mask="(###) ###-####"
            @input="
              (v) => {
                form.phone = v;
              }
            "
          />
          <button
            :class="[
              'rounded py-2 px-6 mt-6 bg-blue text-white transition-all duration-300',
              invalid && 'bg-grey-200 cursor-default',
            ]"
            type="submit"
            :disabled="invalid"
          >
            Save
          </button>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import InputBase from "./InputBase";

import Times from "~/icons/Times";
import AngleDown from "~/icons/AngleDown";
import Check from "~/icons/Check";

export default {
  components: {
    InputBase,
    ValidationObserver,
    Times,
    AngleDown,
    Check,
  },
  props: {
    formOpen: {
      type: Boolean,
      required: true,
      default: false,
    },
    form: {
      type: Object,
      required: true,
    },
    editMode: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      colorMenu: false,
      colors: [
        { colorClass: "yellow", id: 1 },
        { colorClass: "red", id: 2 },
        { colorClass: "blue", id: 3 },
        { colorClass: "grey-200", id: 4 },
        { colorClass: "grey-300", id: 5 },
      ],
    };
  },
  methods: {
    onColorChange(color) {
      this.form.color = color;
      this.colorMenu = false;
    },
    handleSubmit() {
      this.$emit("submit-form", this.form);
      this.formOpen = false;
    },
  },
};
</script>

<style>
.new-tab-wrapper {
  max-height: 0;
  @apply overflow-hidden;
  @apply py-0;
  @apply opacity-0;
  @apply pointer-events-none;
  @apply cursor-default;
  @apply transform;
  @apply translate-y-0;
  @apply transition-all;
  @apply duration-300;
}

.new-tab-wrapper.is-active {
  max-height: 1100px;
  @apply py-6;
  @apply opacity-100;
  @apply pointer-events-auto;
  @apply -translate-y-6;
  @apply mt-6;
  @apply cursor-auto;
}

.form-group {
  @apply mt-6;
}

.form-group input {
  @apply relative;
  @apply w-full;
  @apply px-3;
  @apply mt-1;
  @apply py-2;
  @apply shadow-micro;
  @apply border;
  @apply border-grey-300;
  border-radius: 0.25rem;
  @apply transition-all;
  @apply duration-300;
}

.form-group input:focus {
  @apply outline-none;
  @apply border-blue;
}

.form-group.is-invalid input {
  @apply border-red;
  @apply text-red;
}

.form-group.is-invalid input:focus {
  @apply border-blue;
  @apply text-grey-300;
}

.color-menu {
  max-height: 0;
  @apply mt-2;
  @apply overflow-hidden;
  @apply transition-all;
  @apply duration-300;
}

.color-menu--active {
  max-height: 700px;
}

.color-menu .selected-icon {
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.colorbox {
  @apply relative;
  @apply rounded-lg;
  @apply py-16;
  @apply mt-2;
  @apply w-full;
  @apply cursor-pointer;
  @apply transition-all;
  @apply duration-300;
}

.error-message {
  @apply text-red;
  @apply text-xs;
  @apply mt-1;
}

.error-icon {
  right: 3%;
  top: 30%;
  @apply opacity-0;
  @apply absolute;
  @apply text-red;
}

.form-group.is-invalid .error-icon {
  @apply opacity-100;
}
</style>
