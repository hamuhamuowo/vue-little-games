<template>
	<tr>
		<td-component
			v-for="(cellData, i) in rowData"
			:row-data="rowData"
			:cell-data="cellData"
			:cell-index="i"
			:row-index="rowIndex"
			:key="i"
		></td-component>
	</tr>
</template>
<script>
import TdComponent from "./TdComponent.vue";
export default {
	components: {
		TdComponent,
	},
	data() {
		return {
			parent: "암유어파더",
		};
	},
	props: {
		rowData: Array,
		rowIndex: Number,
	},
};
</script>
<style></style>
