console.log("hi")

$("#bball").click(function(){
    $.ajax({
      type: 'GET',
      url:'/api/bball',
      success: function(data){
        console.log('success:',data)
        let sports = data;
        for(let i =0; i<sports.length;i++){
          let newElement = document.createElement('div')
          newElement.className = "sportsDiv"
          console.log(sports[i].teams)
          newElement.innerHTML = sports[i].teams
          $('#lines').append(newElement)
          
        }
      }     
    });

});
  