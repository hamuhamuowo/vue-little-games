<template>
	<table>
		<tr-component
			v-for="(rowData, i) in tableData"
			:row-data="rowData"
			:row-index="i"
			:key="rowData"
		></tr-component>
	</table>
</template>
<script>
import TrComponent from "./TrComponent.vue";
export default {
	props: {
		tableData: Array,
	},
	components: {
		TrComponent,
	},
};
</script>
<style></style>
