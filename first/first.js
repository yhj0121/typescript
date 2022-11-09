//타입 스크립트 ts
//브라우저는 자바스크립트만 읽음
//그럴때 terminal =>tsc-w 사용 하면 js파일 생기고 갱신된다.
var 이름 = 'kim';
// 이름 = 123; <=이러면 에러
var arr = ['kim', 'park']; //이 배열안에는 string 배열만 들어가야함
var obj = { name: 'kim' }; //객체 선언시
var select = 123; //union설정
function 함수설정(x) {
    return x * 2;
} // 매개변수 결과값도 타입 설정가능
var jojo = [1, true];
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
