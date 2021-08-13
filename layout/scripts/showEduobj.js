let arrayObj = [eduObj1,eduObj2,eduObj3,eduObj4,eduObj5,eduObj6,eduObj7,eduObj8,eduObj9];
let content_box = document.getElementsByClassName('content_box');

// 교육을 클릭했을때 
// showEdu(eduObj)

// 행사를 클릭했을때 
// showEdu(eventObj)


let str = "";
let strArray = [];
for(let i = 0 ; i < arrayObj.length ; i++){
    str += `
    <div class="boxes">
        <img src="${arrayObj[i].picture}"/>
        <div>
            <h3 class="ko_medium ko_20">${arrayObj[i].title}</h3>
            <p class="ko_light">${arrayObj[i].content}</p>
            <div class="list">
                <ul>
                    <li class="date ko_medium ko_15"> 기간 : ${arrayObj[i].date}</li>
                    <li class="age ko_medium ko_15"> 추천 : ${arrayObj[i].age}</li>
                </ul>
            </div>
            <div class="ko_light ${arrayObj[i].hiring_state}"><p>${arrayObj[i].hiring}</p></div>
        </div>
    </div>
    `
}
$('.content_box').html(str); 


