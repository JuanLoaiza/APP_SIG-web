 //Juan gabriel Loaiza
 //SIG web de la cuenca del río Culiacán
 //Maestria en Ciencias de la Ingeniería
 // construcción del mapa

var map = new L.map('map', {
    center: new L.LatLng(25.40, -107.45),
    zoom: 9,
    maxZoom: 18,
    zoomControl: false, 
    layers: pod
});
  L.control.zoom({
     position:'topright'
}).addTo(map);

<!--inicio de capas--> 
    //capa de municipios de Culiacan
function getColor1(d) { 
		return d == 'Sinaloa' ? '#fdd5a4' : 
		d == 'Navolato' ? '#fdd5a4' : 
						  '#fdd5a4';			//#FFEDA0  color naranja claro
		}
		
		function style1(feature) { 
		return { 
		fillColor: getColor1(
		 feature.properties.NOM_MUN), 
		 weight: 1, 
		 opacity: 1, 
		 color: 'black', 
		 dashArray: '0', 
		 fillOpacity: 0.7 
		 }; 
		 }

 function popup1(feature, layer) {
		 if (feature.properties && feature.properties.NOM_MUN) {
		 layer.bindPopup(feature.properties.NOM_MUN); 
		 } 
		 } 

var geojson1 = L.geoJson(a_mcpsinaloa, {
			style: style1,
			onEachFeature: popup1
			});

//fin de municipios
//inicio de capa sub cuenca
function getColor3(d) { 
		return d == 'Mocorito River' ? '#e5e5e5' : 
		d == 'Pericos River' ? '#e5e5e5' : 
		d == 'Humaya R - P. A. López Mateos' ? '#e5e5e5':
		d == 'Humaya River' ? '#e5e5e5':
		d == 'A. San José del Oro' ? '#e5e5e5':
		d == 'A. de Bamopa' ? '#e5e5e5':
		d == 'Badiraguato River' ? '#e5e5e5':
		d == 'Petatlán River' ? '#e5e5e5':
						  '#e5e5e5';
		}
		
		function style3(feature) { 
		return { 
		fillColor: getColor3(
		 feature.properties.SUBCUENCA), 
		 weight: 1, 
		 opacity: 1, 
		 color: 'black', 
		 dashArray: '0', 
		 fillOpacity: 0.7 
		 }; 
		 }

 function popup3(feature, layer) {
		 if (feature.properties && feature.properties.SUBCUENCA) {
		 layer.bindPopup("<b>SubCuenca:</b> " + feature.properties.SUBCUENCA + 
		 	"</br> Con un area de: " + feature.properties.AREA_KM2 + " km<sup>2</sup>");
				
		 } 
		 }

var geojson3 = L.geoJson(e_subcuencas, {
			style: style3,
			onEachFeature: popup3
			}).addTo(map);

//fin capa sub cuenca
//inicio de capa uso de suelo 1990 mod
function getColor8(d) { 
		return d == 'Zona Urbana' ? '#f60000' : 
		d == 'Zona Agricola' ? '#a28200' : 
		d == 'Hidrologia' ? '#323feb':
		d == 'Selva Baja Caducifolia' ? '#bebd7f':
		d == 'Bosque Encino' ? '#00ff00':
		d == 'Bosque Pino' ? '#33a02c':
		d == 'Pastizal Inducido' ? '#FFA500':
		d == 'Bosque Ayarin' ? '#f7ff00':
		d == 'Bosque Oyamel' ? '#ff00ff':
						 '#FFEDA0';
		}
		
		function style8(feature) { 
		return { 
		fillColor: getColor8(
		 feature.properties.CLASE), 
		 weight: 0.55, 
		 opacity: 0.8, 
		 color: 'black', 
		 dashArray: '0', 
		 fillOpacity: 0.7 
		 }; 
		 }

		 function popup8(feature, layer) {
		 if (feature.properties && feature.properties.CLASE) {
		 layer.bindPopup("<strong>Clasificación de uso de suelo de 1990</strong></br>"+"<b>Clase:</b> " + feature.properties.CLASE +
		 	"</br> Con una extension total de: " + feature.properties.AREA + " <strong>ha</strong>"+"</br><a style='text-decoration: none;' href='javascript:Abrir()'>Mas Información <i class='fas fa-tree'></a>");
				
		 } 
		 }

		 var geojson8 = L.geoJson(d_usv1990, {
			style: style8,
			onEachFeature: popup8
			});//.addTo(map);

//fin de capa uso de suelo 1990 mod
//inicio de capa uso de suelo 2019 mod
function getColor2(d) { 
		return d == 'Zona Urbana' ? '#f60000' : 
		d == 'Zona Agricola' ? '#a28200' : 
		d == 'Hidrologia' ? '#323feb':
		d == 'Selva Baja Caducifolia' ? '#bebd7f':
		d == 'Bosque Encino' ? '#00ff00':
		d == 'Bosque Pino' ? '#33a02c':
		d == 'Vegetacion Inducida' ? '#FFA500':
		d == 'Bosque Ayarin' ? '#f7ff00':
		d == 'Bosque Oyamel' ? '#ff00ff':
						 '#FFEDA0';
		}
		
		function style2(feature) { 
		return { 
		fillColor: getColor2(
		 feature.properties.CLASE), 
		 weight: 0.55, 
		 opacity: 0.8, 
		 color: 'black', 
		 dashArray: '0', 
		 fillOpacity: 0.7 
		 }; 
		 }

		 function popup2(feature, layer) {
		 if (feature.properties && feature.properties.CLASE) {
		 layer.bindPopup("<strong>Clasificación de uso de suelo de 2019</strong></br>"+"<b>Clase:</b> " + feature.properties.CLASE +
		 	"</br> Con una extension total de: " + feature.properties.AREA + " <strong>ha</strong>"+"</br><a style='text-decoration: none;' href='javascript:Abrir()'>Mas Información <i class='fas fa-tree'></a>");
				
		 } 
		 }

		 var geojson2 = L.geoJson(m_usv2019, {
			style: style2,
			onEachFeature: popup2
			});//.addTo(map);

//fin de capa uso de suelo 2019 mod
//inicio de capa uso de suelo 2049 mod
function getColor4(d) { 
		return d == 'Zona Urbana' ? '#f60000' : 
		d == 'Zona Agricola' ? '#a28200' : 
		d == 'Hidrologia' ? '#323feb':
		d == 'Selva Baja Caducifolia' ? '#bebd7f':
		d == 'Bosque Encino' ? '#00ff00':
		d == 'Bosque Pino' ? '#33a02c':
		d == 'Vegetacion Inducida' ? '#1fe6e6':
		d == 'Bosque Ayarin' ? '#f7ff00':
		d == 'Bosque Oyamel' ? '#ff00ff':
						 '#FFEDA0';
		}
		
		function style4(feature) { 
		return { 
		fillColor: getColor4(
		 feature.properties.CLASE), 
		 weight: 0.55, 
		 opacity: 0.8, 
		 color: 'black', 
		 dashArray: '0', 
		 fillOpacity: 0.7 
		 }; 
		 }

		 function popup4(feature, layer) {
		 if (feature.properties && feature.properties.CLASE) {
		 layer.bindPopup("<b>Uso:</b> " + feature.properties.CLASE +
		 	"</br> Con una extension total de: " + feature.properties.AREA + " ha");
				
		 } 
		 }

		 var geojson4 = L.geoJson(g_usv2049, {
			style: style4,
			onEachFeature: popup4
			});//.addTo(map);

//fin de capa uso de suelo 2049 mod
//inicio de capa rios

function getColor5(d) { 
		return d == 'Corriente de agua' ? '#323feb' : 
		d == 'Corriente de agua' ? '#323feb' : 
						  '#323feb';			//#FFEDA0  color naranja claro
		}
		
		function style5(feature) { 
		return { 
		fillColor: getColor5(
		 feature.properties.ENTIDAD), 
		 weight: 2, 
		 opacity: 1, 
		 color: 'blue', 
		 dashArray: '0', 
		 fillOpacity: 0.7 
		 }; 
		 }

		  function popup5(feature, layer) {
		 if (feature.properties && feature.properties.ENTIDAD) {
		 layer.bindPopup("<b>Parametros FQ del Agua: Muestreo 15/02/2017</b>" + "</br> PH: " + feature.properties.PH + ", CE: " + feature.properties.CE + ", CLORF: " + feature.properties.CLORF + "</br> OXDISUELT: " + feature.properties.OXDISULT + ", ALGAS_VA: " + feature.properties.ALGAS_VA + ", N: " + feature.properties.N + "</br> DQO: " + feature.properties.DQO + ", P: " + feature.properties.P);
				
		 } 
		 }

		 var geojson5 = L.geoJson(l_rios_princp, {
			style: style5,
			onEachFeature: popup5
			});//.addTo(map);
//fin de capa rios
<!--fin de capas--> 

             //mapas base
              
                var minis=L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
      	maxZoom: 18,
      	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'});
        
              
              var pod=L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
      	maxZoom: 18,
      	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'});
        pod.addTo(map);
          
        
              var mapycz2 =  L.tileLayer('http://m{s}.mapserver.mapy.cz/base-m/{z}-{x}-{y}',{ident:'mapycz',attribution:'&copy;Seznam.cz a.s., | &copy;OpenStreetMap <a href="http://mapy.cz"><img class="print" target="_blank" src="//api.mapy.cz/img/api/logo.png" style="cursor: pointer; position:relative;top: 5px;"></a>',maxZoom:20,subdomains:"1234"});
              var baseMap = new L.TileLayer('http://{s}.tiles.mapbox.com/v3/gvenech.m13knc8e/{z}/{x}/{y}.png'); 
              var mapycz =  L.tileLayer('http://m{s}.mapserver.mapy.cz/base-m/{z}-{x}-{y}',{ident:'mapycz',attribution:'&copy;Seznam.cz a.s., | &copy;OpenStreetMap <a href="http://mapy.cz"><img class="print" target="_blank" src="//api.mapy.cz/img/api/logo.png" style="cursor: pointer; position:relative;top: 5px;"></a>',maxZoom:20,subdomains:"1234"});   
              var esri_img = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
		  		attribution: 'Tiles &copy; &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
				}); 


            var prec= L.OWM.precipitationClassic = L.OWM.precipitationClassic({showLegend: false, opacity: 0.5,appId: '8b816162ce03197c15265e47b0149f36'});
            var city = L.OWM.current({intervall: 5,showOwmStationLink: true,minZoom:2, lang: 'es', appId:"8b816162ce03197c15265e47b0149f36"});
   
    var baseMaps = {
    "OSM" : pod,
    "<b style=color:red;>M</b><b style=color:black;>APY.CZ":mapycz,
    "Satelite": esri_img
    };

    var groupedOverlays = {                                                              
    "<b style=color:rgb(220,31,37);>Clasificación de Uso de Suelo</b>": {
    
    "Uso de suelo 1990": geojson8,
    
    "Uso de suelo 2019</br></br><img src='img/leyenda1.png' height=180px  style= 'margin-left: 25px'>": geojson2,
  },

 // "<b style=color:rgb(220,31,37);>Simulación de Cambio de Uso de Suelo</b> <br>": {
  //  "Mapa de Simulacion 2049": geojson4,
  //},
 
  "<b style=color:rgb(220,31,37);>Capas de Interes</b> <br>": {
    "Municipios": geojson1,
   	"Cuenca": geojson3,
   	"Rios": geojson5,
  },

  "<b style=color:rgb(220,31,37);>Clima actual</b>": {
    "Clima actual":   city,
    "Precipitación": prec,
  } ,  

};
var sidebar = L.control.sidebar('sidebar').addTo(map);
sidebar.open('vrstvy');
   var panel= L.control.groupedLayers(baseMaps,groupedOverlays,{collapsed:false}).addTo(map);
    var htmlObject = panel.getContainer();
      var a = document.getElementById('seznamvrstev')
      function setParent(el, newParent){
        newParent.appendChild(el);
      }
      setParent(htmlObject, a);
             
var homebutton= L.easyButton('fa-home fa-lg', function()
{map.setView([25.40, -107.45],9);}, 'Posición Inicial',{ position: 'topright'});
homebutton.addTo(map);

         
            
          map.on('click', function(e) {
    $('#latInput').val(e.latlng.lat);
    $('#lngInput').val(e.latlng.lng);
    updateMarker(e.latlng.lat, e.latlng.lng);
});  
       
            
            var updateMarkerByInputs = function() {
	return updateMarker( $('#latInput').val() , $('#lngInput').val());
}
$('#latInput').on('input', updateMarkerByInputs);
$('#lngInput').on('input', updateMarkerByInputs);


     L.control.scale({position: 'bottomright', maxWidth:150, metric:true}).addTo(map);
     
        
            var tisk= L.control.browserPrint({position: 'topright'}).addTo(map);
        
            var miniMap = new L.Control.MiniMap(minis, { toggleDisplay: true, width:120, height:120, zoomLevelOffset:-4.5 }).addTo(map);
       
  L.Control.geocoder().addTo(map);

//////funciones que abren y cierran ventanas modales//////////////
 
        function Abrir(){
            document.getElementById("vent").style.display="block";
        }
        function cerrar(){
            document.getElementById("vent").style.display="none";
        }

        function Abrir_us(){
            document.getElementById("vent_us").style.display="block";
        }
        function cerrar_us(){
            document.getElementById("vent_us").style.display="none";
        }

        function Abrir_co(){
            document.getElementById("vent_co").style.display="block";
        }
        function cerrar_co(){
            document.getElementById("vent_co").style.display="none";
        }


 

       