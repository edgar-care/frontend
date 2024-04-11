import { type FAQQuestionType } from 'types/homePage/FAQQuestionType';

const questions: FAQQuestionType[] = [
	{
		title: 'À quoi sert edgar dans la vie de tous les jours ?',
		description:
			'edgar permet de faire gagner du temps au médecin en passant par un parcours de pré-diagnostic. Ce pré-diagnostic va permettre au médecin de décider si le rendez-vous est vraiment nécessaire.',
		id: 'a-quoi-sert-edgar',
	},
	{
		title: "Que ce passe-t-il si le rendez-vous n'est pas utile ?",
		description:
			"Si le médecin juge que le rendez-vous n'est pas utile, le rendez-vous sera annulé et vous recevrez un message avec toutes les informations liées à l'annulation avec un motif et une solution pour réduire vos symptômes",
		id: "il-ce-passe-quoi-lors-d'un-refus",
	},
	{
		title: "Donc edgar c'est juste une application de prise de rendez-vous ?",
		description:
			"Non, c'est une application de prise de rendez-vous médicaux, mais pas seulement. Le but d'edgar est de pouvoir centraliser l'entièreté de votre santé, pour vous et votre médecin. Vous pourrez retrouver l'ensemble de vos informations de santé à un seul et unique endroit.",
		id: "edgar-c'est-juste-une-app-de-rdvI",
	},
	{
		title: 'edgar est gratuit ?',
		description:
			"Bien sûr, notre objectif n'est pas de rendre l'accès à la santé payant. En tant que patient, vous n'aurez JAMAIS à payer pour utiliser notre plateforme.",
		id: 'edgar-est-gratuit',
	},
];

export default questions;
