<!DOCTYPE html>
<html>
<body>

<p>Click the button to create a Text Field.</p>
<input type="text" id="1">
<br/><br/>
<input type="text" id="2">
<br/><br/>
<input type="text" id="3">
<br/><br/>
<button onclick="calc()">Try it</button>

<script>

function add(x,y){
return x+y;
}
function mul(x,y){
return x*y;
}
function sub(x,y){
return x-y;
}

function dowatever(x,y,sx){
return sx(x,y)
}
function calc() {
  x=document.getElementById(1).value
  f=document.getElementById(2).value
  y=document.getElementById(3).value
  
  var fn = window[f];
  if (typeof fn === "function")
  {m=dowatever(Number(x),Number(y),fn)
  alert(m)}
  else{alert("no sucj")}
}
</script>

</body>
</html>
