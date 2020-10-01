import { extend, configure } from "vee-validate";
import { required, email, alpha_spaces, min } from "vee-validate/dist/rules";

extend("required", {
	...required,
	message: "This field cannot be empty"
});

extend("email", {
	...email,
	message: "Invalid email address"
});

extend("alpha_spaces", {
	...alpha_spaces,
	message: "This field must contain only letters and spaces"
});

extend("min", {
	...min,
	message: "This field must contain at least 10 digits"
});

configure({
	classes: {
		valid: "is-valid",
		invalid: "is-invalid"
	}
});
