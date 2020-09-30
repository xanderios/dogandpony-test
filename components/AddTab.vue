<template>
  <div
    :class="[
      '[ card-base ] py-6 transition-all duration-300',
      addTabMenu
        ? 'bg-white text-grey-300'
        : 'bg-red text-white cursor-pointer',
    ]"
  >
    <div
      :class="['absolute inset-0 block', addTabMenu && 'hidden']"
      @click="addTabMenu = true"
    />
    <div :class="['flex items-center justify-between', addTabMenu && 'hidden']">
      <p>Add New Location</p>
      <plus />
    </div>
    <div :class="[addTabMenu ? 'block' : 'hidden']">
      <div class="flex items-center justify-between">
        <p class="font-bold">New Location</p>
        <button class="p-2 -m-2" @click="addTabMenu = false">
          <times class="text-grey-200" />
        </button>
      </div>

      <button
        :class="[
          `flex items-center justify-center shadow-base mt-6 rounded-lg py-12 w-full text-white transition-all duration-300 bg-${
            selectedColor || 'bg-grey-200'
          }`,
          colorMenu && 'bg-grey-200',
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

      <div class="[ form-wrapper ]">
        <div class="[ form-group ]">
          <label>Title *</label>
          <input type="text" />
        </div>
        <div class="[ form-group ]">
          <label>Enter the address *</label>
          <input type="text" />
        </div>
        <p class="text-xs text-blue uppercase mt-8">Contact information</p>
        <hr class="border-grey-100 mt-3" />
        <div class="[ form-group ]">
          <label>Full name *</label>
          <input type="text" />
        </div>
        <div class="[ form-group ]">
          <label>Job Position *</label>
          <input type="text" />
        </div>
        <div class="[ form-group ]">
          <label>Email address *</label>
          <input type="text" />
        </div>
        <div class="[ form-group ]">
          <label>Phone *</label>
          <input type="text" />
        </div>

        <button
          class="rounded py-2 px-6 mt-6 bg-blue text-white"
          :disabled="false"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Plus from "~/icons/Plus";
import Times from "~/icons/Times";
import AngleDown from "~/icons/AngleDown";
import CheckCircle from "~/icons/CheckCircle";

export default {
  data() {
    return {
      addTabMenu: false,
      selectedColor: "blue",
      colorMenu: false,
    };
  },
  components: {
    Plus,
    Times,
    AngleDown,
    CheckCircle,
  },
};
</script>

<style>
.form-group {
  @apply mt-6;
}

.form-group input {
  @apply w-full;
  @apply px-3;
  @apply mt-1;
  @apply py-2;
  @apply shadow-micro;
  @apply border;
  @apply border-grey-300;
  border-radius: 0.25rem;
}
</style>
