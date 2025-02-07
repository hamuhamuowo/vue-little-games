<template>
	<div>
		<!--v-bind:class = :class-->
		<div id="screen" :class="state" @click="onClickScreen">{{ message }}</div>
		<div>
			<div>
				평균 시간 :
				{{ result.reduce((acc, cur) => acc + cur, 0) / result.length || 0 }}ms
			</div>
			<button @click="onReset">리셋</button>
		</div>
	</div>
</template>
<script>
let startTime = 0; // 화면이 보여진 시간
let endTime = 0; // 그걸 보고 클릭한 시간
let timeout = null;

export default {
	data() {
		return {
			result: [],
			state: "waiting",
			message: "클릭해서 시작하세요",
		};
	},
	methods: {
		onReset() {
			this.result = [];
		},
		onClickScreen() {
			if (this.state === "waiting") {
				this.state = "ready";
				this.message = "초록색이 되면 클릭하세요 !";
				timeout = setTimeout(() => {
					this.state = "now";
					this.message = "클릭!";
					startTime = new Date();
				}, Math.floor(Math.random() * 1000) + 2000);
			} else if (this.state === "ready") {
				clearTimeout(timeout); // 기존 타임아웃을 멈춤 + 삭제
				this.state = "waiting";
				this.message = "너무 성급했어요! 다시 한 번 해보세요";
			} else if (this.state === "now") {
				endTime = new Date();
				this.state = "waiting";
				this.message = "클릭해서 시작하세요";
				this.result.push(endTime - startTime);
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
