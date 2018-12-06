$(document).ready(() => {
	$("#skills-icon").mouseover(() => {
		$("#skills-icon").html('Skills');
	});
	$("#skills-icon").mouseout(() => {
		$("#skills-icon").html('<i class="fas fa-code"></i>');
	});
	$("#projects-icon").mouseover(() => {
		$("#projects-icon").html('Projects');
	});
	$("#projects-icon").mouseout(() => {
		$("#projects-icon").html('<i class="far fa-folder-open"></i>');
	});
	$("#connect-icon").mouseover(() => {
		$("#connect-icon").html('Connect');
	});
	$("#connect-icon").mouseout(() => {
		$("#connect-icon").html('<i class="far fa-envelope"></i>');
	});

	$("#all-btn").click(() => {
		$("#adm").show();
		$("#musicart").show();
		$("#itadakimasu").show();
		$("#hangman").show();
	});

	$("#html-btn").click(() => {
		$("#adm").show();
		$("#musicart").show();
		$("#itadakimasu").show();
		$("#hangman").show();
	});

	$("#css-btn").click(() => {
		$("#adm").show();
		$("#musicart").show();
		$("#itadakimasu").show();
		$("#hangman").show();
	});

	$("#bootstrap-btn").click(() => {
		$("#adm").show();
		$("#musicart").show();
		$("#itadakimasu").show();
		$("#hangman").show();
	});

	$("#laravel-btn").click(() => {
		$("#adm").show();
		$("#musicart").hide();
		$("#itadakimasu").hide();
		$("#hangman").hide();
	});

	$("#jquery-btn").click(() => {
		$("#adm").show();
		$("#musicart").show();
		$("#itadakimasu").hide();
		$("#hangman").show();
	});

	$("#javascript-btn").click(() => {
		$("#adm").show();
		$("#musicart").show();
		$("#itadakimasu").hide();
		$("#hangman").show();
	});

	$("#php-btn").click(() => {
		$("#adm").show();
		$("#musicart").show();
		$("#itadakimasu").hide();
		$("#hangman").hide();
	});

	$("#mysql-btn").click(() => {
		$("#adm").show();
		$("#musicart").show();
		$("#itadakimasu").hide();
		$("#hangman").hide();
	});

	$("#ajax-btn").click(() => {
		$("#adm").show();
		$("#musicart").show();
		$("#itadakimasu").hide();
		$("#hangman").hide();
	});

	$("#backtotop").click(function(){
		$("html, body").animate({scrollTop: 0 }, "slow");
		return false;
    });

});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("backtotop").style.display = "block";
		$("#backtotop").addClass("fadeIn");
	} else {
		document.getElementById("backtotop").style.display = "none";
		$("#backtotop").removeClass("fadeIn");
	}
}
