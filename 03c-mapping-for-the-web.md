# 3c. Mapping for the web / interactive maps

The previous notebooks walked through the process of using the gejson data to create
geospatial visualizations by mapping points on geoshapes. 
This notebooks moves on to create interactive, web-friendly maps, like Google Maps, that are 
likely more familiar to everyday users. 
The goal is to plot the grant information from the 1960s on a map background that allows zooming in and out,
repositioning, and the option to click on each point to get information about the referenced grant.

## Mapping the geojson

One way to do this is to use the leaflet.js javascript library, which will knit together the map tiles
and the grant data. The map created will exist outside of this
notebook, but the notebook will walk through the steps to create the interactive map. 

Leaflet is a library of tools, written in javascript, that help display geospatial information
via web browsers. We will use regular approaches to web publishing to create, display, and share
the map. These elements that power the map will include: 

* an HTML file that will pull in leaflet and create the basic page framework for the map
* a CSS file to style and modify the display of the map
* a javascript file that will use the leaflet tools to extract and load the geojson data 

The process is outlined in a clear and approachable way by Kim Pham in "Web Mapping with Python and Leaflet," _Programming Historian_ 6 (2017), [doi:10.46430/phen0070](https://doi.org/10.46430/phen0070). This tutorial starts by setting up all of the map elements in one file (with a different dataset), then splits them out into three files as below. If you want to see how this would look in one file, refer to the above tutorial.

Because the html and css elements of this step are the shortest, we will go through those first. Below is a walkthrough description of each file. 

### HTML

describe [`basic-map-neh-1960s-leaflet.html`](https://github.com/morskyjezek/neh-grant-data-project/blob/main/grant-mapping-for-web/basic-map-neh-1960s-leaflet.html)

```html
<!DOCTYPE html>
<head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css" integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ==" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js" integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ==" crossorigin=""></script>
    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>

    <link rel="stylesheet" href="basic-map-neh-1960s-leaflet.css" />
    
</head>
<body>

    <div id="map"></div>

</body>
    <script src="basic-map-neh-1960s-leaflet.js"></script>
</html>
```

### CSS 

describe [`basic-map-neh-1960s-leaflet.css`](https://github.com/morskyjezek/neh-grant-data-project/blob/main/grant-mapping-for-web/basic-map-neh-1960s-leaflet.css)

```css
body { 
    margin: 0; 
    padding: 0; 
}
#map { 
    position: absolute; 
    top: 0;
    bottom: 0; 
    width: 100%;
    height: 750px;
}
```

### Javascript for leaflet

describe [`basic-map-neh-1960s-leaflet.js`](https://github.com/morskyjezek/neh-grant-data-project/blob/main/grant-mapping-for-web/basic-map-neh-1960s-leaflet.js)

```javascript
window.onload = function () {
    var basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });

    // retrieve the geojson data
    $.getJSON("neh_1960s_grants.geojson", function(data) {

        // set popups for each point
        var geojson = L.geoJson(data, {
            onEachFeature: function (feature, layer) {

                // set content formatting to format and correct missing information for popups
                if ( feature.properties.Institution == null ) {
                    feature.properties.Institution = 'an unaffiliated, independent scholar'
                }
                if ( feature.properties.Participants == null ) {
                    feature.properties.Participants = 'unlisted'
                }
                if ( feature.properties.ProjectTitle == null ) {
                    feature.properties.ProjectTitle = 'unlisted'
                }
                let dollarUS = Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                })

                // create the popups
                layer.bindPopup(
                    `<p>In ${ feature.properties.YearAwarded }, ${ feature.properties.Institution } (in ${ feature.properties.InstCity }, ${ feature.properties.InstState }) was awarded ${ dollarUS.format(feature.properties.AwardOutright) } for <a href="https://securegrants.neh.gov/publicquery/main.aspx?f=1&gn=${ feature.properties.AppNumber }">NEH project number ${ feature.properties.AppNumber }</a>.<br /><br /><strong>Project Title:</strong> ${ feature.properties.ProjectTitle }<br /><strong>Project participants:</strong> ${ feature.properties.Participants }<br /><strong>NEH Program:</strong> ${ feature.properties.Program }<br /><strong>NEH Division:</strong> ${ feature.properties.Division }</p>`
                    );
            }
        });

        // set up the map, set viewport
        var map = L.map('map')
            .setView([37.90, -94.66], 4); //continental US view

        basemap.addTo(map);
        geojson.addTo(map);
    });
};
```

## Getting it up and running

After files are created, we can use the python HTTP server to
display the files locally and see how they may display on the live web. 
For this, use python3 [http.server](https://docs.python.org/3/library/http.server.html) module. (Note: this should only be used locally for testing, 
not in a production environment.)

To display (and "run" the files) the files with python, open a command shell,
navigate to the location where the files are stored, then run:

`python -m SimpleHTTPServer` or in python3 `python3 -m http.server`.

You can specify a server port for these if you like, or you can use the default. 
When the server starts, you will see something like this displayed in the shell:

`Serving HTTP on 0.0.0.0 port 8000 ...`.

Note the port number. Now, open a web browser. In the browser's location bar,
use the port number (rather than a URL) to display the local server. For example,
if as above the port is 800, you would request the following address in the browser:

`localhost:8000/` or `127.0.0.1:8000`

If the files are working correctly, you should see something like a map dotted with blue markers representing the grant data.

![Screenshot image of how the basic map of the 1960s NEH grant data will be displayed by leaflet in an interactive web map](/grant-mapping-for-web/basic-map-neh-1960s-leaflet.png "Screenshot image of how the basic map of the 1960s NEH grant data will be displayed by leaflet in an interactive web map")

## Extending the Map: Changing the Base Layer

Now, let's further style the map. We can use different background map tiles by using another GIS service, [Mapbox](https://docs.mapbox.com/mapbox-gl-js/api/). 
To use this service on your own, you will need to create a Mapbox account and a Mapbox API token.
The account and token will allow you to use the free services from Mapbox, including things like
custom base layers and other styling options. 

![Screenshot image of how the map of the 1960s NEH grant data will look with the light basemap style provided by Mapbox](/grant-mapping-for-web/basic-map-neh-1960s-leaflet-alternate-basemap.png "Screenshot image of how the map of the 1960s NEH grant data will look with the light basemap style provided by Mapbox")

## Resources

* [Leaflet.js documentation](https://leafletjs.com/reference.html)
* [Mapbox API reference](https://docs.mapbox.com/mapbox-gl-js/api/)
* [Mapbox help on creating an access token](https://docs.mapbox.com/help/getting-started/access-tokens/)
* [Mapbox reference for using static tiles](https://docs.mapbox.com/api/maps/static-tiles/)