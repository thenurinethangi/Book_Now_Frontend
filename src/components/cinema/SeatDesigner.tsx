import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import LoadingSpinner from "../user/LoadingSpinner";

interface SeatDesignerProps {
    rows: number;
    cols: number;
    seatTypes: string[];
    isLoading: boolean;
    onSave: (seatLayout: (string | null)[][]) => void;
    onClose: () => void;
}

interface DroppedSeat {
    id: string;
    type: string;
    cellId: string;
    seatLabel: string;
}

/* Draggable seat block (sidebar) */
function SeatBlock({ id, label, color }: { id: string; label: string; color: string }) {
    const { attributes, listeners, setNodeRef, transform, isDragging } =
        useDraggable({ id });

    const style = {
        transform: transform
            ? `translate(${transform.x}px, ${transform.y}px)`
            : undefined,
        opacity: isDragging ? 0.4 : 1,
    };

    return (
        <div className="flex flex-col items-center gap-2">
            <div
                ref={setNodeRef}
                {...listeners}
                {...attributes}
                className={`w-12 h-12 rounded cursor-grab text-white text-xs font-medium flex items-center justify-center shadow-lg`}
                style={{ ...style, backgroundColor: color }}
            >
                {label.substring(0, 3).toUpperCase()}
            </div>
            <p className="text-xs text-gray-400 text-center max-w-[80px]">{label}</p>
        </div>
    );
}

/* Droppable grid cell */
function SeatCell({
    id,
    seat,
    onRemove,
    color,
}: {
    id: string;
    seat?: DroppedSeat | null;
    onRemove: (cellId: string) => void;
    color?: string;
}) {
    const { isOver, setNodeRef } = useDroppable({ id });

    return (
        <div
            ref={setNodeRef}
            className={`w-10 h-10 border border-gray-700 flex items-center justify-center text-[9px] rounded transition-colors
        ${isOver ? "bg-gray-700 border-gray-500" : "bg-[#1a1a1a]"}
      `}
        >
            {seat ? (
                <div
                    className="w-9 h-9 rounded flex items-center justify-center text-white font-medium relative group cursor-pointer"
                    style={{ backgroundColor: color }}
                    onClick={() => onRemove(seat.cellId)}
                >
                    <span className="text-[9px]">{seat.seatLabel}</span>
                    <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-90 transition-opacity rounded flex items-center justify-center">
                        <X className="w-4 h-4" />
                    </div>
                </div>
            ) : null}
        </div>
    );
}

/* Main layout builder */
export default function SeatDesigner({ rows, cols, seatTypes, isLoading, onSave, onClose }: SeatDesignerProps) {
    const [seats, setSeats] = useState<DroppedSeat[]>([]);

    // Generate pastel colors for seat types
    const pastelColors = ["#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF", "#E2BAFF", "#FFD6E0", "#D6F5FF", "#E8FFD6", "#F3D9FF", "#FFF0D9", "#D9FFF8"];

    const seatTypeColors: Record<string, string> = {};
    seatTypes.forEach((type, index) => {
        seatTypeColors[type] = pastelColors[index % pastelColors.length];
    });

    // Generate seat label (A1, A2, B1, etc.)
    const getSeatLabel = (rowIndex: number, colIndex: number): string => {
        const letter = String.fromCharCode(65 + rowIndex); // A, B, C, etc.
        const number = colIndex + 1;
        return `${letter}${number}`;
    };

    const handleDrop = (event: DragEndEvent) => {
        const dragged = event.active.id as string;
        const over = event.over?.id;

        if (!over || typeof over !== 'string') return;

        // Extract row and col from cellId (format: "cell-row-col")
        const [, rowStr, colStr] = over.split('-');
        const rowIndex = parseInt(rowStr);
        const colIndex = parseInt(colStr);

        const seatLabel = getSeatLabel(rowIndex, colIndex);

        // Add or replace seat in the grid
        setSeats((prev) => [
            ...prev.filter((s) => s.cellId !== over),
            {
                id: `${dragged}-${Date.now()}`,
                type: dragged,
                cellId: over,
                seatLabel: seatLabel,
            },
        ]);
    };

    const handleRemoveSeat = (cellId: string) => {
        setSeats((prev) => prev.filter((s) => s.cellId !== cellId));
    };

    const handleSaveLayout = () => {
        // Create 2D array representing the seat layout
        const layout: ({} | null)[][] = Array.from({ length: rows }, () =>
            Array(cols).fill(null)
        );

        // Fill the layout with seat types
        seats.forEach((seat) => {
            const [, rowStr, colStr] = seat.cellId.split('-');
            const rowIndex = parseInt(rowStr);
            const colIndex = parseInt(colStr);

            const alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

            if (rowIndex < rows && colIndex < cols) {
                layout[rowIndex][colIndex] = { type: seat.type, id: alphabetUpper[rowIndex] + (colIndex + 1) };
            }
        });

        onSave(layout);
    };

    return (
        <div className="w-screen h-screen fixed inset-0 z-[200] bg-[#121212] text-white flex flex-col justify-center items-center p-6 font-[Poppins] overflow-auto">
            <DndContext onDragEnd={handleDrop}>
                {/* Header */}
                <div className="w-full max-w-6xl flex justify-end items-center mb-6">
                    {/* <h2 className="text-[22px] font-medium">Design Seat Layout</h2> */}
                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center bg-[#1e1e1e] border border-gray-700 rounded-lg hover:border-red-700 hover:text-red-700 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex gap-8 w-full max-w-6xl">
                    {/* LEFT SIDEBAR - Draggable Seat Types */}
                    <div className="w-32 flex flex-col gap-6 bg-[#1e1e1e] border border-gray-800 rounded-lg p-4">
                        <h3 className="text-sm font-medium text-gray-400">Seat Types</h3>
                        <div className="flex flex-col gap-4">
                            {seatTypes.map((seatType, index) => (
                                <SeatBlock
                                    key={seatType}
                                    id={seatType}
                                    label={seatType}
                                    color={seatTypeColors[seatType]}
                                />
                            ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-700">
                            <p className="text-xs text-gray-500">Drag seats to the grid</p>
                            <p className="text-xs text-gray-500 mt-2">Click seats to remove</p>
                        </div>
                    </div>

                    {/* CENTER - Grid and Screen */}
                    <div className="flex-1 flex flex-col items-center gap-6">
                        {/* Screen representation */}
                        <div className="w-full max-w-3xl">
                            <div className="bg-gradient-to-b from-gray-700 to-gray-800 h-3 rounded-t-lg"></div>
                            <div className="bg-gray-800 py-2 text-center text-sm text-gray-400 font-medium rounded-b-lg border border-gray-700 border-t-0">
                                SCREEN
                            </div>
                        </div>

                        {/* Seat Grid */}
                        <div
                            className="grid gap-1 p-6 bg-[#1e1e1e] border border-gray-800 rounded-lg overflow-auto max-h-[60vh]"
                            style={{
                                gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                            }}
                        >
                            {Array.from({ length: rows * cols }).map((_, i) => {
                                const rowIndex = Math.floor(i / cols);
                                const colIndex = i % cols;
                                const cellId = `cell-${rowIndex}-${colIndex}`;
                                const seatInCell = seats.find((s) => s.cellId === cellId);

                                return (
                                    <SeatCell
                                        key={cellId}
                                        id={cellId}
                                        seat={seatInCell}
                                        onRemove={handleRemoveSeat}
                                        color={seatInCell ? seatTypeColors[seatInCell.type] : undefined}
                                    />
                                );
                            })}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 mt-2">
                            <button
                                onClick={onClose}
                                className="px-5 py-2 bg-[#1e1e1e] border border-gray-800 rounded-sm font-medium hover:border-gray-600 transition-colors text-[14.5px] text-white/90"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveLayout}
                                className="flex items-center gap-2.5 px-6 py-2 rounded-sm font-medium bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 transition-all duration-300 text-[14.5px] text-white/90"
                            >
                                Add Seat Layout
                                {isLoading ? <LoadingSpinner /> : ''}
                            </button>
                        </div>
                    </div>
                </div>
            </DndContext>
        </div>
    );
}