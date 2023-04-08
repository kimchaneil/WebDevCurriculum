# Quest 08. 웹 API의 기초

## Introduction
* 이번 퀘스트에서는 웹 API 서버의 기초를 알아보겠습니다.

## Topics
* HTTP Method
* node.js `http` module
  * `req`와 `res` 객체

## Resources
* [MDN - Content-Type Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
* [MDN - HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
* [MDN - MIME Type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type)
* [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)
* [HTTP Node.js Manual & Documentation](https://nodejs.org/api/http.html)

## Checklist
* HTTP의 GET과 POST 메소드는 어떻게 다른가요?
>Get method는 클라이언트에서 서버로 어떠한 리소스로부터 정보를 요청하기 위한 메소드이며 주로 URL주소 끝에 파라미터로 포함되어 전송하며 이를 query string이라고 한다.
>Post method는 리소스를 생성/업데이트하기 위해 서버에 데이터를 보내는 데 사용한다.Get과는 달리 데이터를 HTTP Body에 담아 전송하는 방식
  * 다른 HTTP 메소드에는 무엇이 있나요?
  >앞서 말한 두가지를 제외한 PUT과 PATCH가있으며 두가지는 자원을 수정하는 용도로 사용
  >Put: 전체 수정 => 자원이 있다면 수정,없다면 생성
  >Patch: 부분 수정
* HTTP 서버에 GET과 POST를 통해 데이터를 보내려면 어떻게 해야 하나요?
>Get방식:URL주소 끝에 파라미터로 포함되어 전송하며 이를 query string이라고 한다.
>Post방식:데이터를 HTTP Body에 담아 전송하는 방식 Body는 content-Type에 요청 데이터의 타입을 표시 따라 결정 된다.
  * HTTP 요청의 `Content-Type` 헤더는 무엇인가요?
  >http 통신으로API 요청을 주고 받을 때 포함된 데이터를 저장하는 방식의 일종이다.
  * Postman에서 POST 요청을 보내는 여러 가지 방법(`form-data`, `x-www-form-urlencoded`, `raw`, `binary`) 각각은 어떤 용도를 가지고 있나요?
  >form-data(양식 데이터): 양식을 채울 때 입력한 세부 정보와 같이 양식 내부에 래핑하는 데이터를 보내는 데 사용됨.
  >x-www-form-urlencoded: form-data방식과 거의 동일한 목적으로 사용되며,차이점은 URL이 x-www-form-urlencoded를 통해 전송 될 때 인코딩된다는점.
  >raw: post메서드에서 본문을 보내는 동안 가장 많이 사용되는 부분 또는 옵션.
  >binary:수동으로 입력할 수 없는 형식으로 정보를 전송
* node.js의 `http` 모듈을 통해 HTTP 요청을 처리할 때,
  * `req`와 `res` 객체에는 어떤 정보가 담겨있을까요?
  >req(request):http요청을 의미하며 요청에대한 query string,파라미터,바디,헤더등이있음.
  >res(response): http 응답을 의미하며 write,end,setheader등 이있음.
  * GET과 POST에 대한 처리 형태가 달라지는 이유는 무엇인가요?
  >GET은 서버로부터 정보를 가져오기 위해 사용되고 
  >POST는 서버에 데이터를 전송하기 위해 사용되기 때문에 달라짐.
* 만약 API 엔드포인트(URL)가 아주 많다고 한다면, HTTP POST 요청의 `Content-Type` 헤더에 따라 다른 방식으로 동작하는 서버를 어떻게 정리하면 좋을까요?
>클라이언트로 부터 많은 요청이 오고, 이에 따른 resource update 발생
>middleWare에서 parsing하는 부분을 더 효율적으로 구상한다.
>content-type을 json 방식 혹은 x-www-url-encoded(url-encoded) 방식으로 제공하는 두개의 method를 구성하는 등 지원하는 data 형식을 확인한다.
  * 그 밖에 서버가 요청들에 따라 공통적으로 처리하는 일에는 무엇이 있을까요? 이를 어떻게 정리하면 좋을까요?
>기본적으로 http module을 사용한다면 res인자에 server 응답 정보가 담겨져 온다.
>우리의 역할은 이 res인자를 parsing하여, client가 어떠한 가공된 정보를 받아야 하는지 결정하고 구현하는 것이다.
## Quest
* 다음의 동작을 하는 서버를 만들어 보세요.
  * 브라우저의 주소창에 `http://localhost:8080`을 치면 `Hello World!`를 응답하여 브라우저에 출력합니다.
  * 서버의 `/foo` URL에 `bar` 변수로 임의의 문자열을 GET 메소드로 보내면, `Hello, [문자열]`을 출력합니다.
  * 서버의 `/foo` URL에 `bar` 키에 임의의 문자열 값을 갖는 JSON 객체를 POST 메소드로 보내면, `Hello, [문자열]`을 출력합니다.
  * 서버의 `/pic/upload` URL에 그림 파일을 POST 하면 서버에 보안상 적절한 방법으로 파일이 업로드 됩니다.
  * 서버의 `/pic/show` URL을 GET 하면 브라우저에 위에 업로드한 그림이 뜹니다.
  * 서버의 `/pic/download` URL을 GET 하면 브라우저에 위에 업로드한 그림이 `pic.jpg`라는 이름으로 다운로드 됩니다.
* expressJS와 같은 외부 프레임워크를 사용하지 않고, node.js의 기본 모듈만을 사용해서 만들어 보세요.
* 처리하는 요청의 종류에 따라 공통적으로 나타나는 코드를 정리해 보세요.

## Advanced
* 서버가 파일 업로드를 지원할 때 보안상 주의할 점에는 무엇이 있을까요?
