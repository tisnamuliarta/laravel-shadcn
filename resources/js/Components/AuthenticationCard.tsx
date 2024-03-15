import { Link } from '@inertiajs/react';
import React, { PropsWithChildren, ReactNode } from 'react';
import AuthenticationCardLogo from './AuthenticationCardLogo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface GuestLayoutProps {
  header?: string | null;
  description?: string | ReactNode | null;
}

export default function AuthenticationCard({
  header = null,
  description = null,
  children,
}: PropsWithChildren<GuestLayoutProps>) {


  return (
    <div className='flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0'>
      <Link href={route('dashboard')}>
        <AuthenticationCardLogo className='mx-auto h-16 w-16 fill-foreground' />
      </Link>

      <div className='mt-10 w-full max-w-lg'>
        <Card className='rounded-none border-l-transparent border-r-transparent shadow-none sm:rounded-lg sm:border-l-border sm:border-r-border sm:shadow-sm lg:rounded-xl '>
          <CardHeader className='flex-row justify-between'>
            <div>
              <CardTitle>{header}</CardTitle>
              <CardDescription className='mt-2'>{description}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>
      </div>
    </div>
    // <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
    //   {/* <div>
    //     <AuthenticationCardLogo />
    //   </div>

    //   <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
    //     {children}
    //   </div> */}
    //   <Card>
    //     <CardHeader>
    //       <div className='flex'>
    //         <AuthenticationCardLogo />
    //       </div>
    //     </CardHeader>
    //     <CardContent>
    //       {children}
    //     </CardContent>
    //   </Card>
    // </div>
  );
}
