//If a given string has either x, replace x by y. if the given string has X, replace it by Y.
const st='XXxxXXxxabcXabcx'
const bp=st.replace(/x/g, 'y').replace(/X/g, 'Y');
console.log(bp);
