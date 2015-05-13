/*
 * Cleanup obfuscated addresses (see example below) and provide a direct
 * link to Google maps.
 *
 * Example of obfuscated address:
 *
 * rue&du^BoispRosines1°bte6
 * 4577.-ùStrée-lez-Huy
 */

// Workaround to properly show up page action icon
// See http://stackoverflow.com/a/15921382/1030960
chrome.extension.sendMessage({type:'showPageAction'});

// Setup
path_to_location_el = '#body #column-central ul.locationinfo'
direct_link = true

var address = []
$(path_to_location_el + ' li').slice(0, 2).each(function(){
    // Remove "invisible" chars obfuscation
    $('font', this).replaceWith(' ');
    // Store cleaned up address for further lookup
    address.push(this.outerText);
});

// Build values and elements
var text = ''
var url = ''
$.each(address, function(k, v){
    url += v + ' ';
    text += v + '<br/>';
});

var a = $('<a>', {
    'href': 'http://maps.google.com/?q=' + url,
    'title': 'Click to see it on Google maps',
    'html': text
});

// Replace old crappy values in the page
$(path_to_location_el + ' li:lt(2)').remove();

if (direct_link) {
    $(path_to_location_el).prepend($('<li>', {'html': a}));
} else {
    $(path_to_location_el).prepend($('<li>', {'html': text}));
}
