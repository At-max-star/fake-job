import { Article } from "@/types";

export const Data_Article: Article[] = [
    {
        articleId: 1,
        userId: 1,
        companyName: "株式会社わくわく",
        title: "フロントエンドエンジニア",
        salary: "20万円～40万円/月",
        review: 3.3,
        description: [
            {
                caption: "仕事内容",
                content: "モダンな技術を駆使した、フロントエンジニアを求めています！"
            },
            {
                caption: "応募要件",
                content: "React,Vue,Angularのどれかを使用した開発経験2年以上"
            }
        ]
    },
    {
        articleId: 2,
        userId: 1,
        companyName: "株式会社わくわく",
        title: "バックエンドエンジニア",
        salary: "30万円～50万円/月",
        review: 2.1,
        description: [
            {
                caption: "仕事内容",
                content: "モダンな技術を駆使した、バックエンジニアを求めています！"
            },
            {
                caption: "応募要件",
                content: "・Sprng Boot,Laravelなどのフレームワークを利用したバックエンド経験2年以上\n・Apache,Nginx等を用いたサーバー立ち上げの経験(あると望ましい)"
            },
            {
                caption: "雇用期間",
                content: "6か月"
            }
        ]
    },
    {
        articleId: 3,
        userId: 1,
        companyName: "株式会社わくわく",
        title: "インフラエンジニア",
        salary: "30万円～50万円/月",
        review: 1.3,
        description: [
            {
                caption: "仕事内容",
                content: "モダンな技術を駆使した、インフラエンジニアを求めています！"
            },
            {
                caption: "応募要件",
                content: "・Apache,Nginx等を用いたサーバー立ち上げの経験(あると望ましい)"
            }
        ]
    },
    {
        articleId: 4,
        userId: 2,
        companyName: "本山珈琲店",
        title: "おしゃれなカフェで働いてみませんか?",
        salary: "時給930円",
        review: 3.4,
        description: [
            {
                caption: "仕事内容",
                content: "ホール"
            },
            {
                caption:"こんな人を求めてます！",
                content: "・笑顔が素敵な人\n・ハキハキとした挨拶ができる人"
            },
            {
                caption: "応募要件",
                content: "・学生さん\n・主婦(主夫)さん\n・フリーターの方\n"
            },
            {
                caption: "福利厚生",
                content: "おいしいまかないあり！"
            }
        ]
    }
]