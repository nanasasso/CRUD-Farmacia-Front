//import React from 'react';
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-white-900 flex justify-center">
          <div className='container grid grid-cols-2 text-indigo-600'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Aqui é preço baixo e qualidade sempre!</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-indigo-600 text-white py-2 px-4'>Ver produtos</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src="https://img.freepik.com/vetores-gratis/farmaceutico-de-ciencia-farmaceutica-profissional-verificando-medicamentos-na-loja-de-farmacia-farmacia-de-negocios-medicina-drogaria-personagem-plana-cartoon-ilustracao-vetorial_1150-58792.jpg?t=st=1709157211~exp=1709160811~hmac=68697e557282fbda15be94b493fd3f07275c44a9a9e990ed63d74c8dab985ade&w=996" alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;
