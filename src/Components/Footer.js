import LogoWhite from "@/Assets/Img/logoAcademyWhite.png";
import LogoIG from "@/Assets/Img/ig.png";
import LogoTiktok from "@/Assets/Img/tiktok.png";
import LogoWA from "@/Assets/Img/waLogo.png";
import Image from "next/image";

export default function Footer() {
    return (
        <footer class="bg-Tan ">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <a href="#" class="flex items-center">
                            <Image src={LogoWhite} class="h-32 me-3" alt="FlowBite Logo" />
                        </a>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 ">

                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-white uppercase ">Follow us</h2>
                            <ul class="text-white/70  font-medium">
                                <li class="mb-4 ">
                                    <a href="/" class="hover:underline flex gap-2 items-center">
                                        <Image src={LogoIG} class="w-6 h-6" />
                                        @ithoacademy
                                    </a>
                                </li>
                                <li class="mb-4 ">
                                    <a href="/" class="hover:underline flex gap-2 items-center">
                                        <Image src={LogoTiktok} class="w-6 h-6" />
                                        tiktok
                                    </a>
                                </li>
                                <li class="mb-4 ">
                                    <a href="/" class="hover:underline flex gap-2 items-center">
                                        <Image src={LogoWA} class="w-6 h-6" />
                                        +62 857-7853-7382
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-white uppercase ">Legal</h2>
                            <ul class="text-white/70  font-medium">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-white/70 sm:text-center ">© 2024 <a href="#" class="hover:underline">ITHOAcademy</a>. All Rights Reserved.
                    </span>
                    <div class="flex mt-4 sm:justify-center sm:mt-0">



                        <a href="#" class="text-white/70 hover:text-white  ms-5">
                            <Image src={LogoIG} class="w-4 h-4" />
                        </a>
                        <a href="#" class="text-white/70 hover:text-white  ms-5">
                            <Image src={LogoTiktok} class="w-4 h-4" />

                        </a>
                    </div>
                </div>
            </div>
        </footer >
    )
}