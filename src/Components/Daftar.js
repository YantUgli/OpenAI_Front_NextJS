import React from 'react'
import PerkantoranImg from '@/Assets/Img/perkantoran.jpg'

export default function Daftar() {
    return (
        <section class="h-[60vh] bg-cover bg-fixed bg-center relative" id="daftar" style={{ backgroundImage: `url(${PerkantoranImg.src})` }}>
            <div class="w-full h-full bg-black/50 absolute"></div>
            <div class="container h-full mx-auto py-4 px-8 flex-col flex justify-center items-center  gap-6 relative">
                <div class="flex justify-center">
                    <h1 class="  bg-Orange text-white px-6 py-3 rounded-full ">
                        Daftar
                    </h1>
                </div>

                <div class="max-w-md w-full aspect-auto bg-white py-4 px-6 rounded-xl">
                    <form class="max-w-sm mx-auto">
                        <div class="mb-5">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Nama Sekolah Mu</label>
                            <input type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="SMK..." required />
                        </div>
                        <div class="flex">
                            <a href="https://wa.me/6285778537382?text=Halo CS ITHO ACADEMY Saya dari [Nama Sekolah], Saya Tertarik Dengan..." target="_blank" class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center flex items-center gap-2">
                                <img src="/resources/Assets/Img/waLogo.png" class="w-4 aspect-square" />
                                Hubungi Sekarang
                            </a>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}
