import { MdDeleteForever } from 'react-icons/md';
export const Closed = () => {
  return (
    <div className="max-w-md py-4 px-6 rounded-lg bg-red-500/80 mx-auto">
      <div className="flex items-center gap-2 text-white text-2xl">
        <MdDeleteForever />
        <h3 className="text-xl text-white font-semibold">El SHUT se encuentra cerrado</h3>
      </div>
    </div>
  )
}
