import Image from 'next/image'

export default function Mapas() {
  return (
    <div className="w-full relative">
      <Image
        src="/Images/map.jpg"
        alt="Map of our location"
        width={1920}
        height={500}
      />
    </div>
  )
}