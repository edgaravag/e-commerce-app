import Image from "next/image";
import Link from "next/link";
import BasketIcon from '../public/basket.png';

const Header = () => {
  return (
      <header className='flex justify-between items-center py-5 px-10 border-b border-b-stone-300'>
        <Link href={'/'}>
          <p className='font-bold text-3xl font-montserrat'>STORE</p>
        </Link>
        <nav className="flex gap-14">
          <p className="text-lg font-semibold text-stone-600 font-montserrat cursor-pointer">T-shirts</p>
          <p className="text-lg font-semibold text-stone-600 font-montserrat cursor-pointer">Shirts</p>
          <p className="text-lg font-semibold text-stone-600 font-montserrat cursor-pointer">Suits</p>
        </nav>
		<button className="flex gap-2 justify-center items-center bg-black px-5 py-3 border-transparent rounded-full">
		  <Image src={BasketIcon} alt="" style={{ width: '22px', height: 'auto', filter: 'brightness(0) invert(1)' }} priority />
		  <p className="text-white">0</p>
		</button>
    </header>
  );
};

export default Header;
