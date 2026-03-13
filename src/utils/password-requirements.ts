export function getPasswordRequirements(password: string) {
	return {
		minLength: password.length >= 8,
		hasUppercase: /[A-Z]/.test(password),
		hasLowercase: /[a-z]/.test(password),
		hasNumber: /[0-9]/.test(password),
		hasSpecialChar: /[^A-Za-z0-9]/.test(password),
	}
}
