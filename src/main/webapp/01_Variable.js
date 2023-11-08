/**
 * 
 	JavaScript
 		인터프리터 언어 > 오타 안나게 주의할 것?
 		
 	1. 변수(Variable)
 		데이터를 담는 그릇
 		
 	변수에 접근하는 방법(우리가 확인하는 것 ?)
 	1) alert() : 경고창을 띄워주는 함수
 	alert("Connected");
	2) console.log() : 콘솔창에 로그를 띄워주는 함수 	
 	console.log("확인 됨.");
 	
 	name = "res" //전역 변수의 형태이기 때문에 이 방식은 위험하다.
 	
 	변수 선언하는 형태 3가지
 		var, let, const
 		자바 > 자료형 변수명
 		JS > 변수형태 변수명
 		
 		var : var(iable) >> 중복 선언이 가능함. + 초기화
 		var a = 10;
 		
 		let : Java 변수 만들 때와 비슷한 느낌(변수명 중복X)
 		let name = "Ji";
 		
 		const : 값이 절대로 바뀌지 않는 상수. 수정 불가능, 수정하려고 하면 에러가 발생. const 변수는 대문자로 사용할 것
 		const PI = 2.141592;
 		
 		정리!
 			JS에서 변수 선언할 때
 				변할 수 있는 값은 var,let
 				변하지 않는 값은 const
 				
 		JS 변수명 짓는 조건 (Java와 동일)
 			1. 변수는 문자,숫자,$,_만 가능.
 			2. 첫글자로 숫자, 대문자는 사용하지 않음.
 			3. 예악어는 사용하지 않음.
 			4. 변수명은 읽기 쉽고 이해하기 좋게 하는게 좋음.
 			5. const 변수 만들떄는 전부 대문자로 할 것.
 	
 */

var a = 10;	//a 변수 선언하면서 초기화
console.log(a);
var a = 20;	//a 변수 선언하면서 초기화
console.log(a);
var a;		//변수 선언 : 마지막에 해당 변수에 할당된 값이 변수에 저장
console.log(a);
// 			기존에 선언해 둔 변수를 까먹고 다시 값을 할당하는 실수가 있을 수 있어서 잘 사용하지 않음.
let name = "Ji";
console.log(name);
//let name ="ho"; 한번 더 선언시 이미 name이 선언되었기 떄문에 에러가 난다.
name = "Hong";	// 변수명 = 값;의 형태로 변경이 가능하다.
console.log(name);

const PI = 3.141592;
console.log(PI);
//PI = 6.6666;	에러남. 값을 바꿀 수 없음.
//console.log(PI);