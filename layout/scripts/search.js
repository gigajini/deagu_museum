button = document.querySelector('button');
input = document.getElementById('value')
itemList = []; // 검색된 요소들만 담길 배열

// 클릭,엔터키 이벤트 
input.focus()
input.addEventListener('keydown',function(e){
    if(e.key === "Enter"){
      Filter();
    }
})
button.addEventListener('click',Filter);


function Filter(){
    var value , item , name
    
    value = document.getElementById('value').value.toUpperCase();
    item = document.getElementsByClassName('one_quarter')

    itemList = []; // 배열 초기화


    // .name에서 인덱스를 찾는데 반환할 인덱스가 없으면 .artist에서 찾기
    for(i=0;i<item.length;i++){
      name = item[i].getElementsByClassName("name");
    
      if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
        searchName();
        addFirst()
      }else{
        searchArtist();
        addFirst()
      }
    }


    function searchName(){
      if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
        //claer : left 속성 해제
        item[i].classList.remove("first");
        item[i].style.display = "inline-block";
        // 요소를 배열에 저장
        itemList.push(item[i]);
      }else{
        item[i].style.display = "none";
      }
    }
    

    function searchArtist(){
      artist = item[i].getElementsByClassName("artist");

      if(artist[0].innerHTML.toUpperCase().indexOf(value) > -1){
        //claer : left 속성 해제
        item[i].classList.remove("first");
        item[i].style.display = "inline-block";
        // 요소를 배열에 저장
        itemList.push(item[i]);
      }else{
        item[i].style.display = "none";
      }
    }
    



/*  제목만 검색
    //indexOf()를 활용한 검색기능 구현
    for(i=0;i<item.length;i++){
      name = item[i].getElementsByClassName("name");

      if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
        //claer : left 속성 해제
        item[i].classList.remove("first");
        item[i].style.display = "inline-block";
        // 요소를 배열에 저장
        itemList.push(item[i]);
      }else{
        item[i].style.display = "none";
      }
    }

    addFirst()
 */   

    

    // 4의 배수에 클래스명 first 추가(clear :left 속성 추가)
    function addFirst(){
      console.log(itemList);
      console.log(itemList.length);

      for( x=0; x<itemList.length; x++){
        if (x % 4 === 0) {       
          itemList[x].classList.add('first');
          console.log(x);
          };
        };
      };


      /* 예전함수

    for(i=0;i<item.length;i++){
      name = item[i].getElementsByClassName("name");
      if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
        item[i].style.display = "inline-block";
      }else{
        item[i].style.display = "none";
      }
    }
        */
    
}  // Filter 함수 끝