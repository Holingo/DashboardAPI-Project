import { useEffect} from 'react';
import { useLocation } from 'react-router-dom';

function ScrollFadeEffect(props) {
    const location = useLocation();

    useEffect(() => {
        const loader = document.createElement('div')
        loader.id = 'loader'
        loader.style.position = 'fixed'
        loader.style.inset = '0'
        loader.style.backgroundColor = '#111416'
        loader.style.zIndex = '999'
        loader.style.pointerEvents = 'none'
        loader.style.animation = 'fadeOutLoader 1s ease 2s forwards'

        document.body.prepend(loader)

        const root = document.getElementById('root')
        if (root) {
            root.style.opacity = '0'
            root.style.animation = 'fadeInApp 0.8s ease-out 2s forwards'
        }

        // Clean up loader after animastion
        const cleanup = setTimeout(() => {
            loader.remove()
        }, 3000)

        return () => clearTimeout(cleanup)
    }, [location.pathname])

    return null
}

export default ScrollFadeEffect;