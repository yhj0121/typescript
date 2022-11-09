let 유니온 :(number | string) = 123; //유니온타입 타입 여러개 합치는거

let 숫자정렬 :(number|string)[] = [123,"123"]

let 오브젝트 :{a:(number|string)} = {a:123}

let 애니타입 :any; //아무 타입이나 사용 가능 쉴드 해제 문법
애니타입=true;
애니타입 = 123;

let 언노운 :unknown; // 더 안전
언노운=123;
언노운="123";

// 언노운 -1 언노운은 뺄셈 못함

let 숫자덧셈 : string|number;
// 숫자덧셈+1 타입스크립트는 union타입에는 +1같은거 안됨 unkown같은것도 포함