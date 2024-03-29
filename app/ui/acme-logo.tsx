import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana, inter } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${inter.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[0deg]" />
      <p className="text-[33px]">Sistemas</p>
    </div>
  );
}
