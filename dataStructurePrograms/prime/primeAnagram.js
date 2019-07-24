/**Extend the Prime Number Program and store only the numbers in that range that are Anagrams.
 * For e.g. 17 and 71 are both Prime and Anagrams in the 0 to 1000 range.
 * Further store in a 2D Array the numbers that are Anagram and numbers that are not Anagram */
let pAna1=[];
//let i,j,k=0;
let pAna2=[];
let plink=require('./utility');
plink.primeCheck();
pAna1=plink.storeArray();
// console.log(pAna1)
pAna1.forEach(element => {
    pAna2=pAna1
});
console.log(pAna2);