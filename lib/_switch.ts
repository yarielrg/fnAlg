import { _orNull } from '../utils';
import { Fn } from '../types';

interface Switch<T> {
    addCase: (key: any, fn: Fn<T>) => Switch<T>;
    result: Fn<T>;
}

/**
 * Functional implementation for swith-case.
 * 
 * @param _default Default function to apply.
 * 
 * @example
 * const result = _switch(() => 'Default').result(key);
 * console.log(result);
 * // Print 'Default'
 * 
 * @example
 * const result = _switch(() => 'Default').addCase(key_1, fn_1).addCase(key_2, fn_2).result(key);
 * console.log(result);
 * // Print the case corresponding to the key or 'Default'
 * 
 * @example
 * const result = _switch().addCase(key_1, fn_1).addCase(key_2, fn_2).result(key);
 * console.log(result);
 * // Print the case corresponding to the key or null
 * 
 * @example
 * const temp = _switch();
 * // in another block of code
 * temp.addCase(key_1, fn_1);
 * 
 * // in another block of code
 * temp.addCase(key_2, fn_2);
 * 
 * // Finally
 * const result = temp.result(key);
 * console.log(result);
 * // Print the case corresponding to the key or null
 */
export const _switch = <T = any>(_default?: Fn<T>): Switch<T> => {
	const options = new Map<any, Fn<T>>();
	
	const addCase = (key: any, fn: Fn<T>) => {
		options.set(key, fn);
		return { addCase, result };
	};
	const result = (key: any) => (options.get(key) || _default || _orNull)();
	
	return { addCase, result };
};