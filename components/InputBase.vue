<template>
	<validation-provider :rules="rules" v-slot="{ errors, classes }">
		<div :class="['[ form-group ]', classes]">
			<label :for="label">{{ label }}</label>
			<div class="relative">
				<input
					class="relative w-full px-3 mt-1 py-2 text-sm shadow-micro border border-grey-300 transition-all duration-300"
					v-model="model"
					:id="label"
					type="text"
					:placeholder="placeholder || ''"
					v-mask="mask ? mask : undefined"
					@input="$emit('input', model)"
					@focus="focused = true"
					@blur="focused = false"
				/>
				<notification
					v-if="!focused"
					class="[ error-icon ] opacity-0 absolute text-red"
				/>
			</div>
			<p v-if="!focused" class="text-red text-xs mt-1">
				{{ errors[0] }}
			</p>
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
			required: true
		},
		rules: {
			type: String,
			required: true
		},
		label: {
			type: String,
			required: true
		},
		placeholder: {
			type: String,
			required: false
		},
		mask: {
			type: String,
			required: false
		}
	},
	data() {
		return {
			model: "",
			focused: false
		};
	},
	components: {
		ValidationProvider,
		Notification
	},
	watch: {
		initialValue() {
			this.model = this.initialValue;
		}
	}
};
</script>
