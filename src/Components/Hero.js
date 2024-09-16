import WaveImg from "@/Assets/Img/wave.png";
import WaveImg2 from "@/Assets/Img/wave2.png";
import PatternImg from "@/Assets/Img/pattern.png";
import PatternImg2 from "@/Assets/Img/pattern2.png";
import MainImg from "@/Assets/Img/1.png";
import InteractImg from "@/Assets/Img/Interact.png";

import Image from "next/image";

export default function Hero() {
    return (
        <section class="w-full h-screen  flex justify-center items-center relative overflow-hidden">
            <Image src={WaveImg} class="w-full h-32 z-10 absolute bottom-0 " />
            <Image src={WaveImg2} class="w-full h-40  absolute bottom-0 " />
            <Image src={PatternImg} class="w-full  absolute bottom-0 " />
            <Image src={PatternImg2} class="w-full md:w-2/5  absolute -bottom-10 md:bottom-0 md:-right-36" />

            <div class="md:flex w-full md:w-[90%] md:gap-10 h-3/5 md:h-4/5  ">
                <div class="w-full md:w-1/2 md:flex justify-center items-start gap-6 md:relative">
                    <Image src={MainImg} class="w-full m-auto  object-cover " />
                </div>

                <div class="w-full md:w-1/2 md:relative">
                    <Image src={InteractImg} class=" absolute md:bottom-10 md:-right-10" />
                </div>
            </div>
        </section>
    )
}