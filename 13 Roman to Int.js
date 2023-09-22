// Roman to integer
const romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let romantoint = s =>{
    let result = 0
    for (let i = 0; i <s.length; i++){
          if(s[i] ==='I' && s[i+1] === 'V'){
            result += 4;
            i++
          } else if(s[i] ==='I' && s[i+1] === 'X'){
            result += 9;
            i++
          }else if(s[i] ==='X' && s[i+1] === 'L'){
            result += 40;
            i++
          } else if(s[i] ==='X' && s[i+1] === 'C'){
            result += 90;
            i++
          } else if(s[i] ==='C' && s[i+1] === 'D'){
            result += 400;
            i++
          } else if (s[i] ==='C' && s[i+1] === 'M'){
            result += 900;
            i++
          } else {
            result += romanHash[s[i]]
          }
    }
    return result
  }

  // Better solution => O(n)
  const romanToInt =s => {
    let roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (roman[s[i]] < roman[s[i + 1]])
            result = result - roman[s[i]];
        else
            result = result + roman[s[i]];
        }
    return result;
    };
    console.log(romanToInt('MCMXLIV'))