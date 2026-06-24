import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  type: "data",
  schema: ({image}) => {
    return z.object({
        title: z.string(),
        date: z.string(),
        tags: z.array(z.string()).optional(),
        image: image().optional(),
        link: z.string().optional(),
        abstract: z.string().optional(),
        introduction: z.string().optional(),
        output: z.array(z.string()).optional(),
        conclusions: z.array(z.string()).optional(),
        further_research: z.array(z.string()).optional(),
        ethical_considerations: z.array(z.string()).optional(),
        shiny_app_link: z.string().optional(),
  });
},
});

export const collections = { projects: projectCollection };
