$(function(){
	var data = [
		{category:'Классические гостиные', link: '/galeries/gostinnaya_clas/index.html', description:'Асимметричные шторы с комбинированным ламбрекеном', fileName:'асимметричные шторы с комбинированным ламбрекеном.jpg'},
		{category:'Спальни', link: '/galeries/spalnya/index.html', description:'Композиция из трехслойных штор в шоколадных тонах', fileName:'композиция из трехслойных штор в шоколадных тонах.jpg'},
		{category:'Детские', link: '/galeries/detskaya/index.html', description:'Однотонные сочные шторы дополненные японскими панелями из органзы.jpg', fileName:'однотонные сочные шторы дополненные японскими панелями из органзы.jpg'},
		{category:'Современные гостиные', link: '/galeries/gostinnaya_new/index.html', description:'Iторы на люверсах из светлых и темных тканей', fileName:'шторы на люверсах из светлых и темных тканей.jpg'}
	];
	var randNum = Math.floor((Math.random()*data.length)+1);
	$('#carusel_img').attr("src",'/img/carusel/'+data[randNum-1].fileName);
	$('#carusel_category').html(data[randNum-1].category);
	$('#carusel_category').attr('href', data[randNum-1].link);
	$('#carusel_description').html(data[randNum-1].description);
	$('#carusel_description').attr('href', data[randNum-1].link);
});