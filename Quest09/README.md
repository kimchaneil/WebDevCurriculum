# Quest 09. 서버와 클라이언트의 대화

## Introduction
* 이번 퀘스트에서는 서버와 클라이언트의 연동, 그리고 웹 API의 설계 방법론 중 하나인 REST에 대해 알아보겠습니다.

## Topics
* expressJS, fastify
* AJAX, `XMLHttpRequest`, `fetch()`
* REST, CRUD
* CORS

## Resources
* [Express Framework](http://expressjs.com/)
* [Fastify Framework](https://www.fastify.io/)
* [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [MDN - XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [REST API Tutorial](https://restfulapi.net/)
* [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
* [MDN - CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## Checklist
* 비동기 프로그래밍이란 무엇인가요?
>어떤 일이 완료되기를 기다리지 않고 다음 코드를 실행해 나가는 프로그래밍 방식
>반대적 의미로는 동기식 프로그래밍이라는 것이 존재
  * 콜백을 통해 비동기적 작업을 할 때의 불편한 점은 무엇인가요? 콜백지옥이란 무엇인가요?
  >콜백만으로는 복잡한 비동기 데이터 흐름을 표현하기가 어려움
  >콜백 지옥: 비동기 처리 로직을 위해 콜백 함수를 연속해서 사용할 때 발생하는 문제
  * 자바스크립트의 Promise는 어떤 객체이고 어떤 일을 하나요?
  >promise는 등록해두고 나중에 사용할 수 있도록 값을 나타내는 개체이다.
  >서버에 대해 http요청과 같이 작업 완료 시간을 알 수 없는 오래 걸릴 수 있는 작업을 처리하는데 사용된다
  * 자바스크립트의 `async`와 `await` 키워드는 어떤 역할을 하며 그 정체는 무엇일까요?
  >promise를 좀 더 편하게 사용하기 위함
  >async: function앞에 존재하며 항상 promise를 반환하게 하며 promise값이 아닌 경우에는 이행 상태의 promise(resolved promise)로 값을 감싸 반환하도록 함
  >await: promise가 처리될 때까지 기다리고 결과가 그 이후 반환하도록 함.
* 브라우저 내 스크립트에서 외부 리소스를 가져오려면 어떻게 해야 할까요?
  * 브라우저의 `XMLHttpRequest` 객체는 무엇이고 어떻게 동작하나요?
  >서버에서 데이터를 요청하며 다음과 같은 것 수행가능
  >>페이지를 새로고침하지 않고 웹페이지 업데이트
  >>서버에서 데이터 요청- 페이지가 로드된 후
  >>서버에서 데이터 수신- 페이지가 로드된 후
  >>서버에서 데이터 보내기- 백그라운드에서
>XMLHttpRequest객체를 생성한 후 open()메소드로 요청 방식과 요청할 URL을 설정한 후 send 메소를 호출하여 서버로 요청을 보내고 서버는 이를 처리한 후 응답 데이터를 생성하여 클라이언트에게 전송한다. 클라이언트는 이 응답을 처리하는 방식.
  * `fetch` API는 무엇이고 어떻게 동작하나요?
  >fetch api: http파이프라인을 구성하는 요청과 응답 등의 요소를 javascript에서 접근하고 조작할 수 있는 인터페이스 제공
  >promise 기반으로 작동하며 fetch함수를 호출하면 서버에 요청을 보내고 응답을 반환하는 promise 객체를 생성, fetch함수는 요청할 URL과 요청 옵션 객체를 매게면수로 가진다.
* REST는 무엇인가요?
>Representational State Transfer의 약자로 자원을 이름으로 구분하여 해당 자원의 상태를 주고받는 것을 의미
  * REST API는 어떤 목적을 달성하기 위해 나왔고 어떤 장점을 가지고 있나요?
  >rest api의 메시지를 읽는 것만으로 메시지의 의도를 확실히 파악할 수 잇다는 쉬운 사용성.
  >클라이언트와 서버는 rest api를 통해 정보를 주고 받는데 이 때 서버는 클라이언트의 히스토리,문맥을 유지할 필요가 없어지기에 클라이언트와 서버의 완전한 분리가 장점.
  >특정한 데이터의 명확한 표현이 장점.
  * RESTful한 API 설계의 단점은 무엇인가요?
  >안티패턴으로 설계될 가능성이 높다
  >>안티패턴: rest api의 특징을 이해하지 못하고 rest사상에 어긋나는 패턴을 적용한 api
  >표준 규약이 없다.
  >RDBMS의 표현에 적합하지 않다
* CORS란 무엇인가요? 이러한 기능이 왜 필요할까요? CORS는 어떻게 구현될까요?
>Cross-Origin Resource Sharing의 약자로 다른 출처의 자원을 공유. 추가 HTTP헤더를 사용하여,한 출처에서 실행중인 웹 어플리케이션이 다른 출처의 선택한 자원을 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제이다.
>CORS없이 모든 곳에서 데이터를 요청할 수 있도록 한다면 다른 사이트에서 원래 사이트를 흉내낼 수 있게 되며 보안의 문제가 일어날 수 있다.
>클라이언트에서는 Origin필드를 추가하면 된다. ex)Origin: https://xxx.co.kr
>서버 측에서는 응답 헤더를 추가
>>Access-Control-Allow-Origin:https://xxx.co.kr
>>Access-Control-Allow-Origin: *
>>Access-Control-Allow-Headers "X-Requested-With, Origin, X-Csrftoken, Content-Type, Accept"
## Quest
* 이번 퀘스트는 Midterm에 해당하는 과제입니다. 분량이 제법 많으니 한 번 기능별로 세부 일정을 정해 보고, 과제 완수 후에 그 일정이 얼마나 지켜졌는지 스스로 한 번 돌아보세요.
  * 이번 퀘스트부터는 skeleton을 제공하지 않습니다!
* Quest 05에서 만든 메모장 시스템을 서버와 연동하는 어플리케이션으로 만들어 보겠습니다.
  * 클라이언트는 `fetch` API를 통해 서버와 통신합니다.
  * 서버는 8000번 포트에 REST API를 엔드포인트로 제공하여, 클라이언트의 요청에 응답합니다.
  * 클라이언트로부터 온 새 파일 저장, 삭제, 다른 이름으로 저장 등의 요청을 받아 서버의 로컬 파일시스템을 통해 저장되어야 합니다.
    * 서버에 어떤 식으로 저장하는 것이 좋을까요?
  * API 서버 외에, 클라이언트를 띄우기 위한 서버가 3000번 포트로 따로 떠서 API 서버와 서로 통신할 수 있어야 합니다.
  * Express나 Fastify 등의 프레임워크를 사용해도 무방합니다.
* 클라이언트 프로젝트와 서버 프로젝트 모두 `npm i`만으로 디펜던시를 설치하고 바로 실행될 수 있게 제출되어야 합니다.
* 이번 퀘스트부터는 앞의 퀘스트의 결과물에 의존적인 경우가 많습니다. 제출 폴더를 직접 만들어 제출해 보세요!

## Advanced
* `fetch` API는 구현할 수 없지만 `XMLHttpRequest`로는 구현할 수 있는 기능이 있을까요?
* REST 이전에는 HTTP API에 어떤 패러다임들이 있었을까요? REST의 대안으로는 어떤 것들이 제시되고 있을까요?