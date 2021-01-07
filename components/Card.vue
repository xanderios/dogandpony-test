<template>
	<div v-if="Object.keys(office).length">
		<div
			:class="[
				'[ card-wrapper ] opacity-100 transition-all duration-300',
				tabActive ? 'mb-6' : 'mb-10',
				editForm && '[ card-wrapper--unactive ]',
				office.deleted && '[ card-wrapper--deleted ]'
			]"
		>
			<div
				:class="[
					`[ card-base ] bg-${office.color} py-12 text-white z-10 cursor-pointer`
				]"
				@click="toggleTab()"
			>
				<div class="flex items-center justify-between">
					<div>
						<p class="text-2xl font-bold">{{ office.title }}</p>
						<p>{{ office.address }}</p>
					</div>
					<angle-down
						:class="[
							'ml-4 transition-all duration-300',
							tabActive && 'transform rotate-180'
						]"
					/>
				</div>
			</div>
			<div class="shadow-base">
				<div
					:class="[
						'[ info-tab ] overflow-hidden z-0 transition-all duration-300 -mt-4 text-grey-300',
						tabActive && '[ info-tab--active ]'
					]"
				>
					<div class="bg-white px-6 pt-8 pb-6 rounded-lg shadow-base">
						<div
							:class="[
								'opacity-0 transition-opacity duration-300',
								tabActive && 'opacity-100'
							]"
						>
							<p class="text-lg font-bold">{{ office.name }}</p>
							<p class="mt-2">{{ office.position }}</p>
							<p class="mt-2 text-blue">{{ office.email }}</p>
							<p class="mt-2">{{ office.phone }}</p>
							<hr class="border-grey-100 my-4" />
							<div class="flex justify-between items-center">
								<button
									class="flex items-center text-grey-200 text-xs uppercase"
									@click="editForm = true"
								>
									<pen class="mr-2" />
									<p>Edit</p>
								</button>
								<button
									@click="deleteOffice"
									class="flex items-center text-red text-xs uppercase"
								>
									<trash class="mr-2" />
									<p>Delete</p>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div>
			<form-component
				:office="office"
				:editMode="true"
				:form-active="editForm"
				@close-form="editForm = false"
				@save-office="saveOffice"
			/>
		</div>
	</div>
</template>

<script>
import FormComponent from "./Form";
import AngleDown from "~/icons/AngleDown";
import Pen from "~/icons/Pen";
import Trash from "~/icons/Trash";

export default {
	components: {
		FormComponent,
		AngleDown,
		Pen,
		Trash
	},
	props: {
		office: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			tabActive: false,
			editForm: false
		};
	},
	methods: {
		toggleTab() {
			this.tabActive = !this.tabActive;
		},
		deleteOffice() {
			this.office.deleted = true;
			setTimeout(() => {
				this.$emit("delete-office");
			}, 300);
		},
		saveOffice(office) {
			this.$emit("save-office", office);
			this.editForm = false;
			this.tabActive = true;
		}
	}
};
</script>

<style scoped>
.card-wrapper {
	max-height: 400px;
}
.card-wrapper--unactive {
	max-height: 0;
	@apply opacity-0;
	@apply overflow-hidden;
}
.card-wrapper--deleted {
	@apply transform;
	@apply -translate-x-12;
	@apply opacity-0;
}

.info-tab {
	max-height: 0;
}

.info-tab--active {
	max-height: 300px;
}
</style>
