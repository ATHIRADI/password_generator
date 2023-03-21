import { DataProvider } from './context/DataContext'
import 'react-toastify/dist/ReactToastify.css';
import { Generator } from './components/Generator';
import { Inputs } from './components/Inputs';
import { PreviousPass } from './components/PreviousPass';

function App() {
  return (
    <DataProvider>
      <div className="bg-color-grey min-h-screen w-full font-jost">
        <div className='flex justify-center items-center flex-col container mx-auto space-y-10 h-full '>
          <div className='w-full text-center space-y-5 mt-10'>
            <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl'>Password Generator</h1>
            <h2 className='text-md md:text-lg lg:text-xl'>The Ultimate Tool for Maximum Password Protection</h2>
          </div>
          <div className='w-full mx-auto space-y-2 flex justify-center items-center flex-col '>
            <Generator />
            <Inputs />
            <PreviousPass />
          </div>
        </div>
      </div>
    </DataProvider>
  )
}

export default App


