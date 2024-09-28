import Image from 'next/image'

export default function Mapas() {
  return (
    <div className="w-full relative">
      <Image
        src="/Images/map.jpg"
        alt="Map of our location"
        width={1910}
        height={600}
        quality={100}
        unoptimized={true}
      />
    </div>
  )
}