let data = {
    'emotion': '',
    'food': ''
};

function next(from) {
    if (from === 'section01') {

    } else if (from === 'section02') {

    } else if (from === 'section03') {
        if (data['emotion'] === '') {
            alert('하나 선택해주세요');
            return;
        }

        getFoodByEmotion(data['emotion'])

    } else if (from === 'section05') {

    } else if (from === 'section07') {

    } else if (from === 'section08') {

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
    } else if (emotion === '우울 / 무기력함') {
        emotion = 'depressed'
    }

    $.ajax({
        type: "GET",
        url: "/food?emotion_give=" + emotion,
        data: {},
        success: function (response) {
            console.log(response)
            if (response["result"] === "success") {
                let data = response["data"];

            }
        }
    })
}