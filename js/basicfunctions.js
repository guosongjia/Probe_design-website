function uploadinfo(){
	alert("You have already loaded your target sequence!")
}

/*$("#uploadbutton").on("click",function(){
	var fp = $("#myfile");
	var lg = fp[0].files.length;
	var items = fp[0].files;
	var fragment = "";

	if(lg>0){
		for (var i = 0 ; i<lg;i++){
			var fileName = items[i].name
		}
		fragment += fileName
	}
	$("#uploadfile").val()
})*/




function getFileName(obj){
		 	var fileName="";
		 	
			if(typeof(fileName) != "undefined")
			{
				fileName = $(obj).val().split("\\").pop();
				fileName=fileName.substring(0, fileName.lastIndexOf("."));
			}
			return fileName;
	 }
