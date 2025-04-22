import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { Container, Layout } from '../../entities';
import { Btn } from '../../shared';
import { logout, setToken } from '../../features/auth/authSlice';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

export const Login: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const generateToken = nanoid();
    const navigate = useNavigate();
    const myToken = useAppSelector((state) => state.auth.token);

    const loginHandler = () => {
        dispatch(setToken(generateToken));
        navigate('/');
    };

    const loginAdminHandler = () => {
        dispatch(setToken(`admin_${generateToken}`));
        navigate('/');
    };

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <Container>
            <div className='grid gap-4'>
                <a href='/'>{t('tempLinks.toMain')}</a>
                <Btn onClick={loginHandler}>Login User</Btn>
                <Btn onClick={loginAdminHandler}>Login Admin</Btn>
                {myToken !== null && (
                    <Btn onClick={logoutHandler}>Logout</Btn>
                )}
            </div>
        </Container>
    )
}