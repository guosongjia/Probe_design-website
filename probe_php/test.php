<!DOCTYPE html>
<html>
<head>

</head>
<body>
<h1>This is my first try of php</h1>
<?php
//这是单行的注释
#这也是单行的注释
/*这是
多行的
注释*/
echo "Hello World!";
ECHO "Hello World!";
$text = "Hello World!";
echo "<h2>PHp is fun~</h2>";
echo "<br><p style='font-size: 50px'>I like learning PHP!</p>";
print ("This is the output of print build-in function.");
$a=123;
var_dump($a);
$b=12.34;
var_dump($b);
$c=array(1,2,3,4,5,6,7);
var_dump($c);
echo strlen("Hello Wrold!");
echo strpos("Hello world","world");
define("Constant","This is my first PHP constant");
echo "<br>";
echo Constant."   This is a good sentence.";
$time=date("H");
if ($time<"8"){
    echo "Have a nice day";
}else{
    echo "<br>Also have a nice day!";
}

$color = "red";
switch ($color){
    case "red":
        echo "<br>Yes you are right.";
        break;
    case "green":
        echo "<br> No you are wrong.";
}
?>
</body>
</html>
