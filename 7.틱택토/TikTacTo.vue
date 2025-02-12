<template>
	<div>
		<div>{{ turn }}님의 턴</div>
		<table-component :table-data="tableData" />
		<div v-if="winner">{{ winner }}님의 승리 !</div>
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
			winner: "",
		};
	},
	methods: {
		onChangeData() {
			// Vue2
			// this.tableData[1][0] = 'X'; 인덱스로 접근해서 데이터를 변경하는 게 작동하지 않는다
			// this.$set(this.tableData[1], 0, 'X'); 이런식으로 접근해서 변경해야 했다 혹은 Vue.set()
		},
	},
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
