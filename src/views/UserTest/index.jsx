import { SelectHability } from '../../components/User/Test/SelectHability';
import { AiFillStar, AiFillInfoCircle } from 'react-icons/ai';


export default function UserTest() {
  return (
    <div className="container my-8 ml-4 md:mx-20 grid grid-cols-1 mr-4">
      <h1 className="font-bold mb-4 lg:mb-8 text-md md:text-xl lg:text-3xl">
        Completa los test técnicos
      </h1>
      <p className="font-medium mb-2 lg:mb-9 text-sm md:text-lg text-justify">
        De esta forma podemos conocer qué trabajos encajan mejor contigo. 
        Haz los test de habilidades que te gustaría continuar usando para tu próximo trabajo.
      </p>
      <p className="font-medium text-justify text-sm md:text-lg mb-5">
        Marcamos tus
        <strong> habilidades destacadas </strong> 
        según tu
        <span className="text-primary"> perfil </span> 
        con una estrella <AiFillStar className='fill-yellow-400 text-md inline'/></p> 
      <div className='text-xs text-justify flex pb-2'>
        <AiFillInfoCircle className='text-sm'/> 
        <p>Tip: Si temes fallar un test, no te preocupes. Puedes volver a realizarlo luego de 3 meses.</p>
      </div>
      <h2 className='font-bold text-md md:text-lg py-3'>
        Habilidades
      </h2>
      <div className='pb-3'>
        <SelectHability/>
      </div >
    </div>
  )
}
