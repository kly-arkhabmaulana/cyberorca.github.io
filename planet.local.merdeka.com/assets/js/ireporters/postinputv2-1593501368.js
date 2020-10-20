$(document).ready(function () {
	//---tester code-----
	//alert($("#izone_thumb_hidden").val());
	//---tinymce code----
	tinyMCE.PluginManager.add('stylebuttons', function (editor, url) {
		['pre', 'p', 'code', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(function (name) {
			editor.addButton("style-" + name, {
				tooltip: "Toggle " + name,
				text: name.toUpperCase(),
				onClick: function () { editor.execCommand('mceToggleFormat', false, name); },
				onPostRender: function () {
					var self = this, setup = function () {
						editor.formatter.formatChanged(name, function (state) {
							self.active(state);
						});
					};
					editor.formatter ? setup() : editor.on('init', setup);
				}
			})
		});
	});
	//tinymce.remove();
	tinymce.init({
		mode: "specific_textareas",
		editor_selector: "mceEditor",
		content_css: ireporter_base_url + "assets/css/mcecontent.css",
		menubar: false,

		//plugins: "advlist stylebuttons,link,image,lists,code",
		plugins: "advlist stylebuttons,link,lists,code,paste",
		paste_as_text: true,
		entity_encoding: 'raw',
		forced_root_block: "",
		force_br_newlines: true,
		force_p_newlines: false,
		//toolbar: "bold italic style-h1 style-h2 style-h3 strikethrough bullist numlist blockquote alignleft aligncenter alignright alignjustify link code",
	});
	//---end of tinymce---
	//-----Global variable used in script 
	var zoptions = { iframe: { url: 'upload.php' } }
	$("#itext").show();

	var zone = new FileDrop('izone', zoptions);
	zone.event('send', function (files) {
		files.each(function (file) {
			//alert('seep');
			if (file.size > 2097152) {
				imessage = '<p>Ukuran maksimal gambar 2 MB !</p>';
				$('.inotif-content').html(imessage);
				$('#notifModal').modal('show');
				return false;
			}

			file.event('error', function (e, xhr) {
				alert(xhr.status + ', ' + xhr.statusText)
			});
			file.event('done', function (xhr) {
				imessage = xhr.responseText;
				if (imessage !== 'unsupported') {
					// console.log(imessage);
					$iday = new Date();
					//~ $("#izone").css('background-image','url('+imessage+'?'+$iday.getMilliseconds()+')');
					//~ $("#izone_hidden_image").val(imessage+'?'+$iday.getMilliseconds());

					$("#izone").css('background-image', 'url(' + imessage + ')');
					$("#izone_hidden_image").val(imessage);
				}
				else {
					$('.inotif-content').html('Tipe file tidak didukung, mohon untuk upload file dengan jenis jpeg/png.');
					$('#notifModal').modal('show');
					return false;
				}

			});
			ebaseonloc = $("#temp_dentry").val().replace(/-/g, '/');
			ipfilename = $("#temp_id").val();
			if (ipfilename !== 'my_id' && ipfilename) {
				file.sendTo(ireporter_base_url + 'uploaddetailpicture?ebaseonloc=' + ebaseonloc.trim() + '&ipfilename=' + ipfilename);
			} else {
				imessage = '<p>Mohon untuk mengisi title terlebih dahulu !</p>';
				$('.inotif-content').html(imessage);
				$('#notifModal').modal('show');
			}

		});
	});

	var zone = new FileDrop('izone_thumb', zoptions);
	zone.event('send', function (files) {
		files.each(function (file) {

			if (file.size > 2097152) {
				imessage = '<p>Ukuran maksimal gambar 2 MB !</p>';
				$('.inotif-content').html(imessage);
				$('#notifModal').modal('show');
				return false;
			}

			file.event('error', function (e, xhr) {
				alert(xhr.status + ', ' + xhr.statusText)
			});
			file.event('done', function (xhr) {
				imessage = xhr.responseText;
				if (imessage !== 'unsupported') {
					console.log("file image : " + imessage);
					$iday = new Date();
					//~ $('.thumbnail-crop').attr("src",imessage+'?'+$iday.getMilliseconds());
					$('.thumbnail-crop').attr("src", imessage);
					$('#thumbModal').modal('show');
				}

			});
			ebaseonloc = $("#temp_dentry").val().replace(/-/g, '/');
			ipfilename = $("#temp_id").val();
			if (ipfilename !== 'my_id' && ipfilename) {
				console.log('file upload to ');
				console.log(ireporter_base_url + 'uploadthumbpicture?ebaseonloc=' + ebaseonloc.trim() + '&ipfilename=' + ipfilename);
				file.sendTo(ireporter_base_url + 'uploadthumbpicture?ebaseonloc=' + ebaseonloc.trim() + '&ipfilename=' + ipfilename);
			} else {
				imessage = '<p>Mohon untuk mengisi title terlebih dahulu !</p>';
				$('.inotif-content').html(imessage);
				$('#notifModal').modal('show');
			}
		});
	});

	//-------assigning izone-----
	$('.ipitem-detail').each(function (index, obj) {

		ditype = $(this).attr('class').split(' ')[1];
		izoneid = $(this).find("div[id^='izone_']").attr('id');

		if (ditype == 'dipicture') {
			idocid = $(this).find("input[name^='ndetail_id_']").val();
			//~ alert(idocid);
			//----------------------
			var zoptions = { iframe: { url: 'upload.php' } }
			var zone = new FileDrop(izoneid, zoptions);
			zone.event('send', function (files) {
				olddocid = zone.el.id;
				files.each(function (file) {
					//~ alert(JSON.stringify(file));
					if (file.size > 2097152) {
						imessage = '<p>Ukuran maksimal gambar 2 MB !</p>';
						$('.inotif-content').html(imessage);
						$('#notifModal').modal('show');
						return false;
					}

					file.event('error', function (e, xhr) {
						alert(xhr.status + ', ' + xhr.statusText)
					});
					file.event('done', function (xhr) {
						imessage = xhr.responseText;
						//alert(imessage);
						newdocid = olddocid.replace("izone_", "");
						//alert(idocid+'---'+newdocid+'----'+zone.el.id);
						if (imessage !== 'unsupported') {
							$iday = new Date();
							//~ $("input[name=iuploadedpicture_"+newdocid+"]").val(imessage+'?'+$iday.getMilliseconds());
							//~ $("#izone_"+newdocid).css('background-image','url('+imessage+'?'+$iday.getMilliseconds()+')');
							//~ break;

							$("input[name=iuploadedpicture_" + newdocid + "]").val(imessage);
							$("#izone_" + newdocid).css('background-image', 'url(' + imessage + ')');
						}
					});
					//alert(zone.el.id);
					ebaseonloc = $("#temp_dentry").val().replace(/-/g, '/');
					ipfilename = $("#temp_id").val();
					file.sendTo(ireporter_base_url + 'uploaddetailpicture?ebaseonloc=' + ebaseonloc.trim() + '&ipfilename=' + ipfilename);
				});
			});
			//----------------------
			//~ alert(idocid);
			$iday = new Date();
			idoccurrentimage = $("input[name=iuploadedpicture_" + idocid + "]").val();
			//~ $("#izone_"+idocid).css('background-image','url('+idoccurrentimage+'?'+$iday.getMilliseconds()+')');
			$("#izone_" + idocid).css('background-image', 'url(' + idoccurrentimage + ')');
		}
	});
	//---------------------

	$("#nvideourl").change(function () {
		genVideoThumbnail($(this).val());
	});

	/*
	 * Processing thumbnail 
	 * */
	function genVideoThumbnail(vurl) {
		if (vurl) {
			icode = vurl.replace("https://www.youtube.com/watch?v=", "");
			ipath = 'https://i3.ytimg.com/vi/' + icode + '/1.jpg';
			$('.ivthumbnail').attr('src', ipath);
		}
	}
	/*
	 * descript change function 
	 * */
	$("#ipost_title").change(function () {
		ajaxpostvar = 'ipost_title=' + $("#ipost_title").val() + '&ipost_description=""&temp_id=' + $("#temp_id").val();
		$.ajax({
			type: 'POST',
			url: ireporter_base_url + 'savemasterdoc',
			data: ajaxpostvar,
			success: function (iresponse) {
				piresponse = iresponse.split('|');
				if (piresponse[0] != '' && piresponse[1] != '') {
					$("#temp_id").val(piresponse[0]);
					$("#temp_dentry").val(piresponse[1]);
				}
				else {
					$("#temp_id").val('my_id');
					$("#temp_dentry").val('no_dentry');
				}
			}
		});
	});
	/*
	 * saving category when change
	 * */
	$("#ipost_cat").change(function () {
		temp_id = $("#temp_id").val();
		if (temp_id !== 'my_id' && temp_id) {
			ajaxpostvar = 'ipost_cat=' + $(this).val() + '&temp_id=' + $("#temp_id").val();
			$.ajax({
				type: 'POST',
				url: ireporter_base_url + 'savecat',
				data: ajaxpostvar
			});
		} else {
			imessage = '<p>Mohon untuk mengisi title terlebih dahulu</p>';
			$('.inotif-content').html(imessage);
			$('#notifModal').modal('show');
		}
	});

	/*
	 * Save button 
	 * */
	// var cmessage =  'additemclick';
	// $(".additem").click({msg: cmessage},additemtrigger); 

	$(".additem").click(function () {
		var cmessage = 'additemclick';
		additemtrigger(cmessage);
	});

	//~ function to be triggered on .additem click added on 20 June 2016 
	function additemtrigger(e) {
		detectedid = $('input[name=radios]:checked').attr('ishow');
		detectedel = $('#' + detectedid + ' :input').serializeArray();
		temp_id = $("#temp_id").val();
		ipost_cat = $("#ipost_cat").val();
		ipost_title = $("#ipost_title").val();

		var el = $('#' + detectedid);
		len = detectedel.length;
		dataObj = {};

		for (i = 0; i < len; i++) {
			dataObj[detectedel[i].name] = detectedel[i].value;
		}
		//---special case content for text----
		tcontentid = $("#" + detectedid).find(".mceEditor").attr("id");
		textcontent = tinymce.get(tcontentid).getContent();
		textcontent = encodeURIComponent(textcontent);
		console.log("halo petrus");
		console.log(textcontent);
		//~ alert(textcontent);
		//~ return false;
		//--------------- 

		jml_txt_content = $("#postdcontent").find(".mceEditor").size();
		if (detectedid == 'itext') {
			ajaxpostvar = 'ipost_text_title=' + dataObj['ipost_text_title'] + '&ipost_text_content=' + textcontent + '&ipost_temp_id=' + temp_id + '&ipost_type=' + detectedid;
			//return false;
		} else if (detectedid == 'ipicture') {
			ajaxpostvar = 'ipost_picture_title=' + dataObj['ipost_picture_title'] + '&ipost_picture_path=' + dataObj['izone_hidden_image'].trim() + '&ipost_picture_caption=' + textcontent
				+ '&ipost_picture_credit=' + dataObj['ipost_picture_credit'] + '&ipost_temp_id=' + temp_id + '&ipost_type=' + detectedid;

			$("#izone_hidden_image").val('');
		} else if (detectedid == 'ivideo') {
			ajaxpostvar = 'ipost_video_title=' + dataObj['ipost_video_title'] + '&ipost_video_code=' + encodeURIComponent(dataObj['ipost_video_code']) + '&ipost_video_description='
				+ textcontent + '&ipost_video_credit=' + dataObj['ipost_video_credit'] + '&ipost_temp_id=' + temp_id + '&ipost_type=' + detectedid;
		}
		//~ ajaxpostvar	= encodeURIComponent(ajaxpostvar);

		imessage = [];

		if (!ipost_title || ipost_title == '') {
			imessage.push('<p>Mohon untuk mengisi title terlebih dahulu</p>');
		}

		if (!ipost_cat || ipost_cat == "select-cat") {
			imessage.push('<p>Silahkan pilih salah satu kategori/rubrik</p>');
		}

		if (jml_txt_content > 0) {
			if (detectedid == 'itext') {
				// if (!dataObj['ipost_text_title'] || dataObj['ipost_text_title'] == '') {
				// 	if (e != 'savepostrek') {
				// 		imessage.push('<p>Mohon untuk mengisi judul sub artikel ke ' + (parseInt(jml_txt_content) + 1) + '!</p>');
				// 		err_msg = true;
				// 	}
				// }

				if (!textcontent || textcontent == '') {
					if (jml_txt_content > 0) {
						if (e != 'savepostrek') {
							imessage.push('<p>Mohon untuk mengisi konten sub artikel ke ' + (parseInt(jml_txt_content) + 1) + '!</p>');
							err_msg = true;
						}
					} else {
						if (e == 'additemclick') {
							imessage.push('<p>Mohon untuk mengisi konten sub artikel ke 1</p>');
							err_msg = true;
						}
						else {
							imessage.push('<p>Mohon untuk mengisi konten artikel pertama</p>');
							err_msg = true;
						}
					}
				}

				if (e == 'savepostrek') {
					// if (textcontent != '' && dataObj['ipost_text_title'] == '') {
					// 	imessage.push('<p>Mohon untuk mengisi judul sub artikel ke ' + (parseInt(jml_txt_content) + 1) + '!</p>');
					// 	err_msg = true;
					// }

					if (dataObj['ipost_text_title'] != '' && textcontent == '') {
						imessage.push('<p>Mohon untuk mengisi konten sub artikel ke ' + (parseInt(jml_txt_content) + 1) + '!</p>');
						err_msg = true;
					}
				}
			}

			else if (detectedid == 'ipicture') {
				// if (!dataObj['ipost_picture_title'] || dataObj['ipost_picture_title'] == '') {
				// 	if (e != 'savepostrek') {
				// 		imessage.push('<p>Mohon untuk mengisi judul sub artikel ke ' + (parseInt(jml_txt_content) + 1) + '!</p>');
				// 		err_msg = true;
				// 	}
				// }
				if (!textcontent || textcontent == '') {
					if (jml_txt_content > 0) {
						if (e != 'savepostrek') {
							imessage.push('<p>Mohon untuk mengisi konten sub artikel ke ' + (parseInt(jml_txt_content) + 1) + '!</p>');
							err_msg = true;
						}
					} else {
						if (e == 'additemclick') {
							imessage.push('<p>Mohon untuk mengisi konten sub artikel ke 1</p>');
							err_msg = true;
						}
						else {
							imessage.push('<p>Mohon untuk mengisi konten artikel pertama</p>');
							err_msg = true;
						}
					}
				}
				if (e == 'savepostrek') {
					// if (textcontent != '' && dataObj['ipost_picture_title'] == '') {
					// 	imessage.push('<p>Mohon untuk mengisi judul sub artikel ke ' + (parseInt(jml_txt_content) + 1) + '!</p>');
					// 	err_msg = true;
					// }
					if (dataObj['ipost_picture_title'] != '' && textcontent == '') {
						imessage.push('<p>Mohon untuk mengisi konten sub artikel ke ' + (parseInt(jml_txt_content) + 1) + '!</p>');
						err_msg = true;
					}
				}
			}

			else if (detectedid == 'ivideo') {
				// if (!dataObj['ipost_video_title'] || dataObj['ipost_video_title'] == '') {
				// 	if (e != 'savepostrek') {
				// 		imessage.push('<p>Mohon untuk mengisi judul sub artikel ke ' + (parseInt(jml_txt_content) + 1) + '!</p>');
				// 		err_msg = true;
				// 	}
				// }

				if (!textcontent || textcontent == '') {
					if (jml_txt_content > 0) {
						if (e != 'savepostrek') {
							imessage.push('<p>Mohon untuk mengisi konten sub artikel ke ' + (parseInt(jml_txt_content) + 1) + '!</p>');
							err_msg = true;
						}
					} else {
						if (e == 'additemclick') {
							imessage.push('<p>Mohon untuk mengisi konten sub artikel ke 1</p>');
							err_msg = true;
						}
						else {
							imessage.push('<p>Mohon untuk mengisi konten artikel pertama</p>');
							err_msg = true;
						}
					}
				}
				if (e == 'savepostrek') {
					// if (textcontent != '' && dataObj['ipost_video_title'] == '') {
					// 	imessage.push('<p>Mohon untuk mengisi judul sub artikel ke ' + (parseInt(jml_txt_content) + 1) + '!</p>');
					// 	err_msg = true;
					// }
					if (dataObj['ipost_video_title'] != '' && textcontent == '') {
						imessage.push('<p>Mohon untuk mengisi konten sub artikel ke ' + (parseInt(jml_txt_content) + 1) + '!</p>');
						err_msg = true;
					}
				}
			}
		}
		else {
			if (!textcontent || textcontent == '') {
				if (jml_txt_content > 0) {
					if (e != 'savepostrek') {
						imessage.push('<p>Mohon untuk mengisi konten sub artikel ke ' + (parseInt(jml_txt_content) + 1) + '!</p>');
						err_msg = true;
					}
				} else {
					if (e == 'additemclick') {
						imessage.push('<p>Mohon untuk mengisi konten sub artikel ke 1</p>');
						err_msg = true;
					}
					else {
						imessage.push('<p>Mohon untuk mengisi konten artikel pertama</p>');
						err_msg = true;
					}
				}
			}

			// if(e=='additemclick'){
			// if (detectedid == 'itext') {
			// 	if (!dataObj['ipost_text_title'] || dataObj['ipost_text_title'] == '') {
			// 		// if(e!='savepostrek'){
			// 		imessage.push('<p>Mohon untuk mengisi judul sub artikel ke pertama</p>');
			// 		err_msg = true;
			// 		// }
			// 	}
			// }
			// else if (detectedid == 'ipicture') {
			// 	if (!dataObj['ipost_picture_title'] || dataObj['ipost_picture_title'] == '') {
			// 		// if(e!='savepostrek'){
			// 		imessage.push('<p>Mohon untuk mengisi judul sub artikel ke pertama</p>');
			// 		err_msg = true;
			// 		// }
			// 	}
			// }
			// else if (detectedid == 'ivideo') {
			// 	if (!dataObj['ipost_video_title'] || dataObj['ipost_video_title'] == '') {
			// 		// if(e!='savepostrek'){
			// 		imessage.push('<p>Mohon untuk mengisi judul sub artikel ke pertama</p>');
			// 		err_msg = true;
			// 		// }
			// 	}
			// }
			// }
		}

		// console.log(e);
		// console.log(imessage);
		// console.log(jml_txt_content);

		if (imessage.length == 0) {
			if (temp_id !== 'my_id' && temp_id) {
				console.log("=============ADD ITEM TEST==============");
				console.log(ireporter_base_url + 'savedetaildoc');
				console.log(ajaxpostvar);
				$.ajax({
					type: 'POST',
					url: ireporter_base_url + 'savedetaildoc',
					data: ajaxpostvar,
					success: function (imessage) {
						console.log("result");
						// console.log(imessage);
						imessage = imessage.trim();
						if (imessage !== 'failed') {
							$iday = new Date();
							el.children().find('input').val('');
							el.children().find('textarea').val('');
							itexteditor = el.children().find('.mceEditor').attr('id');
							tinyMCE.get(itexteditor).setContent('');
							$("#izone").css('background-image', 'url(https://cdns.klimg.com/merdeka.com/media/i/a/planet-dragdrop-image-2.jpg)');
							$("#postdcontent").append(imessage);
							$('.ipitem-detail').each(function (index, obj) {
								ditype = $(this).attr('class').split(' ')[1];
								izoneid = $(this).find("div[id^='izone_']").attr('id');
								if (ditype == 'dipicture') {
									idocid = $(this).find("input[name^='ndetail_id_']").val();
									//----------------------
									var zoptions = { iframe: { url: 'upload.php' } }
									var zone = new FileDrop(izoneid, zoptions);
									zone.event('send', function (files) {
										files.each(function (file) {
											if (file.size > 2097152) {
												imessage = '<p>Ukuran maksimal gambar 2 MB !</p>';
												$('.inotif-content').html(imessage);
												$('#notifModal').modal('show');
												return false;
											}
											file.event('error', function (e, xhr) {
												alert(xhr.status + ', ' + xhr.statusText)
											});
											file.event('done', function (xhr) {
												imessage = xhr.responseText;
												if (imessage !== 'unsupported') {
													$iday = new Date();
													iprid = "ipictpreview_" + idocid;
													//~ $("#"+iprid).attr("src",imessage+'?'+$iday.getMilliseconds());
													$("#" + iprid).attr("src", imessage);
													//~ $("input[name=iuploadedpicture_"+idocid+"]").val(imessage+'?'+$iday.getMilliseconds());
													$("input[name=iuploadedpicture_" + idocid + "]").val(imessage);
												}
											});
											ebaseonloc = $("#temp_dentry").val().replace(/-/g, '/');
											ipfilename = $("#temp_id").val();
											file.sendTo(ireporter_base_url + 'uploaddetailpicture?ebaseonloc=' + ebaseonloc.trim() + '&ipfilename=' + ipfilename);
										});
									});
									//----------------------
									$iday = new Date();
									idoccurrentimage = $("input[name=iuploadedpicture_" + idocid + "]").val();
									//~ $("#izone_"+idocid).css('background-image','url('+idoccurrentimage+'?'+$iday.getMilliseconds()+')');
									$("#izone_" + idocid).css('background-image', 'url(' + idoccurrentimage + ')');
								}
							});
							el.find('.videoWrapper').html('');
							//-------------------
							tinymce.remove();
							tinymce.init({
								mode: "specific_textareas",
								editor_selector: "mceEditor",
								content_css: ireporter_base_url + "assets/css/mcecontent.css",
								menubar: false,
								plugins: "advlist stylebuttons,link,lists,code,paste",
								paste_as_text: true,
								entity_encoding: 'raw',
								forced_root_block: "",
								force_br_newlines: true,
								force_p_newlines: false,
								//~ toolbar: 'bold italic style-h1 style-h2 style-h3 strikethrough bullist numlist blockquote alignleft aligncenter alignright alignjustify link code'
							});
							//-------------------
						}
						else {
							if (e == 'additemclick') {
								imessage = '<p>Proses penambahan content gagal, silakan diulangi kembali..(klik add item)</p>';
								$('.inotif-content').html(imessage);
								$('#notifModal').modal('show');
							}
						}
					}
				});
			}
			else {
				imessage = '<p>Proses penyimpanan berita gagal, mohon untuk mengecek koneksi dan menekan tombol SAVE !</p>';
				$('.inotif-content').html(imessage);
				$('#notifModal').modal('show');
			}
		}

		else {
			$('.inotif-content').html(imessage);
			$('#notifModal').modal('show');

			return imessage;
		}
	};
	//~ savepost click 

	$('.ishowtrigger').change(function () {
		takenid = $(this).attr('ishow');
		$('.ipitem').hide();
		$('#' + takenid).show();
	});
	$('body').on("click", ".idremove", function () {
		detail_id = $(this).parents('.ipitem-detail').find('input[name^=ndetail_id]').val();
		title_sub = $(this).parents('.ipitem-detail').find('input[name^=ipost_text_title_'+detail_id+']').val();
		var confir = confirm('Apakah anda yakin ingin menghapus sub konten "'+title_sub+'" ?');
		if(confir){
			ajaxpostvar = 'detail_id=' + detail_id;
			var el = $(this).parents('.ipitem-detail');

			$.ajax({
				type: 'POST',
				url: ireporter_base_url + 'delpostitem',
				data: ajaxpostvar,
				success: function (imessage) {
					imessage = imessage.trim();
					if (imessage == 'success') {
						el.remove();
					} else {
						imessage = '<p>Proses delete item gagal dilakukan !</p>';
						$('.inotif-content').html(imessage);
						$('#notifModal').modal('show');
					}
				}
			});	
		}
	});

	//--------Move up & down----
	$('body').on("click", ".iduptrigger", function () {
		var index_pos = $(this).index(".iduptrigger");
		var this_type = $(this).parents('.ipitem-detail').attr('class').split(' ')[1];

		if (index_pos == 1 && this_type == 'ditext') {
			imessage = '<p>Proses ordering Gagal..</p>';
			$('.inotif-content').html(imessage);
			$('#notifModal').modal('show');
			return false;
		}

		$(this).parents('.ipitem-detail').insertBefore($(this).parents('.ipitem-detail').prev());

		//----ajax order process---
		var aidocid = [];
		var aiorder = [];
		var iajaxvar = [];

		$('.ipitem-detail').each(function (index, obj) {
			idocid = $(this).find("input[name^='ndetail_id_']").val();
			ditype = $(this).attr('class').split(' ')[1];
			nditype = ditype.substring(1);
			aidocid.push(idocid);
			aiorder.push((index + 1));
		});

		for (var i = 0; i < aidocid.length; i++) {
			iajaxvar.push({ "docid": aidocid[i], "docordering": aiorder[i] });

		}

		//--------
		tinymce.remove();
		tinymce.init({
			mode: "specific_textareas",
			editor_selector: "mceEditor",
			content_css: ireporter_base_url + "assets/css/mcecontent.css",
			menubar: false,
			plugins: "advlist stylebuttons,link,lists,code,paste",
			paste_as_text: true,
			entity_encoding: 'raw',
			forced_root_block: "",
			force_br_newlines: true,
			force_p_newlines: false,
			//~ toolbar: 'bold italic style-h1 style-h2 style-h3 strikethrough bullist numlist blockquote alignleft aligncenter alignright alignjustify link code'
		});
		//--------
		$.ajax({
			type: 'POST',
			url: ireporter_base_url + 'detailordering',
			data: { iajaxvar: iajaxvar },
			dataType: 'json',
			success: function (imessage) {
				imessage = imessage.trim();
				if (imessage == 'failed') {
					imessage = '<p>Proses ordering Gagal..</p>';
					$('.inotif-content').html(imessage);
					$('#notifModal').modal('show');
				}
			}
		});
		//----ajax order proses--		
	});

	$('body').on("click", ".iddowntrigger", function () {
		$(this).parents('.ipitem-detail').insertAfter($(this).parents('.ipitem-detail').next());
		//----ajax order process---
		var aidocid = [];
		var aiorder = [];
		var iajaxvar = [];

		$('.ipitem-detail').each(function (index, obj) {
			idocid = $(this).find("input[name^='ndetail_id_']").val();
			ditype = $(this).attr('class').split(' ')[1];
			nditype = ditype.substring(1);
			aidocid.push(idocid);
			aiorder.push((index + 1));
		});
		for (var i = 0; i < aidocid.length; i++) {
			iajaxvar.push({ "docid": aidocid[i], "docordering": aiorder[i] });

		}

		//----------
		tinymce.remove();
		tinymce.init({
			mode: "specific_textareas",
			editor_selector: "mceEditor",
			content_css: ireporter_base_url + "assets/css/mcecontent.css",
			menubar: false,
			plugins: "advlist stylebuttons,link,lists,code,paste",
			paste_as_text: true,
			entity_encoding: 'raw',
			forced_root_block: "",
			force_br_newlines: true,
			force_p_newlines: false,
			//~ toolbar: 'bold italic style-h1 style-h2 style-h3 strikethrough bullist numlist blockquote alignleft aligncenter alignright alignjustify link code'
		});
		//----------
		$.ajax({
			type: 'POST',
			url: ireporter_base_url + 'detailordering',
			data: { iajaxvar: iajaxvar },
			dataType: 'json',
			success: function (imessage) {
				imessage = imessage.trim();
				if (imessage == 'failed') {
					imessage = '<p>Proses Ordering Gagal..</p>';
					$('.inotif-content').html(imessage);
					$('#notifModal').modal('show');
				}
			}
		});
		//----ajax order proses--		
	});
	//-----detail item save button---
	$('body').on("click", ".idsave", function () {
		$err_msg = '';

		iel = $(this).parents('.ipitem-detail');
		idocid = iel.find("input[name^='ndetail_id_']").val();
		idata = iel.find(':input').serializeArray();

		len = idata.length;
		dataObj = {};

		for (i = 0; i < len; i++) {
			dataObj[idata[i].name] = idata[i].value;
		}
		ditype = iel.attr('class').split(' ')[1];
		nditype = ditype.substring(1);
		//---------------
		if (ditype == 'ditext') {
			textcontent = tinymce.get('ipost_text_content_' + idocid).getContent();
			textcontent = encodeURIComponent(textcontent);
			ajaxpostvar = 'ipost_text_title=' + dataObj['ipost_text_title_' + idocid] + '&ipost_text_content=' + textcontent + '&detail_id=' + idocid + '&ipost_temp_id=' + $("#temp_id").val() + '&ipost_type=' + nditype;

			// if (!dataObj['ipost_text_title_' + idocid]) {
			// 	$err_msg += '<p>Judul sub artikel harus diisi';
			// }
			if (!textcontent) {
				$err_msg += '<p>Konten sub artikel harus diisi';
			}
		} else if (ditype == 'dipicture') {
			textcontent = tinymce.get('ipost_picture_caption_' + idocid).getContent();
			textcontent = encodeURIComponent(textcontent);
			ajaxpostvar = 'ipost_picture_title=' + dataObj['ipost_picture_title_' + idocid] + '&ipost_picture_path=' + dataObj['iuploadedpicture_' + idocid] + '&ipost_picture_caption=' + textcontent
				+ '&ipost_picture_credit=' + dataObj['ipost_picture_credit_' + idocid] + '&detail_id=' + idocid + '&ipost_temp_id=' + $("#temp_id").val() + '&ipost_type=' + nditype;

			// if (!dataObj['ipost_picture_title_' + idocid]) {
			// 	$err_msg += '<p>Judul sub artikel harus diisi';
			// }
			if (!textcontent) {
				$err_msg += '<p>Konten sub artikel harus diisi';
			}

		} else if (ditype == 'divideo') {
			textcontent = tinymce.get('ipost_video_description_' + idocid).getContent();
			textcontent = encodeURIComponent(textcontent);
			ajaxpostvar = 'ipost_video_title=' + dataObj['ipost_video_title_' + idocid] + '&ipost_video_code=' + encodeURIComponent(dataObj['ipost_video_code_' + idocid]) + '&ipost_video_description='
				+ textcontent + '&ipost_video_credit=' + dataObj['ipost_video_credit_' + idocid] + '&detail_id=' + idocid + '&ipost_temp_id=' + $("#temp_id").val() + '&ipost_type=' + nditype;

			// if (!dataObj['ipost_video_title_' + idocid]) {
			// 	$err_msg += '<p>Judul sub artikel harus diisi';
			// }
			if (!textcontent) {
				$err_msg += '<p>Konten sub artikel harus diisi';
			}
		}

		//-----------------------------
		if ($err_msg == '') {
			$.ajax({
				type: 'POST',
				url: ireporter_base_url + 'savedetaildoc',
				data: ajaxpostvar,
				success: function (imessage) {
					imessage = imessage.trim();
					if (imessage == 'failed') {
						imessage = '<p>Penyimpanan detail berita gagal !, lakukan penyimpanan ulang (klik ADD)</p>';
						$('.inotif-content').html(imessage);
						$('#notifModal').modal('show');
					} else if (imessage == 'updated') {
						imessage = '<p>Data updated</p>';
						$('.inotif-content').html(imessage);
						$('#notifModal').modal('show');
					}
				}
			});
		}
		else {
			$('.inotif-content').html($err_msg);
			$('#notifModal').modal('show');
		}
	});

	//----------save-post event-----
	$('.save-post').click(function () {
		var cpmessage = 'savepostrek';
		var invalid = additemtrigger(cpmessage);

		if(typeof invalid == 'undefined'){
			invalid = [];
		}

		if (invalid.length == 0) {
			$('.inotif-content-loading').html("Proses penyimpanan data...");
			$('#notifModalLoading').modal({backdrop: 'static',
				keyboard: false, 
				show: true}
				);

				setTimeout(function () {
					//----------------BEGIN----
					idocid = $("#temp_id").val();
					ipost_cat = $("#ipost_cat").val();
					ipost_tags = $("#ipost_tags").val();
					ipost_thumb_credit = $("#ipost_thumb_credit").val();
					ipost_hashtag = $("#ipost_hashtag").val();
					dpro = $("#dpro").val();
		
					ajaxpostvar = 'idocid=' + idocid + '&ipost_cat=' + ipost_cat + '&ipost_tags=' + ipost_tags + '&ipost_thumb_credit=' + ipost_thumb_credit + '&ipost_hashtag=' + ipost_hashtag +'&dpro=' + dpro;
					if (idocid !== 'my_id' && idocid) {
						if (ipost_cat && ipost_cat != "select-cat" && imessage == '') {
							$.ajax({
								type: 'POST',
								url: 'http://planet.local.merdeka.com/savepost',
								data: ajaxpostvar,
								success: function (imessage) {
									$('#notifModalLoading').modal('hide');
									// console.log(imessage);
									// imessage	= imessage.trim();
									// if(imessage=='failed'){
									// 	imessage = '<p>Proses penyimpanan berita gagal, mohon untuk mengecek koneksi dan menekan tombol SAVE !</p>';
									// 	$('.inotif-content').html(imessage);
									// 	$('#notifModal').modal('show'); 
									// }else if(imessage=='success'){
									// 	imessage = '<p>Data berhasil disimpan</p>';
									// 	$('.inotif-content').html(imessage);
									// 	$('#notifModal').modal('show'); 
									// 	$('#notifModal').on('hidden.bs.modal', function () {
									// 		window.location.href = ireporter_base_url+readCookie('c_member_album')+'/posts';
									// 		//alert(readCookie('c_member_album'));
									// 	});
		
									// }else if(imessage=='psuccess'){
									// 	imessage = '<p>Data berhasil disimpan</p>';
									// 	$('.inotif-content').html(imessage);
									// 	$('#notifModal').modal('show'); 
									// 	$('#notifModal').on('hidden.bs.modal', function () {
									// 		window.location.href = ireporter_base_url+'promote';
									// 	});
									// }
								}
							});
						}
					}
					// else{
					// imessage = '<p>Mohon untuk mengisi title terlebih dahulu !</p>';
					// $('.inotif-content').html(imessage);
					// $('#notifModal').modal('show');  
					// }
					//----------------END
				}, 3000);
		}
	});
	//----tag autocomplete event---
	hiddentags = eval($("#hiddentags").val());
	$("#ipost_tags").tokenInput([
		{ id: 7, name: "Kocak" },
		{ id: 11, name: "Koplak" },
		{ id: 13, name: "Uenak" },
		{ id: 17, name: "Keren" }
	], {
		hintText: 'Type a tag(may be multipel), press "," for new tag',
		theme: 'facebook',
		tokenValue: "name",
		allowNewTokens: true,
		prePopulate: hiddentags,
		tokenDelimiter: "|"
	});
	//-----------------------------
	$("#ipost_video_code").change(function () {
		destel = $(this).parent().parent().find('.videoWrapper');
		destel.html($(this).val());
	});


	$(".cancel-post").click(function (e) {
		e.preventDefault();
		temp_id = $("#temp_id").val();
		if (temp_id !== 'my_id' && temp_id) {
			var sub_item = $('.ipitem-detail').length;
			if (sub_item == 0) {
				$.ajax({
					type: "GET",
					url: ireporter_base_url + "delpostajax",
					data: { "_id": temp_id },
					success: function (data) {
						window.location.href = ireporter_base_url + readCookie('c_member_album') + '/posts';
					}
				});
			}
			else {
				window.location.href = ireporter_base_url + readCookie('c_member_album') + '/posts';
			}
		}
		else {
			window.location.href = ireporter_base_url + readCookie('c_member_album') + '/posts';
		}
	});
});
