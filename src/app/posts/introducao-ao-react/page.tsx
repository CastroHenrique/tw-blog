import useIndex from "@/data/hooks/pages/useIndex.page";
import PostBody from "@/ui/components/PostBody/PostBody";

export default function MeuPost() {

    return (
        <>
            <PostBody post={
                {   id: "1",
                    title: "Introdução ao React", 
                    description: "Aprenda os conceitos básicos do React e como criar sua primeira aplicação.", 
                    picture: "https://picsum.photos/seed/react/400/200", slug: "introducao-ao-react",
                    content: (
                        <>
                            <p>O React é uma biblioteca JavaScript criada pelo Facebook para facilitar a construção de interfaces modernas.</p>
                            <p>Ele utiliza componentes reutilizáveis, o que ajuda a organizar melhor o código e acelerar o desenvolvimento.</p>
                            <p>Aprender React é um passo essencial para quem deseja trabalhar com desenvolvimento web front-end.</p>
                        </>
                    ),
                }
            } />
        </>
    )   
}