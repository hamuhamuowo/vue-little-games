<template>
	<div class="ball" :style="styleObject">{{ number }}</div>
</template>
<script>
export default {
	name: "LottoBall",
	props: {
		// readonly. props로 받은 값을 바꾸는건 금지된 행동
		// 굳이 바꾸려면 바꿀 수는 있지만 데이터 불일치 현상이 나타날 수 있으므로 값을 바꿀 때는 부모 값을 바꾼다
		number: Number,
	},
	data() {},
	computed: {
		styleObject() {
			// 기존 값을 수정할 때 컴퓨티드
			let background;
			if (this.number <= 10) {
				background = "red";
			} else if (this.number <= 20) {
				background = "orange";
			} else if (this.number <= 30) {
				background = "yellow";
			} else if (this.number <= 40) {
				background = "green";
			} else {
				background = "blue";
			}
			return {
				background,
			};
		},
	},
};
</script>
<style>
.ball {
	display: inline-block;
	border: 1px solid #000;
	border-radius: 20px;
	width: 40px;
	height: 40px;
	line-height: 40px;
	font-size: 20px;
	text-align: center;
	margin-right: 20px;
}
</style>
