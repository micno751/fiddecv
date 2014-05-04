
var speed = 'fast';
var hover_height = 90;
var speed_text_fade = 200;
var speed_scroll = 600;

$(window).load(function(){


	$('#main_page').hide().fadeIn(1500);

	$("#banner")
    .css("margin-left",-$(this).width())
    .animate({marginLeft:0 }, 800);

	//Contact info under namnet
	$('#contact_text').hover(

		function () {
			//show its submenu
			$('#contact').stop().slideDown(100);

		}, 
		function () {
			//hide its submenu
			$('#contact').stop().slideUp(100);			
		}
	);

	//reel active from beginning
	$('#a_reel').addClass('active_link');

	$('#a_reel').click(function(){

		if(!$(this).hasClass('active_link')){

			$("#active_bar")
		    .css("margin-left",$(this).width())
		    .animate({marginLeft:0 }, 800);

			$("#main_page").stop().animate({height:320}, speed_scroll);

			$('a').removeClass('active_link');
			$(this).addClass('active_link');

			$('#content').fadeOut(speed_text_fade).delay(400).queue(function(next){$(this).html('<p>' +
					'Min karriär inom skådespeleriet är kort men intensiv.' +
					'Innan allt började så hade jag under 4 års tid jobbat som VVS montör och började väl bli ganska less på det.' +
					'Jag började söka nya utmaningar och vill testa lite nya grejer, en av de sakerna var teater.' +
					'Teater var någonting som jag alltid velat testa men aldrig riktigt vågat. Så jag bestämde mig för att ta en nybörjarkurs i teater. För cirka 1 år sedan nu så var jag påväg till Redbergsteatern och min första lektion.<br/><br/>' +
					'Efter första lektionen gick jag därifrån med ett brett leende på läpparna.' + 
					'Jag kände att detta var en miljö där jag kände mig hemma och jag kunde utmana mig själv. Efter ett par lektioner bestämde jag mig att detta var något jag vill göra mer än bara en lektion varje vecka. Jag sökte till 2 folkhögskolor, den ena skolan antog mig,'+
					'Katrinebergsfolkhögskola strax utanför falkenberg . ' +
					'Hösten 2013 fick jag testa på skådespeleri på riktigt och jag tycker fortfarande att det är lika roligt. Vi har jobbat både med teater och film, och jag måste säga att jag tycker om båda lika mycket fast på väldigt olika sätt. ' + 
					'<br/><br/>Skådespeleriet var nog det första jag gjort i mitt liv där jag verkligen utmanar mig själv och det är skrämmande och väldigt roligt på samma gång.' +  
					'Jag söker till er eftersom det känns som den rätta vägen för mig att gå,' +
					'för att kunna utveckla mitt skådespeleri ytteligare.</p>').fadeIn(speed_text_fade);

				
					next();

					$('#content2').stop().fadeIn(250);

					next();

				
				});
		}

	});

	//klipp

	$('#a_klipp').click(function(){

		if(!$('#a_klipp').hasClass('active_link')){

			$("#main_page").stop().animate({height:200}, speed_scroll);

			if($('#a_reel').hasClass('active_link'))
					$('#content2').hide();

			$("#active_bar")
		    .css("margin-left",$(this).width())
		    .animate({marginLeft:161 }, 800);

		    $('a').removeClass('active_link');
			$(this).addClass('active_link');	


			$('#content').fadeOut(speed_text_fade).delay(300).queue(function(next){$(this).html('Inga klipp att visa än').fadeIn(speed_text_fade);next();})		

		}

	});

	$('#a_cv').click(function(){

		if(!$(this).hasClass('active_link')){

			$("#active_bar")
		    .css("margin-left",$(this).width())
		    .animate({marginLeft:322 }, 800);

			if($('#a_reel').hasClass('active_link'))
					$('#content2').hide();

			$("#main_page").stop().animate({height:900}, speed_scroll);

			$('a').removeClass('active_link');
			$(this).addClass('active_link');
			
			$('#content').fadeOut(speed_text_fade).delay(150).queue(function(next){$(this).html('<div id="cv_left">' +

										//Utbildningar!!
										'<h2>Utbildning</h2><div><h3>Aug 2013 - Dec 2012</h3></div>' + 
										'<p>Filmskådespeleri kurs</p>' + 
										'<hr/>' +

										'<div><h3>Aug 2013 - </h3></div>' + 
										'<p>Skådespelare utbildning Katrinebergs Folkhögskola</p>' + 
										'<hr/>' +

										'<div><h3>Feb 2013 - Maj 2013</h3></div>' + 
										'<p>Nybörjarkurs Teater 10 Lektioner Redbergsteatern</p>' + 
										'<hr/><hr/>' +

										'<div><h3>Jun 2010 - Jun 2012</h3></div>' + 
										'<p>2 År Lärling VVS Montör </p>' + 
										'<hr/>' +

										'<div><h3>Aug 2007 - Jun 2010</h3></div>' + 
										'<p>Gymnasieutbildning 3 År Energi inriktning vvs 	</p>' + 
										'<hr/>' +

										//Anställningar!!
										'<h2>Anställningar</h2>' +
										'<div><h3>Jun 2010 - Jul 2013</h3></div>' + 
										'<p>Energiförbättring Väst AB VVS montör 1 år, 2 år som lärling</p>' + 
										'<hr/>' +

										//Övriga meriter!!!
										'<h2>Övriga meriter</h2>' +
										'<div><h3>Mar 2010 - Aug 2012</h3></div>' + 
										'<p>Ledare av korplag fotboll</p>' + 
										'<hr/>' +

										'<div><h3>Aug 2010 - Jun 2012</h3></div>' + 
										'<p>MMA Träna+Tävling</p>' + 
										'<hr/></div>' +

										'<div id="cv_right"><div id="bild"></div>' + 
										'<h3>Kontakt</h3>' +
										'<p>Fredrik Carlsson<br/>Lerbrännargatan 3F<br/>431 48 Mölndal <br/> Mobil: 0768292722').fadeIn(speed_text_fade);next();})
		
		}

	});


	$('#a_portfolio').click(function(){

		if(!$(this).hasClass('active_link')){

			$("#main_page").stop().animate({height:200}, speed_scroll);

			if($('#a_reel').hasClass('active_link'))
					$('#content2').hide();

			$("#active_bar")
		    .css("margin-left",$(this).width())
		    .animate({marginLeft:483 }, 800);

		    $('a').removeClass('active_link');
			$(this).addClass('active_link');	

			$("#main_page").stop().animate({height:0}, speed_scroll);


			$('#content').fadeOut(speed_text_fade).delay(300).queue(function(next){$(this).html('' + 

											'<div id ="portfolio_container1"><div id="portfolio_pic1"></div></div>' + 
											'<div id ="portfolio_container2"><div id="portfolio_pic2"></div></div>' +
											'<div id ="portfolio_container3"><div id="portfolio_pic3"></div></div>').fadeIn(speed_text_fade);next();})		

		}

	});


});

