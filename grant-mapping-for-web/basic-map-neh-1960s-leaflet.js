// developed July 2022
// Jesse Johnston
// This basic javascript script pulls in a geojson list of NEH grants from the 1960s, 
// prepares the data for display in a map as popups, plots the popups, then displays the map.
// Adapted from scripts and approach outlined in https://programminghistorian.org/en/lessons/mapping-with-python-leaflet
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