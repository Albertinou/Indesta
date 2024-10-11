import Link from "next/link";
import { simplifiedImage } from "../interface";
import { client } from "../lib/sanity"
import Image from "next/image";



async function getData() {
    const query = `*[_type == "gallery"] | order(priority desc, _updatedAt desc){
  _id,
    name,
    "slug": slug.current,
    "imageUrl": images[0].asset->url
}`

      const data = await client.fetch(query);

      return data;
  
  }


  export default async function Gallery() {
    const data: simplifiedImage[] = await getData()

    return (

        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Atlikti darbai</h2>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {data.map(picture => (
                        <div key={picture._id} className="group relative">
                            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                                <Image
                                    src={picture.imageUrl}
                                    alt="Picture"
                                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                                    width={300}
                                    height={300}
                                    priority={true}
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <h3 className="text-sm text-gray-700 lg:text-xl">
                                
                                </h3>                              
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}



  

 