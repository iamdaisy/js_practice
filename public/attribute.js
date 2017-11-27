// Q. table의 크기를 내가 원하는 만큼으로 설정하기
// style width -> 그떄그떄 원하는 만큼

// Q. 버튼을 눌렀을때 table 태그에 class를 추가/삭제한다.
// 1. 버튼을 누른다.
// 1-1. 버튼 요소를 가지고 온다.
// 1-2. 버튼 요소에 eventListener(click)를 달아준다.
// 1-3. 버튼을 눌렀을 때 실행시킬 메소드를 포함한다.
// 2. table태그 요소를 가지고 온다.
// 2-1 prompt 창을 띄운다.
// 2-2 prompt 창에 내가 원하는 사이즈를 입력한다.
// 2-3 table의 style 속성중 width 속성을 바꾼다.

var btn = document.getElementById('setAttribute');
console.log(btn);

btn.onclick = function() {
    console.log("attributeButton!!");
    setWidth();
}

function setWidth() {
    var tb = document.getElementById('myTable');
    var size = prompt("원하는 사이즈를 입력해주세요");
    console.log(size);
    tb.setAttribute('style', 'width:' + size + '%;');
}


