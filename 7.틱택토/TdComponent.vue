<template>
	<td @click="onclickTd">{{ cellData }}</td>
</template>
<script>
export default {
	props: {
		cellData: String,
		rowIndex: Number,
		cellIndex: Number,
	},
	methods: {
		onclickTd() {
			const rootData = this.$root.$data;
			// 자식 컴포넌트가 부모컴포넌트, 최상위컴포넌트 데이터에 접근할 수 있다
			// console.log(this.$root.$data);
			// console.log(this.$parent.$data);
			rootData.tableData[this.rowIndex][this.cellIndex] = rootData.turn; // Vue3에서는 프록시 기반의 반응성 시스템 덕에 화면에 즉시 반영됨
			// 그러나 Vue2에서는 set을 사용해주어야 한다
			rootData.turn = rootData.turn === "O" ? "X" : "O"; // 최상위 컴포넌트의 데이터를 변경하는 로직
		},
	},
};
</script>
<style></style>
