declare type CatOptions = {
    delimiter: string;
};
declare const _default: (folder: string[] | string, outFile?: string, options?: Partial<CatOptions>) => Promise<unknown>;
export = _default;
