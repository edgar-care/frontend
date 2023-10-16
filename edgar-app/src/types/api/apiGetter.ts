export type ApiGetter<Type> = {
	data: Type;
	trigger: () => void;
};
