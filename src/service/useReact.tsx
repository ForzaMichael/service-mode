import {
  useRef,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
  useState,
  createContext
} from 'react'

class AppService {
  static Context = createContext<AppService>(null as any)
  name: string
  setName: Dispatch<SetStateAction<string>>
  constructor() {
    const [name, setName] = useState('fuck')
    this.name = name
    this.setName = setName
  }
}

const Test = () => {
  const appService = useContext(AppService.Context)
  useEffect(() => console.log(appService))
  return <div>{appService.name}</div>
}

const App = () => {
  const appServiceRef = useRef<AppService>(null as any)
  if (!appServiceRef.current) {
    appServiceRef.current = new AppService()
  }
  return (
    <AppService.Context.Provider value={appServiceRef.current}>
      <div>
        <Test></Test>
      </div>
    </AppService.Context.Provider>
  )
}
export default App
