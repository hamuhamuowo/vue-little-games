import { createApp } from "vue"; // 설치한 뷰를 가져온다
import TikTacTo from "./TikTacTo.vue"; // 웹팩은 자바스크립트만 합쳐주니까 이 파일보고 너 자바스크립트 아니잖아 ...? 상태 -> 에러

createApp(TikTacTo).mount("#root");
