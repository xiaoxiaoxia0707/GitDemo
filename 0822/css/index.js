<!DOCTYPE html>
<html>
<body>

<h1>我的第一段 JavaScript</h1>

<p>请输入数字。如果输入值不是数字，浏览器会弹出提示框。</p>

<input id="demo" type="text">

<script>
function myFunction()
{
var x=document.getElementById("demo").value;
if(x==""||isNaN(x))
	{
	alert("Not Numeric");
	}
}
</script>

<button type="button" onclick="myFunction()">点击这里</button>

</body>
</html>
