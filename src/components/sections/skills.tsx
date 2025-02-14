interface Props {
  data: {
    title: string
    items: string[]
  }[]
}

export const Skills: React.FC<Props> = ({ data }) => {
  return (
    <section className="flex py-32 mx-[var(--grid-margins)] gap-base-2 border-b border-dashed border-[#AFAFB6] border-opacity-70">
      <div className="flex w-1/2 items-top justify-end">
        <h3 className="span-w-1 text-end text-[#AFAFB6]"> My skills</h3>
      </div>
      <div className="flex w-1/2 gap-base-2 flex-col sm:flex-row justify-end">
        {data.map((skills) => (
          <div key={skills.title} className="span-w-1 flex flex-col gap-2">
            <h3 className="text-[#AFAFB6] text-end">{skills.title}</h3>
            <ul>
              {skills.items.map((skill) => (
                <li key={skill} className="text-end">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
