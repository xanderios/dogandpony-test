<template>
  <div
    :class="[
      '[ new-tab-wrapper card-base ] bg-white text-grey-300',
      addTabMenu && 'is-active',
    ]"
  >
    <div class="flex items-center justify-between">
      <p class="font-bold">New Location</p>
      <button class="p-2 -m-2" @click="addTabMenu = false">
        <times class="text-grey-200" />
      </button>
    </div>

    <div class="text-white">
      <button
        :class="[
          `flex items-center justify-center rounded-lg py-12 w-full cursor-pointer transition-all duration-300 shadow-base mt-6 bg-${
            selectedColor || 'bg-grey-200'
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
              selectedColor === color.colorClass
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
      <form class="[ form-wrapper ]" @submit.prevent="onSubmit()">
        <input-base rules="required" label="Title *" :v-model="title" />
        <input-base
          rules="required"
          label="Enter the address *"
          :v-model="address"
        />
        <p class="text-xs text-blue uppercase mt-8">Contact information</p>
        <hr class="border-grey-100 mt-3" />
        <input-base
          rules="required|alpha_spaces"
          label="Full name *"
          :v-model="fullName"
        />
        <input-base
          rules="required"
          label="Job position *"
          :v-model="jobPosition"
        />
        <input-base
          rules="required|email"
          label="Email address *"
          placeholder="name@example.com"
          :v-model="email"
        />
        <input-base
          rules="required|min:14"
          placeholder="(xxx) xxx-xxxx"
          label="Phone *"
          mask="(###) ###-####"
          :v-model="fullName"
        />

        <button
          :class="[
            'rounded py-2 px-6 mt-6 bg-blue text-white transition-all duration-300',
            invalid && 'bg-grey-200 cursor-default',
          ]"
          :disabled="invalid"
        >
          Save
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>
