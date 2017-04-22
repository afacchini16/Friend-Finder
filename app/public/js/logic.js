$("#submit").on("click", function(){
    event.preventDefault();
    console.log("CLICKED!")
    
    var userData = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), 
        $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]
    };

console.log(userData);

    $.post("/api/friends", userData, 
    function(data){
        if (data) {
            console.log("data: " + data);
        }
        else {
            alert("Error!");
        }
    }); 
});