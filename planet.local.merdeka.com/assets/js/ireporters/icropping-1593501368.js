$(document).ready(function(){
	//~ alert('_BISMILLAH_'); 
	//var ireporter_base_url = 'http://ireporters-dev.merdeka.com/';
	//-----ICROPPING CODE----
	var $image = $('#thumb-cropper > img'),cropBoxData,canvasData,icropData;

	$('#thumbModal').on('shown.bs.modal', function () {
	  $image.cropper({
		aspectRatio: 2 / 1,  
		guides: false,
		highlight: true,
        dragCrop: false,
        cropBoxMovable: true,
        cropBoxResizable: true,
		checkImageOrigin: false,
		built: function () {
		  // Strict mode: set crop box data first
		  //~ $image.cropper('setCropBoxData', cropBoxData);
		  $image.cropper('setCropBoxData', { width: "540", height: "270" });
		  //~ $image.cropper('setCanvasData', icropData);
		  $image.cropper('setCanvasData', { width: "540", height: "270" });
		  //~ $image.cropper('setData', canvasData);
		  $image.cropper('setData', { width: "540", height: "270" });
		}
	  });
	}).on('hidden.bs.modal', function () {
	  /*cropBoxData = $image.cropper('getCropBoxData');
	  canvasData = $image.cropper('getCanvasData');
	  icropData	=  $image.cropper('getData');
	 //-----handle ajax for server side cropping--
	  ebaseonloc = $("#temp_dentry").val().replace(/-/g,'/');
	  idocid = $("#temp_id").val();
	  
	  ajaxpostvar = 'dataX='+icropData.x+'&dataY='+icropData.y+'&width='+icropData.width+'&height='+icropData.height+'&realpicture='+$('.thumbnail-crop').attr('src')+'&ebaseonloc='+ebaseonloc+'&idocid='+idocid;
	  
	  $.ajax({
			type 	: 'POST',
			url  	: ireporter_base_url+'cropthumbnail',
			data 	: ajaxpostvar,
			success : function(imessage){
				$iday = new Date();
				//$("#ipictpreview_thumb").attr('src',imessage+'?'+$iday.getMilliseconds());
				//alert(imessage+'?'+$iday.getMilliseconds());
				$("#izone_thumb").css('background-image','url('+imessage+'?'+$iday.getMilliseconds()+')');
				$("#izone_thumb_hidden").val(imessage+'?'+$iday.getMilliseconds());
			}
	  });*/
	  //-------------------------------------------
	  $('.thumbnail-crop').attr('src','');
	  $image.cropper('destroy');
	  
	});
	
	$(document).on("click", "#icrop", function(){
		  cropBoxData = $image.cropper('getCropBoxData');
		  canvasData = $image.cropper('getCanvasData');
		  icropData	=  $image.cropper('getData');
		 //-----handle ajax for server side cropping--
		  ebaseonloc = $("#temp_dentry").val().replace(/-/g,'/');
		  idocid = $("#temp_id").val();
		  
		  ajaxpostvar = 'dataX='+icropData.x+'&dataY='+icropData.y+'&width='+icropData.width+'&height='+icropData.height+'&realpicture='+$('.thumbnail-crop').attr('src')+'&ebaseonloc='+ebaseonloc+'&idocid='+idocid;
		  console.log("start cropping "+ireporter_base_url+'cropthumbnail');
		  console.log("ajaxpostvar");
		  console.log(ajaxpostvar);
		  $.ajax({
				type 	: 'POST',
				url  	: ireporter_base_url+'cropthumbnail',
				data 	: ajaxpostvar,
				success : function(imessage){
					console.log("result");
					console.log(imessage);
					$iday = new Date();
					//$("#ipictpreview_thumb").attr('src',imessage+'?'+$iday.getMilliseconds());
					//alert(imessage+'?'+$iday.getMilliseconds());
					
					//~ $("#izone_thumb").css('background-image','url('+imessage+'?'+$iday.getMilliseconds()+')');
					//~ $("#izone_thumb_hidden").val(imessage+'?'+$iday.getMilliseconds());
					//~ alert(imessage);
					imessagetrimmed	= imessage.trim();
					//~ if(imessage){
					if(imessagetrimmed){
						$("#izone_thumb").css('background-image','url('+imessage+')');
						$("#izone_thumb_hidden").val(imessage);
					}else{
						fmessage = '<p>Proses cropping foto gagal, mohon untuk upload ulang !</p>';
						$('.inotif-content').html(fmessage);
						$('#notifModal').modal('show'); 
					}
				}
		  });
		  //-------------------------------------------
		  $('.thumbnail-crop').attr('src','');
		  $image.cropper('destroy');		
	});
	
	//-----------------------
	//---added on 24 of Nov 2015---
	var izone_thumb_img = $("#izone_thumb_hidden").val();
	var $iday = new Date();
	//~ $("#izone_thumb").css('background-image','url('+izone_thumb_img+'?'+$iday.getMilliseconds()+')');
	$("#izone_thumb").css('background-image','url('+izone_thumb_img+')');
	//alert(izone_thumb_img);
	//-----------------------------
});
