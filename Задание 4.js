function selectNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current = current + 1;
    }, 1000);
  }
  
  selectNumbers(5, 15)
  