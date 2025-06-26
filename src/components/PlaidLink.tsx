import React, { useCallback, useEffect, useState } from 'react'
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { createLinkToken, exchancePublicToken } from '@/lib/actions/user.actions'
import Image from 'next/image'

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
    const [token, setToken] = useState('');
    const router = useRouter();

    useEffect(() => {
        const getLinkToken = async () => {
            const data = await createLinkToken(user);
            setToken(data?.linkToken)
        }
        getLinkToken();
    }, [user])

    const onSuccess = useCallback<PlaidLinkOnSuccess>( async (public_token: string) => {
        await exchancePublicToken({
            publicToken: public_token,
            user,
        })
        router.push('/dashboard');
    }, [user])

    const config: PlaidLinkOptions = {
        token,
        onSuccess
    }

    const { open, ready } = usePlaidLink(config);


    return (
        <>
            {variant === 'primary' ? (
                <Button 
                    onClick={() => open()}
                    disabled={!ready}
                    className='text-[16px] rounded-lg bg-teal-600 hover:bg-teal-700 font-semibold text-white shadow-md'
                >
                    Connect Bank
                </Button>
            ) : variant === 'ghost' ? (
                <Button onClick={() => open()} variant='ghost' className="flex cursor-pointer items-center justify-center gap-3 rounded-lg px-3 py-7 hover:bg-white lg:justify-start">
                    <Image 
                        src="/addCard.svg"
                        alt="connect bank"
                        width={24}
                        height={24}
                    />
                    <p className="hiddenl text-[16px] font-semibold text-black xl:block">
                        Connect Bank
                    </p>
                </Button>
            ) : (
                <Button onClick={() => open()} className="flex !justify-start cursor-pointer gap-3 rounded-lg !bg-transparent shadow-none flex-row">
                    <Image 
                        src="/addCard.svg"
                        alt="connect bank"
                        width={24}
                        height={24}
                    />

                    <p className="text-[16px] font-semibold text-black max-xl:hidden">
                        Connect Bank
                    </p>
                </Button>
            )}
        </>
    )
}

export default PlaidLink