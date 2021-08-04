import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <LoginScreen />', () => {
  const setuser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider value={{ setuser }}>
      <LoginScreen />
    </UserContext.Provider>
  )

  test('Debe mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('Debe ejecutar setuser con el argumento esperado', () => {
    wrapper.find('button').prop('onClick')();

    expect( setuser ).toHaveBeenCalledWith({
      id: 123,
      name: 'Sam',
      email: 'sam@algo.com'
    })
  });
  
})
