import React from 'react';

// components
import Nav from './components/Nav'
import Page from './components/Page'
import ScrollMarquee from './components/ScrollMarquee'

// styles
import './styles/index.scss';

// pages
import IndexPage from './pages/IndexPage';
import ProjectsPage from './pages/ProjectsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

// utils
import './utils/Cursor.js'

const pages = [
    { hash: 'index', render: <IndexPage/>},
    { hash: 'projects', render: <ProjectsPage/>, header: <ScrollMarquee text={'Projects-Proyectos'}/>},
    { hash: 'gallery', render: <GalleryPage/>, header: <ScrollMarquee text={'Gallery-Galería'}/>},
    { hash: 'contact', render: <ContactPage/>, header: <ScrollMarquee text={'Contact-Contacto'}/> },
]

const App = () => {

    return (
        <main>
            <Nav hashes={pages.map(page => page.hash)} />
            { pages.map((page, index) => <Page key={index} {...page}/> )}
        </main>
    )

}

export default App;