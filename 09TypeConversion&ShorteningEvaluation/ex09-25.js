// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLenght(str){
    str = str || '';
    return str.length;
}

getStringLenght(); // 0
getStringLenght('hi'); // 2

// ES6의 매개변수의 기본값 설정
function getStringLenght(str = ''){
    return str.length;
}

getStringLenght(); // 0
getStringLenght('hi'); // 2