<template>
  <div class="mb-4">
    <div :class="[`[ card-base ] bg-${card.color}`]" @click="toggleTab()">
      <div class="[ main-tab ]">
        <div>
          <p class="text-2xl font-bold">{{ card.title }}</p>
          <p>{{ card.address }}</p>
        </div>
        <angle-down
          :class="[
            'ml-4 transition-all duration-300',
            tabActive && 'transform rotate-180',
          ]"
        />
      </div>
    </div>
    <div class="shadow-base">
      <div :class="['[ info-tab ]', tabActive && '[ info-tab--active ]']">
        <div class="bg-white">
          <div
            :class="[
              'opacity-0 transition-opacity duration-300',
              tabActive && 'opacity-100',
            ]"
          >
            <p class="text-lg font-bold">{{ card.name }}</p>
            <p class="mt-2">{{ card.position }}</p>
            <p class="mt-2 text-blue">{{ card.email }}</p>
            <p class="mt-2">{{ card.phone }}</p>
            <hr class="border-grey-100 my-4" />
            <div class="flex justify-between items-center">
              <button class="flex items-center text-grey-200 text-xs uppercase">
                <pen class="mr-2" />
                <p>Edit</p>
              </button>
              <button class="flex items-center text-red text-xs uppercase">
                <trash class="mr-2" />
                <p>Delete</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AngleDown from "~/icons/AngleDown";
import Pen from "~/icons/Pen";
import Trash from "~/icons/Trash";

export default {
  data() {
    return {
      tabActive: false,
    };
  },
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  components: {
    AngleDown,
    Pen,
    Trash,
  },
  methods: {
    toggleTab() {
      this.tabActive = !this.tabActive;
    },
  },
};
</script>

<style scoped>
.card-base {
  @apply py-12;
  @apply text-white;
  @apply z-10;
  @apply cursor-pointer;
}

.main-tab {
  @apply flex;
  @apply items-center;
  @apply justify-between;
}

.info-tab {
  max-height: 0;
  @apply overflow-hidden;
  @apply z-0;
  @apply transition-all;
  @apply duration-300;
  @apply -mt-4;
}

.info-tab--active {
  max-height: 300px;
}

.info-tab > div {
  @apply px-6;
  @apply pt-8;
  @apply pb-6;
  @apply rounded-lg;
  @apply shadow-base;
}
</style>
