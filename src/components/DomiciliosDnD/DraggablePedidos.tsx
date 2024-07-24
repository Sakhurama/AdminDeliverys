import React from 'react';
import { useDraggable, UniqueIdentifier  } from '@dnd-kit/core';
import { useState } from 'react';
import {CSS} from '@dnd-kit/utilities';

interface DraggableProps {
  id: UniqueIdentifier;
  children: React.ReactNode;
}

export function Draggable({ id, children }: DraggableProps) {
// export const Draggable: React.FC<DraggableProps> = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id,});
  const [isDragging, setIsDragging] = useState(false);

  const style = {
    transform: CSS.Translate.toString(transform),
    cursor: isDragging ? 'grabbing' : 'grab',
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
    >
      {children}
    </div>
  );
};