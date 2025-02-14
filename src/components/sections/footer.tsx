import React from "react"

export const Footer: React.FC = () => {
  return (
    <footer className="flex span-w-2 gap-base-2 md:span-w-4 lg:span-w-8 flex-wrap  my-2 mx-[var(--grid-margins)] ">
      <div className="span-w-1 md:span-w-2 lg:span-w-6">
        <p className="text uppercase "> Ahmed L5dar</p>
      </div>
      <div className="span-w-1 flex flex-col text-end ">
        <p className="text uppercase">LinkedIn</p>
        <p className="text uppercase">Instagram</p>
      </div>
      <div className="span-w-1">
        <p className="text uppercase md:text-end">
          {" "}
          <span>Made by</span> The Collective
        </p>
      </div>
    </footer>
  )
}
