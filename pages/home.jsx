import React from 'react'
import Carousel from '../components/Carousel'
import Button from '../components/Button'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Roadmap } from '../components/Roadmap';
import Link from 'next/link';
export default function home() {
    return (
        <div className="">
            <img className="absolute w-[1000px] top-0 left-[-210px] bg-pic-opacity" src="/img/flower bg small.png" alt="" />
            <img className="absolute w-[1000px] top-[2500px] left-[-300px] bg-pic-opacity" src="/img/flower bg small.png" alt="" />
            <img className="absolute top-[2200px] z-[100] right-[-150px] overflow-hidden bg-pic-last2 bg-pic-opacity" src="/img/flower bg.png" alt="" />
            {/* <div className="absolute w-[1000px] top-[2100px] left-[-210px] flower-bg"></div> */}
            <div className="">
                <div className="text-white relative mt-20 lg:w-[40vw] z-[1000]">
                    <h1 className="uppercase text-[60px] leading-[1]">eternal flowers is a oasis native nft project</h1>
                    <p className="mt-16 mb-4">Flowers are beautiful. They have some mathematical pureness and golden ratio that please the eyes like no other natural element. </p>
                    <p>Our Oasis Eternal Flower collection is a project that aim to develop NFTs which  are more than simple layered .jpg. They are the result of complex parametrical 3D models. Rather than PFP, we would like to share some pure and decompexed pieces of parametric art.</p>
                </div>
                <div className="absolute top-0 right-0">
                    <Carousel />
                    {/* <Carousel />
                    <Carousel /> */}
                </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-x-8 mt-[250px] items-center section-margin">
                <div className='relative'>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={100}
                        totalSlides={4}
                    >
                        <Slider className="rounded-lg w-[90%]">
                            <Slide index={0}>
                                <img className="" src="/img/Eternal_Flowers_9.png" alt="" />
                            </Slide>
                            <Slide index={1}>
                                <img src="/img/Eternal_Flowers_112.png" alt="" />
                            </Slide>
                            <Slide index={2}>
                                <video autoPlay loop muted src="/videos/leg1_2k.mp4"></video>
                            </Slide>
                            <Slide index={3}>
                                <video autoPlay loop muted src="/videos/premium_0.mp4"></video>
                            </Slide>
                        </Slider>
                        <ButtonBack className="absolute text-white top-[230px] left-[10px] text-4xl font-bold">{`<`}</ButtonBack>
                        <ButtonNext className="absolute text-white top-[230px] right-[63px] text-4xl font-bold">{`>`}</ButtonNext>
                    </CarouselProvider>
                </div>
                <div className="text-white">
                    <h1 className="text-[35px] uppercase leading-[1]">eternal flower has a supply of 2 000</h1>
                    <p className="mt-6 mb-10">There will be a limited number of 2 000 flowers. Each flower has a rarity score between 1 and 100 calculated with rarity of the different attributes. There is also 100 premium and 12 legendary flowers that aren’t assembled by the algorithm.   </p>
                    <div>
                        <div className="py-2 border border-b-gray-500 border-x-transparent border-t-transparent">Billions of combinations, 1 888 generated</div>
                        <div className="py-2 border border-b-gray-500 border-x-transparent border-t-transparent">112 hand assembled & animated flowers</div>
                        <div className="py-2 ">Real parametric 3D : not another PNG layered art</div>
                    </div>
                    <Button className="rounded mt-5" text="Attributes & rarity"></Button>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-y-8 text-white mt-20 relative z-[200] items-center">
                <div className="w-4/5">
                    <h1 className="text-[30px] leading-[1] uppercase">stack your seed during 2 weeks to get your flower</h1>
                    <p className="mt-8">We are supporting the Oasis ecosystem, in which we hardly Believe. To grow your Oasis Eternal Flower, you’ll need to stack your seed during a week and give a 150$ROSE fee.</p>
                    <p className="my-8">You’ll then will be able to withdraw your grown NFT !</p>
                    <p>Keep in mind that we are working on secret future use case,that would be revealed at the good timing !</p>
                    <Link href="/">
                        <a>
                            <Button className="mt-8 rounded" text='Stacke to get your flower'></Button>
                        </a>
                    </Link>
                </div>
                <div className="">
                    <div className="flex flex-col gap-2">
                        <div className=" flex gap-x-2">
                            <video className="rounded-lg  w-[375px] h-[380px]" autoPlay loop muted src="/seed.mp4"></video>
                            <div className="flex flex-col gap-y-2">
                                <img className="rounded-md min-w-[186px] h-[184px]" src="/img/Eternal_Flowers_211.png" alt="" />
                                <img className="rounded-md min-w-[186px] h-[184px]" src="/img/Eternal_Flowers_296.png" alt="" />
                            </div>
                        </div>
                        <div className="flex gap-x-2">
                            <img className="rounded-md w-[184px] h-[184px]" src="/img/Eternal_Flowers_110.png" alt="" />
                            <img className="rounded-md w-[184px] h-[184px]" src="/img/Eternal_Flowers_203.png" alt="" />
                            <img className="rounded-md w-[184px] h-[184px]" src="/img/Eternal_Flowers_61.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white relative z-[200] w-full mt-20">
                <h1 className="uppercase text-[40px] mb-8">eternal team</h1>
                <div className="grid md:grid-cols-3 gap-x-4">
                    <div>
                        <img className="rounded-md" src="/img/Eaurage.png" alt="seed" />
                        <div>
                            <h1 className="text-[24px] my-4">Eaurage</h1>
                            <p className="text-[17px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur ea natus repellendus quisquam mollitia atque asperiores numquam soluta quo recusandae.</p>

                        </div>
                    </div>
                    <div>
                        <img className="rounded-md" src="/img/Pomme.png" alt="seed" />
                        <div>
                            <h1 className="text-[24px] my-4">Hasu</h1>
                            <p className="text-[17px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ipsum officia eligendi cupiditate rerum cum qui inventore consectetur officiis laborum!</p>

                        </div>
                    </div>
                    <div>
                        <img className="rounded-md" src="/img/Hasu.png" alt="seed" />
                        <div>
                            <h1 className="text-[24px] my-4">Pomme</h1>
                            <p className="text-[17px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate magnam repellendus molestias quos officia. Inventore fugit nam error debitis provident.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Roadmap />
        </div>
    )
}
