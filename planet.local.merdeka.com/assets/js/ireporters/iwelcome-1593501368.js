$(document).ready(function(){ 
	$("#iprovince").change(function(){
		var province = $(this).val();
		//-------
		$.ajax({
		  url: ireporter_base_url+"getcity",
		  data:'province='+province,
		  method: "POST",
		  dataType:"html"
		}).done(function(resp) {
			$("#icity").html(resp);
			//alert(resp);
		});
		//-------
	});
});
