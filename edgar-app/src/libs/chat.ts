import basicFetch from 'utils/basicFetch';

import { SymptomsType } from 'types/SymptomsType';
import { SymptomsContextType } from 'types/SymptomsContextType';

class Chat {
	public async sendMessage(
		message: string,
		symptoms: SymptomsType[],
		context: SymptomsContextType[],
	): Promise<{
		symptoms: SymptomsType[];
		context: SymptomsContextType[];
		question: string;
		isDone: boolean;
	}> {
		try {
			if (message) {
				const nlp = await basicFetch('nlp', 'POST', JSON.stringify({ input: message, symptoms }));

				if (nlp.status === 200) {
					const nlpContext = await nlp.json();
					const response = await basicFetch(
						'exam',
						'POST',
						JSON.stringify({
							context: [...context, ...nlpContext.context],
						}),
					);

					const data = await response.json();
					if (response.status === 200)
						return {
							symptoms: data.symptoms,
							context: data.context,
							question: data.done ? 'Merci pour vos informations' : data.question,
							isDone: data.done,
						};
				}
			}
			return { symptoms, context: [], question: '', isDone: true };
		} catch (error) {
			console.error(error);
			return { symptoms: [], context: [], question: '', isDone: true };
		}
	}
}

export default Chat;
