export default function RowColQsModal(props: any) {

    function handleCloseQsModelAndOpenSeatDesigner(){
        props.setShowQsModel(false)
        props.setShowSeatLayoutModel(true);
    }

    return (
        <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[999] font-[Poppins]"
        >
            <div
                className="bg-black shadow-2xl p-8 py-12 rounded-lg w-[450px]"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-[18px] font-medium mb-4 text-white">
                    Set Rows & Columns
                </h2>

                <div className="flex flex-col gap-3 text-white">
                    <input value={props.rows} onChange={(e) => props.setRows(Number(e.target.value))}
                        type="number"
                        placeholder="Rows"
                        className="bg-[#222] p-2 rounded border border-gray-700 outline-none text-[14px]"
                    />
                    <input value={props.columns} onChange={(e) => props.setColumns(Number(e.target.value))}
                        type="number"
                        placeholder="Columns"
                        className="bg-[#222] p-2 rounded border border-gray-700 outline-none text-[14px]"
                    />
                </div>

                <button onClick={handleCloseQsModelAndOpenSeatDesigner} className="mt-5 w-full bg-red-900 py-2 rounded text-white">
                    Continue
                </button>
            </div>
        </div>
    );
}
