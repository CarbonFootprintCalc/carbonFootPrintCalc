export interface FinalReportEntry {
    co2e: number;
  }
   

export interface FinalReportData {
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
  scope1MarkScope2Combined?: FinalReportEntry;

  // scope 3
  businessTravel?: FinalReportEntry;
  scope3Summary?: FinalReportEntry;

  // final report
  finalLocationEmissions?: FinalReportEntry;
  finalMarketEmissions?: FinalReportEntry;

  }
  
  const FINAL_REPORT_KEY = "finalReportData";
  
  // Get full final report
  export function getFinalReport(): FinalReportData {
    const data = localStorage.getItem(FINAL_REPORT_KEY);
    return data ? JSON.parse(data) : {};
  }
  export function updateScope1Summary() {
    const report = getFinalReport();
  
    const keys: (keyof FinalReportData)[] = [
      "stationaryCombustion",
      "mobileSources",
      "refrigeration",
      "fireSuppression",
      "purchasedGases",
    ];
  
    const total = keys.reduce((sum, key) => {
      return sum + (report[key]?.co2e || 0);
    }, 0);
  
    updateFinalReportSection("scope1Summary", { co2e: total });
  }
  export function updateScope2SummaryLocation() {
    const report = getFinalReport();
  
    const keys: (keyof FinalReportData)[] = ["lElectricity", "lSteam"];
  
    const total = keys.reduce((sum, key) => {
      return sum + (report[key]?.co2e || 0);
    }, 0);
  
    updateFinalReportSection("lScope2Summary", { co2e: total });
  }

  export function updateScope2SummaryMarket() {
    const report = getFinalReport();
  
    const keys: (keyof FinalReportData)[] = ["mElectricity", "mSteam"];
  
    const total = keys.reduce((sum, key) => {
      return sum + (report[key]?.co2e || 0);
    }, 0);
  
    updateFinalReportSection("mScope2Summary", { co2e: total });
  }

  export function updateScope1LocScope2Combined() {
    const report = getFinalReport();
    const scope1 = report.scope1Summary?.co2e || 0;
    const locScope2 = report.lScope2Summary?.co2e || 0;
  
    updateFinalReportSection("scope1LocScope2Combined", {
      co2e: scope1 + locScope2,
    });
  }

  export function updateScope1MarkScope2Combined() {
    const report = getFinalReport();
    const scope1 = report.scope1Summary?.co2e || 0;
    const markScope2 = report.mScope2Summary?.co2e || 0;
  
    updateFinalReportSection("scope1MarkScope2Combined", {
      co2e: scope1 + markScope2,
    });
  }
  
  // Set full report
  export function setFinalReport(data: FinalReportData): void {
    localStorage.setItem(FINAL_REPORT_KEY, JSON.stringify(data));
  }
  
  // Update partial (e.g. just mobile sources)
  export function updateFinalReportSection(
    key: keyof FinalReportData,
    entry: FinalReportEntry
  ) {
    const current = getFinalReport();
    const updated = {
      ...current,
      [key]: entry,
    };
    setFinalReport(updated);
  }
  export function updateFinalLocationEmissions() {
    const report = getFinalReport();
    const scope1 = report.scope1Summary?.co2e || 0;
    const scope2Loc = report.lScope2Summary?.co2e || 0;
    const scope3 = report.scope3Summary?.co2e || 0;
    updateFinalReportSection("finalLocationEmissions", {
      co2e: scope1 + scope2Loc + scope3,
    });
  }

  export function updateFinalMarketEmissions() {
    const report = getFinalReport();
    const scope1 = report.scope1Summary?.co2e || 0;
    const scope2Mark = report.mScope2Summary?.co2e || 0;
    const scope3 = report.scope3Summary?.co2e || 0;
    updateFinalReportSection("finalMarketEmissions", {
      co2e: scope1 + scope2Mark + scope3,
    });
  }
  
  // Clear full report
  export function clearFinalReport() {
    localStorage.removeItem(FINAL_REPORT_KEY);
  }
  