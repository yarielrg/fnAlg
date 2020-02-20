import { Fn } from '../types';

export const _bind = <T = any>(ctx: any, cb: Fn<T>): Fn<T> => {

    return function(): T {
        return cb.apply(ctx, [this, ...Array.apply(null, arguments)]);
    };
};

export const _bindInverted = <T = any>(ctx: any, cb: Fn<T>): Fn<T> => {

    return function(): T {
        return cb.apply(this, [ctx, ...Array.apply(null, arguments)]);
    };
};