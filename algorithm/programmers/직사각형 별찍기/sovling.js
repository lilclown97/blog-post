// 문제 설명
// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// 제한 조건
// n과 m은 각각 1000 이하인 자연수입니다.

const a = 2,
  b = 3;

let star = '';

// a:가로, b:세로.
for (let k = 0; k < b; k++) {
  for (i = 0; i < a; i++) {
    // star에 * 추가
    star += '*';
  }
  // 다음 열로 이동.
  star += '\n';
}

console.log(star);
