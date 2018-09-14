function uploadinfo(){
	alert("You have already loaded your target sequence!")
}





function getFileName(obj){
		 	var fileName="";
		 	
			if(typeof(fileName) != "undefined")
			{
				fileName = $(obj).val().split("\\").pop();
				fileName=fileName.substring(0, fileName.lastIndexOf("."));
			}
			return fileName;
	 }
