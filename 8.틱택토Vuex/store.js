// 스토어 여러개를 만들어도 된다 !
import Vuex from "vuex";

export default new Vuex.Store({
	state: {}, // vue data과 비슷
	getters: {}, // vue computed과 비슷
	mutations: {}, // state 수정 (동기적) 뮤테이션을 이용해서 데이터를 바꾸는 것을 권장
	actions: {}, // 비동기 사용, 여러 뮤테이션을 연달아 실행
});
