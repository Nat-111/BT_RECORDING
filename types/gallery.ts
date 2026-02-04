export interface Photo {
    id: string;
    url: string;
    title: string;
    description?: string;
    category: string;
    width: number;
    height: number;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
}
