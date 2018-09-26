/**This script is for FASTA file upload PATH obtain and FASTA file read.**/
	window.onload = function() {
        var getFileContent = function (fileInput, callback) {
            if (fileInput.files && fileInput.files.length > 0 && fileInput.files[0].size > 0) {
                var file = fileInput.files[0];
                if (window.FileReader) {
                    var reader = new FileReader();
                    reader.onloadend = function (evt) {
                        if (evt.target.readyState == FileReader.DONE) {
                            callback(evt.target.result);
                        }
                    };
                    reader.readAsText(file, 'utf-8');
                }
            }
        };
        /**
         * upload内容变化时载入内容
         */
        document.getElementById('myfile').onchange = function () {
        	var uploadfile = document.getElementById("uploadfile")
        	var myfile = document.getElementById("myfile")
            var content = document.getElementById('targetinput');
            uploadfile.value=myfile.value

            getFileContent(this, function (str) {
                targetinput.value = str;
            });
        };
    };
	
/** This Script is for checking of upload sequences.  **/
		    	var myfile = document.getElementById("myfile");
                var content = document.getElementById('targetinput');
                function uploadinfo(){
	                if (myfile.value == ""){
		                alert("Please select your target file or paste your target sequence.")
	            }
	                else{
	                	alert("You have already uploaded your target sequence.")
	                }
            }