import home from '../components/home.vue'
import contact from '../components/contact.vue'
import extracurriculars from '../components/extracurriculars.vue'
import projects from '../components/projects.vue'

export default [
    {
        path: '/',
        component: home
    },
    {
        path: '/contact',
        component: contact
    },
    {
        path: '/extracurriculars',
        component: extracurriculars
    },
    {
        path: '/projects',
        component: projects
    }
]
