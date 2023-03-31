# Quest 02. CSS의 기초와 응용

## Introduction
* CSS는 Cascading StyleSheet의 약자입니다. 웹브라우저에 표시되는 HTML 문서의 스타일을 지정하는 (거의) 유일하지만 다루기 쉽지 않은 언어입니다. 이번 퀘스트를 통해 CSS의 기초적인 레이아웃 작성법을 알아볼 예정입니다.

## Topics
* CSS의 기초 문법과 적용 방법
  * Inline, `<style>`, `<link rel="stylesheet" href="...">`
* CSS 규칙의 우선순위
* 박스 모델과 레이아웃 요소
  * 박스 모델: `width`, `height`, `margin`, `padding`, `border`, `box-sizing`
  * `position`, `left`, `top`, `display`
  * CSS Flexbox와 Grid
* CSS 표준의 역사
* 브라우저별 Developer tools

## Resources
* [MDN - CSS](https://developer.mozilla.org/ko/docs/Web/CSS)
* [Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
* [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [그리드 레이아웃과 다른 레이아웃 방법과의 관계](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout/%EA%B7%B8%EB%A6%AC%EB%93%9C_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83%EA%B3%BC_%EB%8B%A4%EB%A5%B8_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83_%EB%B0%A9%EB%B2%95%EA%B3%BC%EC%9D%98_%EA%B4%80%EA%B3%84)

## Checklist
* CSS를 HTML에 적용하는 세 가지 방법은 무엇일까요?
>1.내부 스타일 시트: html코드 안에 head부분에 직접 style을 작성하는 방법
>2. 외부 스타일 시트: 외부에 css파일을 만들어서 link를 통해 css코드를 불러오는 방법
>3. 인라인 스타일: html태그에 직접 스타일 속성을 추가하는 방법
  * 세 가지 방법 각각의 장단점은 무엇일까요?
  >내부 스타일 시트
  >> 장점: 한 html 파일 안에서 스타일을 작성할 수 있어 파일 관리에 용이
  >> 단점: 다른 html에 공유할 수 없음, 가독성 문제
  >외부 스타일 시트
  >> 장점: 여러 html파일에 스타일 적용 가능, 외부에 스타일 파일이 있어 관리와 가독성에 용이
  >> 단점: 스타일 파일을 따로 관리해야하기에 작업시간 증가, http요청이 늘어나기 때문에 로딩속도 저하 가능
  >인라인 스타일
  >> 장점: 특정 태그에만 스타일을 적용하므로 다른 요소에 영향x
  >> 단점: html태그에 스타일이 각 지정되어있기 때문에 가독성이 떨어지며 코드 반복의 우려가 있음
* CSS 규칙의 우선순위는 어떻게 결정될까요?
>!important 키워드가 들어간 속성 -> 인라인 스타일 -> ID선택자 ->클래스,속성,가상 클래스 선택자 -> 태그 선택자의 우선순위
>인라인 스타일 > 내부 스타일 시트 > 외부 스타일 시트
* CSS의 박스모델은 무엇일까요? 박스가 화면에서 차지하는 크기는 어떻게 결정될까요?
>웹 페이지의 요소들이 사각형 박스로 표현 되는 방식으로 content,padding,border,margin이 사용되며 이것들은 width,height로 계산함
* `float` 속성은 왜 좋지 않을까요?
>다른 요소와 겹치거나 레이아웃 문제를 일으킬 수 있음 따라서 felxbox나 grid를 사용하는 것을 권장
* Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요?
>felxbox:1차원 레이아웃을 만들 때 사용
>grid: 2차원 레이아웃을 만들 때 사용
>flexbox는 간단한 레이아웃을 만드는 데 사용하며 grid는 보다 복잡한 레이아웃을 만드는데 이용
* CSS의 비슷한 요소들을 어떤 식으로 정리할 수 있을까요?
>padding과 margin 요소의 크기와 간격을 조절하며  background-color과 border을 이용하여 구분 가능
## Quest
* Quest 01에서 만들었던 HTML을 바탕으로, [이 그림](screen.png)의 레이아웃과 CSS를 최대한 비슷하게 흉내내 보세요. 꼭 완벽히 정확할 필요는 없으나 align 등의 속성은 일치해야 합니다.
* **주의사항: 되도록이면 원래 페이지의 CSS를 참고하지 말고 아무것도 없는 백지에서 시작해 보도록 노력해 보세요!**

## Advanced
* 왜 CSS는 어려울까요?
* CSS의 어려움을 극복하기 위해 어떤 방법들이 제시되고 나왔을까요?
* CSS가 브라우저에 의해 해석되고 적용되기까지 내부적으로 어떤 과정을 거칠까요?
* 웹 폰트의 경우에는 브라우저 엔진 별로 어떤 과정을 통해 렌더링 될까요?
