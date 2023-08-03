'use strict';

export interface DeeksOptions {
    /** @default true */
    expandNestedObjects?: boolean,

    /** @default false */
    expandArrayObjects?: boolean,
    
    /** @default false */
    ignoreEmptyArraysWhenExpanding?: boolean,
    
    /** @default false */
    escapeNestedDots?: boolean,
    
    /** @default false */
    ignoreEmptyArrays?: boolean,
}