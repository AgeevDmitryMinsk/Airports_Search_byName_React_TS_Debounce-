import React, {useEffect, useState} from 'react';
import {fetchAuthRegister, fetchAuthLogin} from "../store/actions/authActions";
import {useAppDispatch, useAppSelector} from "../hook/redux";
import {useNavigate} from "react-router-dom";

export const AuthPage = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const [registerPressed, setRegisterPressed] = useState(false)
	let error = useAppSelector(state => state.auth.error)
	let loading = useAppSelector(state => state.auth.loading)

	const [localError, setLocalError] = useState('')

	useEffect(() => {
		setLocalError(error);
	}, [error])

	console.log(`registerPressed = `, registerPressed)
	//проверяю, что данные отправляемые на сервер не пустые
	const isFormValid = () => userNameInput && passwordInput


	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault()
			setRegisterPressed(true)
			if (isFormValid()) {
				await dispatch(fetchAuthRegister({username: userNameInput, password: passwordInput}))
				navigate('/')
			} else {
				console.log(`inside if (isFormValid()) 2st`)
			}
		} catch (e) {

		}


	}

	const loginHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (isFormValid()) {
			await dispatch(fetchAuthLogin({username: userNameInput, password: passwordInput}))
			navigate('/')
		} else {
			console.log(`inside if (isFormValid()) 2st`)
		}
	}

	const [userNameInput, setUserNameInput] = useState('')
	const [passwordInput, setPasswordInput] = useState('')

	function userChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setUserNameInput(e.target.value)

		setLocalError('')
	}

	function passwordChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setPasswordInput(e.target.value)

		setLocalError('')
	}

	console.log(54, error)
	console.log(55, localError)

	const [ToLogIn, setToLogIn] = useState(false)

	function HandleToLogIn() {
		setToLogIn(true)
		setLocalError('')
	}

	function HandleToSignUp() {
		setToLogIn(false)
		setLocalError('')
	}

	console.log(`loading= `, loading)
	return (

		<div className={'mt-10 mx-auto min-h-screen w-screen  max-w-[380px]'}>
			<div className="mockup-code border bg-gray-800 relative text-center ">
				{/*Auth_Page*/}

				{!ToLogIn && <b>Create a new account</b>}
				{!ToLogIn && <div>It’s quick and easy.</div>}
				{ToLogIn && <div>Log Into AirportSearch.</div>}

				<form action="" onSubmit={submitHandler} className={'border m-2 p-2 rounded'}>
					<div className='m-2'>
						<label htmlFor="username">Username:</label>
						<input type="text" onChange={userChangeHandler}
							   value={userNameInput} id={'username'} autoComplete='username'
							   className='ml-2 w-[150px]'/>
					</div>
					<div>
						<label htmlFor="password">Password:</label>
						<input type="password" onChange={passwordChangeHandler}
							   value={passwordInput} id="current-password" autoComplete="current-password"
							   className='ml-3 w-[150px]'/>
					</div>
					{/*Register Button:*/}
					{!ToLogIn &&
                        <button type='submit' className='drawer-button border mt-2 p-1 rounded bg-green-700'
                        > Sign Up </button>}
					{!isFormValid() && registerPressed &&
                        <div className='text-red-600'>please enter your username and password</div>}
					{isFormValid() && localError && registerPressed && <div className='text-red-600'>{localError}</div>}
					{!ToLogIn &&
                        <div className='cursor-pointer m-1' onClick={HandleToLogIn}>Already have an account?</div>}

					{ToLogIn &&
                        <button type='button'
                                className='drawer-button border mt-2 p-1 rounded bg-blue-700 w-[230px]'
                                onClick={loginHandler}
                        >Log In</button>}
					{ToLogIn &&
                        <div className='cursor-pointer m-1' onClick={HandleToSignUp}>Sign up for AirportSearch.</div>}

				</form>

				{loading &&
                    <div>
                        <progress className="progress w-56 bg-primary text-center text-4xl text-accent"/>
                    </div>

				}

			</div>
		</div>
	);
};

