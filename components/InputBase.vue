<template>
  <validation-provider :rules="rules" v-slot="{ errors, classes }">
    <div :class="['[ form-group ]', classes]">
      <label :for="label">{{ label }}</label>
      <div class="relative">
        <input
          v-model="model"
          :id="label"
          type="text"
          :placeholder="placeholder || ''"
          v-mask="mask ? mask : undefined"
          @input="$emit('input', model)"
          @focus="focused = true"
          @blur="focused = false"
        />
        <notification v-if="!focused" class="[ error-icon ]" />
      </div>
      <p v-if="!focused" class="[ error-message ]">{{ errors[0] }}</p>
    </div>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import Notification from "~/icons/Notification";

export default {
  props: {
    initialValue: {
      type: String,
      required: true,
    },
    rules: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    mask: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      model: "",
      focused: false,
    };
  },
  components: {
    ValidationProvider,
    Notification,
  },
  watch: {
    initialValue() {
      this.model = this.initialValue;
    },
  },
};
</script>
