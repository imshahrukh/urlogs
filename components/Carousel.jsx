import React, { useEffect, useState } from 'react'
import 'pure-react-carousel/dist/react-carousel.es.css';
export default function Carousel() {
    const [slider1X, setSlider1X] = useState(0);
    const [slider2X, setSlider2X] = useState(-1400);
    let img_classes = 'w-[240px] h-[240px]'
    const slideInterval = 3000
    var style = {
        slider: {
            transform: 'translateX()'
        }
    }
    const move = () => {
        let newAxix = slider1X + 1;
        if (newAxix > 1500) {
            newAxix = 0;
        }
        setSlider1X(newAxix);
        if (slider2X > 0) {
            setSlider2X(-1400)
        } else {
            // console.log(slider2X + 1)
            setSlider2X(slider2X + 1)
        }
    }
    useEffect(() => {
        var sliderTimeout = setTimeout(() => {
            move();
        }, 30)
        return (() => {
            clearTimeout(sliderTimeout)
        })
    })
    return (
        <div className='relative w-[740px] overflow-hidden z-[100]'>
            <div className="absolute left-0 top-0 bg-white w-1/3 z-[500] h-full crusal-gradient"></div>
            <div style={{
                transform: `translateX(-${slider1X}px)`
            }} className="flex w-[2200px] gap-x-1 ease-in-out">
                <img className={img_classes} src="/img/flower_zoom_02.png" alt="" />
                <img className={img_classes} src="/img/flower_zoom_03.png" alt="" />
                <img className={img_classes} src="/img/flower_zoom_04.png" alt="" />
                <img className={img_classes} src="/img/flower_zoom_02.png" alt="" />
                <img className={img_classes} src="/img/flower_zoom_03.png" alt="" />
                <img className={img_classes} src="/img/flower_zoom_04.png" alt="" />
                <img className={img_classes} src="/img/flower_zoom_02.png" alt="" />
                <img className={img_classes} src="/img/flower_zoom_03.png" alt="" />
                <img className={img_classes} src="/img/flower_zoom_04.png" alt="" />
            </div>
            <div style={{
                transform: `translateX(${slider2X}px)`
            }} className="flex w-[2200px] gap-x-1 mt-1 ease-in-out">
                <img className={img_classes} src="/img/leaves_zoom_01.png" alt="" />
                <img className={img_classes} src="/img/leaves_zoom_02.png" alt="" />
                <img className={img_classes} src="/img/leaves_zoom_03.png" alt="" />
                <img className={img_classes} src="/img/leaves_zoom_01.png" alt="" />
                <img className={img_classes} src="/img/leaves_zoom_02.png" alt="" />
                <img className={img_classes} src="/img/leaves_zoom_03.png" alt="" />
                <img className={img_classes} src="/img/leaves_zoom_01.png" alt="" />
                <img className={img_classes} src="/img/leaves_zoom_02.png" alt="" />
                <img className={img_classes} src="/img/leaves_zoom_03.png" alt="" />
            </div>
            <div style={{
                transform: `translateX(-${slider1X}px)`
            }} className="flex w-[2200px] gap-x-1 ease-in-out mt-1">
                <img className={img_classes} src="/img/ground_zoom_01.png" alt="" />
                <img className={img_classes} src="/img/ground_zoom_02.png" alt="" />
                <img className={img_classes} src="/img/ground_zoom_03.png" alt="" />
                <img className={img_classes} src="/img/ground_zoom_01.png" alt="" />
                <img className={img_classes} src="/img/ground_zoom_02.png" alt="" />
                <img className={img_classes} src="/img/ground_zoom_03.png" alt="" />
                <img className={img_classes} src="/img/ground_zoom_01.png" alt="" />
                <img className={img_classes} src="/img/ground_zoom_02.png" alt="" />
                <img className={img_classes} src="/img/ground_zoom_03.png" alt="" />
            </div>
            {/* <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={6}
                visibleSlides={3}
                isPlaying
                interval={slideInterval}
                playDirection="forward"
            >
                <Slider className="">
                    <Slide index={0}>
                        <img className={img_classes} src="/img/flower_zoom_02.png" alt="" />
                    </Slide>
                    <Slide index={1}>
                        <img className={img_classes} src="/img/flower_zoom_03.png" alt="" />
                    </Slide>
                    <Slide index={2}>
                        <img className={img_classes} src="/img/flower_zoom_04.png" alt="" />
                    </Slide>
                    <Slide index={3}>
                        <img className={img_classes} src="/img/flower_zoom_02.png" alt="" />
                    </Slide>
                    <Slide index={4}>
                        <img className={img_classes} src="/img/flower_zoom_03.png" alt="" />
                    </Slide>
                    <Slide index={5}>
                        <img className={img_classes} src="/img/flower_zoom_04.png" alt="" />
                    </Slide>
                </Slider>
            </CarouselProvider>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={6}
                visibleSlides={3}
                isPlaying
                interval={slideInterval}
                playDirection="backward"
            >
                <Slider className="">
                    <Slide index={0}>
                        <img className={img_classes} src="/img/leaves_zoom_01.png" alt="" />
                    </Slide>
                    <Slide index={1}>
                        <img className={img_classes} src="/img/leaves_zoom_02.png" alt="" />
                    </Slide>
                    <Slide index={2}>
                        <img className={img_classes} src="/img/leaves_zoom_03.png" alt="" />
                    </Slide>
                    <Slide index={3}>
                        <img className={img_classes} src="/img/leaves_zoom_01.png" alt="" />
                    </Slide>
                    <Slide index={4}>
                        <img className={img_classes} src="/img/leaves_zoom_02.png" alt="" />
                    </Slide>
                    <Slide index={5}>
                        <img className={img_classes} src="/img/leaves_zoom_03.png" alt="" />
                    </Slide>
                </Slider>
            </CarouselProvider>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={6}
                visibleSlides={3}
                isPlaying
                interval={slideInterval}
                playDirection="forward"
            >
                <Slider className="">
                    <Slide index={0}>
                        <img className={img_classes} src="/img/ground_zoom_01.png" alt="" />
                    </Slide>
                    <Slide index={1}>
                        <img className={img_classes} src="/img/ground_zoom_02.png" alt="" />
                    </Slide>
                    <Slide index={2}>
                        <img className={img_classes} src="/img/ground_zoom_03.png" alt="" />
                    </Slide>
                    <Slide index={3}>
                        <img className={img_classes} src="/img/ground_zoom_01.png" alt="" />
                    </Slide>
                    <Slide index={4}>
                        <img className={img_classes} src="/img/ground_zoom_02.png" alt="" />
                    </Slide>
                    <Slide index={5}>
                        <img className={img_classes} src="/img/ground_zoom_03.png" alt="" />
                    </Slide>
                </Slider>
            </CarouselProvider> */}

        </div>
    )
}
