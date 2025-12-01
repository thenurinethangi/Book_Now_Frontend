import OTPModel from './OTPModel'
import SignIn from './SignIn'
import SignUp from './SignUp'

function Auth(props: any) {

  return (
    <div>
        { props.authType === 'SignIn' ? <SignIn setAuthVisible={props.setAuthVisible} setAuthType={props.setAuthType} setCinemaAdminEmail={props.setCinemaAdminEmail} /> : ''}
        { props.authType === 'SignUp' ? <SignUp setAuthVisible={props.setAuthVisible} setAuthType={props.setAuthType} setCinemaAdminEmail={props.setCinemaAdminEmail} /> : ''}
        { props.authType === 'OTP' ? <OTPModel setAuthVisible={props.setAuthVisible} setAuthType={props.setAuthType} cinemaAdminEmail={props.cinemaAdminEmail} setCinemaAdminEmail={props.setCinemaAdminEmail} /> : ''}
    </div>
  )
}

export default Auth