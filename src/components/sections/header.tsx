import type { DataType } from "@/types"

import { Link } from "@/components/shared/link"

interface Props {
  data: DataType
}

export const Header: React.FC<Props> = ({ data }) => {
  return (
    <header className="mx-[var(--grid-margins)] py-4 flex gap-base-2 justify-between sm:items-center">
      <div className="span-w-1">
        <a href="/" className="text-lg">
          {data.name}
        </a>
      </div>
      <nav className="flex flex-col sm:flex-row items-end gap-base-1 sm:gap-base-2">
        <Link href="#about" className="span-w-1 text-end">
          About
        </Link>
        <Link href="#works" className="span-w-1 text-end">
          Works
        </Link>
        <Link href="#contact" className="span-w-1 text-end">
          Contact
        </Link>
      </nav>
    </header>
  )
}
