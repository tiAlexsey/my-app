import { Input } from 'components/common/FormsControls/FormsControls';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { required } from 'utils/validators/validators';


const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    if (props.isAuth === true) {
        return <Redirect to={"/setting"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                    validate={[required]}
                    placeholder={'Login'}
                    name={'login'} />
            </div>
            <div>
                <Field component={Input}
                    validate={[required]}
                    placeholder={'Password'}
                    name={'password'} />
            </div>
            <div>
                <Field component={Input}
                    type={'checkbox'}
                    name={'rememberMee'} />
                remember me
            </div>
            <div>
                <button>login in</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


export default connect(mapStateToProps)(Login)