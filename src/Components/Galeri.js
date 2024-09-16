import Image from 'next/image'
import React from 'react'
import SquareImg from "@/Assets/Img/square.png";
import PatternImg3 from "@/Assets/Img/pattern3.png";
import ExampleImg from "@/Assets/Img/Example.png";

export default function Galeri() {
    return (
        <section id="galeri" class="relative ">
            <Image src={SquareImg} class="w-32 left-2/3 absolute top-0 " />
            <Image src={PatternImg3} class="w-64 absolute -top-32 -left-16" />


            <div class="container mx-auto mb-12 pt-20">
                <div class="flex justify-start">
                    <h1 class="font-PoppinsBold py-4 px-8 bg-Orange rounded-full text-white">
                        Galeri
                    </h1>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 gap-4 py-4 px-8 mt-6">
                    <div class="relative rounded-lg overflow-hidden">
                        <Image class="h-auto max-w-full rounded-lg" src={ExampleImg} alt="" />
                        <div class="absolute bottom-0 w-full bg-putih px-6 py-3 text-center rounded-t-xl text-lg hidden md:block">
                            Deskripsi Galeri
                        </div>
                    </div>
                    <div class="relative rounded-lg overflow-hidden">
                        <Image class="h-auto max-w-full rounded-lg" src={ExampleImg} alt="" />
                        <div class="absolute bottom-0 w-full bg-putih px-6 py-3 text-center rounded-t-xl text-lg hidden md:block">
                            Deskripsi Galeri
                        </div>
                    </div>
                    <div class="relative rounded-lg overflow-hidden">
                        <Image class="h-auto max-w-full rounded-lg" src={ExampleImg} alt="" />
                        <div class="absolute bottom-0 w-full bg-putih px-6 py-3 text-center rounded-t-xl text-lg hidden md:block">
                            Deskripsi Galeri
                        </div>
                    </div>
                    <div class="relative rounded-lg overflow-hidden">
                        <Image class="h-auto max-w-full rounded-lg" src={ExampleImg} alt="" />
                        <div class="absolute bottom-0 w-full bg-putih px-6 py-3 text-center rounded-t-xl text-lg hidden md:block">
                            Deskripsi Galeri
                        </div>
                    </div>
                    <div class="relative rounded-lg overflow-hidden">
                        <Image class="h-auto max-w-full rounded-lg" src={ExampleImg} alt="" />
                        <div class="absolute bottom-0 w-full bg-putih px-6 py-3 text-center rounded-t-xl text-lg hidden md:block">
                            Deskripsi Galeri
                        </div>
                    </div>
                    <div class="relative rounded-lg overflow-hidden">
                        <Image class="h-auto max-w-full rounded-lg" src={ExampleImg} alt="" />
                        <div class="absolute bottom-0 w-full bg-putih px-6 py-3 text-center rounded-t-xl text-lg hidden md:block">
                            Deskripsi Galeri
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
