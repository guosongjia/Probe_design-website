function uploadinfo(){
	alert("You have already loaded your target sequence!")
}

//在Brower按钮后文本框中显示提交序列的文件名
//var file = document.getElementById("myfile")
//var filename = document.getElementById("filename")
//function handleFile(){
	//alert("file")
//}


function check() {
        
        var objFile = document.getElementById("myfile");
        if(objFile.value == "") {
            alert("Please select your target sequence file.")
        }
    
        console.log(objFile.files[0].size); // 文件字节数
        
        var files = $('#myfile').prop('files');//获取到文件列表
        if(files.length == 0){
            alert('请选择文件');
        }else{
            var reader = new FileReader();//新建一个FileReader
            reader.readAsText(files[0], "UTF-8");//读取文件 
            reader.onload = function(evt){ //读取完文件之后会回来这里
                var fileString = evt.target.result; // 读取文件内容
                document.getElementById("targetinput").value = fileString

        }
    }
    
}