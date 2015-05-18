# Immoweb Done Right

Fixing [immoweb.be](http://www.immoweb.be/).  I can't live with their stupid obfuscated (whitespaces replaced by invisible characters) addresses anymore, and I'm fed up with copy-pasting it in Google maps.  Hence this Google Chrome extension.

## Matches
It will run on `*://www.immoweb.be/*/*.Estate.cfm` and  `*://www.immoweb.be/*/*.estate.cfm` and will typically match the following pages:

- Buy.Estate.cfm?IdBien=123456
- Rent.Estate.cfm?IdBien=123456
- myselect.Estate.cfm?IdBien=123456

Examples:

- http://www.immoweb.be/fr/myselect.Estate.cfm?IdBien=123456
- http://www.immoweb.be/nl/buy.estate.cfm?IDbien=123456
- https://www.immoweb.be/en/Rent.Estate.cfm?IdBien=123456


Should work with http and https, any language, urls containing capital letters.
