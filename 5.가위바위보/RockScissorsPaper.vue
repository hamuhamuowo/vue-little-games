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

const scores = {
	가위: 1,
	바위: 0,
	보: -1,
};

const computerChoice = (imgCoord) => {
	return Object.entries(rspCoords).find(function (v) {
		return v[1] === imgCoord;
	})[0];
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
		changeHand() {
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
		onClickButton(choice) {
			clearInterval(interval); // 바위가위보 잠깐 멈춰주기(승패 알기 위함)
			const myScore = scores[choice];
			const cpuScore = scores[computerChoice(this.imgCoord)];
			const diff = myScore - cpuScore;
			if (diff === 0) {
				this.result = "비겻슴다";
			} else if ([-1, 2].includes(diff)) {
				this.result = "이겻슴다";
				this.score++;
			} else {
				this.result = "졋슴다";
				this.score--;
			}
			setTimeout(() => {
				this.changeHand();
			}, 1000);
		},
	},
	created() {
		// 컴포넌트가 생성된 직후 (아직 화면에 나타나기 전)
	},
	mounted() {
		// 화면을 그릴 때 (DOM) => 화면 조작시, 화면에 표시되어야 접근이 가능하기 때문에 안전성을 위해서는 여기서!
		this.changeHand();
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
