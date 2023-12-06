
//バックエンドURL
export const URL_API = process.env.NEXT_PUBLIC_API_URL as string;
//ユーザ登録
export const URL_REGISTER = process.env.NEXT_PUBLIC_API_REGISTER as string;
//JWT生成(ログイン)
export const URL_LOGIN = process.env.NEXT_PUBLIC_API_LOGIN as string;
//JWTリフレッシュ
export const URL_REFRESH = process.env.NEXT_PUBLIC_API_REFRESH as string;
//ユーザ情報確認
export const URL_USERINFO = process.env.NEXT_PUBLIC_API_USERINFO as string;
//記事一覧
export const URL_ARTICLE_LIST = process.env.NEXT_PUBLIC_API_ARTICLE_LIST as string;
//記事確認
export const URL_ARTICLE_DETAIL = process.env.NEXT_PUBLIC_API_ARTICLE_DETAIL as string;
//記事作成
export const URL_ARTICLE_CREATE = process.env.NEXT_PUBLIC_API_ARTICLE_CREATE as string;
