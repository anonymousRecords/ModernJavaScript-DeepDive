# 04장 변수
# 4.1 변수란 무엇인가? 왜 필요한가?
변수 
- 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름
- 값의 위치를 가리키는 상징적인 이름

변수 이름
- 메모리 공간에 저장된 값을 식별할 수 있는 고유한 이름

변수 값
- 변수에 저장된 값

할당(대입, 저장)
- 변수에 값을 저장하는 것

참조
- 변수에 저장된 값을 읽어 들이는 것

# 4.2 식별자
식별자
- 변수 이름
- 어떤 값을 구별해서 식별할 수 있는 고유한 이름

식별자는 값이 아니라 메모리 주소를 기억하고 있다.
- 메모리 주소에 붙인 이름

# 4.3 변수 선언
변수 선언
- 변수를 생성하는 것
- 값을 저자하기 위한 메모리 공간을 확보하고 변수 이름과 확보된 변수 이름과 확보된 메모리 공간의 주소를 연결해서 값을 저장할 수 있게 준비하는 것

변수 선언에 의해 확보된 메모리 공간은 비어 있을 것으로 생각할 수 잇으나 확보된 메모리 공간에는 자바스크립트 엔진에 의해 undefined라는 값이 암묵적으로 할당되어 초기화됨.

### 자바스크립트 엔지의 변수 선언 과정
선언 단계
- 변수 이름을 등록해서 자바스크립트 엔진에 변수의 존재를 알림

초기화 단계
- 값을 저장하기 위한 메모리 공간을 확보하고 암묵적으로 undeined를 할당해 초기화한다.

# 4.4 변수 선언의 실행 시점과 변수 호이스팅
변수 선언이 소스코드가 한 줄씩 순차적으로 실행되는 시점, 즉 런타임이 아니라 그 이전 단계에서 먼저 실행되기 때문

변수 호이스팅
- 변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징

# 4.5 값의 할당
- 변수 선언과 값의 할당의 실행 시점이 다름
- 변수 선언은 소스코드가 순차적으로 실행되는 시점인 런타임 이전에 먼저 실행되지만 값의 할당은 소스코드가 순차적으로 실행되는 시점인 런타임에 실행됨

# 4.6 값의 재할당
재할당
- 이미 값이 할당되어 있는 변수에 새로운 값을 또다시 할당하는 것

값을 재할당할 수 없어서 변수에 저장된 값을 변경할 수 없다면 변수가 아니라 상수임

# 4.7 식별자 네이밍 규칙
식별자
- 어떤 값을 구별해서 식별해낼 수 있는 고유한 이름

식별자 규칙
- 식별자는 특수문자를 제외한 문자, 숫자, 언더스코어(_), 달러 기호($)를 포함할 수 있음
- 단, 식별자는 특수문자를 제외한 문자, 언더스코어(_), 달러 기호($)로 시작해야한다. 숫자로 시작하는 것은 허용하지 않는다.
- 예약어는 식별자로 사용할 수 없다.