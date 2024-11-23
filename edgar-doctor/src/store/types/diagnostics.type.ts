export interface AddDiagnosticDTO {
	diagnosticId: string;
	reason: string;
	healMethod: string;
	validation: boolean;
}

export interface DiagnosticSummaryStoreType {
	alerts: null;
	diseases: { name: string; presence: number }[] | null;
	fiability: number;
	logs: { question: string; answer: string }[] | null;
	session_id: string;
	symptoms: { name: string; presence: number; duration: number }[] | null;
}
