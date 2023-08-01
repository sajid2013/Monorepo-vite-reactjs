
import { Button, CRXButton } from "@main-repo/shared"
import './App.css'

function App() {
  return (
    <>
      <div>
        <Button textName="Click me" />
        <CRXButton 
        variant="contained"
        color="primary"
        primary={true}
        >Save Primary Button</CRXButton>
      
      </div>
      
    </>
  )
}

export default App
