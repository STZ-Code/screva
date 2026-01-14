import Image from 'next/image'
import Link from 'next/link'
import stzLogo from '@/assets/stz_white.svg'
import { Presenter } from '@/components/presenter'
import { SignUpForm } from '@/components/sign-up-form'
import { SocialSignIn } from '@/components/social-sign-in'

export default function SignInPage() {
	return (
		<div className="items-center flex h-full w-full p-2 gap-6">
			<div className="flex-1 flex w-full justify-center">
				<div className="flex flex-col items-center justify-center w-96 gap-6">
					<div className="flex flex-col gap-2 w-full">
						<div className="flex flex-col gap-2">
							<h1 className="text-zinc-200 text-3xl font-bold">STZ.Code</h1>
							<span className="text-sm">
								Faça seu cadastro para acessar a biblioteca WEB
							</span>
						</div>

						<div className="flex gap-1">
							<span className="text-sm text-zinc-400">Já possui conta?</span>
							<Link
								href="/sign-in"
								className="text-sm text-zinc-100 font-medium"
							>
								Faça o login
							</Link>
						</div>
					</div>

					<SignUpForm />

					<div className="w-full overflow-hidden">
						<div className="flex items-center gap-6">
							<div className="h-0.5 flex-1 bg-zinc-600" />
							<span className="text-sm text-zinc-300 font-semibold">
								Ou entre por
							</span>
							<div className="h-0.5 flex-1 bg-zinc-600" />
						</div>

						<SocialSignIn />
					</div>

					<Image src={stzLogo} alt="" className="size-10 mt-8" />
				</div>
			</div>

			<Presenter />
		</div>
	)
}
