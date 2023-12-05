import glide from '@glidejs/glide'
import './style.css'

const glideOptions = {
    type:'carousel',
    perView : 3,
    autoplay : 4000,
    breakpoints: {
        1024: {
          perView: 3
        },
        600: {
          perView: 1
        }
    }
}
new glide(".glide",glideOptions).mount();