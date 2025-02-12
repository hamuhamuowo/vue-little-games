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
			if (this.cellData) return; // 남이 이미 누른 칸을 누르면 중단

			const rootData = this.$root.$data;
			// 자식 컴포넌트가 부모컴포넌트, 최상위컴포넌트 데이터에 접근할 수 있다
			// console.log(this.$root.$data);
			// console.log(this.$parent.$data);
			rootData.tableData[this.rowIndex][this.cellIndex] = rootData.turn; // Vue3에서는 프록시 기반의 반응성 시스템 덕에 화면에 즉시 반영됨
			// 그러나 Vue2에서는 set을 사용해주어야 한다

			let win = false;
			if (
				rootData.tableData[this.rowIndex][0] === rootData.turn &&
				rootData.tableData[this.rowIndex][1] === rootData.turn &&
				rootData.tableData[this.rowIndex][2] === rootData.turn
			) {
				win = true;
			}
			if (
				rootData.tableData[0][this.cellIndex] === rootData.turn &&
				rootData.tableData[1][this.cellIndex] === rootData.turn &&
				rootData.tableData[2][this.cellIndex] === rootData.turn
			) {
				win = true;
			}
			if (
				rootData.tableData[0][0] === rootData.turn &&
				rootData.tableData[1][1] === rootData.turn &&
				rootData.tableData[2][2] === rootData.turn
			) {
				win = true;
			}
			if (
				rootData.tableData[0][2] === rootData.turn &&
				rootData.tableData[1][1] === rootData.turn &&
				rootData.tableData[2][0] === rootData.turn
			) {
				win = true;
			}

			if (win) {
				// win
				rootData.winner = rootData.turn;
				rootData.turn = "O";
				rootData.tableData = [
					["", "", ""],
					["", "", ""],
					["", "", ""],
				];
			} else {
				// lose
				let all = true;
				rootData.tableData.forEach((row) => {
					row.forEach((cell) => {
						if (!cell) {
							all = false;
						}
					});
				});
				if (all) {
					// 무승부
					rootData.winner = "";
					rootData.turn = "O";
					rootData.tableData = [
						["", "", ""],
						["", "", ""],
						["", "", ""],
					];
				} else {
					rootData.turn = rootData.turn === "O" ? "X" : "O"; // 최상위 컴포넌트의 데이터를 변경하는 로직
				}
			}
		},
	},
};
</script>
<style></style>
