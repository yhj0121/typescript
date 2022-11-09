type Animal = string | number | undefined; //type alias 지정가능
let 동물 :Animal;

//type 이름
type 사람 = {
  name : string,
  age : number,
}

let teacher :사람 = { name : 'john', age : 20 } //object 형식도 지정가능

const 지역 = 'seoul'
//지역 = 'seoul' 에러나옴

const 지역오브젝트 = {region: 'seoul'}
지역오브젝트.region = 'busan' //오브젝트 수정은 가능

type ReadOn = {
 readonly name:string //읽기전용으로 수정하면 오브젝트 수정 불가는ㅇ
}
const 리드온리:ReadOn = {
  name:"리드온리 막기"
}

// 리드온리.name = "유라" //에러나오긴하는데 js파일에선 바꿔줌

type SelectOn = {
  name?: string //옵셔널 지정 가능
}

type Num = number;
type Str = number;
type Persons = Num | Str //이런식으로 타입 변수 합치기 가능

type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY
let 좌표 :XandY = { x : 1, y : 2 } //연산자로 타입 합치기 가능

type Name = string;
// type Name = number; //타입은 재정의 불가능

type 과제22 = 
{
  color?: string,
  size : number,
  readonly position : number[]
}

type UserS = { name : string, email? : string, phone : string } 
type Adult = { adult : boolean }

type NewUser = UserS & Adult;

let 회원가입정보 :NewUser = {
  name : 'kim',
  adult : false,
  phone : "1234"
}