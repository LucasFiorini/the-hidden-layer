const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const assetPath = (src: string) => `${BASE_PATH}${src}`;
