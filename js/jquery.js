function uploadinfo(){
	alert("You have already loaded your target sequence!")
}

//在Brower按钮后文本框中显示提交序列的文件名
var file = document.getElementById("myfile")
var filename = document.getElementById("filename")
function handleFile(){
	filename.value = file.value
}