
export type Article = {
    articleId: number;
    userId: number;
    companyName: string;
    title: string;
    salary: string;
    description: description[];
    review: number;
}

export type description = {
    caption: string;
    content: string;
}

export type User = {
    userid: number;
    companyName: string;
}