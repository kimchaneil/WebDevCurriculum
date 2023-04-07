# Quest 07. node.js의 기초

## Introduction
* 이번 퀘스트에서는 node.js의 기본적인 구조와 개념에 대해 알아 보겠습니다.

## Topics
* node.js
* npm
* CommonJS와 ES Modules

## Resources
* [About node.js](https://nodejs.org/ko/about/)
* [Node.js의 아키텍쳐](https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174356/node-js%EC%9D%98-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90)
* [npm](https://docs.npmjs.com/about-npm)
* [npm CLI commands](https://docs.npmjs.com/cli/v7/commands)
* [npm - package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)
* [How NodeJS Require works!](https://www.thirdrocktechkno.com/blog/how-nodejs-require-works)
* [MDN - JavaScript Modules](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules)
* [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
* [require vs import](https://www.geeksforgeeks.org/difference-between-node-js-require-and-es6-import-and-export/)

## Checklist
* node.js는 무엇인가요? node.js의 내부는 어떻게 구성되어 있을까요?
>node.js는 확장성 있는 네트워크 어플리케이션 개발에 사용되는 소프트웨어 플랫폼이다.
>node는 여러가지 기본 모듈들로 존재하며 이중 50프로는 JS, 나머지 50프로는 C++로 구성되어있다
* npm이 무엇인가요? `package.json` 파일은 어떤 필드들로 구성되어 있나요?
>npm은 node packaged manager의 약자로 nodejs로 만들어진 package(module)을 관리해주는 툴이다.
>name,version,description,main,scripts,keywords,author,license로 구성되어있다.
>name과 version은 반드시 있어야하는 필드이고 이 필드들이 누락될 시 패키지는 설치되지 않는다. name은 말 그래도 패키지의 이름을 나타낸다.
>> 기본규칙 1.소문자로 작성되어야한다 2.한 단어로 작성되어야 한다. 3.-이나_를 포함할 수 있다.
>version: semantic versioning guidenlines를 따르며 x.x.x의 형태로 작성되어야 한다. [major].[minor].[patch]의 형태
>description: 문자열로 기술한 패키지에 대한 설명이며  npm에 검색했을 때 리스트에 표시되어 사람들이 패키지를 찾아내고 이해하는 데 이용
>main:패키지의 진입점(entry point)이 되는 모듈의 ID이다.
>scripts: 패키지의 생명주기에서 다양한 타이밍에 자주 사용할 commnad를 alias를 통해 지정해 둘 수 있는 dictionary
>keywords:키워드를 문자열 배열로 설명.description과 마찬가지로 npm에서 검색되었을 때 리스트에 표시되어 사람들이 패키지를 찾아내고 이해할 수 있는데 도움을 준다.
>author:배포자 한 사람을 위한 field로, 다수의 사람을 표시하기 위해서는 contributors field로 작성해야 한다.
>license:배포한 패키지에 대해 패키지 사용자가 패키지를 사용하는데 어떤 권한과 제한 사항이 있는지 알기 위해 license를 명시해야 한다.
* npx는 어떤 명령인가요? npm 패키지를 `-g` 옵션을 통해 글로벌로 저장하는 것과 그렇지 않은 것은 어떻게 다른가요?
>npm을 좀 더 편하게 사용하기 위해 npm에서 제공하는 하나의 도구 5.2.0버전 이상
>패키지를 임시로 설치해서 실행하는 용도
>-g 옵션은 전역 설치할 때 사용하며 시스템상에 있는 모든 node_modules 디텍터리에 해당하는 패키지를 설치하는 뜻으로 세팅되어져 있는 다른 프로젝트에서 해당 패키지 사용 가능
* 자바스크립트 코드에서 다른 파일의 코드를 부르는 시도들은 지금까지 어떤 것이 있었을까요? CommonJS 대신 ES Modules가 등장한 이유는 무엇일까요?
>import & export의 방법이 있으며 가져오고자 하는곳에는 export로 지정을 해주며, 사용하고자 하는 곳에는 import로 가져옴
>commonjs: module.exports ={...}의 방식으로 모듈을 내보내고 require()을 통해 모듈을 가져온다
>ES Modules: export로 모듈을 내보내고 import로 모듈을 가져온다.
>ESM이전에는 각각의 script파일을 전역 스코프처럼 사용했다.HTML 파일에서 보다 위에 있는 script파일은 전역 스코프처럼 하위의 script태그에서 접근,변경이 가능했다. 때문에 jquery script를 최상단에 두고 순서를 올바르게 구성하는 것이 중요해서 문제가 발생했다.
* ES Modules는 기존의 `require()`와 동작상에 어떤 차이가 있을까요? CommonJS는 할 수 있으나 ES Modules가 할 수 없는 일에는 어떤 것이 있을까요?
>commonjs에서 사용하는require방식은 전체 모듈을 다 불러오게 되고 불필요한 모듈이 로드되기도 하며 어느 부분을 사용했는지도 명확하지 않다.
>모듈내에 정의된 특정한 부분만 불러올 수 있다.
* node.js에서 ES Modules를 사용하려면 어떻게 해야 할까요? ES Modules 기반의 코드에서 CommonJS 기반의 패키지를 불러오려면 어떻게 해야 할까요? 그 반대는 어떻게 될까요?
>13.2버전 이하에서는 Babel이라는 도구 사용, 이후부터는 ES모듈 사용가능 -> package.json파일에 type항목을 module로 설정하면 된다.
>default import로 가능, CJS.method1()과 같이 .을 찍어서 이용가능
## Quest
* 스켈레톤 코드에는 다음과 같은 네 개의 패키지가 있으며, 용도는 다음과 같습니다:
  * `cjs-package`: CommonJS 기반의 패키지입니다. 다른 코드가 이 패키지의 함수와 내용을 참조하게 됩니다.
  * `esm-package`: ES Modules 기반의 패키지입니다. 다른 코드가 이 패키지의 함수와 내용을 참조하게 됩니다.
  * `cjs-my-project`: `cjs-package`와 `esm-package`에 모두 의존하는, CommonJS 기반의 프로젝트입니다.
  * `esm-my-project`: `cjs-package`와 `esm-package`에 모두 의존하는, ES Modules 기반의 프로젝트입니다.
* 각각의 패키지의 `package.json`과 `index.js` 또는 `index.mjs` 파일을 수정하여, 각각의 `*-my-project`들이 `*-package`에 노출된 함수와 클래스를 활용할 수 있도록 만들어 보세요.

## Advanced
* node.js 외의 자바스크립트 런타임에는 어떤 것이 있을까요?
