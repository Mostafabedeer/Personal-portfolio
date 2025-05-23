function TestimonialItem({ item, index }) {
  const { name, pos, review, imgPath } = item;
  return (
    <div
      className={`${
        index % 2 === 0 ? "md:mt-10" : ""
      }  col-span-12 md:col-span-6 row-span-12  md:row-span-6 `}
    >
      <div className='group py-8 px-9 bg-black-300 rounded-xl hover:bg-blue-300 transition-all duration-500 ease-in-out'>
        {/* 1 row */}
        <div className='flex items-center justify-between  mb-7 group-hover:text-white-50'>
          <div className='h-36 w-36'>
            <img
              src={imgPath}
              alt={name}
              className='h-full w-full transition-transform duration-300 ease-in group-hover:-translate-1.5'
            />
          </div>
          <div className='h-24 w-24'>
            <img
              src='/images/quote.png'
              alt='client2'
              className='w-full h-full'
            />
          </div>
        </div>
        {/* 2 row */}
        <p className='text-xl lg:text-2xl group-hover:text-white-50'>
          {review}
        </p>
        {/* 3 row */}
        <div className='mt-7 md:mt-24 group-hover:text-white-50'>
          <div className='flex flex-col gap-2'>
            <h6 className='font-bold text-2xl text-blue-300 group-hover:text-white-50'>
              {name}
            </h6>
            <p>{pos}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialItem;
