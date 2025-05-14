import { IoLocation, IoCall } from 'react-icons/io5';

export default function ContactPage() {
  return (
    <div className="bg-gray-100 h-screen mb-4">
                <div className="flex-col font-semibold gap-4 max-h-screen col-span-1 bg-linear-to-br mb-4">
                    <div className='flex gap-4 mt-4 mb-4 items-center'>
                        <IoCall className='flex text-[35px]'/>
                        <h2 className='bg-blue-50 text-[35px]'>
                            Contactanos
                        </h2>
                    </div>
                    
                    <div className='bg-red-500 grid grid-cols-2 h-screen mb-4 bg-linear-to-b'>
                        <div className='bg-green-600 grid grid-cols-2 justify-center mb-8'>
                            <div className='bg-amber-950'>
                                <h2>hola</h2>
                            </div>
                        </div>
                        <div className=' flex justify-end col-span-1 mr-4'>
                            <div className='bg-blue-300 flex mb-8'>
                                <h2>Nuestras Tiendas</h2>
                            </div>
                            
                        </div>
                    </div>
                
                    
                </div>
                
                
    </div>
  )
}
