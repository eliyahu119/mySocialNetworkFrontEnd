
/**
 * returns modified time
 */
function mTime(t){
    return (t>9 ? '' : '0')+t.toString();
}

module.exports={
ini(){
    //formatted date 
Date.prototype.formatedDate = function() {
    let mm = mTime(this.getMonth() + 1); // getMonth() is zero-based
    let dd = mTime(this.getDate());
    let hh =mTime(this.getHours());
    let mi = mTime(this.getMinutes())
    return  `${hh}:${mi}      ${dd}-${mm}-${this.getFullYear()}`;

};
},

/**
 * returns a reverse array
 * @param {Arry} input 
 * @returns {Array}
 */
reverseArr(input) {
   let ret = [];
   for(let i = input.length-1; i >= 0; i--) {
       ret.push(input[i]);
   }
   return ret;
}


}  