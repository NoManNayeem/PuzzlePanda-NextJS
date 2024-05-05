// utils/logout.js

import { deleteCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation'

// This is the logout function
export const useLogout = () => {
    const router = useRouter();

  // Remove the cookies or any other authentication tokens
  deleteCookie('token');
  console.log(getCookie('token'));
  deleteCookie('usertype');

  // Redirect to the login page or homepage
  router.push('/');
};

