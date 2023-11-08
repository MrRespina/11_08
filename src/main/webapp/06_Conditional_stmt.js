/**
 * 
 */
 console.log("완료");
 
 //	조건문(Conditional Statement)
 // if : 가장 기본적인 조건문
 //		if절 괄호 안의 조건을 보고 성립(true)이면 실행이 된다.
 
 let age = 20;
 
 //if(age > 18){alert("어서오세요!")};
 
 // let, const가 다른 블록에서 같은 이름으로 선언 가능
 let a = 1;
 if(true){
	let a = 2;
	console.log(`if문 속의 let a 는 ${a}`);
}
console.log(`if문 밖의 let a 는 ${a}`);

// const로 b의 값을 입력받아서
// b가 10보다 크면 b는 10보다 큽니다.
// 그 외 나머지는 다릅니다.

/*
const num = Number(prompt("입력받을 숫자를 입력해주세요."));

if(num>10){
	alert(`[${num}은(는) 10보다 큽니다!]`);
	console.log(`[${num}은(는) 10보다 크다.]`);
}else{
	alert(`[다릅니다?]`);
	console.log(`[달라요?]`);
}

const num2 = prompt("입력받을 숫자를 입력해주세요!");

if(Number(num2) > 10){
	console.log('[너무 큰 숫자입니다 .]');
}else if(Number(num2) == 10){
	console.log('[정답이요!]');
}else if(Number(num2) < 10){
	console.log('[너무 작아요 ...]');
}
*/

let fruit = String(prompt("과일을 입력해주세요!\n(사과/바나나/키위/멜론/수박)"));

let price = 0;
switch(fruit){
	case "사과":	price=100; break;
	case "바나나": price=200; break;
	case "키위" : price=300; break;
	case "멜론":  price=500; break;
	case "수박": price=500; break;
	default: alert(`우리 가게엔 ${fruit}라는 과일은 없어요.`); break;
}
if(price!=0){
	alert(`${fruit}과일의 가격은 ${price}입니다!`);
	console.log(`${fruit}과일의 가격은 ${price}입니다.`);
}else{
	console.log(`${fruit}는 없는 과일이라 가격이 없어요?`);
}

