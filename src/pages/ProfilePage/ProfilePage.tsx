import React from 'react';
import { Container } from '../../entities';
import { ProfileForm } from '../../features/forms';

export const ProfilePage: React.FC = () => {
  return (
    <Container>
      <div className="max-w-xs">
        <ProfileForm />
      </div>
    </Container>
  );
};
