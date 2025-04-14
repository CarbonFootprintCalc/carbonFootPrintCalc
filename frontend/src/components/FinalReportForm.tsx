import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FinalReportFormProps {
    onAdd: (
        sources: {
            //input variables here
        }[]
    ) => void;
}

const FinalReportForm: React.FC<FinalReportFormProps> = ({
    onAdd,
}) => {
    const [rows, setRows] = useState([
        {
            //variables
        },
    ]);

    const navigate = useNavigate();

    const handleChange = (
        index: number,
        field: keyof (typeof rows)[number],
        value: string
    ) => {
        const updated = [...rows];
        updated[index][field] = value;
        setRows(updated);
    };

    const handleAddRow = () => {
        setRows((prev) => [
            ...prev,
            {
                //variables
            },
        ]);
    };

    const handleRemoveRow = (index: number) => {
        setRows(rows.filter((_, i) => i !== index));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd(rows);
        setRows([
            {
                //variables
            },
        ]);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-4 p-4 border rounded bg-gray-100 dark:bg-gray-800 w-full mx-auto"
        >
            {rows.map((row, index) => (
                <div
                    key={index}
                    className="flex flex-wrap items-center justify-between gap-2 my-2"
                >
                    <input></input>
                </div>
            ))}
        </form>
    )
}

