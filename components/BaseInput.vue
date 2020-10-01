<template>
  <validation-provider :rules="rules" v-slot="{ errors, classes }">
    <div :class="['[ form-group ]', classes]">
      <label>{{ label }}</label>
      <div class="relative">
        <input
          v-model="model"
          type="text"
          :placeholder="placeholder || ''"
          v-mask="mask ? mask : undefined"
          @input="$emit('input', $event.target.value)"
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
    rules: {
      type: String,
      required: true,
    },
    vModel: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
    mask: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      focused: false,
      model: this.vModel,
    };
  },
  components: {
    ValidationProvider,
    Notification,
  },
};
</script>
