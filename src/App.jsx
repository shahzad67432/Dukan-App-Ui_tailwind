import './App.css'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className='grid grid-cols-12 md:grid-flow-row'>
        <div className='bg-blue-500 col-span-6 md:col-span-3'>hello its me </div>
        <div className='bg-yellow-500 col-span-6 md:col-span-3'>there</div>
        <div className='bg-green-500 col-span-6 md:col-span-3 '>ok</div>
        <div className='bg-red-500 col-span-6 md:col-span-3'>not Okay!</div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3' >
        <div className='bg-red-600'>hello</div>
        <div className='bg-green-600'>Its </div>
        <div className='bg-blue-600'>MeM</div>
      </div>
    </>
  )
}

export default App
