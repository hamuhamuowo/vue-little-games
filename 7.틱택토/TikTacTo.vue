<template>
	<table-component :table-data="tableData" />
</template>

<script>
import TableComponent from "./TableComponent.vue";
export default {
	components: {
		TableComponent,
	},
	data() {
		return {
			tableData: [
				["1", "2", "3"],
				["4", "5", "6"],
				["7", "8", "9"],
			],
		};
	},
	methods: {},
	mounted() {},
	beforeDestroy() {},
};
</script>

<style scoped></style>
