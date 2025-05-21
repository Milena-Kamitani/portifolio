"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, ExternalLink, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ProjectCard } from "@/components/project-card";
import { CategoryFilter } from "@/components/category-filter";
import { projects } from "@/lib/data";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { id: "all", label: "Todos" },
    { id: "ui-ux", label: "UI/UX Design" },
    { id: "graphic-design", label: "Design Gráfico" },
    { id: "branding", label: "Branding" },
    { id: "web-design", label: "Web Design" },
    // { id: "illustration", label: "Ilustração" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.categoryId === selectedCategory);

  return (
    <div className="flex min-h-screen flex-col ">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full ">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="inline-block">MKAMITAMI</span>
          </Link>

          <nav className="hidden md:flex md:gap-6 lg:gap-10">
            <Link
              href="/"
              className="flex items-center text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Início
            </Link>
            <Link
              href="#projetos"
              className="flex items-center text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Projetos
            </Link>
            <Link
              href="#sobre"
              className="flex items-center text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Sobre
            </Link>
            <Link
              href="#contato"
              className="flex items-center text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Contato
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <Link href="#contato">Entre em contato</Link>
            </Button>

            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/"
                    className="flex items-center text-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Início
                  </Link>
                  <Link
                    href="#projetos"
                    className="flex items-center text-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projetos
                  </Link>
                  <Link
                    href="#sobre"
                    className="flex items-center text-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sobre
                  </Link>
                  <Link
                    href="#contato"
                    className="flex items-center text-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contato
                  </Link>
                  <Button asChild className="mt-4">
                    <Link href="#contato" onClick={() => setIsMenuOpen(false)}>
                      Entre em contato
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 pb-16 pt-24 md:pb-20 md:pt-32 lg:pb-32 lg:pt-40">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto flex max-w-[58rem] flex-col items-center text-center"
            >
              <div className="mb-6 inline-block rounded-full bg-muted px-3 py-1 text-sm">
                Design & Criatividade
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Transformando ideias em experiências visuais
              </h1>
              <p className="mb-8 max-w-[42rem] text-muted-foreground sm:text-xl">
                Portfólio de artes gráficas, design de interfaces e projetos no
                Figma que conectam pessoas através de experiências visuais
                memoráveis.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="#projetos">
                    Ver projetos <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="rounded-full"
                >
                  <Link href="#sobre">Sobre mim</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        <section id="projetos" className="container space-y-12 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
          >
            <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm">
              Meus Trabalhos
            </div>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Projetos em Destaque
            </h2>
            <p className="max-w-[85%] text-muted-foreground sm:text-lg">
              Explore minha coleção de trabalhos em design gráfico, interfaces
              de usuário e protótipos no Figma.
            </p>
          </motion.div>

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </section>

        <section
          id="sobre"
          className="relative overflow-hidden bg-muted/40 py-24"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12"
            >
              <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm">
                Sobre Mim
              </div>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                UX Designer & Web Developer
              </h2>
              <p className="max-w-[85%] text-muted-foreground sm:text-lg">
                Combinando habilidades técnicas e criativas para desenvolver
                soluções completas e inovadoras.
              </p>
            </motion.div>

            <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center space-y-6"
              >
                <h3 className="text-2xl font-bold">Perfil Pessoal</h3>
                <p className="text-muted-foreground">
                  Sou graduada em Análise e Desenvolvimento de Sistemas pela
                  UniCesumar e atuo como Analista de Sistemas Júnior I, com foco
                  em desenvolvimento full stack e experiência prática em React
                  Native, Salesforce e Progress ABL. Tenho uma base sólida em
                  tecnologias web, metodologias ágeis (Scrum/Kanban) e um olhar
                  apurado para a experiência do usuário.
                </p>
                <p className="text-muted-foreground">
                  Já liderei projetos acadêmicos e profissionais, como o
                  desenvolvimento de um aplicativo para controle de frotas, e
                  mantenho uma forte conexão com design de interfaces e
                  usabilidade.
                </p>
                <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                  <Button asChild className="rounded-full">
                    <Link href="#contato">Entre em contato</Link>
                  </Button>
                  <Button variant="outline" asChild className="rounded-full">
                    <a
                      href="https://www.linkedin.com/in/milena-kamitami-40ab8b207/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
                <div className="h-full w-full overflow-hidden rounded-xl bg-background">
                  <Image
                    src="/eu.svg?height=600&width=800"
                    alt="Milena Kamitami"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-xl border bg-background p-8 shadow-sm"
              >
                <h3 className="mb-6 text-xl font-bold">
                  Experiência Profissional
                </h3>

                <div className="mb-8">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-bold">Analista de Sistema Junior I</h4>
                    <span className="text-sm text-muted-foreground">
                      Mar. 2025 - presente
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    StationSoft
                  </p>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Atuação como desenvolvedora full stack, participando da
                        criação de sistemas e aplicativos multiplataforma.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Desenvolvimento de aplicações mobile utilizando React
                        Native, com foco em usabilidade e performance.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Criação e manutenção de sistemas corporativos utilizando
                        Salesforce e Progress ABL.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-bold">Técnica de Suporte em TI</h4>
                    <span className="text-sm text-muted-foreground">
                      Nov. 2022 - Mar. 2025
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Unicesumar
                  </p>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Prestação de suporte técnico para usuários, garantindo a
                        resolução ágil de problemas relacionados a sistemas.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Participação ativa na integração de sistemas durante a
                        fusão com o grupo Vitru Education.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Desenvolvimento e implementação de soluções para
                        melhorar a eficiência das operações.
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl border bg-background p-8 shadow-sm"
              >
                <h3 className="mb-6 text-xl font-bold">Formação Acadêmica</h3>

                <div className="mb-8">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-bold">
                      Pós-graduação em Computação Forense e Perícia Digital
                    </h4>
                    <span className="text-sm text-muted-foreground">
                      Fev. 2025 - em andamento
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Unopar</p>
                  <p className="text-sm">
                    Especialização voltada para a análise forense de dados,
                    segurança da informação e investigação digital.
                  </p>
                </div>

                <div className="mb-8">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-bold">
                      Pós-graduação em Especialista Full Stack
                    </h4>
                    <span className="text-sm text-muted-foreground">
                      Jan. 2025 - em andamento
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Rocketseat
                  </p>
                  <p className="text-sm">
                    Especialização focada no desenvolvimento Full-Stack,
                    abrangendo Node.js, React, DevOps, IA, Produto e Inovação.
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-bold">
                      Análise e Desenvolvimento de Sistemas
                    </h4>
                    <span className="text-sm text-muted-foreground">
                      Fev. 2022 - Dez. 2024
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Unicesumar
                  </p>
                  <p className="text-sm">
                    Graduação focada em desenvolvimento de software, banco de
                    dados, design de interfaces e metodologias ágeis.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 rounded-xl border bg-background p-8 shadow-sm"
            >
              <h3 className="mb-6 text-xl font-bold">Competências</h3>

              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="space-y-3">
                  <h4 className="font-medium">Desenvolvimento</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      JavaScript
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      React
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      React Native
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Next.js
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Node.js
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      HTML
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      CSS
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Java
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      C
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Nest
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Banco de Dados</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      SQL
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      noSQL
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Design</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Design Gráfico
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      UX/UI
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Figma
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Canva
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Outros</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Salesforce
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Progress
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Scrum
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Kanban
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Inglês
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="mb-4 font-medium">Cursos Complementares</h4>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <div className="rounded-lg border p-4">
                    <h5 className="font-medium">UX Design e Design Thinking</h5>
                    <p className="text-xs text-muted-foreground">Udemy, 2025</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h5 className="font-medium">
                      Formação Design Gráfico Completo
                    </h5>
                    <p className="text-xs text-muted-foreground">Udemy, 2025</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h5 className="font-medium">Web Design</h5>
                    <p className="text-xs text-muted-foreground">Udemy, 2023</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h5 className="font-medium">POO em Java</h5>
                    <p className="text-xs text-muted-foreground">Udemy, 2023</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h5 className="font-medium">
                      CS50: Introdução à Ciência da Computação
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      Harvard, 2022
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h5 className="font-medium">Linguagem C e C++</h5>
                    <p className="text-xs text-muted-foreground">Udemy, 2022</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h5 className="font-medium">Banco de Dados</h5>
                    <p className="text-xs text-muted-foreground">
                      Curso em Video, 2022
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h5 className="font-medium">Lógica de Programação</h5>
                    <p className="text-xs text-muted-foreground">
                      Curso em Video, 2022
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h5 className="font-medium">Excel intermediário</h5>
                    <p className="text-xs text-muted-foreground">UEM, 2020</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="container py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
          >
            <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm">
              Expertise
            </div>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Áreas de Atuação
            </h2>
            <p className="max-w-[85%] text-muted-foreground sm:text-lg">
              Combinando criatividade com conhecimento técnico para entregar
              resultados excepcionais.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl border bg-background p-8 shadow-sm"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                  <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                  <path d="M12 2v2"></path>
                  <path d="M12 22v-2"></path>
                  <path d="m17 20.66-1-1.73"></path>
                  <path d="M11 10.27 7 3.34"></path>
                  <path d="m20.66 17-1.73-1"></path>
                  <path d="m3.34 7 1.73 1"></path>
                  <path d="M14 12h8"></path>
                  <path d="M2 12h2"></path>
                  <path d="m20.66 7-1.73 1"></path>
                  <path d="m3.34 17 1.73-1"></path>
                  <path d="m17 3.34-1 1.73"></path>
                  <path d="m11 13.73-4 6.93"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Criação de interfaces intuitivas e experiências de usuário que
                combinam estética com funcionalidade.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Pesquisa de usuários
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Wireframing
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Prototipagem
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Testes de usabilidade
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl border bg-background p-8 shadow-sm"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 3v12"></path>
                  <path d="M6 15h12"></path>
                  <path d="m16 7-4-4-4 4"></path>
                  <path d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Design Gráfico</h3>
              <p className="text-muted-foreground">
                Desenvolvimento de materiais visuais impactantes que comunicam
                mensagens de forma eficaz.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Identidade visual
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Materiais impressos
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Design editorial
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Tipografia
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl border bg-background p-8 shadow-sm"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                  <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                  <path d="M12 3v6"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Branding</h3>
              <p className="text-muted-foreground">
                Criação de identidades visuais consistentes que representam a
                essência e valores das marcas.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Estratégia de marca
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Design de logotipos
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Guias de estilo
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Aplicações da marca
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-xl border bg-background p-8 shadow-sm"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M12 18v-6"></path>
                  <path d="m9 15 3 3 3-3"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Ilustração</h3>
              <p className="text-muted-foreground">
                Criação de ilustrações digitais e arte conceitual para diversos
                projetos e aplicações.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Ilustração digital
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Design de personagens
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Arte conceitual
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Infográficos
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section id="contato" className="container py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
          >
            <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm">
              Vamos Conversar
            </div>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Entre em Contato
            </h2>
            <p className="max-w-[85%] text-muted-foreground sm:text-lg">
              Interessado em trabalhar juntos? Entre em contato para discutirmos
              seu projeto.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border bg-background p-8 shadow-sm"
            >
              <h3 className="mb-4 text-xl font-bold">Informações de Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:mkamitami@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      mkamitami@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Telefone</p>
                    <a
                      href="tel:+5500000000000"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      (44) 99964-1256
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Localização</p>
                    <p className="text-sm text-muted-foreground">Brasil</p>
                  </div>
                </li>
              </ul>

              <h3 className="mb-4 mt-8 text-xl font-bold">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/milena-kamitami-40ab8b207/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-muted/80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="https://drive.google.com/drive/folders/16nzwZ6ZDGT6Rm2tXX0WZA00cWxp4nLyZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Currículo"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-muted/80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border bg-background p-8 shadow-sm"
            >
              <h3 className="mb-4 text-xl font-bold">Envie uma Mensagem</h3>
              <form
                className="space-y-4"
                action="https://formsubmit.co/mkamitami@gmail.com"
                method="POST"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Assunto
                  </label>
                  <input
                    id="subject"
                    name="_subject"
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    placeholder="Como posso ajudar?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    placeholder="Detalhes do seu projeto..."
                  ></textarea>
                </div>

                {/* Oculta CAPTCHA (opcional) */}
                <input type="hidden" name="_captcha" value="false" />

                <Button type="submit" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
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
                <span className="inline-block font-bold">MKAMITAMI</span>
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
                    href="#projetos"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#sobre"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contato"
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
