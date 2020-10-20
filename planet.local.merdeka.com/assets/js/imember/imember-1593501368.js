$(document).ready(function(){ 
	$('#iusername,#iname,#iemail,#isiteurl,#iprofildescription,#ijob').keyup(function(){
		
		var val = $(this).val();
		var id = $(this).attr('id');
		var max = $('#count_'+id).attr('max');
		var new_val = val;
		if (val.length > max){
			new_val = val.substr(0,max);
			$(this).val(new_val);
		}
		counter = max - new_val.length;
		$('#count_'+id).html(counter);
	});
	$('#iusername,#iname,#iemail,#isiteurl,#iprofildescription,#ijob').keyup();
	
	
	profil_picture = readCookie('profil_picture');
	if(profil_picture){
		profil_picture = decodeURIComponent(profil_picture);
		$('.profil_picture').attr("src",profil_picture);
	}
	
	job = readCookie('job');
	if(job){
		job = decodeURIComponent(job.replace(/\+/g, '%20'));
		$('.job').html(job);
	}
	
	profil_description = readCookie('profil_description');
	if(profil_description){
		profil_description = decodeURIComponent(profil_description.replace(/\+/g, '%20'));
		$('.profil_description').html(profil_description);
	}

});
