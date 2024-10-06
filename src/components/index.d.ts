import * as CSS from 'csstype';

// copied from @types/react/index.d.ts, https://www.npmjs.com/package/@types/react
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface CSSProperties extends CSS.Properties<string | number> {
	/**
	 * The index signature was removed to enable closed typing for style
	 * using CSSType. You're able to use type assertion or module augmentation
	 * to add properties or an index signature of your own.
	 *
	 * For examples and more information, visit:
	 * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
	 */
}

export type LoadingType = 'dot' | 'single-char' | 'spinner';

export interface IFormRule<VALUE = unknown, ERROR = unknown> {
	message: string | ((result?: ERROR) => string);
	validate: (value: VALUE, name?: string, rules: IFormRule, rules: IFormRule[]) => ERROR | null;
}

export type ModalPosition = 'left' | 'center' | 'right';

export interface ILoadingComponentProps {
	character?: string;
	timeout?: number;
}
