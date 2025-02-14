import { Link } from "@/components/shared/link"

interface Props {
  data: {
    name: string
    socials: {
      title: string
      link: string
    }[]
  }
}

export const Footer: React.FC<Props> = ({ data }) => {
	
  return (
    <footer className="flex gap-base-2 flex-wrap pt-4 pb-8 mx-[var(--grid-margins)]">
      <div className="span-w-1 sm:span-w-2 lg:span-w-6">
        <span className="text-lg">{data.name}</span>©
      </div>
      <div className="span-w-1 flex flex-col text-end">
        {data.socials.map(({ title, link }) => (
          <Link key={title} href={link}>
            {title}
          </Link>
        ))}
      </div>
      <div className="span-w-1">
        <p className="sm:text-end">
          <span>Made by</span> The Collective
        </p>
      </div>
    </footer>
  )
}
