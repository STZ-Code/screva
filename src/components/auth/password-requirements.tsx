import { CheckCircle, XCircle } from 'phosphor-react'
import { getPasswordRequirements } from '@/utils/password-requirements'

type PasswordRequirementsProps = {
	password: string
}

function Requirement({ label, valid }: { label: string; valid: boolean }) {
	return (
		<div className="flex items-center gap-2 text-sm">
			<span className={valid ? 'text-green-500' : 'text-red-900'}>
				{valid ? <CheckCircle size={20} /> : <XCircle size={20} />}
			</span>
			<span>{label}</span>
		</div>
	)
}

export function PasswordRequirements({ password }: PasswordRequirementsProps) {
	const rules = getPasswordRequirements(password ?? '')

	return (
		<div className="space-y-1">
			<Requirement label="Pelo menos 8 caracteres" valid={rules.minLength} />
			<Requirement label="Uma letra maiúscula" valid={rules.hasUppercase} />
			<Requirement label="Uma letra minúscula" valid={rules.hasLowercase} />
			<Requirement label="Um número" valid={rules.hasNumber} />
			<Requirement label="Um caractere especial" valid={rules.hasSpecialChar} />
		</div>
	)
}
