# Quest 13. 웹 API의 응용과 GraphQL

## Introduction
* 이번 퀘스트에서는 차세대 웹 API의 대세로 각광받고 있는 GraphQL에 대해 알아보겠습니다.

## Topics
* GraphQL
  * Schema
  * Resolver
  * DataLoader
* Apollo

## Resources
* [GraphQL](https://graphql.org/)
* [GraphQL.js](http://graphql.org/graphql-js/)
* [DataLoader](https://github.com/facebook/dataloader)
* [Apollo](https://www.apollographql.com/)

## Checklist
* GraphQL API는 무엇인가요? REST의 어떤 단점을 보완해 주나요?
>API용 쿼리 언어이며 기존 데이터로 이러한 쿼리를 수행하기 위한 런타임
>REST API는 여러 URL에서 로드해야 하지만 GraphQL API는 단일 요청으로 앱에 필요한 모든 데이터를 가져옵니다
* GraphQL 스키마는 어떤 역할을 하며 어떤 식으로 정의되나요?
>데이터 모델을 정의하는 역할을 한다.
>객체 타입,스칼라 타입,인터페이스,유니온 타입 등의 다양한 타입으로 정의할 수 있다.
* GraphQL 리졸버는 어떤 역할을 하며 어떤 식으로 정의되나요?
>GraphQL에서 설계한 Query를 사용하여 data를 얻기위해 실질적으로 사용하는 data 확보도구
  * GraphQL 리졸버의 성능 향상을 위한 DataLoader는 무엇이고 어떻게 쓰나요?
  >N+1문제, 여러 데이터를 얻기 위해 과도하게 query 반복이 이루어지지 않도록 최적화된 데이터 조회/접근을 해주는 기능을 일컫는다.
* 클라이언트 상에서 GraphQL 요청을 보내려면 어떻게 해야 할까요?
>기본적으로 GraphQL에서 정의한 query문, 이를 통해 데이터를 확보하는 작업은 모두 백엔드(server)에서 정적으로 이루어진다.
  * Apollo 프레임워크(서버/클라이언트)의 장점은 무엇일까요?
  >GraphQL server은 단일 endopint(=server)를 통해 data를 저장해 둔 곳이다.
  >우리는 이러한 data에 접근하고 확보하기 위해, 접근방식인 Query를 정의하고 설정해준다.
  >기본적으로 해당 data를 접근하기위해 GraphQL server에 직접 접속한다.
  >axios fetch 등을 통해 기본적으로 POST Request를 진행해주어야 한다.
  * Apollo Client를 쓰지 않고 Vanilla JavaScript로 GraphQL 요청을 보내려면 어떻게 해야 할까요?
  >fetch,axios와 같은 데이터 전달 module 및 rest api 등 data를 확보할 수 있는 별도의 module을 사용해야 한다.
* GraphQL 기반의 API를 만들 때 에러처리와 HTTP 상태코드 등은 어떻게 하는게 좋을까요?
>server 접속 및 모든 요청처리 성공
>GraphQL server/apollo server initialization 실패처리
>rest api 실패처리
>resolver가 정의되어있지 않는 변수/객체 반환하는 오류

## Quest
* 메모장의 서버와 클라이언트 부분을 GraphQL API로 수정해 보세요.

## Advanced
* GraphQL이 아직 제대로 수행하지 못하거나 불가능한 요구사항에는 어떤 것이 있을까요?
* GraphQL의 경쟁자에는 어떤 것이 있을까요?
