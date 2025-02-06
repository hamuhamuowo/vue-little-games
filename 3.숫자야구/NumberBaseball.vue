<template>
	<div>
		<h1>{{ result }}</h1>
		<form @submit.prevent="onSubmitForm">
			<!--v-on: 을 ＠로 변경가능, preventDefault()를 .prevent붙여서 축약 가능-->
			<input type="text" maxlength="4" v-model="value" ref="answer" />
			<button>입력</button>
		</form>
		<div>시도 : {{ tries.length }}</div>
		<ul>
			<li v-for="t in tries">
				<div>{{ t.try }}</div>
				<div>{{ t.result }}</div>
			</li>
		</ul>
	</div>
</template>
<script>
const getNumbers = () => {
	const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const array = [];
	for (let i = 0; i < 4; i++) {
		const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
		array.push(chosen);
	}
	return array;
};

export default {
	data() {
		return {
			answer: getNumbers(),
			tries: [], // 시도횟수
			value: "", // 입력 값
			result: "", // 정답/실패
		};
	},
	methods: {
		onSubmitForm() {
			if (this.value === this.answer.join("")) {
				this.tries.push({
					try: this.value,
					result: "홈런!",
				});
				this.result = "홈런";
				alert("새로운 게임이 시작됩니다");
				this.tries = [];
				this.answer = getNumbers();
			} else {
				// 틀렸을 때
				if (this.tries.length >= 9) {
					this.result = `10번 넘게 틀려서 실패! 정답은 ${this.answer.join(
						""
					)}이었습니다!`;
					alert("새로운 게임이 시작됩니다");
					this.answer = getNumbers();
					this.tries = [];
				}
				// 화면과 관련없는 건 보통의 변수로 사용 (화면과 관련있는 건 데이터)
				let strike = 0;
				let ball = 0;
				const answerArray = this.value.split("").map((v) => parseInt(v));
				for (let i = 0; i < 4; i++) {
					if (answerArray[i] === this.answer[i]) {
						// 숫자 자릿수 모두 정답
						strike++;
					} else if (this.answer.includes(answerArray[i])) {
						// 숫자만 정답
						ball++;
					}
				}
				this.tries.push({
					try: this.value,
					result: `${strike} 스트라이크 ${ball} 볼`,
				});
			}

			this.value = "";
			this.$refs.answer.focus();
		},
	},
};
</script>
<style></style>
