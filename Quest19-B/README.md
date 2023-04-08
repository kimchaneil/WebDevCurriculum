# Quest 19-B. 서버 아키텍쳐 패턴

## Introduction
* 이번 퀘스트에서는 현대적인 서버 아키텍쳐 패턴에 대해 익혀 보도록 하겠습니다.

## Topics
* Microservice Architecture
* Serverless Architecture
* AWS Lambda
* Service Mesh

## Resources
* [Jeff Bezos의 이메일](https://news.hada.io/topic?id=638)
* [마이크로서비스란?](https://www.redhat.com/ko/topics/microservices/what-are-microservices)
* [AWS Lambda](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/welcome.html)
* [AWS API Gateway](https://docs.aws.amazon.com/ko_kr/apigateway/latest/developerguide/welcome.html)

## Checklist
* 마이크로서비스 아키텍쳐란 무엇일까요? 어떤 식으로 서비스를 구성할 수 있을까요? 어떤 장점을 가지고 있을까요?
>애플리케이션을 특정 비즈니스 기능을 구현하는 개별 서비스로 분해하여 현대 개발자에게 확장성이 뛰어나고 유연한 애플리케이션을 설계할 수 있는 방법을 제공하는 기술
>서비스를 다른 언어 또는 다른 기술로 작성할 수 있게 하는 표준화된 API (애플리케이션 프로그래밍 인터페이스)를 통해 다른 서비스와 통신합니다
>장점
```
-애플케이션 구성 요소를 여러 가지 프로그래밍 언어로 구축 가능
-지속적인 개별적 개발 및 배포 스트림 유지 가능
-확장성이 뛰어난 애플리케이션 구축 가능
-클라우드 네이티브 서비스로서의 기능 배포 옵션 사용 가능
-종종 운영 비용 절감
-분리 및 느슨한 결합으로 구획화된 업그레이드 및 향상 가능
```
* 서버리스 아키텍쳐란 무엇일까요? 어떤 식으로 서비스를 구성할 수 있을까요? 어떤 장점을 가지고 있을까요?
>특정 작업을 수행하기 위해서 컴퓨터를 혹은 가상머신에 서버를 설정하고, 이를 통하여 처리 하는 것이 아님을 의미
>BaaS(Backend as a Service), FaaS(Frontend as a service)의 방식이 있음
* AWS Lambda는 어떤 서비스일까요? 이러한 서비스는 어떤 특징을 가지고, 어디에 쓰일 수 있을까요?
>서버를 프로비저닝하거나 관리하지 않고도 코드를 실행할 수 있게 해주는 컴퓨팅 서비스
>Lambda는 고가용성 컴퓨팅 인프라에서 코드를 실행하고 서버와 운영 체제 유지 관리, 용량 프로비저닝 및 자동 조정, 코드 및 보안 패치 배포, 로깅 등 모든 컴퓨팅 리소스 관리를 수행
* API Gateway는 어떤 서비스인가요? 어떤 설정을 할 수 있을까요?
>규모와 관계없이 REST 및 WebSocket API를 생성, 게시, 유지, 모니터링 및 보호하기 위한 AWS 서비스
```
-라우팅: API Gateway는 수신된 요청을 백엔드 서비스로 라우팅
-인증 및 권한 부여: API Gateway는 클라이언트 요청을 검증하고, 필요한 경우 백엔드 서비스에 대한 인증 및 권한 부여를 처리
-로깅 및 모니터링: API Gateway는 클라이언트 요청 및 백엔드 응답에 대한 로깅 및 모니터링 기능
-캐싱: API Gateway는 요청 및 응답을 캐시
-API 변환: API Gateway는 요청 및 응답을 변환
-서비스 디스커버리: API Gateway는 백엔드 서비스를 검색하고, 자동으로 백엔드 서비스의 로드 밸런싱을 수행
```
* 많은 마이크로서비스들을 복잡하게 연결할 경우 관리상에 어떤 난점이 생길 수 있을까요? 서비스 메쉬는 무엇이고 이러한 난점을 어떻게 해결하려는 시도일까요?
>관리할 services들이 늘어난다면 그만큼 관리해야할 절대량이 늘어나고 비용도 같이 소모될 수 밖에 없다.
>서비스 메쉬:Microservice의 경계 내부(네트워크)에서의 트래픽을 관리하는 서비스

## Quest
* 메모장 시스템을 JWT 발급을 위한 마이크로서비스와 실제 비즈니스 로직을 처리하는 마이크로서비스로 나누어 보세요.
* JWT 토큰 발급의 역할을 하는 마이크로서비스를 AWS Lambda와 API Gateway를 이용하여 구축해 보세요.

## Advanced
* Istio는 어떤 툴일까요? 이 툴을 Kubernetes와 함께 사용하여 어떤 구조를 구현할 수 있을까요?
