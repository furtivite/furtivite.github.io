import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { Container, Layout } from '../../entities';
import { Btn } from '../../shared';
import { setToken } from '../../features/auth/authSlice';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router';

export const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const generateToken = nanoid();
    const navigate = useNavigate();

    const loginHandler = () => {
        dispatch(setToken(generateToken));
        navigate('/');
    };

    const loginAdminHandler = () => {
        dispatch(setToken(`admin_${generateToken}`));
        navigate('/');
    };

    return (
    <Container>
        <div className='grid gap-4'>
            <Btn onClick={loginHandler}>Login User</Btn>
            <Btn onClick={loginAdminHandler}>Login Admin</Btn>
        </div>
    </Container>
)}