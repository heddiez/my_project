let data = {
    'emotion': '',
    'food': '',
    'address': ''
};

function previous(from) {
    let currentSection = $('.show-section');
    let previousSection = currentSection.prev();
    currentSection.removeClass('show-section');
    previousSection.addClass('show-section');
}

function next(from) {
    if (from === 'section03') {
        if (data['emotion'] === '') {
            alert('하나 선택해주세요');
            return;
        }

        getFoodByEmotion(data['emotion'])

    } else if (from === 'section05') {
        if (data['food'] === '') {
            alert('하나 선택해주세요');
            return;
        }

    } else if (from === 'section07') {
        data['address'] = $('#address').val();
        if (data['address'] === '') {
            alert('주소를 입력해주세요');
            return;
        }
    }

    let currentSection = $('.show-section');
    let nextSection = currentSection.next();
    currentSection.removeClass('show-section');
    nextSection.addClass('show-section');
}


function selectEmotion(emotion) {
    data["emotion"] = emotion;
    console.log(data);
    $('.section03 .selected').removeClass('selected');
    let card = $(`.section03 div:contains(${emotion})`);
    $(card[0]).addClass('selected');
}

function getFoodByEmotion(emotion) {
    if (emotion === '슬픔') {
        emotion = 'sadness'
    } else if (emotion === '분노') {
        emotion = 'anger'
    } else if (emotion === '스트레스') {
        emotion = 'stress'
    } else if (emotion === '우울/무기력함') {
        emotion = 'depressed'
    }

    $.ajax({
        type: "GET",
        url: "/food?emotion_give=" + emotion,
        data: {},
        success: function (response) {
            $('.section05').empty();
            if (response["result"] === "success") {
                let data = response["data"];
                for (let i = 0; i < data.length; i++) {
                    let recommend = data[i];
                    let temp = `<div class="card" onclick="selectFood('${recommend['food']}')">${recommend['food']}</div>`;
                    $('.section05').append(temp);
                }

            }
        }
    })
}

function selectFood(food) {
    data["food"] = food;
    console.log(data);
    $('.section05 .selected').removeClass('selected');
    let card = $(`.section05 div:contains(${food})`);
    $(card[0]).addClass('selected');
}

function searchMap() {
    window.open(`https://map.naver.com/v5/search/${data['address']} ${data['food']}?c=14141000.0766329,4511459.8281494,13,0,0,0,dh`);
    
}

//function selectAddress(address) {
//     // https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%A7%A5%EC%A3%BC?c=14141000.0766329,4511459.8281494,13,0,0,0,dh
//     $.ajax({
//         type: "POST",
//         url: "/food?address_give=" + address,
//         data: {'address_give': address},
//         success: function (response) {
//             if (response["result"] === "success") {
//                 console.log(address_give);
//                 alert(response["msg"]);
//             }
//         }
//     })
// }