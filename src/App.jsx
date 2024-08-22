
import { QueryClient, QueryClientProvider } from "react-query"
import Home from "./Components/Home"


const App = ()=>{
  const newClient = new QueryClient()
  return(
    <div>
    
    <QueryClientProvider client={newClient}>

      <Home />
    </QueryClientProvider> 
    </div>
  )

}
export default App