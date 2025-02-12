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
			// 자식 컴포넌트가 부모컴포넌트, 최상위컴포넌트 데이터에 접근할 수 있다
			console.log(this.$root.$data);
			console.log(this.$parent.$data);
			this.$root.$data.turn = this.$root.$data.turn === "O" ? "X" : "O"; // 최상위 컴포넌트의 데이터를 변경하는 로직
		},
	},
};
</script>
<style></style>
