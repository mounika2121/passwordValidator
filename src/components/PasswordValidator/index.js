// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  Card,
  Heading,
  Para,
  Input,
  Error,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangePassword = event => setPassword(event.target.value)

  return (
    <AppContainer>
      <Card>
        <Heading>Password validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <Input type="password" value={password} onChange={onChangePassword} />
        {password.length < 8 ? (
          <Error>Your password must be at least 8 characters</Error>
        ) : (
          ''
        )}
      </Card>
    </AppContainer>
  )
}

export default PasswordValidator
