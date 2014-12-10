// ==UserScript==
// @name         TopBot SearchFunction
// @namespace    http://your.homepage/
// @version      0.1
// @description  something useful
// @author       Krulvis
// @match        *://topbot.org/forum/*
// @require http://code.jquery.com/jquery-latest.js
// @grant        GM_setValue
// ==/UserScript==



$(document).ready(function (){
     if($("#secondary_navigation").append('<span id="search_wrap" class="right">')){
        $("#search_wrap").append('<input type="text" id="main_search" name="search_term" class="" size="17" tabindex="100" placeholder="Search...">');
        $("#search_wrap").append('<span class="choice ipbmenu clickable" id="search_options">Forums</span>');
         $("#search_wrap").append('<input type="submit" id="search_forum" class="submit_input clickable" value="" style="width:26px; height:26px;background: #323232 url(http://www.clker.com/cliparts/9/T/2/h/X/7/search-icon-md.png) no-repeat 50%;	">');
        $("#search_wrap").append('<ul id="search_options_menucontent" class="ipbmenu_content ipsPad" style="display: none; position: absolute; z-index: 9999999;">');
        $("#search_options_menucontent").append('<li class="title" style="z-index: 9999999;"><strong style="z-index: 9999999;">Search section:</strong></li>');
        $("#search_options_menucontent").append('<li class="app" style="z-index: 9999999;"><label for="s_forums" style="z-index: 9999999;"><input type="radio" name="search_app" class="input_radio" id="s_forums" value="forums" checked="checked" style="z-index: 9999999;">Forums</label></li>');
        $("#search_options_menucontent").append('<li class="app" style="z-index: 9999999;"><label for="s_members" style="z-index: 9999999;"><input type="radio" name="search_app" class="input_radio" id="s_members" value="members" style="z-index: 9999999;">Members</label></li>');
        $("#search_options_menucontent").append('<li class="app" style="z-index: 9999999;"><label for="s_core" style="z-index: 9999999;"><input type="radio" name="search_app" class="input_radio" id="s_core" value="core" style="z-index: 9999999;">Help Files</label></li>');
        $("#search_wrap").append('</ul>');
         
        $("#secondary_navigation").append('</span>');
         
         $("#search_options").click(function(){
             if( $('#search_options_menucontent').css("display") == "none"){
          		$('#search_options_menucontent').css("display", "block");   
             }else{
                 $('#search_options_menucontent').css("display", "none");   
             }
         });
    }
    
    $(function () {
      $('#search_forum').click(function (event) {       
        $.post(
          'http://topbot.org/forum/index.php?app=core&module=search&do=search&fromMainBar=1', { 
            search_term: $('#main_search').val(), 
            search_app:   $('#search_options').val()
          }, function (response) {
             $('body').replaceWith(response);
           }
        );
        event.preventDefault();
      });
    });
    
    //$("#search_wrap").css("line_height", "37px");
    $("#search_wrap").css("margin-top", "5px");
    $("#search_forum").css("position", "absolute");
    $("#search_forum").css("margin-right", "0px");
});
