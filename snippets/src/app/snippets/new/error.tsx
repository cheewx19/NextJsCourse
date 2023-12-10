// error file MUST BE Client Component
'use client'

interface ErrorPageProps {
    error: Error
    reset: () => void
}
export default function ErrorPage({error}: ErrorPageProps) {
   return <div>{error.message}</div> 
}