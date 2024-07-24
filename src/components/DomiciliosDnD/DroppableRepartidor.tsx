import React from 'react';
import { useDroppable, UniqueIdentifier  } from '@dnd-kit/core';
import Image from 'next/image';

interface DroppableProps {
  id: UniqueIdentifier;
  children: React.ReactNode;
  name: string;
  imageSrc: string;
  phone: number;
}

export function Droppable({ id, name, children, imageSrc, phone }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({ id, });

  const style = {
    backgroundColor: isOver ? '#FFBC0D' : 'transparent',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center justify-center w-1/2 gap-4 min-h-[100px] p-4 border-2 border-dashed border-blue-500 rounded-lg shadow"
    >
      <div className='flex flex-col justify-center items-center'>
        <Image src={imageSrc} alt={name} width={50} height={50} />
        <p className="font-bold text-lg mb-2">
          {name}
        </p>
        <span>{phone}</span>
      </div>

      <div className='flex flex-col items-center'>
        {children}
      </div>
    </div>
  );
};