$("button").on("click", function() { alert("Thanks! Expect an email from me soon!")});
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("p").toggle("slow");
    });
});
</script>
