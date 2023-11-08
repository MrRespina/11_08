/**
 * 
 
	  자료형(DataType)
			1. 문자형 : String
 
 */

let name1 = "Ji";
let name2 = 'Ji';
let name3 = `Ji`;	// backtick : `
console.log(name1);
console.log(name2);
console.log(name3);

let msg = "I'm student";
let msg2 = 'I\'m a student'; // 역슬래시를 앞에.

// backtick : 문자열 내부에 변수 표현 가능 ${변수명}

let msg3 = `My name is ${name1}`;
document.write(msg3 + "<br>");
let msg4 = 'My name is ${name2}';
document.write(msg4 + "<br>"); // ${name2}가 그대로 노출됨.

let msg5 = `I am ${99 + 22} years old`;
document.write(msg5 + "<br>");

// 숫자형 - 정수/실수
let age = 1000;
let height = 189.4;

let a = 1 / 0;
console.log(a);	// Infinity

let b = name1 / 2;
console.log(b);	// NaN(Not a Number - 숫자가 아니다)

// 글자끼리 더하기
let aa = "나는 ";
let bb = " 입니다";

console.log(aa+name2+bb);

// 논리형
let c = true;
let d = false;

console.log(name1 == "Ji");
console.log(age > 2000);

// null, undefined
let e;
console.log(e); // undefined(값 정의되지 않음)
let f = null;
console.log(f); // null(존재하지 않음)

// 변수의 자료형을 알아낼 떄 사용 : typeof 연산자
//			직접 코드를 짰다면 이 연산자는 필요X
//			다른 개발자가 코드를 짰을 때 변수에 대한 데이터 타입이 헷갈릴 때.
//			API를 통해서 받아온 데이터의 자료형을 알아내서 다른 방식으로 가공해야 할 때
console.log(typeof name1);
console.log(typeof age);
console.log(c);
console.log(e);
console.log(f);
