# Parcel reordered js dependencies bug.

https://github.com/parcel-bundler/parcel/issues/________

## Steps to recreate

1. Install dependencies `yarn install`
2. Run the dev server `yarn start`

Expected: The alert pops up and shows that the modules were evaluated in the order that they were called in entry.js (a.js, then b.js)

Actual: Imported modules are hoisted above exported modules, affecting evaluation order. (b.js, then a.js)
