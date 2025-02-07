<template>
	<div>
		<!--v-bind:class = :class-->
		<div id="screen" :class="state" @click="onClickScreen">{{ message }}</div>
		<template v-if="result.length">
			<!--v-show는 display:none으로 안보이게 해준다면, v-if는 태그 자체가 존재하지 않는 형태로 보이지 않게 한다-->
			<!--태그 하나의 유무는 전체 레이아웃에 영향을 끼칠 수 있으므로 각각 적재적소에 활용하도록 한다-->
			<div>
				평균 시간 :
				{{ average }}ms
			</div>
			<button @click="onReset">리셋</button>
		</template>
		<!--무의미한 div 태그 사용시에 template로 대체해도 된다. 템플릿은 없는셈 쳐지는 형태가 된다(해당 코드에서는 메세지-평균시간-리셋이 형제 요소가 된다)-->
		<!--주의 : 가장 상위 템플릿 태그 바로 밑에는 템플릿태그를 사용할 수 없다-->
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
	computed: {
		average() {
			// 일반 데이터를 가공해서 쓸 때 computed를 사용한다
			// 왜 굳이? 이 값은 캐싱되기 때문에. 예를들어 message값이 바뀌면 재실행되는데 계산식까지도 다 재실행되게 된다.
			// 만약 계산식이 오랜 시간이 걸리는 계산식이라고 한다면, message만 바꿨는데 계산식까지 오랜 시간 재실행되는 것. -> 이를 방지하기 위해 computed를 사용해서 캐싱된 값을 재사용
			return (
				this.result.reduce((acc, cur) => acc + cur, 0) / this.result.length || 0
			);
		},
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
