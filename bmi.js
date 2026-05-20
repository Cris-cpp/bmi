




document.getElementById("bmiform").addEventListener("submit", function(e) {
    e.preventDefault()
const wt=parseFloat(document.getElementById("wt").value)
const ht=parseFloat(document.getElementById("ht").value)
const a=wt/(ht*ht).toFixed(2)
alert("your bmi is : " + a.toFixed(2))

})
