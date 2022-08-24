# 12장 함수
# 12.1 함수란?
함수
- 재료를 투입받아 제품을 생산하는 기계와 유사
- 일련의 과정을 문으로 구현하고 코드 블록으로 감싸서 하나의 실행 단위로 정의한 것
- 입력을 받아서 출력을 내보냄
- 매개 변수
    - 함수 내부로 입력을 전달받는 변수
- 인수
    - 입력
- 반환값
    - 출력
- 함수는 값임
- 여러 개 존재할 수 있으므로 특정 함수를 구별하기 위해 식별자의 함수 일므을 사용할 수 있음

함수 호출
- 인수를 매개변수를 통해 함수에 전달하면서 함수의 실행을 명시적으로 지시해야 함
- 함수를 호출하면 코드 블록에 담긴 문들이 일괄적으로 실행되고 실행 결과, 즉 반환값을 반환함

# 12.2 함수를 사용하는 이유
- 코드의 재사용
- 유지보수의 편의성
- 코드의 신뢰성
- 코드의 가독성 향상

# 12.3 함수 리터럴
함수 리터럴의 구성 요소
- 함수 이름
    - 함수 이름은 식별자다. 따라서 식별자 네이밍 규칙을 준수해야 한다.
    - 함수 이름은 함수 몸체 내에ㅐ서만 참조할 수 있는 식별자다.
    - 함수 일므은 생략할 수 있다. 이름이 있는 함수를 기명 함수, 이름이 없는 함수를 무명/익명 함수라 한다.
- 매개변수 목록
    - 0개 이상의 매개변수를 소괄호로 감싸고 쉼표로 구분한다.
    - 각 매개변수에는 함수를 호출할 때 지정한 인수가 순서대로 할당된다. 즉, 매개변수 목룍은 순서에 의미가 있다.
    - 매개변수는 함수 몸체 내에서 변수와동일하게 취급된다. 따라서 매개변수도 변수와 마찬가지로 식별자 네이밍 규칙을 준수해야 한다.
- 함수 몸체
    - 함수가 호출되었을 때 일괄적으로 실행될 문들을 하나의 실행 단위로 정의한 코드 블록이다.
    - 함수 몸체는 함수 호출에 의해 실행된다.

리터럴
- 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기 방식
- 값을 생성하기 위한 표기법
- 함수 리터럴도 평가되어 값을 생성하며, 이 값은 객체다
- 일반 객체는 호출할 수 없지만 함수는 호출할 수 있다
- 함수 객체만의 고유한 프로퍼티를 갖는다

# 12.4 함수 정의
- 함수를 호출하기 이전에 인수를 전달받을 매개변수와 실행할 문들, 그리고 반환할 값을 지정하는 것
- 정의된 함수는 자바스크립트 엔진에 의해 평가되어 함수 객체가 됨

함수 정의 방식
- 함수 선언문
- 함수 선언문
- Function 생성자 ㅎ마수
- 화살표 함수(ES6)
## 12.4.1 함수 선언문
- 함수 선언문은 함수 이름을 생략할 수 없다.
- 함수 선언문은 표현식이 아닌 문이다.
- 자바스크립트 엔진은 생성된 함수를 호출하기 위해 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고, 거기에 함수 객체를 할당함
- 함수는 함수 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출한다.
## 12.4.2 함수 표현식
일급 객체
- 값처럼 변수에 할당할 수도 있고 프로퍼티 값이 될 수도 있으며 배열의 요소가 될 수도 있음
- 자바스크립트의 함수는 일급 객체임
- 함수가 일급 객체라는 것은 함수를 값처럼 자유롭게 사용할 수 있다는 의미
- 함수 표현식
    - 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있음
- 익명 함수
    - 함수 리터럴의 함수 이름은 생략 가능
## 12.4.3 함수 생성 시점과 함수 호이스팅
- 함수 선언문으로 정으히나 함수는 함수 선언문 이전에 호출 가능
- 함수 표현식으로 정의한 함수는 함수 표현식 이전에 호출할 수 없음
- 함수 선언문으로 정의한 함수와 함수 표현식으로 정의한 함수의 생성 시점이 다르기 때문
- 함수 선언문이 코드의 선두로 끌어 올려진 것ㅊ럼 동작하는 자바스크립트 고유의 특징을 함수 호이스팅이라고 함
- 변수 할당문의 값은 할당문이 실행되는 시점, 즉 런타임에 평가되므로 함수 표현식의 함수 리터럴도 할당문이 실행되는 시점에 평가되어 함수 객체가 된다.
- 함수 표현식으로 함수를 정의하면 함수 호이스팅이 발생하는 것이 아니라 변수 호이스팅이 발생함
## 12.4.4 Function 생성자 함수
## 12.4.5 화살표 함수

# 12.5 함수 호출
## 12.5.1 매개변수와 인수
## 12.5.2 인수 확인
- 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않는다.
- 자바스크립트는 동적 타입 언어다. 따라서 자바스크립트 함수는 매개변수의 타입을 사전에 지정할 수 없다.
## 12.5.3 매개변수의 최대 개수
- 이상적인 함수는 한 가지 일만 해야 하며 가급적 작게 만들어야 한다
## 12.5.4 반환문
반환문의 역할
- 함수의 실행을 중단하고 함수 몸체를 빠져나간다.
- return 키워드 뒤에 오는 표현식을 평가해 반환한다.

# 12.6 참조에 의한 전다로가 외부 상태의 변경

# 12.7 다양한 함수의 형태
## 12.7.1 즉시 실행 함수