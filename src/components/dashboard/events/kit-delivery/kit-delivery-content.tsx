'use client'
import { useState } from 'react'
import { KitDeliveryAthleteDetails } from './kit-delivery-athlete-details'
import { KitDeliveryTable } from './kit-delivery-table'

export type AthleteKit = {
	id: string
	sub_cod: string
	chest_number: string
	name: string
	cpf: string
	category: string
	modality: string
	status: 'pending' | 'delivered'
	kit_type: 'Premium' | 'Básico'
	gender: string
	team: string
	birthday: Date
}

export function KitDeliveryContent() {
	const [currentAthlete, setCurrentAthlete] = useState<AthleteKit | null>(null)

	return (
		<div className="flex gap-8 h-full xl:flex-row flex-col">
			<KitDeliveryTable setAthleteSelected={setCurrentAthlete} />

			<KitDeliveryAthleteDetails currentAthlete={currentAthlete} />
		</div>
	)
}
