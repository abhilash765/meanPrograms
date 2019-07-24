
function coup(n)
{
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var temp=" "
    var length=chars.length
for (let i = 0; i < n; i++)
   {
    temp=temp+chars.charAt(Math.floor(Math.random()*length))
   }
   console.log(temp);
}
console.log(coup(5))