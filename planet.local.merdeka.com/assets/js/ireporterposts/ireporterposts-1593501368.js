$(document).ready(function(){  
	$('.icontrolbtn').hide();
	$('.imgbigpreview').click(function(){
		imgsource 	= $(this).attr('src');
		checkimage 	= imgsource.split("/").pop();
		
		if(checkimage=='default-img-140x70.jpg'){
			imessage = '<p>Artikel ini belum memilik image</p>';
			$('.inotif-content').html(imessage);
			$('.inotif-title').html('iReporter Notification');
			$('#notifModal').modal('show'); 
		}else{
			
			simgsource = imgsource.replace("/110x55/", "/540x270/"); 
			imessage = '<p><img src="'+simgsource+'" class="img-thumbnail"></p>';
			$('.inotif-content').html(imessage);
			$('.inotif-title').html('iReporter Thumb Preview');
			$('#notifModal').modal('show'); 
		}
	});
	
	$('.previewpost').click(function(ev){
		ev.preventDefault();
		docid 		= $(this).attr('rel');
		ajaxpostvar = 'docid='+docid;
		el 			= $(this);
		 
		$.ajax({
			type 	: 'POST',
			url  	: ireporter_base_url+'previewpost',
			data 	: ajaxpostvar,
			success : function(imessage){
				//imessage = '<p>Proses delete item gagal dilakukan !</p>';
				$('.iposting-content').html(imessage);
				$('#postingModal').modal('show'); 
				
				
			}
		 });
	});
	
	//------------publish post function----------
	
	$( document ).on( "click", ".ipublish", function(e) {
		//----------
		imessage	= $(this).parents('tr').find('td').eq(2);
		idocid	 	= $(this).attr('rel');
		istatus		= '<span class="label label-success">PUBLISHED</span>';
		iel			= $(this);
		//alert(idocid+'---'+istatus);
		//ajaxpostvar	= 'idocid='+idocid+'&istatus='+istatus;
		ajaxpostvar	= 'idocid='+idocid+'&istatus=published&userpage=1';
		//alert(imessage);
		$.ajax({
			type   : 'POST',
			url    : ireporter_base_url + 'upromote/alterpoststatus',
			data   : ajaxpostvar,
			success: function(iresponse){
				//$(this).parents('tr').find('td').eq(2).text('published');
				//imessage.text(istatus);
				imessage.html(istatus);
				iel.attr('class','btn btn-info btn-xs idraft');
				iel.html('UNPUBLISH');
				window.location.reload();
				if(iresponse && iresponse!=='failed' && iresponse!=='success'){
					iel.parents('tr').find('td').eq(1).append(iresponse);
				}	
			} 
		 });
		 e.preventDefault();
		//----------
	});
	
	$( document ).on( "click", ".idraft", function(e) {
		//----------
		imessage	= $(this).parents('tr').find('td').eq(2);
		idocid	 	= $(this).attr('rel');
		istatus		= '<span class="label label-default">DRAFT</span>';
		//ajaxpostvar	= 'idocid='+idocid+'&istatus='+istatus;
		ajaxpostvar	= 'idocid='+idocid+'&istatus=draft&userpage=1';
		//alert(imessage);
		iel			= $(this);
		
		$.ajax({
			type   : 'POST',
			url    : ireporter_base_url + 'upromote/alterpoststatus',
			data   : ajaxpostvar,
			success: function(iresponse){
				//$(this).parents('tr').find('td').eq(2).text('published');
				//imessage.text(istatus);
				imessage.html(istatus);
				iel.attr('class','btn btn-info ipublish btn-xs');
				iel.html('PUBLISH');
				window.location.reload();
				iel.parents('tr').find('td').eq(1).find('.ipublishlink').remove();
			} 
		 });
		 e.preventDefault();
		//----------	
	});
	
	//-------------------------------------------
	//--------UNLOCK && LOCK EVENT------
	$('.requnlock').click(function(ev){
		idocid	 	= $(this).attr('rel');
		ajaxpostvar	= 'idocid='+idocid;
		
		$.ajax({
			type   : 'POST',
			url    : ireporter_base_url + 'unlockrequest',
			data   : ajaxpostvar,
			success: function(iresponse){
				if(iresponse=='failed'){
					imessage = '<p>Permohonan unlock gagal kami process, klick ulang R UNLOCK</p>';
				}else{
					imessage = '<p>Permohonan unlock sudah kami terima!</p>';
				}
				$('.inotif-content').html(imessage);
				$('.inotif-title').html('iReporter Notification');
				$('#notifModal').modal('show'); 	
			} 
		 });
	});
	
	$('.locked').click(function(ev){
		ev.preventDefault();
	});
	//----------------------------
	
	$('.iarticleitem').mouseenter(function(){
		$(this).find('.icontrolbtn').show();
	});
	$('.iarticleitem').mouseleave(function(){
		$(this).find('.icontrolbtn').hide();
	});
});
