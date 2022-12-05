import unity from '../assets/img/unity.svg'
import MySQL from '../assets/img/MySQL.svg'
import oracle from '../assets/img/oracle.svg'
import blender from '../assets/img/blender.svg'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    return (
        <section className='skill' id='skills'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='skill-bx wow zoomIn'>
                            <h2>Skills</h2>
                            <p>
                                I am acquainted with HTML, CSS, Java and C#. I
                                love to code and explore more about
                                technologies.
                                <br />
                                Here are a few technologies I've been working
                                with recently:
                            </p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className='owl-carousel owl-theme skill-slider'
                            >
                                <div className='item'>
                                    <img src={unity} alt='Image' />
                                    <h5>Unity</h5>
                                </div>
                                <div className='item'>
                                    <img src={blender} alt='Image' />
                                    <h5>Blender</h5>
                                </div>
                                <div className='item'>
                                    <img src={oracle} alt='Image' />
                                    <h5>Oracle</h5>
                                </div>
                                <div className='item'>
                                    <img src={MySQL} alt='Image' />
                                    <h5>MySQL</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img
                className='background-image-left'
                src={colorSharp}
                alt='Image'
            />
        </section>
    )
}
