# Quest 04. OOP의 기본

## Introduction
* 이번 퀘스트에서는 바닐라 자바스크립트의 객체지향 프로그래밍에 대해 알아볼 예정입니다.

## Topics
* 객체지향 프로그래밍
  * 프로토타입 기반 객체지향 프로그래밍
  * 자바스크립트 클래스
    * 생성자
    * 멤버 함수
    * 멤버 변수
  * 정보의 은폐
  * 다형성
* 코드의 재사용

## Resources
* [MDN - Classes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)
* [MDN - Inheritance and the prototype chain](https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
* [MDN - Inheritance](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Inheritance)
* [Polymorphism](https://medium.com/@viktor.kukurba/object-oriented-programming-in-javascript-3-polymorphism-fb564c9f1ce8)
* [Class Composition](https://alligator.io/js/class-composition/)
* [Inheritance vs Composition](https://woowacourse.github.io/javable/post/2020-05-18-inheritance-vs-composition/)

## Checklist
* 객체지향 프로그래밍은 무엇일까요?
> 프로그래밍에서 필요한 데이터를 추상화 시켜 상태와 행위를 가진 객체로 만들고 객체들간의 상호작용을 통해 로직을 구성하는 프로그래밍 방법
  * `#`로 시작하는 프라이빗 필드는 왜 필요한 것일까요? 정보를 은폐(encapsulation)하면 어떤 장점이 있을까요?
  >프라이빗 필드는 캡슐화를 구현하는데 유용하고 이렇게 정보를 은폐했을 때 데이터의 무결성과 보안을 유지할 수 있다는 점이 장점이다.
  * 다형성이란 무엇인가요? 다형성은 어떻게 코드 구조의 정리를 도와주나요?
  >프로그램 언어 각 요소들(상수,변수,식,객체 등)이 다양한 자료형에 속하는 것이 허가되는 성질
  >오버라이딩과 같은 방법으로 코드를 더욱 단순화할 수 있게하고 유지 보수에 있어 이점을 가지게 한다.
  * 상속이란 무엇인가요? 상속을 할 때의 장점과 단점은 무엇인가요?
  >기존의 클래스에 기능을 추가하거나 재정의하여 새로운 클래스를 정의하는 것
  >장점:기존의 작성된 클래스 사용가능, 자식 클래스 설계 시 중복되는 맴버를 부모 클래스에 작성시 자식에서 작성하지 않아도 됨
  >단점: 클래스간의 관계가 복잡해지며 서로 다른 클래스로부터 상속받는 맴버간의 이름이 같은 경우 구분할 수 없음
  * OOP의 합성(Composition)이란 무엇인가요? 합성이 상속에 비해 가지는 장점은 무엇일까요?
  >중복되는 로직들을 갖는 객체를 구현하고,객체를 주입받아 중복 로직을 호출하면서 퍼블릭 인터페이스를 재사용하는 방법
  >캡슐화가 깨지고 결합도가 높아짐,유연성 및 확장성이 떨어짐,다중상속에 의한 문제가 발생할 수 있음 등의 문제점을 해결할 수 있음
* 자바스크립트의 클래스는 어떻게 정의할까요?
>class키워드를 사용하여 정의
  * 프로토타입 기반의 객체지향 프로그래밍은 무엇일까요?
  >클래스가 없고 상속을 사용하는 것과 다르게 객체를 원형으로 하여 복제의 과정을 통해 객체의 동작방식을 다시 사용가능
  * 자바스크립트의 클래스는 이전의 프로토타입 기반의 객체지향 구현과 어떤 관계를 가지고 있나요?
  >class가 없던 JS에서는 객체를 생성할  때 내부 생성자 없이 바로 객체 생성하고 이에따른 속성이나 행동 값 부여
  >class가 생긴 후 constructor 생성자를 통해 정의해줄 수 있고 외부 생성자인 new를 통해 class를 생성 상속 가능
## Quest
* 웹 상에서 동작하는 간단한 바탕화면 시스템을 만들 예정입니다.
* 요구사항은 다음과 같습니다:
  * 아이콘은 폴더와 일반 아이콘, 두 가지의 종류가 있습니다.
  * 아이콘들을 드래그를 통해 움직일 수 있어야 합니다.
  * 폴더 아이콘은 더블클릭하면 해당 폴더가 창으로 열리며, 열린 폴더의 창 역시 드래그를 통해 움직일 수 있어야 합니다.
  * 바탕화면의 생성자를 통해 처음에 생겨날 아이콘과 폴더의 개수를 받을 수 있습니다.
  * 여러 개의 바탕화면을 각각 다른 DOM 엘리먼트에서 동시에 운영할 수 있습니다.
  * Drag & Drop API를 사용하지 말고, 실제 마우스 이벤트(mouseover, mousedown, mouseout 등)를 사용하여 구현해 보세요!

## Advanced
* 객체지향의 역사는 어떻게 될까요?
* Smalltalk, Java, Go, Kotlin 등의 언어들로 넘어오면서 객체지향 패러다임 측면에서 어떤 발전이 있었을까요?
