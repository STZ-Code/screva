export function getAge(birthday: string | Date) {
	return new Date().getFullYear() - new Date(birthday).getFullYear()
}
