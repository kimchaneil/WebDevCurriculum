# Quest 12. 보안의 기초

## Introduction
* 이번 퀘스트에서는 가장 기초적인 웹 서비스 보안에 대해 알아보겠습니다.

## Topics
* XSS, CSRF, SQL Injection
* HTTPS, TLS

## Resources
* [The Basics of Web Application Security](https://martinfowler.com/articles/web-security-basics.html)
* [Website Security 101](https://spyrestudios.com/web-security-101/)
* [Web Security Fundamentals](https://www.shopify.com.ng/partners/blog/web-security-2018)
* [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
* [Wikipedia - TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)

## Checklist
* 입력 데이터의 Validation을 웹 프론트엔드에서 했더라도 서버에서 또 해야 할까요? 그 이유는 무엇일까요?
>클라이언트 레벨에서 전달되는 데이터는 위변조가 쉬워 보안적으로 취약하다 그러므로 더욱 보안적으로 유리하기 위해 validation을 서버측에서 진행해야한다.
  * 서버로부터 받은 HTML 내용을 그대로 검증 없이 프론트엔드에 innerHTML 등을 통해 적용하면 어떤 문제점이 있을까요?
  >server-side-script(내부적인 동작 로직 등 숨겨진 부분)의 위변조가 발생하게 되면 페이지 동작 자체에 영향을 미쳐 피해가 더 커질 수  밖에 없다.
  * XSS(Cross-site scripting)이란 어떤 공격기법일까요?
  >웹사이트 간의 정보교환을 진행하면서 발생할 수 있는 악의적인 정보 탈취. 정보를 훔쳐오기 위한 script를 server-side에 작성하는 방법이다.
  * CSRF(Cross-site request forgery)이란 어떤 공격기법일까요?
  >XSS와 동일하게 웹사이트 간의 정보교환을 진행하며 이루어지는 정보탈취 이며 사용자가 웹브라우저를 통해 사이트에 공격을 request하도록 유도하는 행위.
  * SQL Injection이란 어떤 공격기법일까요?
  >SQL을 통한 감염,SQL Query를 조작하여 데이터베이스를 도용하거나 무단으로 조회하는 행위이다.
* 대부분의 최신 브라우저에서는 HTTP 대신 HTTPS가 권장됩니다. 이유가 무엇일까요?
>HTTP는 평문통신을 하는 대신 HTTPS는 SSL을 적용하여 안정성이 확보되어있는 프로토콜이다.
  * HTTPS와 TLS는 어떤 식으로 동작하나요? HTTPS는 어떤 역사를 가지고 있나요?
  >1. client hello를 클라이언트가 서버에게 보내고
  >2. server hello를 서버가 클라이언트에게 보낸다. 이 때, 인증서를 포함해서 보낸다.
  >3. 인증서가 CA에의해 발급된 것인지를 확인하고 pre master secret key 생성
  >4. pre master key를 클라이언트가 서버에게 전송 이 때, key는 인증서 안에있는 공개키로 암호화
  >5. 서버는 pre master key를 개인 비공개키로 복호화
  >6. 서버와 클라이언트는 master secret 및 session key 생성 => 여기까지가 SSL handshake
  >7. session key를 통한 대칭키 암호화 방식 통신
  >8. 세션이 종료되면 session key 폐기
  >네트워크 통신 보안을 제공하기 위하여 설계된 암호 규약인 SSL/TLS는 1995년 처음 발표되어 공개되었고, SSL 규약은 1995년 2.0버전을 시작으로 공개되었다.
  >SSL 자체는 이후 1999년 국제 인터넷 표준화 기구(IETF)에서 표준 규약으로 정의하면서, TLS로 명칭이 바뀌었고 최근에는 SSL과 TLS 모두 혼용하고 있다.
  * HTTPS의 서비스 과정에서 인증서는 어떤 역할을 할까요? 인증서는 어떤 체계로 되어 있을까요?
 >클라이언트와 server 간 통신 전에 데이터를 암호화하기 위한 보안 규약(SSL/TLS)을 공인된 업체가 인증해주기 위한 문서이다.

## Quest
* 메모장의 서버와 클라이언트에 대해, 로컬에서 발행한 인증서를 통해 HTTPS 서비스를 해 보세요.

## Advanced
* TLS의 인증서에 쓰이는 암호화 알고리즘은 어떤 종류가 있을까요?
* HTTP/3은 기존 버전과 어떻게 다를까요? HTTP의 버전 3이 나오게 된 이유는 무엇일까요?
