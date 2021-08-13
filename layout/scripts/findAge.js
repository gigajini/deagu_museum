let age = document.getElementsByClassName('age')
let boxes = document.getElementsByClassName('boxes')

// '어른'을 담고 있는 인덱스 찾기
function findAdult(){
    findReset();
    for(i=0;i<age.length;i++){
        if(age[i].innerHTML.toUpperCase().indexOf('성인') > -1){
            age[i].style.color = "#1C84DF";
        }else{
            boxes[i].style.display = "none";
        }
      }
}

// '어린이'을 담고 있는 인덱스 찾기
function findChild(){
    findReset();
    for(i=0;i<age.length;i++){
        if(age[i].innerHTML.toUpperCase().indexOf('어린이') > -1){
            age[i].style.color = "#BD2F39";
        }else{
            boxes[i].style.display = "none";
        }
      }
}

// 전체보기
function findReset(){
    for(i=0;i<age.length;i++){
        boxes[i].style.display = "flex";
        age[i].style.color = "#555";
    }
}