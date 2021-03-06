import { configure } from '@storybook/react';

// automatically import all files ending in *.story.js
const req = require.context('../src', true, /\.story\.js$/);

const loadStories = () => req.keys().forEach(req);

configure(loadStories, module);
