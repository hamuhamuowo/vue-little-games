<template>
	<div>
		<!--v-bind:class = :class-->
		<div id="screen" :class="state" @click="onClickScreen">{{ message }}</div>
		<div>
			<div>평균 시간 : {{}}</div>
			<button @click="onReset">리셋</button>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			result: [],
			state: "waiting",
			message: "클릭해서 시작하세요",
		};
	},
	methods: {
		onReset() {},
		onClickScreen() {
			if (this.state === "waiting") {
				this.state = "ready";
			} else if (this.state === "ready") {
				this.state = "now";
			} else if (this.state === "now") {
				this.state = "waiting";
			}
		},
	},
};
</script>
<style scoped>
/** 해당 컴포넌트에서만 이 스타일을 사용하고 싶다면 scoped 붙여준다 */
#screen {
	width: 300px;
	height: 200px;
	text-align: center;
	user-select: none;
}

#screen.waiting {
	background-color: aqua;
}

#screen.ready {
	background-color: red;
	color: white;
}

#screen.now {
	background-color: greenyellow;
}
</style>
