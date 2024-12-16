import './spinner.css'

export default function Loading() {
  return (
    <>
    <div className='loader-body'>
        <div className="container">
        <svg height="200" width="200">
        
        <line x1="50" y1="150" x2="50" y2="50" />
        
        <line x1="50" y1="50" x2="150" y2="50" />
        <line x1="150" y1="50" x2="150" y2="100" />
        <line x1="150" y1="100" x2="50" y2="100" />
    </svg>

    <svg className="line-2" height="350" width="450" id="line2">
      
        <line x1="150" y1="150" x2="150" y2="50" />
       
        <line x1="150" y1="50" x2="250" y2="50" />
        <line x1="250" y1="50" x2="250" y2="100" />
        <line x1="250" y1="100" x2="150" y2="100" />
    </svg>
        </div> 
    </div>

    </>
  )
}
