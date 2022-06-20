
function changeDay(inputDay) {
    // startDay 입력한 날짜로 계산
    let startDay = new Date(inputDay).getTime(); // 금연시작일
    let today = new Date().getTime(); // 오늘
    
    // 경과일 = 오늘 - 금연시작한날
    // result = today - startDay
    console.log(startDay, today);
    result = today - startDay;
    result = result / (1000*60*60*24); // 일수
    
    // Math객체에서 소수점 제하기 
    intResult = Math.floor(result);
    
    // 시간 표시
    document.getElementById('day').innerHTML = intResult;
    // $('#day').html(result);
  }
  
  // 날짜 변경 이벤트
  $('#date').change(function(){
    let inputDay = $(this).val();
    changeDay(inputDay);
  })
  
  /**** 기능 개선
   *  1.사용자가 날짜입력(금연시작일) 기능: 생각해 보세요
   *  2.금연시작일이 영구적으로 저장(DB)
   *  3.디자인을 각색해보세요
   *  4.깃허브에 업데이트(html,css,js 코드 분리)
   * */