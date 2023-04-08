# Quest 16-B. 컨테이너

## Introduction
* 이번 퀘스트에서는 컨테이너 기술과 그 활용에 대해 알아보겠습니다.

## Topics
* 컨테이너 기술
* Docker
* docker-compose

## Resources
* [#LearnDocker](https://www.docker.com/101-tutorial)
* [Docker Tutorial for Beginners](https://docker-curriculum.com/)
* [docker-compose](https://docs.docker.com/compose/)

## Checklist
* 컨테이너는 어떻게 동작하나요? 다른 배포판을 사용할 수 있게 하는 원리가 무엇일까요?
>컨테이너는 코드와 모든 종석성을 패키지화하는 소프트웨어의 표준 단위로, 어플리케이션이 한 컴퓨팅 환경에서 다른 컴퓨팅 환경으로 빠르고 안정적으로 실행되도록 함.
>Container는 Host OS에 연결하는 것이 아니라, 해당 시스템의 프로세스를 분리하고 이 환경에서 실행되므로 OS와 상관없이 실행이 가능하다.
* 도커 컨테이너에 호스트의 파일시스템이나 네트워크 포트를 연결하려면 어떻게 해야 할까요?
>컨테이너를 생성하고 Host를 연결하면 된다.
* 도커 컨테이너에서 런타임에 환경변수를 주입하려면 어떻게 해야 할까요?
>Container를 생성할 때 환경변수를 넣어주거나 별도의 파일에 담아 설정할 수 있다.
* 도커 컨테이너의 stdout 로그를 보려면 어떻게 해야 할까요?
>Container의 스트리밍을 지속 감시한다.
* 실행중인 도커 컨테이너에 들어가 bash 등의 쉘을 실행하고 로그 등을 보려면 어떻게 해야 할까요?
>container의 root process에 console 접근,container의 특정 환경을 통한 접속(접근)

## Quest
* 도커를 설치하고 그 사용법을 익혀 보세요.
* 메모장 시스템 서버를 컨테이너 기반으로 띄울 수 있게 수정해 보세요. (docker-compose는 사용하지 않습니다)
* 컨테이너를 Docker Hub에 올리고, 발급받은 학습용 AWS 계정에 EC2 인스턴스를 생성한 뒤, 해당 컨테이너를 띄워서 서비스 해 보세요.
* docker-compose를 사용하여, 이미지 빌드와 서버 업/다운을 쉽게 할 수 있도록 고쳐 보세요.

## Advanced
* 도커 외의 컨테이너 기술의 대안은 어떤 것이 있을까요?
* 맥이나 윈도우에서도 컨테이너 기술을 사용할 수 있는 원리는 무엇일까요?
