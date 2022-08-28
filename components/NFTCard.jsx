import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NFTContext } from '../context/NFTContext';
import { shortenAddress } from '../utils/shortenAddress';
import images from '../assets';

const NFTCard = ({ nft, onProfilePage }) => {
  const { nftCurrency } = useContext(NFTContext);

  return (
    <Link href={{ pathname: '/nft-details', query: nft }}>
      <div className="flex-1 min-w-215 max-w-max xs:max-w-none sm:w-full sm:min-w-155 minmd:min-w-256 minlg:min-w-327 dark:bg-nft-black-3 bg-white rounded-xl p-4 m-4 minlg:m-8 sm:my-2 sm:mx-2 cursor-pointer shadow-md">
        <div className="relative w-full h-52 sm:h-36 minmd:h-60 minlg:h-300 rounded-xl overflow-hidden">
          <Image src={nft.image || images[`nft${nft.i}`]} layout="fill" objectFit="cover" alt={`nft${nft.i}`} />
        </div>
        <div className="mt-3 flex flex-col">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minglg:text-xl">{nft.name}</p>
          <div className="flexBetween mt-1 minlg:mt-3 flex-row xs:flex-col xs:items-start xs:mt-3">
            <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xs minglg:text-lg">{shortenAddress(onProfilePage ? nft.owner : nft.seller)}</p>
            <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xs minglg:text-lg">{nft.price} <span className="normal">{nftCurrency}</span></p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NFTCard;
