<template>
	<div>
		<div id="computer" :style="computedStyleObject"></div>
		<div>
			<button @click="onClickButton('바위')">바위</button>
			<button @click="onClickButton('가위')">가위</button>
			<button @click="onClickButton('보')">보</button>
		</div>
		<div>{{ result }}</div>
		<div>현재 {{ score }}점</div>
	</div>
</template>
<script>
const rspCoords = {
	바위: "0",
	가위: "-142px",
	보: "-284px",
};
let interval = null;

export default {
	data() {
		return {
			imgCoord: rspCoords.바위,
			result: "",
			score: 0,
		};
	},
	computed: {
		computedStyleObject() {
			return {
				width: "142px",
				height: "200px",
				background: `url("https://en.pimg.jp/023/182/267/1/23182267.jpg") ${this.imgCoord} 0`,
			};
		},
	},
	methods: {
		onClickButton(choice) {
			this.imgCoord = rspCoords[choice];
		},
	},
	created() {
		// 컴포넌트가 생성된 직후 (아직 화면에 나타나기 전)
	},
	mounted() {
		// 화면을 그릴 때 (DOM) => 화면 조작시, 화면에 표시되어야 접근이 가능하기 때문에 안전성을 위해서는 여기서!
		interval = setInterval(() => {
			if (this.imgCoord === rspCoords.바위) {
				this.imgCoord = rspCoords.가위;
			} else if (this.imgCoord === rspCoords.가위) {
				this.imgCoord = rspCoords.보;
			} else if (this.imgCoord === rspCoords.보) {
				this.imgCoord = rspCoords.바위;
			}
		}, 100);
	},
	beforeUpdated() {},
	updated() {
		// 컴포넌트의 데이터가 변경된 후 (화면에 다시 렌더링된 후 호출된다 데이터가 변경될 때마다 호출됨 !)
	},
	beforeDestroy() {
		clearInterval(interval); // 화면에서 사라진 이후에도 계속되는 인터벌 방지(메모리 누수 방지)
	},
	destroyed() {
		// 컴포넌트가 DOM에서 완전히 제거된 후 (화면에서 사라짐)
	},
};
</script>
<style scoped></style>
