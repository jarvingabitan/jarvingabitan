$( document ).ready(function() {
	$('#jungleNote')
		.popup({
    	on: 'hover'
  	});

	$('#moon-img').click(function() {
  		$('#moonModal')
  			.modal('show');
	});

	$('#plum-img').click(function() {
  		$('#plumModal')
  			.modal('show');
	});

	$('#poem-img').click(function() {
  		$('#poemModal')
  			.modal('show');
	});

	$('#qiu-img').click(function() {
  		$('#qiuModal')
  			.modal('show');
	});

	$('#jungle-img').click(function() {
  		$('#jungleModal')
  			.modal('show');
	});

	$('#level-img').click(function() {
  		$('#levelModal')
  			.modal('show');
	});

	$('#oval-img').click(function() {
  		$('#ovalModal')
  			.modal('show');
	});

	$('#jerusalem-img').click(function() {
  		$('#jerusalemModal')
  			.modal('show');
	});

	$('#bgch-img').click(function() {
  		$('#bgchModal')
  			.modal('show');
	});

	$('#paint-flower-img').click(function() {
  		$('#paintFlowerModal')
  			.modal('show');
	});

});