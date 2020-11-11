// let scripts = [
//     "안녕! 나는 컴포트라고 해",
//     "너의 기분에 맞는 음식과 가게를 추천해줄 거야<br><br>지금 너의 기분을 알려줄래?",
//     "기분 선택",
//     "기분에 맞는 음식을 추천해줄게 <br><br> 다음 음식 중 지금 먹고 싶은 걸 알려줘!",
//     "음식 선택",
//     "그럼 이제 해당 가게를 찾고 싶은 장소는 어디야?",
//     "주소 입력",
//     "지금부터 가게를 찾아줄게.<br><br> 맛있는 거 먹고 기분이 나아지면 좋겠다!"
// ];
//
// let state = 0;
//
// $(document).ready(function () {
//     // $('.content-text').text(scripts[state]);
//     // showScript();
// })
//
//
// function showScript() {
//     $('#next').click(function () {
//         for (let i = 1; i < scripts.length; i++) {
//             let state = scripts[i];
//             $('.content-text').text(state);
//             $('.content-address').hide();
//
//             if (i === 2) {
//                 $('.content-text').css('z-index', 3);
//             } else if (i === 3) {
//                 $('.section01').hide();
//             } else if (i === 4) {
//                 $('.content-text').css('z-index', 5);
//             } else if (i === 5) {
//                 $('.section02').hide();
//             } else if (i === 6) {
//                 $('.content-text').css('z-index', 7);
//             } else if (i === 7) {
//                 $('.content-address').hide();
//             }
//
//         }
//     })
// }

function next(from) {
    if (from === 'section01') {

    } else if (from === 'section02') {
        alert('finish!');
        return;
    }

    let currentSection = $('.show-section');
    let nextSection = currentSection.next();
    currentSection.removeClass('show-section');
    nextSection.addClass('show-section');
}