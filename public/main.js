$(function(){
	var socket= io.connect(); 
	 
	$('#button').click(function(){//當HTml裡的按鍵按下時的功能
		
		var message = $('#input').val();//設id=input欄位的內容為message
		var name= $('#name').val();//設id=ame欄位的內容為name
		$('.inner').append('<p>'+name+':'+ message+'</p>');//在<div style=inner>添加訊息來顯示
		//console.log(message);
		socket.emit('message',{//傳送data物件到伺服端(data物件包含名子和訊息)
			name:name,
			message:message,
		});
	});
	socket.on('message',function(data){//接收從伺服端廣播的訊息和名稱
		
		$('.inner').append('<p>'+data.name+':'+ data.message+'</p>');//在<div style=inner>添加訊息來顯示
		
		
		
		
		
	});
		socket.on('login',function(){//接收到伺服端廣播的上線事件
			
			
			$('.inner').append('<p>有人上線了</p>');//在<div style=inner>添加訊息來顯示
			
			
			
			
		
		});
		socket.on('logout',function(name){//接收到伺服端廣播的下線事件
			
			
			$('.inner').append('<p>'+name+' 下線了</p>');//添加訊息來顯示下線了
			
			
			
			
		
		});
});	

	