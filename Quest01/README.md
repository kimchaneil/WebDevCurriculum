# Quest 01. HTML과 웹의 기초

## Introduction
* HTML은 HyperText Markup Language의 약자로, 웹 브라우저에 내용을 표시하기 위한 가장 기본적인 언어입니다. 이번 퀘스트를 통해 HTML에 관한 기초적인 사항들을 알아볼 예정입니다.

## Topics
* HTML의 역사
  * HTML 4.01, XHTML 1.0, XHTML 1.1
  * XHTML 2.0과 HTML5의 대립
  * HTML5와 현재
* 브라우저의 역사
  * Mosaic와 Netscape
  * Internet Explorer의 독점시대
  * Firefox와 Chrome의 등장
  * iOS Safari와 모바일 환경의 브라우저
  * Edge와 Whale 등의 최근의 Chromium 계열 브라우저
* HTML 문서의 구조
  * `<html>`, `<head>`와 `<body>` 등의 HTML 문서의 기본 구조
  * 시맨틱 엘리먼트
  * 블록 엘리먼트와 인라인 엘리먼트의 차이

## Resources
* [MDN - HTML](https://developer.mozilla.org/ko/docs/Web/HTML)
* [HTML For Beginners](https://html.com/)
* [History of the web browser](https://en.wikipedia.org/wiki/History_of_the_web_browser)
* [History of HTML](https://en.wikipedia.org/wiki/HTML)
* [StatCounter](https://gs.statcounter.com/)

## Checklist
* HTML 표준의 역사는 어떻게 될까요?
>1980년 tim berners-lee는 문서를 사용하고 공유할 수 있는 시스템 제안 후 1991년 말 인터넷에서 처음 언급 ->HTML 2 1995년 ->HTML 3 1997년 -> HTML 4 1997년 ->HTML 5 2014년
  * HTML 표준을 지키는 것은 왜 중요할까요?
  >호환성을 만족하기 위해서
  * XHTML 2.0은 왜 세상에 나오지 못하게 되었을까요?
  > xml과 html을 합성시킨것으로 xml버전과의 호환성, 문법의 엄격함 때문에 습득의 어려움이 있어 사용자에게 외면 받음
  * HTML5 표준은 어떤 과정을 통해 정해질까요?
  >정기적인 컨소시엄을 통해 사용자의 불편을 이해, 차기 표준안에 반영
* 브라우저의 역사는 어떻게 될까요?
  * Internet Explorer가 브라우저 시장을 독점하면서 어떤 문제가 일어났고, 이 문제는 어떻게 해결되었을까요?
  >기술 발전이 일어나지 않았으며 기능 문제,웹표준을 지키지 않으며 ActiveX를 강제사용하며 호환성 저하의 문제가 발생하고 크롬,파이어폭스 등 브라우저의 개발로 독점 해소
  * 현재 시점에 브라우저별 점유율은 어떻게 될까요? 이 브라우저별 점유율을 알아보는 것은 왜 중요할까요?
  >2022년 기준점으로 알아본다면 크롬이 66.93% edge 10.63% safari 8.95% firefox 7.8% opera 2.99% IE 0.75%정도이다
  > 브라우저별 점유율은 웹 개발자에게는 사용자가 어떤 브라우저를 사용하는 지를 파악하여 그에 맞는 웹사이트 개발을 해야하기 때문이다.
  * 브라우저 엔진(렌더링 엔진)이란 무엇일까요? 어떤 브라우저들이 어떤 엔진을 쓸까요?
  >웹 페이지를 표시하는데 사용하는 핵심 컴포넌트이다. google은 Blink를 사용하며 chrome,opera,vivaldi 및 edge에서 사용 한편, Mozilla는 Gecko, Safari는 Webkit엔진 IE는 Trident를 사용
  * 모바일 시대 이후, 최근에 출시된 브라우저들은 어떤 특징을 가지고 있을까요?
  >모바일 최적화,속도,보안,개인화,웹 기술 지원등 다양한 특징을 가지고 있음
* HTML 문서는 어떤 구조로 이루어져 있나요?
  * `<head>`에 자주 들어가는 엘리먼트들은 어떤 것이 있고, 어떤 역할을 할까요?
  >title:문서의 제목을 정의
  >meta:문서의 문자 인코딩,검색엔진 최적화,뷰포트 설정 등의 메타데이터를 지정
  >link:문서와 외부 리소스 간의 링크를 정의 
  >script:문서에 스크립트 코드를 삽입할 수 있음. 동적인 기능
  >style:문서에 CSS스타일 정의
  * 시맨틱 태그는 무엇일까요?
  >웹 페이지의 구조와 의미를 나타내는 역할로 header,nav,main,article,section,aside,footer등의 예시가 있음
    * 시맨틱 엘리먼트를 사용하면 어떤 점이 좋을까요?
    >웹 페이지의 내용을 쉽게 이해할 수 있으며 검색엔진의 효율을 늘릴 수 있음 또한 사용자들의 웹페이지 접근성을 늘릴 수 있음
    * `<section>`과 `<div>`, `<header>`, `<footer>`, `<article>` 엘리먼트의 차이점은 무엇인가요?
    >section: 웹 페이지에서 연관된 컨텐츠를 그룹화 하여 나타내며 제목이 필요. 기사 내 여러 개 세션을 나누거나 페이지에서 목차를 나타내는데 사용
    >div: 구획을 지정하는 태그로 의미가 없음.
    >header:웹 페이지의 머릿말 부분을 나타내며 로고 제목 검색창등이 위치할 수 있음
    >footer:웹 페이지의 꼬리말부분이며, 연락처 정보 저작권정보 등이 위치
    >article: 웹 페이지의 주요 컨텐츠를 나타나며 독립적으로 구성될 수 있는 내용이 위치 예를 들어 뉴스 기사 블로그 포스트 등이 위치
  * 블록 레벨 엘리먼트와 인라인 엘리먼트는 어떤 차이가 있을까요?
  >블록 레벨 요소는 문서 구조를 정의하고, 인라인 요소는 문장 내에서 강조나 링크를 나타내는 등의 스타일을 표시하는 데 사용되며 블록 레벨 요소는 자동으로 줄바꿈이 되며, 인라인 요소는 줄바꿈이 되지 않음.

## Quest
* [이 화면](screen.png)의 정보를 HTML 문서로 표현해 보세요. 다만 CSS를 전혀 사용하지 않고, 문서의 구조가 어떻게 되어 있는지를 파악하여 구현해 보세요.
  * [CSS Naked Day](https://css-naked-day.github.io/)는 매년 4월 9일에 CSS 없는 웹 페이지를 공개하여 내용과 마크업에 집중한 HTML 구조의 중요성을 강조하는 행사입니다.
* 폴더에 있는 `skeleton.html` 파일을 바탕으로 작업해 보시면 됩니다.
  * 화면을 구성하는 큰 요소들을 어떻게 처리하면 좋을까요?
  * HTML 문서상에서 같은 층위에 비슷한 요소들이 반복될 때는 어떤 식으로 처리하는 것이 좋을까요?

## Advanced
* XML은 어떤 표준일까요? 어떤 식으로 발전해 왔을까요?
* YML, Markdown 등 다른 마크업 언어들은 어떤 특징을 가지고 있고, 어떤 용도로 쓰일까요?
