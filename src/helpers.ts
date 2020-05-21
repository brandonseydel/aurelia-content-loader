export function uid(): string {
    return Math.random()
        .toString(36)
        .substring(2);
}


export type ContentLoaderType = 'list' | 'code' | 'facebook' | 'instagram' | 'bullet-list';