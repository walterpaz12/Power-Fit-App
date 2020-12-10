// Initialize your app
var myApp = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'My App',
	dialog: {
		title: 'My App',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/inicio/',
    	url: 'index.html',
    	name: '/inicio/',
  		},
		
		{
		path: '/nutri/',
    	url: 'nutri_pf.html',
    	name: 'nutri',
		},
		
		{
		path: '/ep/',
    	url: 'ep_pf.html',
    	name: 'ep',
		},
		
		{
		path: '/t/',
    	url: 'tera_pf.html',
    	name: 't',
		},
		
		{
		path: '/alim/',
    	url: 'ali_pf.html',
    	name: 'alim',
		},
		
		{
		path: '/ent/',
    	url: 'ent_pf.html',
    	name: 'ent',
		},
		
		{
		path: '/au/',
    	url: 'au_pf.html',
    	name: 'au',
  		},
		
		{
		path: '/planes/',
    	url: 'planes_pf.html',
    	name: 'planes',
  		},
		
		{
		path: '/ayuda/',
    	url: 'ay_pf.html',
    	name: 'ayuda',
  		},
		
		{
		path: '/pagos/',
    	url: 'pagos_pf.html',
    	name: 'pagos',
  		},
		
		{
		path: '/orden/',
    	url: 'orden_pf.html',
    	name: 'orden',
  		},
		
		{
		path: '/perfil/',
    	url: 'perfil_pf.html',
    	name: 'perfil',
  		},
		
		
		
		
	]
});

// Export selectors engine
var $$ = Dom7;

var notificationOrden = myApp.notification.create({

icon: '<span class="material-icons">shopping_backet</span>',
title: 'Solicitud de Compras y Gestión de Citas',
titleRightText: '',
subtitle:'',
text:'Su solicitud ha sido aceptada',
closeTimeout: 5000,	
});

$$(document).on('click','#btnComprar', function (e) {
	myApp.dialog.alert('Tu compra fue realizada correctamente !');
	notificationOrden.open();
});



$$('#btnConfirmar').on('click', function () {
  myApp.dialog.confirm('¿Seguro desea procesar su compra?', function () {
    myApp.dialog.alert('¡ Tu compra fue realizada correctamente !');
  });
});


$$('#btnLogin').on('click', function () {
	var Usuario = $$('#username').val();
	var Password = $$('#password').val();
	
  	if(Usuario == "jframos" && Password == "123"){
		myApp.dialog.alert('¡ Bienvenido a Power Fit App !');
		myApp.loginScreen.close(".modal-login");
		
	}else{
		myApp.dialog.alert('Lo sentimos, sus datos son incorrectos');
	}
	
	
});





