import { MdDeleteSweep } from 'react-icons/md';
export const Success = () => {
  return (
    <div className="max-w-md py-4 px-6 rounded-lg bg-green-800/80 mx-auto">
      <div className="flex items-center gap-2 text-2xl text-white">
        <MdDeleteSweep />
        <h3 className="text-xl text-white font-semibold">El SHUT se encuentra abierto</h3>
      </div>
    </div>
  )
}
