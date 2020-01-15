console.log("hi")

$("#button").click(function(){
    $.ajax({
      type: 'GET',
      url:'/api/example',
      success: function(data){
        console.log('success:',data)
      }     
    });

});
    