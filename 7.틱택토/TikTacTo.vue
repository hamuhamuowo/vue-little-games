<template>
	<div>
		<table-component :table-data="tableData" />
		<div>{{ turn }}</div>
	</div>
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
				["", "", ""],
				["", "", ""],
				["", "", ""],
			],
			turn: "O",
		};
	},
	methods: {},
	mounted() {},
	beforeDestroy() {},
};
</script>

<style>
table {
	border-collapse: collapse;
}
td {
	border: 1px solid #000;
	width: 40px;
	height: 40px;
	text-align: center;
}
</style>
