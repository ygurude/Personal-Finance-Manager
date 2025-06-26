'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Loader2 } from "lucide-react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';
import { signUp, logIn, getLoggedInUser } from "@/lib/actions/user.actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import PlaidLink from './PlaidLink';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// Signup schema
const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  firstName: z.string().min(3, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  address1: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().length(2),
  zipCode: z.string().length(5),
  dateOfBirth: z.string().min(1, "Date of Birth is required"),
  ssn: z.string().length(4),
  confirm: z.string()
}).refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
});




function LoginForm({ onSubmit, isLoading }: { onSubmit: (values: any) => void, isLoading: boolean }) {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <div className="flex flex-col gap-1.5">
              <FormLabel className="text-[14px] w-full max-w-[200px] text-gray-700">Email</FormLabel>
              <div className="flex w-full flex-col">
                <FormControl>
                  <Input placeholder="Enter your email" className="text-[16px] placeholder:text-[16px] rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500" {...field} />
                </FormControl>
                <FormMessage className="text-[12px] text-red-500 mt-2" />
              </div>
            </div>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <div className="flex flex-col gap-1.5">
              <FormLabel className="text-[14px] w-full max-w-[200px] text-gray-700">Password</FormLabel>
              <div className="flex w-full flex-col">
                <FormControl>
                  <Input placeholder="Enter your password" className="text-[16px] placeholder:text-[16px] rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500" type="password" {...field} />
                </FormControl>
                <FormMessage className="text-[12px] text-red-500 mt-2" />
              </div>
            </div>
          )}
        />
        <div className="flex flex-col gap-4">
          <Button type="submit" disabled={isLoading} className="text-[16px] rounded-lg font-semibold bg-teal-600 hover:bg-teal-700 text-white shadow-md">
            {isLoading ? (<><Loader2 size={20} className="animate-spin" />&nbsp;Loading...</>) : 'Log In'}
          </Button>
        </div>
      </form>
    </Form>
  );
}

function SignupForm({ onSubmit, isLoading }: { onSubmit: (values: any) => void, isLoading: boolean }) {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '', 
      password: '', 
      firstName: '', 
      lastName: '', 
      address1: '', 
      city: '', 
      state: '', 
      zipCode: '', 
      dateOfBirth: '', 
      ssn: '',
      confirm: ''
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField control={form.control} name="firstName" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[14px] w-full max-w-[200px] text-gray-700">First Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your first name" className="text-[16px] placeholder:text-[16px] rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500" {...field} />
              </FormControl>
              <FormMessage className="text-[12px] text-red-500 mt-2" />
            </FormItem>
          )} />
          <FormField control={form.control} name="lastName" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[14px] w-full max-w-[200px] text-gray-700">Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your last name" className="text-[16px] placeholder:text-[16px] rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500" {...field} />
              </FormControl>
              <FormMessage className="text-[12px] text-red-500 mt-2" />
            </FormItem>
          )} />
        </div>
        <FormField control={form.control} name="address1" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[14px] w-full max-w-[200px] text-gray-700">Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter your home address" className="text-[16px] placeholder:text-[16px] rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500" {...field} />
            </FormControl>
            <FormMessage className="text-[12px] text-red-500 mt-2" />
          </FormItem>
        )} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField control={form.control} name="city" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[14px] w-full max-w-[200px] text-gray-700">City</FormLabel>
              <FormControl>
                <Input placeholder="Enter your City" className="text-[16px] placeholder:text-[16px] rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500" {...field} />
              </FormControl>
              <FormMessage className="text-[12px] text-red-500 mt-2" />
            </FormItem>
          )} />
          <FormField control={form.control} name="state" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[14px] w-full max-w-[200px] text-gray-700">State</FormLabel>
              <FormControl>
                <Input placeholder="Enter your State" className="text-[16px] placeholder:text-[16px] rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500" {...field} />
              </FormControl>
              <FormMessage className="text-[12px] text-red-500 mt-2" />
            </FormItem>
          )} />
          <FormField control={form.control} name="zipCode" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[14px] w-full max-w-[200px] text-gray-700">Zip Code</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Zip Code" className="text-[16px] placeholder:text-[16px] rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500" {...field} />
              </FormControl>
              <FormMessage className="text-[12px] text-red-500 mt-2" />
            </FormItem>
          )} />
        </div>
        <FormField control={form.control} name="dateOfBirth" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[14px] w-full max-w-[200px] text-gray-700">Date of Birth</FormLabel>
            <FormControl>
              <Input 
                placeholder="YYYY-MM-DD" 
                className="text-[16px] placeholder:text-[16px] rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500" 
                {...field} 
              />
            </FormControl>
            <FormMessage className="text-[12px] text-red-500 mt-2" />
          </FormItem>
        )} />
        <FormField control={form.control} name="ssn" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[14px] w-full max-w-[200px] text-gray-700">SSN</FormLabel>
            <FormControl>
              <Input 
                placeholder="1234" 
                className="text-[16px] placeholder:text-[16px] rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500" 
                {...field}
              />
            </FormControl>
            <FormMessage className="text-[12px] text-red-500 mt-2" />
          </FormItem>
        )} />
        <FormField control={form.control} name="email" render={({ field }) => (
          <div className="flex flex-col gap-1.5">
            <FormLabel className="text-[14px] w-full max-w-[200px] text-gray-700">Email</FormLabel>
            <div className="flex w-full flex-col">
              <FormControl>
                <Input placeholder="Enter your email" className="text-[16px] placeholder:text-[16px] rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500" {...field} />
              </FormControl>
              <FormMessage className="text-[12px] text-red-500 mt-2" />
            </div>
          </div>
        )} />
        <FormField control={form.control} name="password" render={({ field }) => (
          <div className="flex flex-col gap-1.5">
            <FormLabel className="text-[14px] w-full max-w-[200px] text-gray-700">Password</FormLabel>
            <div className="flex w-full flex-col">
              <FormControl>
                <Input placeholder="Enter your password" className="text-[16px] placeholder:text-[16px] rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500" type="password" {...field} />
              </FormControl>
              <FormMessage className="text-[12px] text-red-500 mt-2" />
            </div>
          </div>
        )} />
        <FormField control={form.control} name="confirm" render={({ field }) => (
          <div className="flex flex-col gap-1.5">
            <FormLabel className="text-[14px] w-full max-w-[200px] text-gray-700">Confirm Password</FormLabel>
            <div className="flex w-full flex-col">
              <FormControl>
                <Input placeholder="Confirm your password" className="text-[16px] placeholder:text-[16px] rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500" type="password" {...field} />
              </FormControl>
              <FormMessage className="text-[12px] text-red-500 mt-2" />
            </div>
          </div>
        )} />
        <div className="flex flex-col gap-4">
          <Button type="submit" disabled={isLoading} className="text-[16px] rounded-lg font-semibold bg-teal-600 hover:bg-teal-700 text-white shadow-md">
            {isLoading ? (<><Loader2 size={20} className="animate-spin" />&nbsp;Loading...</>) : 'Sign Up'}
          </Button>
        </div>
      </form>
    </Form>
  );
}

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  

  const handleSubmit = async (data: any) => {
    setIsLoading(true)

    try {
        // sign up with appwrite & create a plaid link token
        if (type === 'sign-up') {
          const userData = {
            firstName: data.firstName!,
            lastName: data.lastName!,
            address1: data.address1!,
            city: data.city!,
            state: data.state!,
            postalCode: data.zipCode!,
            dateOfBirth: data.dateOfBirth!,
            ssn: data.ssn!,
            email: data.email,
            password: data.password
          }

          const newUser = await signUp(userData);

          setUser(newUser);
        }
        if (type === 'log-in') {

          const response = await logIn({
            email: data.email,
            password: data.password,
          })
          
          if (response) {
            router.push('/dashboard')
          }
        }
    } catch (error) {
        console.log(error)
    } finally {
        setIsLoading(false)
    }
}

  return (
    <section className="w-full max-w-[420px] flex flex-col justify-center gap-5 py-10 md:gap-8">
      <header className="flex flex-col gap-2 md:gap-2">
        <Link href="/" className="flex items-center gap-2 text-teal-700 hover:underline mb-2 w-fit">
          <ArrowLeft size={18} />
          <span className="font-medium text-[15px]">Back to Home</span>
        </Link>
        <Link href="/dashboard" className="cursor-pointer flex items-center gap-1">
          <Image src="/lion.svg" width={34} height={34} alt="Dhan Icon" />
          <h1 className="text-[30px] font-ibm-plex-serif font-bold text-black">Dhan</h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-[24px] lg:text-[26px] font-bold text-gray-900">
            {user
              ? 'Link Account'
              : type === 'log-in'
                ? 'Log In'
                : 'Sign Up'}
          </h1>
          <p className="text-[16px] font-normal text-gray-600">
            {user
              ? 'Link your account to get started'
              : 'Please enter your details'}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">
          <PlaidLink user={user} variant="primary" />
        </div>
      ) : (
        <>
          {type === 'log-in' ? (
            <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />
          ) : (
            <SignupForm onSubmit={handleSubmit} isLoading={isLoading} />
          )}
          <footer className="flex justify-center gap-1">
            <p className="text-[14px] text-gray-600 font-normal">
              {type === 'log-in'
                ? "Don't have an account?"
                : 'Already have an account?'}
            </p>
            <Link
              href={type === 'log-in' ? '/signup' : '/login'}
              className="text-[14px] cursor-pointer font-medium text-teal-600">
              {type === 'log-in' ? 'Sign Up' : 'Log In'}
            </Link>
          </footer>
        </>
      )}
    </section>
  )
}

export default AuthForm