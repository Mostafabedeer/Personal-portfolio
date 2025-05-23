function IconItem({ icon }) {
  return (
    <div className='gradient-border flex-center bg-black-300 rounded-2xl flex-none md:w-36 md:h-w-36 w-24 h-24 p-2 shadow-lg shadow-black-200 hover:shadow-black-300 marquee-item hover:-translate-y-3 transition-all duration-700'>
      <img
        src={icon.image}
        alt={icon.name}
        className='w-10 h-10 md:w-18 md:h-18'
      />
    </div>
  );
}

export default IconItem;
