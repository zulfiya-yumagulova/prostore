import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { APP_NAME } from '@/lib/constans';

import Image from 'next/image';
import Link from 'next/link';
import CredentialsSigInForm from './credentials-signin-form';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In',
};

const SignInPage = async (props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) => {
  const { callbackUrl } = await props.searchParams;

  const session = await auth();

  if (session) {
    return redirect(callbackUrl || '/');
  }
  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <Link href="/" className="flex-center">
            <Image
              src="/images/logo.svg"
              width={100}
              height={100}
              alt={`${APP_NAME}`}
              priority={true}
            ></Image>
          </Link>

          <CardTitle className="text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Sign in into ypur account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <CredentialsSigInForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
