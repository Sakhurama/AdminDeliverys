"use client";

import React, { useState } from 'react';
import { DndContext, DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';
import { Draggable } from './DraggablePedidos';
import { Droppable } from './DroppableRepartidor';
import Modal from "@/components/Modals/Modal";


interface DraggableItem {
  id: UniqueIdentifier;
  name: string;
  address: string;
  phone: string;
}

const initialDraggables: DraggableItem[] = [
  { id: 'draggable-1', name: 'Daniel Romero', address: 'Transversal 147 #56-55 apartamento 201', phone: '3206215191' },
  { id: 'draggable-2', name: 'Maria Perez', address: 'Calle 85 #15-30', phone: '3104567890' },
  { id: 'draggable-3', name: 'Juan Gomez', address: 'Carrera 10 #34-45 apartamento 101', phone: '3001234567' },
  { id: 'draggable-4', name: 'Juan Gomez', address: 'Carrera 10 #34-45 apartamento 101', phone: '3001234567' },
  { id: 'draggable-5', name: 'Juan Gomez', address: 'Carrera 10 #34-45 apartamento 101', phone: '3001234567' },
  { id: 'draggable-6', name: 'Daniel Romero', address: 'Transversal 147 #56-55 apartamento 201', phone: '3206215191' },
  { id: 'draggable-7', name: 'Maria Perez', address: 'Calle 85 #15-30', phone: '3104567890' },
  { id: 'draggable-8', name: 'Juan Gomez', address: 'Carrera 10 #34-45 apartamento 101', phone: '3001234567' },
  { id: 'draggable-9', name: 'Daniel Romero', address: 'Transversal 147 #56-55 apartamento 201', phone: '3206215191' },
  { id: 'draggable-10', name: 'Maria Perez', address: 'Calle 85 #15-30', phone: '3104567890' },
];

const repartidores: Record<UniqueIdentifier, { name: string, imageSrc: string, phone: number }> = {
  'A': { name: 'Humberto Perez', imageSrc: '/images/user/user-01.png', phone: 1234567890 },
  'B': { name: 'Carlos Perez', imageSrc: '/images/user/user-02.png', phone: 1234567890 },
  'C': { name: 'Marcos Perez', imageSrc: '/images/user/user-03.png', phone: 1234567890 },
  'D': { name: 'Juan Perez', imageSrc: '/images/user/user-04.png', phone: 1234567890 },
};


const DragDrop: React.FC = () => {
  const containers: UniqueIdentifier[] = ['A', 'B', 'C', 'D'];
  const [parent, setParent] = useState<{ [key: string]: UniqueIdentifier | null }>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [dropToClear, setDropToClear] = useState<UniqueIdentifier | null>(null);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over) {
      if (containers.includes(over.id)) {
        const containerItems = Object.values(parent).filter(p => p === over.id);
        if (containerItems.length < 5) {
          setParent(prev => ({ ...prev, [active.id]: over.id }));
        }
      }
    } else {
      // Si se suelta fuera de cualquier droppable, vuelve a su posición inicial
      setParent(prev => ({ ...prev, [active.id]: null }));
    }
  };

  const openConfirmModal = (dropId: UniqueIdentifier) => {
    setDropToClear(dropId);
    setModalOpen(true);
  };

  // Limpiar el drop/repartidor
  const clearDrop = () => {
    if (dropToClear) {
      setParent(prevParent => {
        const newParent = { ...prevParent };
        Object.keys(newParent).forEach(key => {
          if (newParent[key] === dropToClear) {
            newParent[key] = null;
          }
        });
        return newParent;
      });
    }
    setModalOpen(false);
    setDropToClear(null);
  };

  const renderDraggable = (item: DraggableItem, inDropZone: boolean) => (
    <div className={`w-48 h-40 p-4 rounded-lg shadow-md ${inDropZone ? 'bg-[#FFBC0D] text-black my-2' : 'bg-[#DA291C] text-white'}`}>
      <div className="font-bold">{item.name}</div>
      <div>{item.address}</div>
      <div>{item.phone}</div>
    </div>
  );


  return (
    <DndContext 
      onDragEnd={handleDragEnd}
    >
      <div className="grid grid-cols-5 gap-4 p-4 border-4 border-[#FFBC0D] rounded-lg bg-gray-100 min-h-50">
        {initialDraggables.map((item) => (
          !parent[item.id] && (
            <Draggable key={item.id} id={item.id}>
              {renderDraggable(item, false)}
            </Draggable>
          )
        ))}
      </div>

      <div className='flex flex-wrap justify-center mt-10 mb-20 gap-5'>
        {containers.map((id) => (
          <Droppable 
            key={id} 
            id={id} 
            name={repartidores[id].name}
            imageSrc={repartidores[id].imageSrc}
            phone={repartidores[id].phone}
          >

            {Object.values(parent).filter(p => p === id).length >= 5 && (
              <div className="text-white text-center font-bold bg-[#DA291C] rounded-md">Límite alcanzado (5)</div>
            )}

            {initialDraggables
              .filter((item) => parent[item.id] === id)
              .map((item) => (
                <Draggable key={item.id} id={item.id}>
                  {renderDraggable(item, true)}
                </Draggable>
              ))}

            {Object.values(parent).filter(p => p === id).length >= 1 && (
              <div 
                onClick={() => openConfirmModal(id)}
                className='flex justify-center items-center gap-4'
              >
                <button className='flex border-2 border-red text-red p-2 rounded-md gap-2 hover:bg-red hover:text-white transition duration-300 ease-in-out'>
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                  Limpiar
                </button>

                <button className='flex border-2 border-green-600 bg-green-600 text-white p-2 rounded-md gap-2 hover:bg-green-500 hover:border-green-500 transition duration-300 ease-in-out'>
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" /><path d="M6.5 12h14.5" /></svg>
                  Asignar
                </button>
              </div>
            )}

          </Droppable>
        ))}
      </div>

      <Modal show={modalOpen} setShow={setModalOpen}>
        <div className="p-6">
          <h2 className="text-xl mb-4">¿Estás seguro de que quieres limpiar este drop?</h2>
          <div className="flex justify-end gap-4">
            <button 
              onClick={() => setModalOpen(false)}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition duration-300"
            >
              Cancelar
            </button>
            <button 
              onClick={clearDrop}
              className="px-4 py-2 bg-red-500 text-black rounded hover:bg-red-600 transition duration-300"
            >
              Confirmar
            </button>
          </div>
        </div>
      </Modal>

    </DndContext>
  );
};

export default DragDrop;