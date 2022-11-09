//타입 스크립트 ts

//브라우저는 자바스크립트만 읽음
//그럴때 terminal =>tsc-w 사용 하면 js파일 생기고 갱신된다.

let 이름 :string = 'kim';
// 이름 = 123; <=이러면 에러
let arr :string[] = ['kim','park'] //이 배열안에는 string 배열만 들어가야함
let obj : {name : string} = {name:'kim'} //객체 선언시
let select :string | number = 123; //union설정
type TypeSelect = string | number; //타입명 설정시 일반적으로 대문자

function 함수설정(x:number) :number{
  return x*2;
} // 매개변수 결과값도 타입 설정가능

type Member = [number,boolean] //이런걸 튜플이라함 첫번째 값은 숫자 두번째는 불리언값 들어와야함
let jojo:Member = [1,true]

type MoreMember = {
  [key:string]:string //글자로된 모든 object 속성의 타입은 string
}

class User {
  name:string;
    constructor(name:string){
      this.name = name;
    }
}