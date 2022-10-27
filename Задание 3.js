const generateSumFinder = function(){
    const sum = (a, b) => a + b;     
    return sum;                      
  };
  
  const sum = generateSumFinder();   
  console.log(sum(1, 5));
  