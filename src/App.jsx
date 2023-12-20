import './App.css'
import Card from './components/zelda.jsx'

function App() {

  return (
    <>
      <div className={'flex flex-col md:flex-row h-screen bg-white'}>
        <Card culor='rgba(142, 0, 255, 0.4)' img_src='IEEE_Whitelogo.png' text='IEEE'/>
        <Card culor='rgba(255, 169, 0, 0.4)' img_src='robotics.png' text='ROBOTICS'/>
        <Card culor='rgba(0, 56, 255, 0.4)' img_src='Asce bg removed.png' text='ASCE'/>
        <Card culor='rgba(172, 34, 34, 0.4)' img_src='asme 1.png' text='ASME'/>
        <Card culor='rgba(0, 182, 95, 0.4)' img_src='Hackslash_stack_logo.png' text='HACKSLASH'/>


      </div>
    </>
  )
}

export default App
