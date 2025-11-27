import {
  DndContext,
  useDraggable,
  useDroppable
} from "@dnd-kit/core";

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
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`p-3 rounded-md cursor-grab text-white text-sm ${color}`}
      style={style}
    >
      {label}
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
    <div className="w-full h-screen bg-[#121212] text-white flex p-6 gap-6">
      <DndContext onDragEnd={handleDrop}>
        {/* LEFT SIDEBAR */}
        <div className="w-40 flex flex-col gap-4">
          <h2 className="text-lg font-semibold mb-2">Seat Types</h2>
          <SeatBlock id="odc" label="ODC Seat" />
          <SeatBlock id="balcony" label="Balcony Seat" />
          <SeatBlock id="vip" label="VIP Seat" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-10 gap-1 bg-[#1a1a1a] p-4 rounded-md">
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
