function SocialLink({ item }) {
  return (
    <div className='md:col-span-4 col-span-12 row-span-2'>
      <div className='bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer'>
        <a href={item.href} target='_blank' rel='noopener noreferrer'>
          <div className='flex justify-between items-center h-full'>
            <div className='flex items-center md:gap-5'>
              <img src={item.icon} alt={item.icon} className='animate-pulse' />
              <h1 className='gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium'>
                {item.name}
              </h1>
            </div>
            <div className='group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform'>
              <img
                src='/images/arrowupright.svg'
                alt='arrow-up'
                className='md:scale-100 scale-50'
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default SocialLink;
