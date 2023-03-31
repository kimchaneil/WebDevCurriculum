# Quest 00. 형상관리 시스템

## Introduction
* git은 2021년 현재 개발 생태계에서 가장 각광받고 있는 버전 관리 시스템입니다. 이번 퀘스트를 통해 git의 기초적인 사용법을 알아볼 예정입니다.

## Topics
* git
  * `git clone`, `git add`, `git commit`, `git push`, `git pull`, `git branch`, `git stash` 명령
  * `.git` 폴더
* GitHub

## Resources
* [Resources to learn Git](https://try.github.io)
* [Learn Git Branching](https://learngitbranching.js.org/?locale=ko)
* [Inside Git: .Git directory](https://githowto.com/git_internals_git_directory)

## Checklist
* 형상관리 시스템은 왜 나오게 되었을까요?
> 변경사항이 있을 때 마다 이유를 알고 있어야함.
> 작업하던 파일이 날라가는 경우
> 다양한 사람들과 작업을 하면 신경써야할게 많다
> 변경했던것을 다시 되돌리고 작업해야하는 경우 등
>> 위 경우들을 예방하거나 해결하기 위한 형상관리 시스템(버전관리시스템이라고도 할 수 있음)
* git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요? 분산형 형상관리 시스템이란 무엇일까요?
> 분산형 형상관리 시스템이며 이것의 특징은 간단히 말해서 여러 이름으로 바꾸는 것이 아닌 하나의 이름으로 backup recovery collaboration을 쉽게 할 수 있도록 구축한 시스템이다.
> 분산형 형상관리 시스템(혹은 버전관리 시스템)은 DVCS(distributed version control system)라고도 불리며 프로젝트 파일의 수정 전 버전을 참여자들의 컴퓨터와 서버에 나누어 저장하고 관리하는 체계를 의미
  * git은 어떻게 개발되게 되었을까요? git이 분산형 시스템을 채택한 이유는 무엇일까요?
  > 과거 bitkeeper를 사용하다 이슈가 생겨 토르발스라는 제작자가 직접 버전 관리 시스템을 개발.
  > ?
* git과 GitHub은 어떻게 다를까요?
>둘의 간단한 차이점은 git의 경우 자신의 코드와 이력을 기록하고 관리하도록 돕는 버전 관리 시스템이고 github는 git저장소를 관리하는 클라우드 기반 호스팅 서비스이며 개인의 로컬 서버밖에서 git 버전 프로젝트를 공유하고 기록하는 온라인 데이터베이스이다.
* git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?
>clone: 원격 저장소의 저장소를 내 local에서 이용할 수 있게 그대로 복사해 가져온다 사용법은 git clone https://github.com/[계정명]/[프로젝트명].git
>add: 깃이 파일들을 지켜보게 한다 사용법  git add "파일명"
>commit: 깃의 의미있는 수정 작업이 끝났을 때 마침을 알리는 작업이다 사용법으로는 git commit -m "메시지"이며 -m 뒷부분에는 메시지를 저장하는 것이다.
>pull: 저장소의 변경된 내용을 로컬(내 컴퓨터) 저장소에 적용하는 작업이다 사용법으로는 git pull origin <브랜치명>
>push: 변경된 내용을 원격 저장지에 업로드 할 때 사용 git push -u origin <브랜치명>
>branch: 여러 협업자와 작업하는 도중 나만의 버전을 만들고 싶을 때 사용하는 명령어로 git branch <브랜치명>
>stash: 아직 마무리하지 않은 작업을 스택에 잠시 저장할 수 있도록 하는 명령어 사용법은 git stash save

* git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?
>object: 데이터 베이스에 객체에대한 정보 저장
>commit: 현재 변경된 작업 상태를 점검이 마치면 확정하고 저장소에 저장하는 작업
>head: branch는 커밋한 지점을 의미한다면 head는 branch를 가리키는 포인터
>branch: 가지,분기점을 의미하며 작업을 할 떄 현상태를 복사하여 branch로 작업을 한 후 완벽해 질 때 merge하는 형식
>tag: 소스를 개발하는 과정 중에 특정 시점마다 꼬리표를 붙여두는 것. 사용법 git tag {tagname} ( git tag는  현재 tag리스트확인)
https://linkeverything.github.io/git/git-tag/ (git tag 사용법 및 개념)
>commit을 통해 사용자가 commit 메시지를 작성하고 commit 시점 기준 저장
* 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요?
>git rm -r [File Name] /git rm --cached -r [File Name]
>>--cached의 경우 원격 저장소에 있는 파일만 삭제. 사용하지 않으면 원격 및 로컬 저장소 둘 다 삭제
## Quest
* GitHub에 가입한 뒤, [이 커리큘럼의 GitHub 저장소](https://github.com/KnowRe-Dev/WebDevCurriculum)의 우상단의 Fork 버튼을 눌러 자신의 저장소에 복사해 둡니다.
* Windows의 경우 같이 설치된 git shell을, MacOSX의 경우 터미널을 실행시켜 커맨드라인에 들어간 뒤, 명령어를 이용하여 복사한 저장소를 clone합니다.
  * 앞으로의 git 작업은 되도록 커맨드라인을 통해 하는 것을 권장합니다.
* 이 문서가 있는 폴더 바로 밑에 있는 sandbox 폴더에 파일을 추가한 후 커밋해 보기도 하고, 파일을 삭제해 보기도 하고, 수정해 보기도 하면서 각각의 단계에서 커밋했을 때 어떤 것들이 저장되는지를 확인합니다.
* `clone`/`add`/`commit`/`push`/`pull`/`branch`/`stash` 명령을 충분히 익혔다고 생각되면, 자신의 저장소에 이력을 push합니다.

## Advanced
* Mercurial은 어떤 형상관리 시스템일까요? 어떤 장점이 있을까요?
* 실리콘밸리의 테크 대기업들은 어떤 형상관리 시스템을 쓰고 있을까요?
