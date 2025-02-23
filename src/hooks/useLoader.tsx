import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react"

interface ContextType {}

const Context = createContext<ContextType>({})

interface LoaderProps {
  children: React.ReactNode
}

export const Loader = ({ children }: LoaderProps) => {
  const [totalImages, setTotalImages] = useState(0)
  const [loadedImages, setLoadedImages] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isComplete, setIsComplete] = useState(false)
  const progress = useRef(0)

  const onLoad = () => {
    setLoadedImages((prev) => prev + 1)
  }

  useEffect(() => {
    document.querySelectorAll("img").forEach((img) => {
      setTotalImages((prev) => prev + 1)
      img.addEventListener("load", onLoad)
    })
  }, [])

  useEffect(() => {
    progress.current = (loadedImages / totalImages) * 100
  }, [loadedImages])

  const value = useMemo(() => ({}), [])

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useLoader = () => useContext(Context)
