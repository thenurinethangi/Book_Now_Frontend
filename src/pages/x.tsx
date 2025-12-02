import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

import type { DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";

type SeatType = "odc" | "balcony" | "vip";

interface DroppedSeat {
  id: string;
  type: SeatType;
  cellId: string;
}

/* Draggable seat block (sidebar) */
function SeatBlock({ id, label }: { id: SeatType; label: string }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    opacity: isDragging ? 0.4 : 1,
  };

  const color =
    id === "odc"
      ? "bg-blue-600"
      : id === "balcony"
        ? "bg-green-600"
        : "bg-purple-600";

  return (
    <div className="flex flex-col items-center">
      <div
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        className={`w-[35px] h-[35px] p-3 rounded-sm cursor-grab text-white text-sm ${color}`}
        style={style}
      >
      </div>
      <p className="text-[13px] mt-1 font-light">{label}</p>
    </div>
  );
}

/* Droppable grid cell */
function SeatCell({
  id,
  seat,
}: {
  id: string;
  seat?: DroppedSeat | null;
}) {
  const { isOver, setNodeRef } = useDroppable({ id });

  const typeColorMap: Record<SeatType, string> = {
    odc: "bg-blue-600",
    balcony: "bg-green-600",
    vip: "bg-purple-600",
  };

  return (
    <div
      ref={setNodeRef}
      className={`w-10 h-10 border border-gray-700 flex items-center justify-center text-[10px]
        ${isOver ? "bg-gray-700" : "bg-[#1a1a1a]"}
      `}
    >
      {seat ? (
        <div
          className={`w-8 h-8 rounded ${typeColorMap[seat.type]} flex items-center justify-center text-white`}
        >
          {seat.type.toUpperCase()}
        </div>
      ) : null}
    </div>
  );
}

/* Main layout builder */
export default function SeatDesigner() {
  const [seats, setSeats] = useState<DroppedSeat[]>([]);

  const handleDrop = (event: DragEndEvent) => {
    const dragged = event.active.id as SeatType;
    const over = event.over?.id;

    if (!over) return;

    // add a new seat to the grid
    setSeats((prev: any) => [
      ...prev.filter((s: any) => s.cellId !== over),
      {
        id: `${dragged}-${Date.now()}`,
        type: dragged,
        cellId: over,
      },
    ]);
  };

  return (
    <div className="w-screen h-screen fixed inset-0 z-[200] bg-[#121212] text-white flex justify-center items-center p-6 gap-10 font-[Poppins]">
      <DndContext onDragEnd={handleDrop}>
        {/* LEFT SIDEBAR */}
        <div className="w-40 flex flex-col gap-4 absolute left-0 top-[35%]">
          {/* <h2 className="text-[16px] font-medium">Seat Types</h2> */}
          <SeatBlock id="odc" label="ODC Seat" />
          <SeatBlock id="balcony" label="Balcony Seat" />
          <SeatBlock id="vip" label="Box" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-17 gap-1 p-4 rounded-md w-[80%] h-full">
          {Array.from({ length: 100 }).map((_, i) => {
            const cellId = `cell-${i}`;
            const seatInCell = seats.find((s) => s.cellId === cellId);

            return <SeatCell key={cellId} id={cellId} seat={seatInCell} />;
          })}
        </div>
      </DndContext>
    </div>
  );
}
