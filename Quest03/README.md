# Quest 03. 자바스크립트와 DOM

## Introduction
* 자바스크립트는 현재 웹 생태계의 근간인 프로그래밍 언어입니다. 이번 퀘스트에서는 자바스크립트의 기본적인 문법과, 자바스크립트를 통해 브라우저의 실제 DOM 노드를 조작하는 법에 대하여 알아볼 예정입니다.

## Topics
* 자바스크립트의 역사
* 기본 자바스크립트 문법
* DOM API
  * `document` 객체
  * `document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()` 함수들
  * 기타 DOM 조작을 위한 함수와 속성들
* 변수의 스코프
  * `var`, `let`, `const`

## Resources
* [자바스크립트 첫걸음](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps)
* [자바스크립트 구성요소](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks)
* [Just JavaScript](https://justjavascript.com/)

## Checklist
* 자바스크립트는 버전별로 어떻게 변화하고 발전해 왔을까요?
> 자바스크립트는 1997년 ECMAScript1(ES1)이라는 이름으로 처음 나오고 이 후 ES2 -> ES3 -> ES4 -> ES5 -> ES6 의 버전으로 발전해 왔다
  * 자바스크립트의 버전들을 가리키는 ES5, ES6, ES2016, ES2017 등은 무엇을 이야기할까요?
  >앞서 말했듯이 ES는 ECMAScript를 의미하며 이후 버전을 의미하는 것이다
  * 자바스크립트의 표준은 어떻게 제정될까요?
  >ECMA(European Computer Manufacturers Association)에서 표준을 제정한다
* 자바스크립트의 문법은 다른 언어들과 비교해 어떤 특징이 있을까요?
>객체 기반의 스크립트 언어이고 동적이고 타입을 명시하지 않아아도 되는 인터프리터 언어이다.
> 객체 지향형 프로그래밍과 함수형 프로그래밍을 모두 표현할 수 있음
  * 자바스크립트에서 반복문을 돌리는 방법은 어떤 것들이 있을까요?
  >for: for(시작점;조건문;증감식)
  >for in: for(변수in객체)
  >for of: String Array Map Set DOM컬랙션 => 이터러블 순회용으로 사용 가능
  >> for(const item of 이터러블)
  >forEach(): Array.forEach(function)
  >while:while(조건식)
  >do while:do (반복실행) while(조건식)
  >Object: Object.{keys,values,entries}
* 자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?
>classList.add()나 remove()를 이용하는 방법
  * IE9나 그 이전의 옛날 브라우저들에서는 어떻게 해야 하나요?
  >IE9에서는 지원이 안되므로, Pollyfill을 이용(웹 개발에서 기능을 지원하지 않는 웹 브라우저 상의 기능을 구현하는 코드)
* 자바스크립트의 변수가 유효한 범위는 어떻게 결정되나요?
>전역 유효범위: 코드 내 어디서든 접근할 수 있음
>지역 유효범위: 함수 내에서 변수를 정의하고 접근할 수 있음
  * `var`과 `let`으로 변수를 정의하는 방법들은 어떻게 다르게 동작하나요?
  >'var'은 변수 재선언 가능하다는 점
  >'let'은 변수 재선언은 불가능 하지만 재할당이 가능하다는 점
* 자바스크립트의 익명 함수는 무엇인가요?
> 익명 함수는 함수명 대신 변수명에 함수 코드를 저장하는 구현 방식
  * 자바스크립트의 Arrow function은 무엇일까요?
  >function 키워드 대신 화살표 =>를 이용하여 간략한 방식으로 함수를 선언하는 방식
## Quest
* (Quest 03-1) 초보 프로그래머의 영원한 친구, 별찍기 프로그램입니다.
  * [이 그림](jsStars.png)과 같이, 입력한 숫자만큼 삼각형 모양으로 콘솔에 별을 그리는 퀘스트 입니다.
    * 줄 수를 입력받고 그 줄 수만큼 별을 그리면 됩니다. 위의 그림은 5를 입력받았을 때의 결과입니다.
  * `if`와 `for`와 `function`을 다양하게 써서 프로그래밍 하면 더 좋은 코드가 나올 수 있을까요?
  * 입력은 `prompt()` 함수를 통해 받을 수 있습니다.
  * 출력은 `console.log()` 함수를 통해 할 수 있습니다.
* (Quest 03-2) skeleton 디렉토리에 주어진 HTML을 조작하는 스크립트를 완성해 보세요.
  * 첫째 줄에 있는 사각형의 박스들을 클릭할 때마다 배경색이 노란색↔흰색으로 토글되어야 합니다.
  * 둘째 줄에 있는 사각형의 박스들을 클릭할 때마다 `enabled`라는 이름의 CSS Class가 클릭된 DOM 노드에 추가되거나 제거되어야 합니다.
* 구현에는 여러 가지 방법이 있으나, 다른 곳은 건드리지 않고 TODO 부분만 고치는 방향으로 하시는 것을 권장해 드립니다.

## Advanced
* Quest 03-1의 코드를 더 구조화하고, 중복을 제거하고, 각각의 코드 블록이 한 가지 일을 전문적으로 잘하게 하려면 어떻게 해야 할까요?
* Quest 03-2의 스켈레톤 코드에서 `let` 대신 `var`로 바뀐다면 어떤 식으로 구현할 수 있을까요?
