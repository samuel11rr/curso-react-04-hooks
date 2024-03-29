import { renderHook } from '@testing-library/react-hooks'
import { useFetch } from '../../hooks/useFetch';

describe('Pruebas en useFetch', () => {
  test('debe retornar informacion por defecto', () => {
    const { result } = renderHook( () => useFetch(`https://www.breakingbadapi.com/api/quotes/1`) );
    const { data, loading, error } = result.current;

    expect( data ).toBe(null);
    expect( loading ).toBe(true);
    expect( error ).toBe(null);
  })
  
  test('debe tener la info deseada', async() => {
    const { result, waitForNextUpdate } = renderHook( () => useFetch(`https://www.breakingbadapi.com/api/quotes/1`) );
    await waitForNextUpdate();
    
    const { data, loading, error } = result.current;
    expect( data.length ).toBe(1);
    expect( loading ).toBe(false);
    expect( error ).toBe(null);
  })
  
  test('debe manejar el error', async() => {
    const { result, waitForNextUpdate } = renderHook( () => useFetch(`https://reqres.in/apix/users?page=2`) );
    await waitForNextUpdate();
    
    const { data, loading, error } = result.current;
    expect( data ).toBe(null);
    expect( loading ).toBe(false);
    expect( error ).toBe('Hubo un error');
  })
});
