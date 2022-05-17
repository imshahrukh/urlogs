import React from 'react'

export const Roadmap = () => {
    return (
        <div className="text-white relative mt-36 z-[200]">
            <h1 className="mb-8 text-[42px] uppercase">roadmap</h1>
            <div className="grid grid-cols-5">
                <div>
                    <h1 className="text-[30px]">Q1</h1>
                    <p className="text-[17px] mt-2 ml-3">Concept & 3D Artwork Parametrical development Team up & Socials</p>
                </div>
                <div></div>
                <div>
                    <div>
                        <h1 className="text-[30px]">Q2</h1>
                        <p className="text-[17px] mt-2 ml-3">Secret collection start Several secret holders snapshots .gltf metadata MVP Dapp concept</p>
                    </div>
                </div>
                <div></div>
                <div>
                    <h1 className="text-[30px]">Q1 (2023)</h1>
                    <p className="text-[17px] mt-2 ml-3">Dapp launch Token launch (ICO) Farm pool</p>
                </div>
            </div>
            <img className="zoom-1" src="/img/roadmap.png" alt="" />
            <div className="grid grid-cols-5 mt-16">
                <div></div>
                <div>
                    <h1 className="text-[30px]">Q2</h1>
                    <p className="text-[17px] mt-2 ml-3">Eternal Seed spread Smart contract devlopment Website launch & seed growth Premium Flowers design</p>
                </div>
                <div></div>
                <div>
                    <h1 className="text-[30px]">Q4</h1>
                    <p className="text-[17px] mt-2 ml-3">Secret Airdrop V2 of the website Dapp smartcontract creation Tokenomics creation</p>
                </div>
                <div></div>
            </div>
        </div>
    )
}
