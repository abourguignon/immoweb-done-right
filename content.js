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

// Fetch address
var nb_li = $(path_to_location_el + ' li').length;  // Number of <li> can vary; the last one doesn't contain address parts
var address = []

$(path_to_location_el + ' li').slice(0, nb_li-1).each(function(){
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
    'title': chrome.i18n.getMessage('view_it_on_gmaps'),
    'html': text
});

// Replace old crappy values in the page
$(path_to_location_el + ' li:lt('+ String(nb_li-1) +')').remove();

if (direct_link) {
    $(path_to_location_el).prepend($('<li>', {'html': a}));
} else {
    $(path_to_location_el).prepend($('<li>', {'html': text}));
}
