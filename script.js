var tasks=[];
var userInput;

$(".add").click(function() {
    userInput=$(".picture-url").val();
    tasks.push(userInput);
    $(".gallery").append("<img src="+userInput+">" );
     $(".numtasks").text(tasks.length);
});
