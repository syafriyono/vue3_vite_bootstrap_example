export interface IDetails {
	id: number,
	title: string
	description: string
	skill: ISkill[]
}

export interface ISkill {
	id: number,
	name: string
}

export interface IForm {
	displayName: string,
	email: string,
	phone: string,
	message: string
}

export interface ISubmitForm {
	displayName: string,
	subject: string,
	email: string,
	phone: string,
	message: string,
	ptJobApplyType: string,
	isActive: boolean,
	ptJobPost: Object
}