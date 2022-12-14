$(function() {
  if(location.href == 'https://emmasyu.github.io/webLayoutTraining-week5/index.html'){
      $('#assignment').addClass('active');
  }else if(location.href == 'https://emmasyu.github.io/webLayoutTraining-week5/admin.html'){
      $('#admin').addClass('active');
  }
});

$(document).ready(function(){
	$('.navbar-side-link').click(function(e){
    $('.navbar-side-link').removeClass('active');
	  $(this).addClass('active');
	});
});


// Editor
ClassicEditor
  .create( document.querySelector( '#editor' ) )
  .then( editor => {
  console.log( editor );
} )
  .catch( error => {
  console.error( error );
} );

// Reply
$(document).ready(function(){
	$('.btn-reply').click(function(e){
	    e.preventDefault();
	    $(this).siblings('.btn-mark').addClass('d-none');
      $(this).siblings('.btn-cancel').removeClass('d-none');
      $('.editor-area').removeClass('d-none');
      $('.reply-area').addClass('d-none');
	});

  $('.btn-cancel').click(function(e){
	    e.preventDefault();
	    $(this).addClass('d-none');
	    $(this).siblings('.btn-mark').removeClass('d-none');
      $('.editor-area').addClass('d-none');
      $('.reply-area').removeClass('d-none');
	});
})


// view-expandmore
$(document).ready(function(){
	$('.view-expandmore').click(function(e){
	    $('.view-expandmore').toggleClass('d-none');
      $('.view-expandless').toggleClass('d-none');
	});
  $('.view-expandless').click(function(e){
	    $('.view-expandmore').toggleClass('d-none');
      $('.view-expandless').toggleClass('d-none');
	});
})
