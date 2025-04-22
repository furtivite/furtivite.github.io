import React from 'react';
import { Container, Layout } from '../../entities';
import { ProfileForm } from '../../features/forms';
import { Btn } from '../../shared';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { logout } from '../../features/auth/authSlice';

export const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  const myToken = useAppSelector((state) => state.auth.token);

  return (
    <Layout>
      <Container>
        <div className="max-w-xs grid gap-4">
          <ProfileForm />
          {myToken !== null && <Btn onClick={logoutHandler}>Logout</Btn>}
        </div>
      </Container>
    </Layout>
  );
};
