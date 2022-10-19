// Export from this file first.
export * from './a'

// Then import this file.
import './b'

// Show the results
const actualOrder = window.loadOrder.join(', ')
alert(`
Expecting modules to be evaluated in the order that they are imported in the source.

Source import order: a.js, b.js
Evaluation order: ${actualOrder}
`)
