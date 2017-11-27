$(function() {
    alert("done");  
    $('#post_title').val("제이쿼리 재밌당");
    $('#post_title').on('change', function() {
        console.log("hahahahaha");  
        var text = $('#post_title').val();
        alert(text); 
    });
});

// Q. post_title의 내용물이 바뀌면 alert를 통해 내용물을 확인한다.
// 1. post_title 요소를 가지고온다.(id)
// 1-1. 요소에 onChangeListener(on)를 달아준다.
// 1-2. 요소의 바뀐 값을 추출한다.
// 1-3. 값을 변수에 저장
// 2. 변수에 저장된 값을 alert한다.

