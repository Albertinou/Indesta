import Link from 'next/link'
import { Phone, MapPin, Mail } from 'lucide-react'
import { SiFacebook } from '@icons-pack/react-simple-icons'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-wrap -mx-4 mb-8">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Kontaktai</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-gray-600" />
                <span>+370 617 06660</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-gray-600" />
                <span>Vydmantai, Gintaro gatvė 36, Palanga, Lietuva</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-600" />
                <a href="mailto:info@mb-indesta.lt" className="hover:underline">info@mb-indesta.lt</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-xl font-bold mb-4">Sekite mus</h2>
            <Link href="https://www.facebook.com/Statybav/" className="flex items-center hover:underline">
              <SiFacebook className="w-5 h-5 mr-2 text-gray-600" />
              <span>Facebook</span>
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Indesta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}