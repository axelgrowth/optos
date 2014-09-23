function affichage (formule){
	textvar='';
	if (document.getElementById('mobilematthias').offsetWidth==0){

	if (typeof last !== 'undefined'){
		last.animate({marginLeft:"0"},500);
		lasttriangle.animate({marginLeft:"0"},500);
		$('#'+last.attr('id')+'info').fadeIn(250);
	}else{last='none'}

	if(formule=='matthias' && (last!=$('#matthias') || typeof last=='undefined')){


		last=$('#matthias')
		lasttriangle=$('#matthiastriangle')
		textvar ="<p>Cours Hebdomadaires en amphi avec <strong> Matthias FEGYVERES</strong>*:</p><span>2h30/semaine pendant 24 semaines, mercredi soir ou week-end</span> <h4 style='color:#007d93'><strong>Contenu</strong></h4><ul><li><strong>Deuxi&egrave;me ann&eacute;e:</strong> r&eacute;vision compl&egrave;te du programme de premi&egrave;re ann&eacute;e et traitement des nouveaux chapitres, &agrave; travers de nombreuses annales et sujets originaux</li><br><li><strong> Premi&egrave;re ann&eacute;e :</strong> travail sur tout le programme, suivant l’ordre des chapitres du programme officiel</li></ul><h4 style='color:#007d93'><strong>Prix</strong></h4><ul>Nous Consulter<br><span style='color:#bd1c3b;padding-left:0px;'>Profitez de tarifs exceptionnels pour toute inscription avant le 15/10/2014</span></ul> <br><small>* Certains cours seront dispens&eacute;s par Phuong Nguyen (ESSEC 2007), Antoine Poincar&eacute; (HEC 2012)</small>";
        $('#matthias').animate({marginLeft:"50px"},500);
        $('#matthiastriangle').animate({marginLeft:"50px"},500);
        $('#matthiasinfo').fadeOut(250);
        $('#description_desktop').fadeOut(250);
        document.getElementById('description_desktop').innerHTML= textvar;	
		$('#description_desktop').fadeIn(500);	
		}
		
        
	else if(formule== 'euler' && (last!=$('#euler')|| typeof last=='undefined')){

		
		last=$('#euler')
		lasttriangle=$('#eulertriangle')
		textvar= '<p>Cours hebdomadaires en petit groupe de niveau ou par classe :</p><span>2h30/semaine pendant 24 semaines, principalement mercredi soir ou week-end</span> <h4 style="color:#bd1c3b;D91E18"><strong>Contenu</strong></h4> <ul><li><strong>Deuxi&egrave;me ann&eacute;e:</strong> r&eacute;vision compl&egrave;te du programme de premi&egrave;re ann&eacute;e et traitement des nouveaux chapitres, &agrave; travers de nombreuses annales et sujets originaux</li> <br><li><strong> Premi&egrave;re ann&eacute;e :</strong> groupe d&#39;&eacute;tudiants d&#39;une m&ecirc;me classe (sous r&eacute;serve d&#39;un effectif suffisant), suivi exact du cours trait&eacute; en classe.</li></ul><h4 style="color:#bd1c3b;D91E18"><strong>Prix</strong></h4><ul>Nous Consulter <br><span style="color:#bd1c3b;padding-left:0px;">Profitez de tarifs exceptionnels pour toute inscription avant le 15/10/2014</span></ul>'

		$('#euler').animate({marginLeft:"50px"},500);
        $('#eulertriangle').animate({marginLeft:"50px"},500);
        $('#eulerinfo').fadeOut(250);
        $('#description_desktop').fadeOut(250);
        document.getElementById('description_desktop').innerHTML= textvar;	
		$('#description_desktop').fadeIn(500);	

	}

	else if(formule== 'mesure' && (last!=$('#mesure')|| typeof last=='undefined')){
		last=$('#mesure')
		lasttriangle=$('#mesuretriangle')
		textvar= '<p>Cours particuliers <strong> Premium</strong>:</p><span>Cours &agrave; domicile &agrave; la demande avec un enseignant form&eacute;.</span><h4 style="color:#507585"><strong>Contenu</strong></h4><ul>R&eacute;vision compl&egrave;te du programme, traitement des nouveaux chapitres non assimil&eacute;s en cours, pr&eacute;paration aux DS et aux concours. </ul><h4 style="color:#507585"><strong>Prix</strong></h4><ul>Nous Consulter</ul>'

		$('#mesure').animate({marginLeft:"50px"},500);
        $('#mesuretriangle').animate({marginLeft:"50px"},500);
        $('#mesureinfo').fadeOut(250);
        $('#description_desktop').fadeOut(250);
        document.getElementById('description_desktop').innerHTML= textvar;	
		$('#description_desktop').fadeIn(500);	

	}else if(formule== 'vacances' && (last!=$('#vacances')|| typeof last=='undefined')){
		last=$('#vacances')
		lasttriangle=$('#vacancestriangle')
		textvar= '<p>Stage de vacances par groupe de niveaux :</p><span>4h/jour pendant 6 jours cons&eacute;cutifs</span><h4 style="color:#75b545"><strong>Contenu</strong></h4><ul><li><strong>Deuxi&egrave;me ann&eacute;e:</strong> r&eacute;vision compl&egrave;te du programme de premi&egrave;re ann&eacute;e et traitement des nouveaux chapitres, &agrave; travers de nombreuses annales et sujets originaux</li><br><li><strong> Premi&egrave;re ann&eacute;e :</strong> travail qui porte sur le programme, en suivant l&#39;ordre des chapitres.</li></ul><h4 style="color:#75b545"><strong>Prix</strong></h4><ul>Nous Consulter</ul>'

		$('#vacances').animate({marginLeft:"50px"},500);
        $('#vacancestriangle').animate({marginLeft:"50px"},500);
        $('#vacancesinfo').fadeOut(250);
        $('#description_desktop').fadeOut(250);
        document.getElementById('description_desktop').innerHTML= textvar;	
		$('#description_desktop').fadeIn(500);	

	 }
	}
}