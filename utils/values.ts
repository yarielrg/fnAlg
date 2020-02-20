import { Fn } from '../types';

export const _orNull: Fn<null> = (val?: any): null => val || null;

export const _arr = <T = any>(arr?: any): T[] => Array.isArray(arr) && arr || [];

export const _obj = <T = any>(obj?: T): T => Object.assign({}, obj);

export const _string: Fn<string> = (str?: string): string => typeof str === 'string' && str || '';

export const _orZero: Fn<number> = (num?: number): number => typeof num === 'number' && num || 0;
