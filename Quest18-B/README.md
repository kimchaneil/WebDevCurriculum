# Quest 18-B. 서비스의 운영: 로깅과 모니터링

## Introduction
* 이번 퀘스트에서는 서비스의 운영을 위해 로그를 스트리밍하는 법에 대해 다루겠습니다.

## Topics
* ElasticSearch
* AWS ElasticSearch Service
* Grafana

## Resources
* [ElasticSearch](https://www.elastic.co/kr/what-is/elasticsearch)
* [ElasticSearch 101](https://www.elastic.co/kr/webinars/getting-started-elasticsearch)
* [Grafana Panels](https://grafana.com/docs/grafana/latest/panels/)

## Checklist
* ElasticSearch는 어떤 DB인가요? 기존의 RDB와 어떻게 다르고 어떤 장단점을 가지고 있나요?
>분산형 RESTful 검색/분석 엔진으로, 차세대 데이터 플랫폼이라 불리우는 Elastic stack의 가장 핵심적인 요소이다
>RDB는 행(속성, Column)을 기반으로 데이터를 저장하는 반면, ElasticSearch는 단어를 기반으로 데이터를 저장한다.
>장점:데이터를 단어 기반으로 저장하는 ElasticSearch에서의 검색, 수집 등은 RDB에 비해 훨씬 효율적이고 빠를 수 있다.
* AWS의 ElasticSearch Service는 어떤 서비스인가요? ElasticSearch를 직접 설치하거나 elastic.co에서 직접 제공하는 클라우드 서비스와 비교하여 어떤 장단점이 있을까요?
>라이센스가 바뀐 ElasticSearch의 접근성, 사용자 편의, 관련 서비스 제공을 위해 AWS가 주도하는 OpenSearch 프로젝트의 일환
>ElasticSearch를 직접 설치할 경우 관련 인프라나 클러스터 등을 사용자가 직접 제어해야하고, 회사에서 제공하는 서비스를 받을 경우 완전관리 형태로 이용할 수 있다
* Grafana의 Panel 형식에는 어떤 것이 있을까요? 로그를 보기에 적합한 판넬은 어떤 형태일까요?
>Grafana:데이터 시각화를 위한 대시보드를 제공해주는 오픈소스 툴 킷이다.
>panel 형식
```
-Graph Panel: 시계열 데이터를 시각화하기 위한 가장 일반적인 형식으로, 선 그래프, 막대 그래프, 점 그래프 등 다양한 형태의 차트를 지원합니다.
-Singlestat Panel: 단일 값 형태로 데이터를 표시할 수 있는 형식입니다. 이 형식은 가장 최근 데이터를 보여주는 경우가 많습니다.
-Table Panel: 표 형태로 데이터를 표시하는 형식으로, 데이터의 각 열은 필드에 해당하며, 각 행은 시간 대신 데이터에 따라 구성됩니다
-Text Panel: 사용자가 직접 작성한 HTML, Markdown 또는 Plaintext로 구성된 텍스트 형식의 패널입니다.
```
## Quest
* 우리의 웹 서버가 stdout으로 적절한 로그를 남기도록 해 보세요.
* ElasticSearch Service 클러스터를 작은 사양으로 하나 만들고, 도커 컨테이너의 stdout으로 출력된 로그가 ElasticSearch로 스트리밍 되도록 해 보세요.
* Grafana를 이용해 ElasticSearch의 로그를 실시간으로 볼 수 있는 페이지를 만들어 보세요.

## Advanced
* ElasticSearch와 Grafana는 어떤 라이센스로 배포되고 있을까요? AWS와 같은 클라우드 제공자들이 이러한 오픈소스를 서비스화 하는 것을 둘러싼 논란은 어떤 논점일까요?
