/** Handles ESM imports */
import { a } from './some-module.js';
console.log(a);

/** Handles process.env */
if (process.env.NODE_ENV === 'production') {
  console.log('foo');
}

window.workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
