import { BlogPost } from "@/data/@types/BlogPostInterface";

export default function useIndex() {
    const post: BlogPost[] = [
        {
        id: "1",
        title: "Introdução ao React",
        description: "Aprenda os conceitos básicos do React e como criar sua primeira aplicação.",
        picture: "https://picsum.photos/seed/react/400/200",
        slug: "introducao-ao-react",
        },
        {
            id: "2",
            title: "Guia de Node.js",
            description: "Entenda o que é Node.js e como usá-lo no backend.",
            picture: "https://picsum.photos/seed/node/400/200",
            slug: "guia-nodejs",
        },
        {
            id: "3",
            title: "Next.js para Iniciantes",
            description: "Aprenda como criar aplicações SSR com Next.js.",
            picture: "https://picsum.photos/seed/nextjs/400/200",
            slug: "nextjs-para-iniciantes",
        },
        {
            id: "4",
            title: "NestJS e APIs",
            description: "Como criar APIs robustas com NestJS.",
            picture: "https://picsum.photos/seed/nestjs/400/200",
            slug: "nestjs-e-apis",
        },
        {
            id: "5",
            title: "Tailwind CSS na Prática",
            description: "Estilize sua aplicação de forma rápida e elegante com Tailwind.",
            picture: "https://picsum.photos/seed/tailwind/400/200",
            slug: "tailwind-css-na-pratica",
        },
        {
            id: "6",
            title: "TypeScript no Dia a Dia",
            description: "Entenda porque o TypeScript pode evitar muitos bugs.",
            picture: "https://picsum.photos/seed/typescript/400/200",
            slug: "typescript-no-dia-a-dia",
        },
        {
            id: "7",
            title: "Boas práticas com Git",
            description: "Controle de versão sem dor de cabeça.",
            picture: "https://picsum.photos/seed/git/400/200",
            slug: "boas-praticas-com-git",
        },
        {
            id: "8",
            title: "Docker para Devs",
            description: "Crie ambientes isolados e consistentes com Docker.",
            picture: "https://picsum.photos/seed/docker/400/200",
            slug: "docker-para-devs",
        },
        {
            id: "9",
            title: "GraphQL vs REST",
            description: "Qual é a melhor opção para sua API?",
            picture: "https://picsum.photos/seed/graphql/400/200",
            slug: "graphql-vs-rest",
        },
        {
            id: "10",
            title: "Boas práticas em UI/UX",
            description: "Dicas para criar interfaces intuitivas.",
            picture: "https://picsum.photos/seed/uiux/400/200",
            slug: "boas-praticas-ui-ux",
        }
    ];

    return {post};
}