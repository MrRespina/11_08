 /*
 */
 
 
 // 거듭제곱
 //let num1 = 2**3;
 //console.log(num1);
 
 // 연산자 줄여쓰기 가능
 let num2 = 10;
 num2 += 5;
 console.log(num2);
 
 // 증감연산자
 let num3 = 20;
 num3 ++;
 console.log(num3);
 
 let result = num3++;	// 후위연산자
 console.log(result);
 console.log(num3);
 
 let result2 = ++num3;	// 전위연산자
 console.log(result2);
 
 //	++을 변수 뒤에 담으면 증가시키기 전 값을 담고 앞에 담으면 증가시킨 값을 담음.
 
 // 비교연산자(Java와 같다)
 console.log('-------------------------');
 console.log(10 > 5);
 console.log(10 == 5); 
 console.log(10 < 5); 
 console.log('-------------------------');
 
 let a = String('10');
 let b = Number(10);
 let res = (a == b);
 console.log(`(String a == Number b) = ${res}`);
 
 console.log("10" === 10)	// false(자료형까지 바교하는 방법!)
 
 //	일치연산자 : === | !==
 