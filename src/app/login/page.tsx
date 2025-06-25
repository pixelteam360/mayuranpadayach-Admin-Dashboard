
import LoginForm from '@/components/modules/Login/LoginForm';
import React from 'react';

const LoginPage = () => {
  return (
    <div className=" flex flex-col h-screen justify-center items-center md:space-y-14 space-y-10 py-20 px-5">
      <div className="w-full max-w-[728px] bg-white/40 md:p-12 p-5 rounded-[48px] border-[3px] border-white text-center">
        <h1 className="md:text-4xl text-3xl font-semibold mb-1">Login Here</h1>
        <p className="mb-5">Start your journey as admin here</p>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;