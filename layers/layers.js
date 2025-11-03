var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_namria_polygons_1 = new ol.format.GeoJSON();
var features_namria_polygons_1 = format_namria_polygons_1.readFeatures(json_namria_polygons_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_namria_polygons_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_namria_polygons_1.addFeatures(features_namria_polygons_1);
var lyr_namria_polygons_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_namria_polygons_1, 
                style: style_namria_polygons_1,
                popuplayertitle: 'namria_polygons',
                interactive: true,
                title: '<img src="styles/legend/namria_polygons_1.png" /> namria_polygons'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_namria_polygons_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_namria_polygons_1];
lyr_namria_polygons_1.set('fieldAliases', {'NAMRIA_Map': 'NAMRIA Map', });
lyr_namria_polygons_1.set('fieldImages', {'NAMRIA_Map': '', });
lyr_namria_polygons_1.set('fieldLabels', {'NAMRIA_Map': 'header label - visible with data', });
lyr_namria_polygons_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});