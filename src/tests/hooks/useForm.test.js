import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {
  const initialForm = {
    name: 'Samuel',
    email: 'sam@mail.com'
  }

  test('debe regresar un formulario por defecto', () => {
    const { result } = renderHook( () => useForm(initialForm) );
    const [ values, handleInputChange, reset ] = result.current;
    
    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  })

  test('debe cambiar el valor del formulario (cambiar name)', () => {
    const { result } = renderHook( () => useForm(initialForm) );
    const [ , handleInputChange ] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Brenda'
        }
      })
    })

    const [ values ] = result.current;
    expect(values).toEqual({...initialForm, name: 'Brenda'});
  })
  
  test('debe restablecer el formulario con reset()', () => {
    const { result } = renderHook( () => useForm(initialForm) );
    const [ , handleInputChange, reset ] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Brenda'
        }
      })

      reset()
    })

    const [ values ] = result.current;
    expect(values).toEqual(initialForm);
  })
});
