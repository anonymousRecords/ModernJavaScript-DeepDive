const { faRepeat } = require("@fortawesome/free-solid-svg-icons");

// logOdds 함수는 단 한 번만 생성된다.
var logOdds = function (i) {
    if (i % 2) console.log(i);
}; 

// 고차 함수에 함수 참조를 전달한다.
faRepeat(5, logOdds); // 1 3