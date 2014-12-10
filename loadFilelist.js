// ==UserScript==
// @name       Load FileList
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  Adds file_list loader to torrent row
// @match *://what.cd/artist.php*
// @match *://what.cd/collages.php*
// @copyright  2014+, Krulvis
// @require http://code.jquery.com/jquery-latest.js
// @grant       GM_setValue
// ==/UserScript==



        $('tr.torrent_row td:first-child span').each( function(index, element) {
            var html = $(this).html();
            
            var a = $(this).parent().find('a:last').attr('href');
            
            var index_id = a.indexOf('?id=')+4;
            var id = a.substr(index_id, a.indexOf('&torrentid')-index_id);
            var index_torrentid = a.indexOf('torrentid=')+10;
            var torrentid = a.substr(index_torrentid, a.length-index_torrentid);
            if(!$(this).is('.brackets')){
             	$(this).addClass('brackets');
            }
            $(this).html(html.replace(']', '').replace('[', '') + ' | <a class="fl" id="'+torrentid+'"   >FN</a> ');
            var tr = $(this).parent().parent().after('<tr id="torrentdetails_'+torrentid+'"  class="groupid_'+id+'"></tr>');
            $(this).parent().parent().parent().find('#torrentdetails_'+torrentid).append('<td colspan="6" id="file_'+torrentid+'" style="display:none;"></td>');
            var td =  $(this).parent().parent().parent().find('#torrentdetails_'+torrentid).find('#file_'+torrentid);

            
            $(this).find('.fl').click( function(index, element) {
                var a = $(this).parent().parent().find('a:last').attr('href');
                var index_id = a.indexOf('?id=')+4;
            	var id = a.substr(index_id, a.indexOf('&torrentid')-index_id);
            	var index_torrentid = a.indexOf('torrentid=')+10;
            	var torrentid = a.substr(index_torrentid, a.length-index_torrentid);
                var td = $('#file_'+torrentid);
                if($('#files_'+torrentid).length == 0){
                    $(td).html('<center><p>Loading...</p></center>')
                    $(td).load('torrents.php?id='+id+' #files_'+torrentid, function(){
                    	$('#files_'+torrentid).removeClass('hidden');
                    });
                    
                }
                $('#files_'+torrentid).removeClass('hidden');
               	$(td).toggle();
                
            })
        
		});
    
    

