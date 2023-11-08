/**
 * 
 
 형변환(Type Casting)
 
	  String() > 문자형으로
	  Number() > 숫자형으로
	  Boolean() > 논리형으로
 	
	  형 변환은 왜 필요한가?
			자료형이 다른 두 변수를 계산했을 때 원하지 않는 결과가 나올수도 있음.
	  	
	  대화상자중에 하나를 골라서
	  수학 점수,영어 점수를 각가 입력받고
	  그 두 점수의 평균점수를 console.log로 찍기
 */

// prompt로 입력받은 값은 무조건 String 형이다.
// 고로 숫자로 사용하고 싶으면 cast 해줘야한다.

// JS : 문자여도 숫자로 보이면(표현식을 활용 시) 숫자로 바꿔줌.
// 40 + 45 = 4045(String)
// 4045 / 2 = 2022.5(문자열로 받았지만 사칙 연산시 숫자로 바꿀 수 있으면 숫자형으로 Autocast해서 나눠준다.)
// 자동형변환은 좋아보이지만
//		원인을 찾기 힘든 에러 발생시킬 여지가 다분하다.
//		>> 항상 의도를 가지고 원하는 타입으로 변환해서 사용하는 것 > 명시적 형 변환

/*
let math = prompt("수학 점수를 입력해주세요.");
let eng = prompt("영어 점수를 입력해주세요.");
let avg = (Number(math)+Number(eng))/2;
console.log(`당신의 평균 점수는 ${avg} 점 입니다.`);
 
let math2 = Number(prompt("수학?"));
let eng2 = Number(prompt("영어?"));
let avg2 = (math2+eng2) / 2;
console.log(avg2);
*/

// String() : 괄호 속의 값을 문자형으로
document.write("String()<br>");
document.write(String(3) + "<br>", String(true) + "<br>", String(false) + "<br>", String(null) + "<br>", String(undefined) + "<br>");

// Boolean() : 괄호 안의 값을 논리형으로.
//	대부분 True 나옴. 가끔 False 나오는 경우도 있음.
document.write(Boolean(3) + "<br>");
document.write(Boolean('Mr') + "<br>");
document.write(Boolean('') + "<br>");	//false
document.write(Boolean(' ') + "<br>");
document.write(Boolean(null)+"<br>");	//false
document.write(Boolean(undefined)+"<br>");	//false
document.write(Boolean(NaN)+"<br>");	//false

// 주의사항?
Number(null);	//0
Number(undefined);	//NaN