import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useTheme } from "../context/ThemeContext";

interface FinalReportEntry {
    co2e?: number; // co2-e value
}

interface FinalReportData {

    // scope 1
    stationaryCombustion?: FinalReportEntry;
    mobileSources?: FinalReportEntry;
    refridgeration?: FinalReportEntry;
    fireSuppression?: FinalReportEntry;
    purchasedGases?: FinalReportEntry;
    scope1Summary?: FinalReportEntry;

    // scope 2 - location
    lElectricity?: FinalReportEntry;
    lSteam?: FinalReportEntry;
    lScope2Summary?: FinalReportEntry;

    // scope 2 - market
    mElectricity?: FinalReportEntry;
    mSteam?: FinalReportEntry;
    mScope2Summary?: FinalReportEntry;

    // combined Scope 1 & 2
    scope1LocScope2Combined?: FinalReportEntry;
    scope1MarkScope2Combined?: FinalReportEntry

    // scope 3
    businessTravel?: FinalReportEntry;
    scope3Summary?: FinalReportEntry;

    // final report
    finalEmissions?: FinalReportEntry;
}


interface LocationState {
    // report data is expected to be passed in via react-router state
    reportData?: FinalReportData
}

const dummyData: FinalReportData = {
    stationaryCombustion: {co2e: 100},
    mobileSources: {co2e: 200},
};

const FinalReportPage: React.FC = () => {
    const { state } = useLocation() as { state: LocationState };
    const navigate = useNavigate();
    const {isDarkMode } = useTheme();

    // if no report data is found, display message
    const reportData = state?.reportData ?? dummyData;

    return (
        <div className={isDarkMode ? "dark" : ""}>
            <div className="w-full min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-white">
                <NavBar />

                <main className="pt-20 px-4 flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
                        Final Carbon Emissions Report
                    </h2>

                    {!reportData ? (
                        <p className="max-w-3xl text-center dark:text-white">
                            No report data available.
                        </p>
                    ) : (
                        <>
                        {/* Scope 1 Table */}
                        <div className="w-full max-w-3xl">
                            <table className="w-full table-auto border-collapse">
                                <thead className="bg-gray-200 dark:bg-gray-700">
                                    <tr>
                                        <th className="border p-2">Scope 1 Emissions</th>
                                        <th className="border p-2">CO₂-e (metric tons)</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* Stationary Combustion */}
                                    <tr>
                                        <td className="border p-2">Stationary Combustion</td>
                                        <td className="border p-2">
                                        {reportData.stationaryCombustion !== undefined
                                            ? Number(reportData.stationaryCombustion.co2e).toFixed(2)
                                            : "N/A"}
                                        </td>
                                    </tr>

                                    {/* Mobile Sources */}
                                    <tr>
                                        <td className="border p-2">Mobile Sources</td>
                                        <td className="border p-2">
                                            {reportData.mobileSources !== undefined
                                            ? Number(reportData.mobileSources.co2e).toFixed(2)
                                            : "N/A"}
                                        </td>
                                    </tr>

                                    {/* Refridgeration/AC */}
                                    <tr>
                                        <td className="border p-2">Refrigeration / AC Equipment Use</td>
                                        <td className="border p-2">
                                            {reportData.refridgeration !== undefined
                                            ? Number(reportData.refridgeration.co2e).toFixed(2)
                                            : "N/A"}
                                        </td>
                                    </tr>

                                    {/* Fire Suppression */}
                                    <tr>
                                        <td className="border p-2">Fire Suppression</td>
                                        <td className="border p-2">
                                            {reportData.fireSuppression !== undefined
                                            ? Number(reportData.fireSuppression.co2e).toFixed(2)
                                            : "N/A"}
                                        </td>
                                    </tr>

                                    {/* Purchased Gases */}
                                    <tr>
                                        <td className="border p-2">Purchased Gases</td>
                                        <td className="border p-2">
                                            {reportData.purchasedGases !== undefined
                                            ? Number(reportData.purchasedGases.co2e).toFixed(2)
                                            : "N/A"}
                                        </td>
                                    </tr>

                                    {/* Scope 1 Summary */}
                                    {/* If including offsets in future iterations, add them here */}
                                    <tr>
                                        <td className="border p-2"><strong>Scope 1 Summary</strong></td>
                                        <td className="border p-2"><strong>
                                            {reportData.scope1Summary !== undefined
                                            ? Number(reportData.scope1Summary.co2e).toFixed(2)
                                            : "N/A"}
                                        </strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        </>
                    )}

                    {/* Placeholder download link for PDF report */}
                    <div className="mt-4">
                        <a 
                            href="/download-final-report.pdf"
                            target="_blank"
                            rel="noopener rereferrer"
                            className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition"
                        >
                            Download PDF Report
                        </a>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="mt-8 flex gap-4">
                        <button
                            onClick={() => navigate("/business-travel")}
                            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 shadow-lg"
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => navigate("/")}
                            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 shadow-lg"
                        >
                            Next
                        </button>
                    </div>
                </main>
            </div>
        </div>
    )

}

export default FinalReportPage;
