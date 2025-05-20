"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Eye,
  Calendar,
  Tag,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/data";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<any>(null);
  const [relatedProjects, setRelatedProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Encontrar o projeto pelo ID
    const foundProject = projects.find((p) => p.id === params.id);

    if (foundProject) {
      setProject(foundProject);

      // Encontrar projetos relacionados (mesma categoria, excluindo o atual)
      const related = projects
        .filter(
          (p) => p.categoryId === foundProject.categoryId && p.id !== params.id
        )
        .slice(0, 3);

      setRelatedProjects(related);
    }

    setIsLoading(false);
  }, [params.id]);

  // Se estiver carregando, mostrar um estado de carregamento
  if (isLoading) {
    return (
      <div className="container flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p>Carregando projeto...</p>
        </div>
      </div>
    );
  }

  // Se o projeto não for encontrado, mostrar uma mensagem
  if (!project) {
    return (
      <div className="container flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Projeto não encontrado</h1>
        <p className="text-muted-foreground mt-2">
          O projeto que você está procurando não existe.
        </p>
        <Button asChild className="mt-4">
          <Link href="/">Voltar para a página inicial</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="inline-block font-bold">MKAMITAMI</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button asChild variant="ghost" className="rounded-full">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-5xl"
          >
            <div className="mb-8 text-center">
              <div className="mb-4 inline-block rounded-full bg-muted px-3 py-1 text-sm">
                {project.category}
              </div>
              <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                {project.title}
              </h1>
              <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Tag className="mr-1 h-4 w-4" />
                  <span>{project.category}</span>
                </div>
              </div>
            </div>

            <div className="mb-12 overflow-hidden rounded-xl border shadow-sm">
              <Image
                src={project.image || "/images/logo.png"}
                alt={project.title}
                width={1200}
                height={675}
                className="w-full object-cover"
              />
            </div>

            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold">Visão Geral do Projeto</h2>
                  <p className="text-muted-foreground">
                    Este projeto foi desenvolvido para demonstrar minhas
                    habilidades em {project.category}. O objetivo principal foi
                    criar uma solução visual que atendesse às necessidades do
                    cliente enquanto oferece uma experiência de usuário
                    excepcional.
                  </p>
                  <p className="text-muted-foreground">
                    Durante o processo de design, foquei em criar uma estética
                    moderna e funcional, garantindo que cada elemento visual
                    contribuísse para a usabilidade geral e para a comunicação
                    eficaz da mensagem da marca.
                  </p>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {project.gallery
                      ?.slice(0, 4)
                      .map((image: string, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.3 + index * 0.1,
                          }}
                          className="overflow-hidden rounded-lg border shadow-sm"
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${project.title} - Imagem ${index + 1}`}
                            width={600}
                            height={400}
                            className="aspect-video w-full object-cover"
                          />
                        </motion.div>
                      ))}
                  </div>

                  <h2 className="text-2xl font-bold">Resultados</h2>
                  <p className="text-muted-foreground">
                    O projeto final resultou em uma solução visual coesa e
                    impactante que atendeu a todos os objetivos estabelecidos. O
                    feedback do cliente foi extremamente positivo, destacando a
                    clareza da comunicação visual e a experiência do usuário
                    intuitiva.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-8"
              >
                <div className="rounded-xl border bg-background p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-bold">Áreas de Expertise</h3>
                  <ul className="space-y-2 text-sm">
                    {project.expertise?.map((item: string) => (
                      <li key={item} className="flex items-center">
                        <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border bg-background p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-bold">Serviços Prestados</h3>
                  <ul className="space-y-2 text-sm">
                    {project.services?.map((service: string) => (
                      <li key={service} className="flex items-center">
                        <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild className="w-full rounded-full">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Eye className="mr-2 h-4 w-4" />
                    Ver projeto completo
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {relatedProjects.length > 0 && (
            <>
              <Separator className="my-16" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <h2 className="text-center text-2xl font-bold">
                  Projetos Relacionados
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {relatedProjects.map((project) => (
                    <Link
                      key={project.id}
                      href={`/projeto/${project.id}`}
                      className="group relative block overflow-hidden rounded-xl border bg-background transition-all hover:border-foreground/20 hover:shadow-md"
                    >
                      <div className="aspect-[16/9] w-full overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-2 inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
                          {project.category}
                        </div>
                        <h3 className="mb-2 text-xl font-bold tracking-tight">
                          {project.title}
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <span className="flex items-center transition-colors group-hover:text-primary">
                            Ver detalhes{" "}
                            <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </div>
      </main>

      <footer className="border-t bg-muted/40">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full ">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="inline-block font-bold">MKAMITANI</span>
              </Link>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                Transformando ideias em experiências visuais impactantes através
                do design.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#projetos"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#sobre"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contato"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Serviços</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Design Gráfico
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Branding
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Web Design
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Contato</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">mkamitami@gmail.com</li>
                <li className="text-muted-foreground">(44) 99964-1256</li>
                <li className="text-muted-foreground">Brasil</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} mkamitami. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
