import Image from 'next/image';

export default function Banner() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src="/image/banner.png"
          alt="Venue Image"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          where every event finds its venue
        </h1>
        <p className="text-lg md:text-xl">
          บริการให้เช่าสถานที่จัดเลี้ยงครบวงจร พร้อมสิ่งอำนวยความสะดวกระดับพรีเมียม
        </p>
      </div>
    </div>
  );
}