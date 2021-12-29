import { render, screen, cleanup } from '@testing-library/react'
import Login from './components/login/login'
import Home from './components/home/home'
import Accounts from './components/accounts/accounts'
import Transactions from './components/transactions/transactions'
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

///////////// login Tests////////////////////
test('Should render Login component', () => {
   render(<Login />)
   const loginElement = screen.getByTestId('login-1')
   expect(loginElement).toBeInTheDocument()
})

describe('input Component Test', () => {
   it('rendered input', () => {
      const { getByTestId } = render(<Login />)
      const input = getByTestId('login-username')
      expect(input).toBeTruthy()
   })
})
describe('input Component Test', () => {
   it('rendered password', () => {
      const { getByTestId } = render(<Login />)
      const input = getByTestId('login-password')
      expect(input).toBeTruthy()
   })
})
describe('button Component Test', () => {
   it('rendered password', () => {
      const { getByTestId } = render(<Login />)
      const button = getByTestId('login-button')
      expect(button).toBeTruthy()
   })
})

///////////// Homepage Tests////////////////////
describe('check if heading is rendered', () => {
   it('rendered Heading', () => {
      const { getByTestId } = render(<Home />)
      const element = getByTestId('Header-1')
      expect(element).toBeTruthy()
   })
})

describe('check if breadcrumb is rendered', () => {
   it('rendered breadcrumb', () => {
      const { getByTestId } = render(<Home />)
      const element = getByTestId('breadcrumb-1')
      expect(element).toBeTruthy()
   })
})
describe('check if Account Heading is rendered', () => {
   it('rendered account heading', () => {
      const { getByTestId } = render(<Home />)
      const element = getByTestId('account-heading')
      expect(element).toBeTruthy()
   })
})
describe('check if transaction Heading is rendered', () => {
   it('rendered transaction heading', () => {
      const { queryByTestId } = render(<Home />)
      const element = queryByTestId('Transaction-heading')
      expect(element).toBeFalsy()
   })
})

describe('check if Account details is rendered', () => {
   it('rendered account details', () => {
      const { queryByTestId } = render(<Home />)
      const element = queryByTestId('accounts-list')
      expect(element).toBeFalsy()
   })
})
describe('check if transactions details is rendered', () => {
   it('rendered transacitons details', () => {
      const { queryByTestId } = render(<Home />)
      const element = queryByTestId('transaction-list')
      expect(element).toBeFalsy()
   })
})
