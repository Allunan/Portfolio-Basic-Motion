import type { DataType } from "@/types"

import { Link } from "@/components/shared/link"
import Lenis from "lenis"
import { useLenis } from "lenis/react"

interface Props {
  data: DataType
}

const links = [
  {
    label: "About",
    target: "#about"
  },
  {
    label: "Works",
    target: "#works"
  },
  {
    label: "Contact",
    target: "#contact"
  }
]

export const Header: React.FC<Props> = ({ data }) => {
  const lenis = useLenis()
  return (
    <header className="mx-grid py-4 flex gap-base-2 justify-between sm:items-center">
      <div className="span-w-1">
        <a href="/" className="text-lg">
          {data.name}
        </a>
      </div>
      <nav className="flex flex-col sm:flex-row items-end gap-base-1 sm:gap-base-2">
        {links.map(({ label, target }) => (
          <div key={label} className="flex span-w-1 justify-end">
            <Link onClick={() => lenis?.scrollTo(target)}>{label}</Link>
          </div>
        ))}
      </nav>
    </header>
  )
}
