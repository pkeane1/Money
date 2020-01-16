console.log("hi")

$("#bball").click(function(){
    $.ajax({
      type: 'GET',
      url:'/api/bball',
      success: function(data){
        console.log('success:',data)
        let sports = data;
        for(let i =0; i<sports.length;i++){
          console.log(i)
        }
      }     
    });

});
  