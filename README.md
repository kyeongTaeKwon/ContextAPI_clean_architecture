# ContextAPI Clean Arcitecture

node version 14.4.0

```
npm run start
```

```
yarn start
```

위의 명령어를 통해 localhost:3000 으로 로컬 환경에서 실행 가능합니다.

- Stacks
  - React를 통해 SPA 구현
  - React Context API를 통해 State management
  - Styled Component로 Style sheet 작성
  - TypeScript 로 정적 타입 분석

 <hr/>
 
리액트 Hooks의 contextAPI를 사용하여 상품 목록,장바구니 페이지와 간단한 CRUD 기능을 만들었습니다.

context API 자체가 굉장히 자유도가 높아 사용하기에 따라, 공식 문서에 나와 있는 단지 props drilling을 해결하는 
것 뿐 아니라 State mangement 에도 유용하게 사용할 수 있습니다.
그점을 이용해서 각종 클린 아키텍처 레퍼런스를 참고해서
 **Context API + Styled Components 클린 아키텍처** 프로젝트를 설계해보았습니다.!

contextAPI의 프로젝트 예제가 워낙 적어 Redux 프로젝트에 커스텀 훅스를 섞어서 설계했습니다. 
하지만 contextAPI도 Flux 패턴과 비슷해 redux 프로젝트에도 적용 가능 합니다.

클린 아키텍처 기반으로 만들긴 했지만 편의에 따라 조금씩 임의로 수정을 했습니다. 
나름대로 굉장히 신경써서 만들었지만 주니어 개발자인지라 부족한 점이 많습니다 .
(특히 스타일드 컴포넌트 부분은 수정할 점이 많습니다..ㅜㅜ)
언제든지 의견 남겨주시면 배우도록 하겠습니다

 <hr/>

## 아래의 레퍼런스 들을 참고했습니다.
junukim 님의 velog글:  https://velog.io/@_junukim/나만의-리액트-프로젝트-설계하기-3tk5rs8r52 

JustWrite 님의 medium글 : https://medium.com/@younghyun/clean-architecture-part-2-the-clean-architecture-3e2666cdce83

