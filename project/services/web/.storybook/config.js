import { configure } from '@storybook/react'

const req = require.context('../src/stories/components', true, /\.stories\.tsx$/)

function loadStories() {
    req.keys().forEach(req)
}

configure(loadStories, module)
