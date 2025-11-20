import prisma from "./prisma";

export const getParagraph = async () => {
    try{
        const count = 30;
        const skipCount = Math.floor(Math.random() * count);

        const paragraph = await prisma.typeParagraph.findFirst({
            select: {
                paragraph: true
            },
            skip: skipCount
        });

        return paragraph;
    }catch(error){
        throw error;
    }
}