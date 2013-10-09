/*
 * v_id:  	Eindeutige Id für die Videonummerierung
 * s_id: 	Startknoten
 * e_id: 	Endknoten
 * title: 'Bezeichnung des Videos'
 *	
 */

// Videos
var videos = [
	{
		id: 0,
		startPos: 0,
		endPos: 1,
		title: 'Fahrt zu Bibliothek',
		text: 'Fahrt zu Bibliothek',
		media: '13_10_9_MauJuNTON_INTRO.mp4'
	},
	{
		id: 1,
		startPos: 1,
		endPos: 2,
		title:'Freie Bibliothek besuchen',
		text:'Mao Jus Bibliothek',
		media:'13_10_8_Mau_Ju_NTON_Bib.mp4'
	},
	{
		id: 2,
		startPos: 1,
		endPos: 18,
		title: 'Einen Spaziergang durch das Stadtviertel machen',
		text: 'Spaziergang zu Gallerie',
		media: 'test.mp4'
	},
	{
		id: 3,
		startPos: [2,16],
		endPos: 17,
		title: 'Freund von Mao Ju treffen',
		text: 'Philosophenclip',
		media: '13_10_7_PhilosophNTON.mp4'
	},
	{
		id: 4,
		startPos: [1,2,16,17,18],
		endPos: 3,
		title: 'Etwas Essen gehen',
		text: 'Salt Horse Gang außen',
		media: '13_10_8_Intro_SHG.mp4'
	},
	{
		id: 5,
		startPos: [2,17],
		endPos: 16,
		title: 'Farmerin mit geistig behindertem Sohn besuchen',
		text: 'Clip Farmerin',
		media: '13_10_7_FarmerinNTON.mp4'
	},
	{
		id: 6,
		startPos: 3,
		endPos: 4,
		title: 'Hineingehen',
		text: 'Salt Horse Gang Innen',
		media: '13_10_8INNENSHG.mp4'
	},
	{
		id: 7,
		startPos: [4,6],
		endPos: 5,
		title: 'Mit dem Laptopbenutzer mit Schirmmütze sprechen',
		text: 'Video Fotokünstler',
		media: '13_10_7Fotokuenstler.mp4'
	},
	{
		id: 8,
		startPos: [4,5],
		endPos: 6,
		title: 'Mit dem bebrillten Laptopbenutzer sprechen',
		text: 'Video Poet',
		media: '13_10_7Poet.mp4'
	},
	{
		id: 9,
		startPos: [6,23],
		endPos: 0,
		title: 'Fastenden Künstler besuchen',
		text: 'Hungerkünstlerclip',
		media: 'test.mp4'
	},
	{
		id: 10,
		startPos: 0,
		endPos: 8,
		title: 'Modemesse Chic Beijing besuchen',
		text: 'Fahrt zur Modemesse',
		media: '13_10_8_HinfahrtCHICKNTON.mp4'
	},
	{
		id: 11,
		startPos: [8,9],
		endPos: 10,
		title: 'Erwachsenenmodenschau Di Seta besuchen',
		text: 'Erwachsenenmodenschau',
		media: '13_10_6_ModeschauErwachsene.mp4'
	},
	{
		id: 12,
		startPos: [8,10],
		endPos: 9,
		title: 'Kindermodeschau Pencil Club besuchen',
		text: 'Kindermodeschau',
		media: '13_10_7_ModeschauKinder.mp4'
	},
	{
		id: 13,
		startPos: [9,10],
		endPos: 11,
		title: 'Mit Models sprechen',
		text: 'Interview mit Models nach Modenschau',
		media: '13_10_6_Interview_ModellsNTON.mp4'
	},
	{
		id: 14,
		startPos: [11,12],
		endPos: 13,
		title: 'Barhopping starten',
		text: 'Barhopping Clip',
		media: '13_10_7_club_hobbing.mp4'
	},
	{
		id: 15,
		startPos: [11,13],
		endPos: 12,
		title: 'The World of Suzie Wong besuchen',
		text: 'Suzie Wong Clip',
		media: '13_10_8_SuzieWongNTON.mp4'
	},
	{
		id: 16,
		startPos: [12,13],
		endPos: 14,
		title: 'Entertainment Club Choclate besuchen',
		text: 'Choclate Club Clip',
		media: '13_10_7ChocolateNTON.mp4'
	},
	{
		id: 17,
		startPos: 12,
		endPos: 15,
		title: 'Fußballstar Shao Jiayi treffen',
		text: 'Gespräch mit Fußballer',
		media: '13_10_7FussballerNTON.mp4'
	},
	{
		id: 18,
		startPos: 15,
		endPos: 0, 
		title: 'Verbotene Stadt besuchen',
		text: 'Verboetene Stadt Clip',
		media: '13_10_9VerboteneStadtNTON.mp4'
	},
	{
		id: 19,
		startPos: 15,
		endPos: 0,
		title: 'Sommerpalast besuchen',
		text: 'Sommerpalast Clip',
		media: 'test.mp4'
	},
	{
		id: 20, 
		startPos: 0,
		endPos: 19,
		title: 'Metro nehmen',
		text: 'Hinführung Informatiker',
		media: '13_10_7Hinf_Infomatiker.mp4'
	},
	{
		id: 21,
		startPos: [5,18,19],
		endPos: 20,
		title: '798 Art Zone besuchen',
		text: 'Videoclip über 798',
		media: 'test.mp4'
	},
	{
		id: 22,
		startPos: 20,
		endPos: 0,
		title: 'Den Maler Feng Liang Hong besuchen',
		text: 'Videoclip über Maler', 
		media: 'test.mp4'
	},
	{
		id: 23,
		startPos: 19,
		endPos: 21,
		title: 'Mit Tian Qingfei sprechen',
		text: 'Videoclip über Informatiker',
		media: 'test.mp4'
	},
	{
		id: 24,
		startPos: [18,21,24],
		endPos: 0,
		title: 'Wohnbarracke von Arbeitern besuchen',
		text: 'Wanderarbeiterclip',
		media: 'test.mp4'
	},
	{
		id: 25,
		startPos: 0,
		endPos: 22,
		title: 'In Schindlers Anlegestelle einkehren',
		text: 'Clip über Schindlers Anlegestelle',
		media: '13_10_8Uwe_Teil_01_NTON.mp4'
	},
	{
		id: 26,
		startPos: 22,
		endPos: 23,
		title: 'Mit dem Herrn sprechen',
		text: 'Clip über Uwe',
		media: '13_10_8Uwe_Teil_02_NTON.mp4'
	},
	{
		id: 27,
		startPos: 23,
		endPos: 24, 
		title: 'Ehemaliges Dienstmädchen von Uwe besuchen',
		text: 'Clip über Maid',
		media: '13_10_7MaidNTON.mp4'
	},
	{
		id: 28, 
		startPos: 22,
		endPos: 25,
		title: 'Herausfinden, wem die Visitenkarte gehört',
		text: 'Clip über Prothesenfabrikbesitzer',
		media: '13_10_8_Prothesen1NTON.18.mp4'
	},
	{
		id: 29,
		startPos: 25,
		endPos: 0,
		title: 'Fabrik besuchen',
		text: 'Clip über Prothesenfabrik',
		media: '13_10_8Prothesen2NTON.mp4'
	},
	{
		id: 30,
		startPos: 25,
		endPos: 0,
		title: 'Mit einem Rikschafahrer sprechen',
		text: 'Clip über Hutong',
		media: '13_10_8RikschaNTON.mp4'
	},
	{
		id: 31,
		startPos: 26,
		endPos: 27,
		title: 'Mit Richard mitkommen',
		text: 'Clip über Rich',
		media: '13_10_8_RichardNTON.mp4'
	},
	{
		id: 32,
		startPos: 27,
		endPos: 0,
		title: 'Die große Mauer besuchen',
		text: 'Clip über die Mauer',
		media: '13_10_8_GrosseMauer.mp4'
	},
	{
		id: 33,
		startPos: 27,
		endPos: 28, 
		title: 'Richards Hochzeit besuchen',
		text: 'Clip über Hochzeit',
		media: '13_10_8HochzeitNTON.mp4'
	},
	{
		id: 34,
		startPos: 28,
		endPos: 0,
		title: 'Mit Wahrsagerin sprechen',
		text: 'Clip über Wahrsagerin', 
		media: '13_10_9wahrsagerin.mp4'
	}
]

	
// Orte
var places = [
	{
		id: 0,
		title: 'Wolkenkratzerbild',
		media: 'himmlischerFieden.jpg',
		text: 'Beschreibung des Ortes'
	},
	{
		id: 1,
		title: 'Vor der Bibliothek',
		media: 'Galerie Bild',
		text: 'Beschreibung des Ortes'
	},
	{
		id: 2,
		title: 'Nach der Bibliothek2',
		media: 'mov-Datei',
		text: 'Beschreibung des Ortes'
	},
	{
		id: 3,
		title: 'Vor dem Restaurant',
		media:'Restaurant.jpg',
		text: 'Beschreibung des Ortes'
	},
	{	
		id: 4,
		title: 'Im Restaurant',
		media: 'RestaurantInnen.jpg',
		text: 'Auswahl zwischen den beiden Laptopbenutzern'
	},
	{
		id: 5,
		title: 'Im Restaurant 2',
		media: 'Restaurant2.jpg',
		text: 'Auswahl zwischen dem Besuch des Galeriviertels 798 und dem bebrillten Laptopbesitzer' // (Die Problematik ist hier, dass wir uns zwar die ganze Zeit im Restaurant befinden, sich nach den Gesprächen aber neue Wege eröffnen, daher die verschiedenen Orte)
	},
	{	
		id: 6,
		title: 'Im Restaurant 3',
		media: 'Restaurant3.jpg',
		text: 'Auswahl zwischen dem fastenden Freund und dem Laptopbenutzer mit Schirmmütze'
	},
	{
		id: 7,
		title: 'im Hotelzimmer',
		media: 'Hotelzimmer.mov',
		text: 'Beschreibung des Ortes'
	},
	{
		id: 8,
		title: 'Chic Modemesse',
		media: '_DSC0305.JPEG-Bild',
		text: 'Auswahl zwischen Kindermodeschau, Erwachsenenmodenschau'
	},
	{
		id: 9, 
		title: 'Chic Modemesse',
		media: 'Bild von Halle',
		text: 'Auswahl zwischen Erwachsenenmodeschau und mit Models sprechen'
	},
	{
		id: 10,
		title: 'Chic Modemesse',
		media: '_DSC0315 muss erst noch geschnitten werden',
		text: 'Auswahl zwischen Kindermodeschau und mit Modells sprechen'
	},
	{
		id: 11,
		title: 'Chic Modemesse',
		media: '_DSC0359',
		text: 'Auswahl zwischen The World of Suzie Wong besuchen und alleine losziehen'
	},
	{
		id: 12,
		title: 'Suzie Wong',
		media: 'freeze frame what the fuck (muss neue media-abteilung noch machen)',
		text: 'Auswahl zwischen Barhobbing, Jiayi Shao, Choclate Club'
	},
	{
		id: 13,
		title: 'Barhobbing',
		media: 'Videoclip von Band in Lan.Club',
		text: 'Auswahl zwischen Choclate Club und Suzie Wong'
	},
	{
		id: 14,
		title: 'Choclate Club',
		media: 'Videoclip wie Artisten klatschen',
		text: 'zurück ins Hotelzimmer'
	},
	{
		id: 15,
		title: 'Fußballer',
		media: 'Videoclip wie Fußballer zuhört', 
		text: 'Auswahl zwischen Verbotene Stadt oder Sommerpalast'
	},
	{
		id: 16,
		title: 'Farmerin',
		media: 'Bild von Farmerin und ihrem Sohn',
		text: 'mit Philosophen sprechen, etwas essen gehen'
	},
	{
		id: 17, 
		title: 'Philosoph',
		media: 'irgendein Bild von ihm oder seinem Viertel',
		text: 'Farmerin besuchen, etwas essen gehen' 
	},
	{
		id: 18,
		title: 'Vor Galerie', 
		media: 'irgendein Bild vor Matthias Gallerie',
		text: 'Auswahl zwischen 798 besuchen, etwas essen gehen, Wanderarbeiter besuchen'
	},
	{
		id: 19,
		title: 'Metrostation',
		media: 'Bild von Metrostation',
		text: 'Auswahl zwischen 798 Art Zone und Informatiker'
	},
	{
		id: 20, 
		title: 'Bild von 798',
		media: 'Bild von 798',
		text: 'Maler treffen'
	},
	{
		id: 21, 
		title: 'Bild vor Restaurant oder Bild von Informatiker',
		media: 'so wie oben',
		text: 'Barracke der Wanderarbeiter besuchen'
	},
	{
		id: 22,
		title: 'Foto von Bar von Schindlers Anlegestelle', 
		media: 'wie oben',
		text: 'Prothesenfabrik oder Uwe besuchen' 
	},
	{	
		id: 23, 
		title: 'Bild von Uwes Wohnviertel', 
		media: 'so wie oben',
		text: 'Maid oder Künstler Wan Shin besuchen'
	},
	{
		id: 24,
		title: 'Wohnung der Maid',
		media: 'so wie oben',
		text: 'Wanderarbeiter besuchen'
	},
	{
		id: 25,
		title: 'Prothesenfabrikbesitzer Foto',
		media: 'so wie oben',
		text: 'Prothesenfabrik oder Hutong-Viertel besuchen'
	},
	{
		id: 26,
		title: 'Tanzplatz von oben', 
		media: 'foto',
		text: 'verschiedene Tanzgruppen und Richard besuchen'
	},
	{
		id: 27, 
		title: 'Bild von Richards Wohnung',
		media: 'so wie oben',
		text: 'Auswahl zwischen Mauer und Hochzeit'
	},
	{
		id: 28,
		title: 'Clip von Hochzeit',
		media: 'so wie oben',
		text: 'Weg zur Wahrsagerin'
	}
]