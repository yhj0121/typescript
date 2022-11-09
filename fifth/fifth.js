function 내s함수(x) {
    if (typeof x === 'string') {
        return x + 1;
    }
    else {
        return x + 1;
    }
} //타입을 고를수 있다 
function 내ss함수(x) {
    var arr = [];
    if (typeof x === 'number') {
        arr[0] = x;
    }
    else {
        arr[0] = 1; //- 꼭 typeof를 쓸 필요는 없고 타입을 하나로 확정지을 수 있는 코드라면 어떤 것도 Narrowing 역할을 할 수 있습니다. 
        //    - in, instanceof 키워드도 사용가능합니다.
    }
}
//assertion 
//assertion 쓰는 이유 1 유니온타입 하나로 확정하고 싶을 때 가능 
function 내함수123(x) {
    return x + 1; //assertion 타입 덮어쓰기
}
console.log(내함수123(123)); //2 무슨 타입이 들어올지 100퍼 알때 사용 가능
// let 이름123 :number = 123;
// 이름123 as string //이러면 에러
