export type DiagnosticSummaryType = {
	alerts: null;
	diseases: DiagnosticSummaryDiseaseType[];
	fiability: number;
	logs: DiagnosticSummaryLogType[];
	sessionId: string;
	symptoms: DiagnosticSummarySymptomType[];
};

export type DiagnosticSummaryDiseaseType = {
	name: string;
	presence: number;
};

export type DiagnosticSummaryLogType = {
	question: string;
	answer: string;
};

export type DiagnosticSummarySymptomType = {
	name: string;
	presence: boolean | null;
	duration: number;
};
