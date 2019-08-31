function indicesArray(a,targetCount) {
    let indicesArr = [];
    for(let i = 0; i < a.length; i++) {
        for(let j = 1; j < a.length; j++) {
            if((a[i] + a[j]) === targetCount) {
                indicesArr.push(i,j);
                break;
            }
        }
    }
    return indicesArr;
  }


  console.log(indicesArray([10,50,60,20,30,40,20],90));


  function sumArrays(a,b) {
    let sumArr = [];
    const aLenGreThanB = a.length > b.length ? true : false;
    
    if(aLenGreThanB) {
    for(let i = 0; i < a.length; i++) {
          
          
          if(i < b.length) {
              sumArr.push(a[i]+b[i]);
          } else {
              sumArr.push(a[i]);
          }
        }
             
      } else {
      
      for(let i = 0; i < b.length; i++) {
              
              
              if(i < a.length) {
                  sumArr.push(a[i]+b[i]);
              } else {
                  sumArr.push(b[i]);
          }
      
        }
      
      }

      return sumArr;
    }



    console.log(sumArrays([10,10],[10,10,90]));