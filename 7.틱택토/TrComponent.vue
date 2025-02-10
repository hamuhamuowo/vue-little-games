<template>
	<td-component
		v-for="(cellData, i) in rowData"
		:row-data="rowData"
		:cell-data="cellData"
		:cell-index="i"
		:row-index="rowIndex"
	></td-component>
</template>
<script>
import TdComponent from "./TdComponent.vue";
export default {
	components: {
		TdComponent,
	},
	props: {
		rowData: Array,
		rowIndex: Number,
	},
};
</script>
<style></style>
