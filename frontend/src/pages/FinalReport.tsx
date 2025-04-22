import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useTheme } from "../context/ThemeContext";
import { getFinalReport } from "../components/localStroage";
import { handleDownloadPDF } from "../components/handleDownloadPDF";

interface FinalReportEntry {
    co2e?: number; // co2-e value, combined unit for all carbon emissions
}

interface FinalReportData {

    // scope 1
    stationaryCombustion?: FinalReportEntry;
    mobileSources?: FinalReportEntry;
    refrigeration?: FinalReportEntry;
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
    finalLocationEmissions?: FinalReportEntry;
    finalMarketEmissions?: FinalReportEntry;
}

interface OrganizationalFormData {
    organizationName: string;
    address: string;
    startDate: string;
    endDate: string;
    preparerName: string;
    contact: string;
    datePrepared: string;
}

const FinalReportPage: React.FC = () => {
    const [reportData, setReportData] = useState<FinalReportData>({});
    const navigate = useNavigate();
    const {isDarkMode } = useTheme();

    useEffect(() => {
        const finalReport = getFinalReport();
        setReportData(finalReport);
      }, []);
    
    // retrieve organization info from sessionStorage
    const orgInfoString = localStorage.getItem("organizationInfo");
    const organizationInfo: OrganizationalFormData | null = orgInfoString ? JSON.parse(orgInfoString) : null;

    return (
        <div className={isDarkMode ? "dark" : ""}>
            <div className="w-full min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-white">
                <NavBar />
                <div id="report-content">
                <main className="pt-20 px-4 flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
                        Final Carbon Emissions Report
                    </h2>

                    {/* Organizational Information Section */}
                    {organizationInfo ? (
                        <div className="w-full max-w-3xl mb-8 p-4 border rounded bg-gray-50 dark:bg-gray-800">
                            <h3 className="text-xl font-bold mb-4 dark:text-white">
                                Organization Information
                            </h3>
                            <div className="grid grid-cols-1 gap-2 text-gray-700 dark:text-gray-300">
                                <p><strong>Organization Name:</strong> {organizationInfo.organizationName}</p>
                                <p><strong>Address:</strong> {organizationInfo.address}</p>
                                <p><strong>Reporting Period:</strong> {organizationInfo.startDate} to {organizationInfo.endDate}</p>
                                <p><strong>Preparer Name:</strong> {organizationInfo.preparerName}</p>
                                <p><strong>Contact Email:</strong> {organizationInfo.contact}</p>
                                <p><strong>Date Prepared:</strong> {organizationInfo.datePrepared}</p>
                            </div>
                        </div>
                    ) : (
                        <p className="max-w-3xl text-center dark:text-white">
                            No organization information available.
                        </p>
                    )}

                    {!reportData ? (
                        <p className="max-w-3xl text-center dark:text-white">
                            No report data available.
                        </p>
                    ) : (
                        <>
                        {/* Scope 1 Table */}
                        <div className="w-full max-w-3xl mb-8">
                            <h3 className="text-xl font-bold mb-4 dark:text-white">Scope 1 Emissions</h3>
                            <table className="w-full table-auto border-collapse">
                                <thead className="bg-gray-200 dark:bg-gray-700">
                                    <tr>
                                        <th className="border p-2 w-[500px]">Category</th>
                                        <th className="border p-2">CO₂-e (metric tons)</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* Stationary Combustion */}
                                    <tr>
                                        <td className="border p-2">Stationary Combustion</td>
                                        <td className="border p-2">
                                        {reportData.stationaryCombustion !== undefined
                                            ? reportData.stationaryCombustion.co2e?.toFixed(2)
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
                                            {reportData.refrigeration !== undefined
                                            ? Number(reportData.refrigeration.co2e).toFixed(2)
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

                        {/* Scope 2 (Location-based) Table */}
                        <div className="w-full max-w-3xl mb-8">
                            <h3 className="text-xl font-bold mb-4 dark:text-white">Scope 1 & Scope 2 Summary</h3>
                            <table className="w-full table-auto border-collapse">
                                <thead className="bg-gray-200 dark:bg-gray-700">
                                    <tr>
                                        <th className="border p-2 w-[500px]">Category</th>
                                        <th className="border p-2">CO₂-e (metric tons)</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* Electricity (Location) */}
                                    <tr>
                                        <td className="border p-2">Purchased and Consumed Electricity</td>
                                        <td className="border p-2">
                                            {reportData.lElectricity !== undefined
                                                ? Number(reportData.lElectricity.co2e).toFixed(2)
                                                : "N/A"}
                                        </td>
                                    </tr>

                                    {/* Steam (Location) */}
                                    <tr>
                                        <td className="border p-2">Purchased and Consumed Steam</td>
                                        <td className="border p-2">
                                            {reportData.lSteam !== undefined
                                                ? Number(reportData.lSteam.co2e).toFixed(2)
                                                : "N/A"}
                                        </td>
                                    </tr>

                                    {/* Scope 2 Summary (Location) */}
                                    <tr>
                                        <td className="border p-2"><strong>Location-Based Scope 2 Summary</strong></td>
                                        <td className="border p-2"><strong>
                                            {reportData.lScope2Summary !== undefined
                                                ? Number(reportData.lScope2Summary.co2e).toFixed(2)
                                                : "N/A"}
                                        </strong></td>
                                    </tr>
                                                
                                </tbody>
                            </table>
                        </div>


                        {/* Scope 2 (market-based) Table */}
                        <div className="w-full max-w-3xl mb-8">
                            <h3 className="text-xl font-bold mb-4 dark:text-white">Market-Based Scope 2 Emissions</h3>
                            <table className="w-full table-auto border-collapse">
                                <thead className="bg-gray-200 dark:bg-gray-700">
                                    <tr>
                                        <th className="border p-2 w-[500px]">Category</th>
                                        <th className="border p-2">CO₂-e (metric tons)</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* Electricity (Market) */}
                                    <tr>
                                        <td className="border p-2">Purchased and Consumed Electricity</td>
                                        <td className="border p-2">
                                            {reportData.mElectricity !== undefined
                                                ? Number(reportData.mElectricity.co2e).toFixed(2)
                                                : "N/A"}
                                        </td>
                                    </tr>

                                    {/* Steam (Market) */}
                                    <tr>
                                        <td className="border p-2">Purchased and Consumed Steam</td>
                                        <td className="border p-2">
                                            {reportData.mSteam !== undefined
                                                ? Number(reportData.mSteam.co2e).toFixed(2)
                                                : "N/A"}
                                        </td>
                                    </tr>

                                    {/* Scope 2 Summary (Market) */}
                                    <tr>
                                        <td className="border p-2"><strong>Market-Based Scope 2 Summary</strong></td>
                                        <td className="border p-2"><strong>
                                            {reportData.mScope2Summary !== undefined
                                                ? Number(reportData.mScope2Summary.co2e).toFixed(2)
                                                : "N/A"}
                                        </strong></td>
                                    </tr>
                                                
                                </tbody>
                            </table>
                        </div>


                        {/* Combined Scope 1 & Scope 2 */}
                        <div className="w-full max-w-3xl mb-8">
                            <h3 className="text-xl font-bold mb-4 dark:text-white">Scope 1 & Scope 2 Summary</h3>
                            <table className="w-full table-auto border-collapse">
                                <thead className="bg-gray-200 dark:bg-gray-700">
                                    <tr>
                                        <th className="border p-2 w-[500px]">Category</th>
                                        <th className="border p-2">CO₂-e (metric tons)</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* Scope 1 + Scope 2 (Location)  */}
                                    <tr>
                                        <td className="border p-2">Total Scope 1 & Location-Based Scope 2</td>
                                        <td className="border p-2">
                                            {reportData.scope1LocScope2Combined !== undefined
                                                ? Number(reportData.scope1LocScope2Combined.co2e).toFixed(2)
                                                : "N/A"}
                                        </td>
                                    </tr>

                                    {/* Scope 1 + Scope 2 (Market) */}
                                    <tr>
                                        <td className="border p-2 ">Total Scope 1 & Market-Based Scope 2</td>
                                        <td className="border p-2">
                                            {reportData.scope1MarkScope2Combined !== undefined
                                                ? Number(reportData.scope1MarkScope2Combined.co2e).toFixed(2)
                                                : "N/A"}
                                        </td>
                                    </tr>       
                                </tbody>
                            </table>
                        </div>


                        {/* Scope 3 Emissions */}
                        <div className="w-full max-w-3xl mb-8">
                            <h3 className="text-xl font-bold mb-4 dark:text-white">Scope 3 Emissions</h3>
                            <table className="w-full table-auto border-collapse">
                                <thead className="bg-gray-200 dark:bg-gray-700">
                                    <tr>
                                        <th className="border p-2 w-[500px]">Category</th>
                                        <th className="border p-2">CO₂-e (metric tons)</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* Business Travel */}
                                    <tr>
                                        <td className="border p-2">Business Travel</td>
                                        <td className="border p-2">
                                            {reportData.businessTravel !== undefined
                                                ? Number(reportData.businessTravel.co2e).toFixed(2)
                                                : "N/A"}
                                        </td>
                                    </tr>

                                    {/* Scope 3 Summary */}
                                    <tr>
                                        <td className="border p-2"><strong>Scope 3 Summary</strong></td>
                                        <td className="border p-2"><strong>
                                            {reportData.scope3Summary !== undefined
                                                ? Number(reportData.scope3Summary.co2e).toFixed(2)
                                                : "N/A"}
                                        </strong></td>
                                    </tr>       
                                </tbody>
                            </table>
                        </div>

                        {/* Final Report */}

                        <div className="w-full max-w-3xl mb-8">
                            <h3 className="text-xl font-bold mb-4 dark:text-white">Final Emissions</h3>
                            <table className="w-full table-auto border-collapse">
                                <thead className="bg-gray-200 dark:bg-gray-700">
                                    <tr>
                                        <th className="border p-2 w-[500px]">Category</th>
                                        <th className="border p-2">CO₂-e (metric tons)</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* Final Report */}
                                    <tr>
                                        <td className="border p-2"><strong>Final Location-Based Emissions</strong></td>
                                        <td className="border p-2"><strong>
                                            {reportData.finalLocationEmissions !== undefined
                                                ? Number(reportData.finalLocationEmissions.co2e).toFixed(2)
                                                : "N/A"}
                                        </strong></td>
                                    </tr>       
                                    <tr>
                                        <td className="border p-2"><strong>Final Market-Based Emissions</strong></td>
                                        <td className="border p-2"><strong>
                                            {reportData.finalMarketEmissions !== undefined
                                                ? Number(reportData.finalMarketEmissions.co2e).toFixed(2)
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
                    <button
                        onClick={handleDownloadPDF}
                        className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition"
                    >
                        Download PDF Report
                    </button>
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
        </div>
    )

}

export default FinalReportPage;
