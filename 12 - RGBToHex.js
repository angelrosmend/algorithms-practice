/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a 
hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. 
Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

function rgb(r, g, b){
    let rbgArr = [r,g,b]
    let hex = rbgArr.map((i) =>{
        let val = i.toString(16)
        
        if (val.length < 2){
            val = `0${val}`
        }
        if( i <= 0){
           val = "00"
         }
         if( i > 255){
            val = "ff"
        }
        return val
    })
    return hex.join("").toLocaleUpperCase()
  }

//codewars solution 

function rgb(r, g, b){
    return [r,g,b].map(function(x) {
      return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    }).join('').toUpperCase();
  }

console.log(rgbToHex(300,255,255))
console.log(rgbToHex(148, 0, 211))
console.log(rgbToHex(0, 0, -20))
