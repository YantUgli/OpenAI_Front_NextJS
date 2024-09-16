import Image from "next/image";
import PerkantoranImg2 from "@/Assets/Img/perkantoran2.jpg";
import PerkantoranImg3 from "@/Assets/Img/perkantoran3.jpg";

export default function Tentang() {
    return (
        <section id="tentang">
            <div class="py-12 container mx-auto">
                <div class="flex justify-start">
                    <h1 class="font-PoppinsBold py-4 px-8 bg-Orange rounded-full text-white">
                        Tentang Kami
                    </h1>
                </div>
                <div class='flex-col-reverse flex gap-4 md:gap-0 md:flex-row px-10 my-8'>
                    <div class='w-full md:w-1/2'>
                        <h1 class='text-xl md:text-3xl font-bold md:w-4/6 w-full mb-4 md:mb-8'>Latar Belakang</h1>
                        <p class='text-xs md:text-base'>
                            ITHO Academy adalah inisiatif pendidikan dari PT ITHO INDOSTOCK, perusahaan yang telah beroperasi sejak tahun 2002 dengan fokus utama pada teknologi informasi dan pendidikan. ITHO Academy hadir sebagai solusi praktis untuk membantu lulusan Sekolah Menengah Kejuruan (SMK) mempersiapkan diri secara efektif menghadapi tantangan dunia kerja modern, khususnya di bidang digital.
                        </p>
                    </div>
                    <div class='w-full md:w-1/2 md:px-6'>
                        <Image src={PerkantoranImg2} alt="" class='w-full h-[125px] md:h-[300px] object-cover' />
                    </div>
                </div>
                <div class='  md:flex px-10 pt-8 pb-12'>
                    <div class='w-full md:w-1/2 md:px-6 md:flex-none'>
                        <Image src={PerkantoranImg3} alt="" class='w-full h-[125px] md:h-[340px] object-cover' />
                    </div>
                    <div class='grow md:p-6'>
                        <div class="w-full my-2">
                            <h2 class="mb-2 text-lg font-semibold ">Misi</h2>
                            <p class="text-xs md:text-base">
                                Memberikan pendidikan praktis yang relevan dengan kebutuhan industri digital melalui kurikulum yang disesuaikan dengan perkembangan teknologi terkini, serta membekali siswa dengan keterampilan nyata dan pengalaman langsung di dunia digital marketing.
                            </p>
                        </div>
                        <div class="w-full my-2">
                            <h2 class="mb-2 text-lg font-semibold ">Visi</h2>
                            <p class="text-xs md:text-base">
                                Menciptakan generasi profesional yang siap kerja, kompetitif, dan memiliki keterampilan yang terakreditasi di bidang digital, sehingga mampu beradaptasi dan sukses di era industri 4.0.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}