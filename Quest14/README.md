# Quest 14. 정적 분석: 타입스크립트와 린트 시스템

## Introduction
* 이번 퀘스트에서는 타입스크립트와 린트 시스템을 통해 코드에 대한 정적분석의 장점에 대해 알아보겠습니다.

## Topics
* Lint
  * ESLint
* TypeScript

## Resources
* [ESLint](https://eslint.org/)
* [TypeScript](https://www.typescriptlang.org/)

## Checklist
* 코드를 린팅하는 것의 장점은 무엇일까요?
>ESlint와 같은 정적탐색장치를 통해 코드를 분석한다는 것은 코드를 컴파일링 및 실행하기 전에 미리 디버깅한다는 의미이다.
>요구사항 누락,오해,오류, 오류처리 누락, 이외 코딩 실수들을 잡아준다
  * 린트 규칙은 어떻게 설정하는 것이 좋을까요? 너무 빡빡한 규칙과 너무 헐거운 규칙 사이에서 어떻게 밸런스를 잡아야 할까요?
  >진행하는 규모에 따른 관리가 달라지므로 진행하는 인원과 함께 규칙을 논의해야한다.
* 타입스크립트는 어떤 언어인가요?
>Javascript에 type을 지정해준 언어이다.
```const createNewBlock = (data: string): Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimestamp: number = getNewtimestamp();
    const newHash: string = Block.calculateBlockhash(newIndex, previousBlock.hash, newTimestamp, data); 
```
  * 타입스크립트를 사용했을 때 얻을 수 있는 장점은 무엇인가요?
  >타입스크립트는 컴파일 과정에서 오류를 탐색하는 정적 타입의 언어이다. 따라서 오류를 이른 시점에 확인할 수 있고 자료형을 구체적으로 지정해주기 때문에 실행속도가 빠르다는 장점이있다.
  * 타입스크립트를 사용하면서 타입이 없는 라이브러리나 프레임워크를 사용해야 할 경우에는 어떻게 해야 할까요?
  >라이브러리가 타입스크립트를 지원하지 않는다 해서 모든 파일을 자바스크립트로 바꿀 필요없이, 해당 지원이 안되는 부분만 javascript를 사용해도 무방하다.
  * any 타입을 남용하는 것은 왜 좋지 않을까요?
  >타임스크립트의 의미가 없어지기 때문에 사용하지 않는것이 좋다.
* 린트와 빌드 등의 과정을 개발 싸이클에서 편하게 수행하려면 어떻게 하는 것이 좋을까요?
>Prettier와 같이 별도의 확장팩을 설치하여 코드를 저장할때마다 자동으로 Lint검사를 실시하도록 설정해줄 수 있다.

## Quest
* 메모장 시스템에 린트 시스템을 적용해 보세요.
* 메모장 시스템을 타입스크립트 기반으로 수정해 보세요.
* `package.json` 파일의 `scripts` 항목을 이용하여 린트와 빌드 등의 작업을 스크립트화 해 보세요.

## Advanced
* 자바스크립트 코드에 대한 정적분석은 어떤 과정을 통해 이루어질까요?
  * 이러한 정적분석을 수행해 주는 핵심 역할을 하는 npm 패키지는 어떤 것이 있을까요?
