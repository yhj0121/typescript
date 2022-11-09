function 내함수(x) {
    return x * 2; //return은 number
}
function 내함수1(x) {
    x * 2; //return을 막음
}
function 내함수2(x) {
    //매개변수가 들어올수도 있다.
    //정확한뜻은 number | undefined와 똑같은 의미
}
// function 내함수3(x :number|string) :void { 
//   console.log(x+3) // 에러 수학연산 유니온 못함
// } 
function 내함수3(x) {
    console.log(x + 3); // 타입을 제대로 설정하는걸 narrow이라한다
}
function 과제1(x) {
    x ? console.log("안녕") : console.log("이름이 없습니다.");
}
function 과제2(x) {
    return x.toString().length;
}
function 과제3(x, y, z) {
    y == true ? x = x + 500 : 0;
    z == '상' ? x = x + 100 : 0;
    if (x > 600) {
        return "결혼가능";
    }
    else {
        return "";
    }
}
