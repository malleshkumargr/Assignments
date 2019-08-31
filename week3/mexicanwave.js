function wave(a){
    let mexicanWaveStr = '';
    let mexicanWaveArr = [];
    for(let i = 0; i < a.length; i++) {
     if(i === 0) {
       mexicanWaveStr += a.charAt(i).toUpperCase().concat(a.slice(i + 1));
       console.log(mexicanWaveStr);
     } else if(i === a.length - 1){
       mexicanWaveStr += a.slice(0, i) + a.charAt(i).toUpperCase();
     } else {
       mexicanWaveStr += a.slice(0, i)+a.charAt(i).toUpperCase().concat(a.slice(i+1));
     }
      mexicanWaveArr.push(mexicanWaveStr);
      mexicanWaveStr = '';
    }

    return mexicanWaveArr;
}


console.log(wave("hello"));
console.log(wave(""));