// Q. 50분마다 쉬는시간 안내메시지 창 띄우기(17시는 마지막 시간이므로 수고메시지 출력)

// 1. 현재시간을 가져온다
// 2. 현재 시간 중에서 시에 해당하는 부분을 가져온다. 
// 3. 시에 해당하는 부분이 17이상일 경우 잘가요 아닐경우 열공해요 메시지 출력 (alert) 
// 4. 1, 2, 3에 해당하는 과정을 50분에 한번씩만 나오게! 


function alertRest() {
    var time = new Date();
    console.log(time);
    var hour = time.getHours();
    console.log(hour);
    
    if(hour >= 17) {
        alert("잘가!");
    } else {
        alert("열공!");
    }  
}

// setInterval(alertRest, 1000*5)

alertRest();
