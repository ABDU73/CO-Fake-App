

export const Greeting = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-blue-800 to-slate-200 pb-12 flex items-center justify-between">

      <div className='text-center mx-4 sm:mx-8 lg:mx-16 w-1/2'>
          <h1 className='p-3 italic text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-wide'>
              Step Into a New World
          </h1>
          <p className='p-2 text-2xl sm:text-3xl lg:text-4xl font-extralight text-slate-400 mt-4'>
              Where Innovation Meets Opportunity
          </p>
      </div>
      
       
      <div className="mx-4 lg:w-max sm:mx-8 lg:mx-16 w-1/2 relative">
      
          <img src="./img/happy-woman.png" alt="Home Image" className="w-full border-b-4 border-solid z-10 animate-fade-up  relative" />
       
        <div class="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-moving-blob z-0"></div>
        <div class="absolute top-0 -right-4 w-72 h-72 bg-slate-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-moving-blob animation-delay-2000 z-0"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-slate-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-moving-blob animation-delay-4000 z-0"></div>
     
        
      </div>


    </div>
  );
}
