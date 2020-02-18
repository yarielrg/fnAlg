import { Fn } from '../types';
import { _null } from '../utils';

interface Result<T> {
    result: Fn<T>;
}

interface Then<T> extends Result<T> {
    or: (fn: Fn<T>) => Result<T>;
}

interface If<T> {
    then: (fn: Fn<T>) => Then<T>;
}

export const _if = <T extends any>(condition: boolean): If<T> => {
    let returnValue: T | null;

    const result = (): T | null => returnValue || _null();

    const or = (falseExp: Fn<T>): Result<T> => {
        returnValue = (!!condition && result || falseExp)();
        return { result };
    };

    const then = (trueExp: Fn<T>): Then<T> => {
        returnValue = (!!condition && trueExp || _null)();
        return { or, result };
    };

    return { then };
};