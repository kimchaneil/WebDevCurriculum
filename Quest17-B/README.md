# Quest 17-B. 배포 파이프라인

## Introduction
* 이번 퀘스트에서는 CI/CD 파이프라인이 왜 필요한지, 어떻게 구축할 수 있는지 등에 대해 다룹니다.

## Topics
* Continuous Integration
* Continuous Delivery
* AWS Codebuild

## Resources
* [AWS: Continuous Integration](https://aws.amazon.com/ko/devops/continuous-integration/)
* [AWS: Continuous Delivery](https://aws.amazon.com/ko/devops/continuous-delivery/)
* [AWS Codebuild](https://aws.amazon.com/ko/codebuild/getting-started/)

## Checklist
* CI/CD는 무엇일까요? CI/CD 시스템을 구축하면 어떤 장점이 있을까요?
>CI(지속적 통합):자동화된 빌드 및 테스트가 수행된 후, 개발자가 코드 변경 사항을 중앙 리포지토리에 정기적으로 병합하는 데브옵스 소프트웨어 개발 방식
>CD(지속적 전달):프로덕션에 릴리스하기 위한 코드 변경이 자동으로 준비되는 소프트웨어 개발 방식
>CI장점
```
-개발자 생산성 향상:지속적 통합을 사용하면 개발자가 수동 작업에 대한 부담을 덜고 고객에게 제공되는 오류 및 버그 수를 줄이는 데 도움이 되는 기능을 활용함으로써 팀의 생산성을 높일 수 있습니다.
-버그를 더 빠르게 발견 및 해결: 테스트를 좀 더 빈번하게 수행함으로써, 팀에서는 이후에 더 큰 문제로 발전하기 전에 버그를 조기에 발견하고 해결할 수 있습니다.
-업데이트를 더 빠르게 제공: 지속적 통합을 사용하면 팀이 좀 더 빠르고 좀 더 빈번하게 고객에게 업데이트를 제공할 수 있습니다.
```
>CD장점
```
-소프트웨어 릴리스 프로세스 자동화: 지속적 전달을 사용하면 팀에서 프로덕션에 릴리스하기 위한 코드 변경을 자동으로 빌드, 테스트 및 준비하여, 좀 더 빠르고 효율적으로 소프트웨어를 전달할 수 있습니다.
-개발자 생산성 향상: 이러한 방식은 개발자가 수동 작업에 대한 부담을 덜고 고객에게 배포되는 오류 및 버그 수를 줄이는 데 도움이 되는 기능을 활용함으로써 팀의 생산성을 높일 수 있습니다
-버그를 더 빠르게 발견 및 해결: 좀 더 자주 포괄적으로 테스트를 수행함으로써 더 큰 문제로 발전하기 전에 버그를 발견하고 해결할 수 있습니다. 지속적 전달의 경우 전체 프로세스가 자동화되어 있으므로, 다른 유형의 테스트를 손쉽게 추가하여 수행할 수 있습니다
-업데이트를 더 빠르게 제공: 지속적 전달을 사용하면 팀이 좀 더 빠르고 좀 더 빈번하게 고객에게 업데이트를 제공할 수 있습니다. 지속적 전달이 적절하게 구현되면, 언제나 즉시 배포할 수 있고 표준화된 테스트 프로세스를 통과한 빌드 아티팩트를 보유하게 됩니다.  
```
* CI 시스템인 Travis CI, Jenkins, Circle CI, Github Actions, AWS Codebuild 의 차이점과 장단점은 무엇일까요?
>AWS Codebuild
```
AWS에서 제공하는 툴, 완전히 managed된 build service를 제공한다.
컴파일, 실행, 프로덕션까지 수행해주기 때문에 AWS Codebuild를 채택하면 별도의 build server를 관리하고 모니터링할 필요가 없다.
```
>Circle CI
```
CI/CD 플랫폼을 제공하는 소프트웨어이다.
소프트웨어를 활용하여 CI/CD 과정을 자동화할 수 있도록 지원한다.
```
>Jenkins
```
CI system에서 가장 많이 활용하는 open source - CI server이다.
코드의 build, test, deploy를 지원해주는 tool이다.
```
## Quest
* AWS Codebuild를 이용하여, 특정 브랜치에 푸시를 하면 린트와 테스트를 거쳐 서버 이미지를 빌드한 뒤, 직전 퀘스트의 EC2 인스턴스에 배포되는 시스템을 만들어 보세요.

## Advanced
* 빅테크 회사들이 코드를 빌드하고 배포하는 시스템은 어떻게 설계되고 운영되고 있을까요?
