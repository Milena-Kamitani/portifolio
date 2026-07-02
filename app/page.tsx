"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Code2,
  Database,
  ExternalLink,
  Github,
  Menu,
  Palette,
  Smartphone,
} from "lucide-react";

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
    { id: "web-development", label: "Desenvolvimento Web" },
    { id: "mobile", label: "Mobile" },
    { id: "ui-ux", label: "UI/UX Design" },
    { id: "graphic-design", label: "Design Gráfico" },
    { id: "branding", label: "Branding" },
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
            <span className="inline-block">MKAMITANI</span>
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
                Desenvolvimento Full Stack
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Construindo soluções digitais completas
              </h1>
              <p className="mb-8 max-w-[42rem] text-muted-foreground sm:text-xl">
                Desenvolvedora full stack com experiência em React, React
                Native, Next.js, Node.js, Java, Salesforce e Progress ABL. Uno
                lógica de produto, interfaces bem cuidadas e código para criar
                aplicações úteis, responsivas e escaláveis.
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
              Explore projetos que combinam desenvolvimento web, mobile,
              interfaces, branding e design gráfico.
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
                Desenvolvedora Full Stack
              </h2>
              <p className="max-w-[85%] text-muted-foreground sm:text-lg">
                Atuo no desenvolvimento de aplicações web e mobile, com olhar
                atento para experiência do usuário, regra de negócio e entrega
                de valor.
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
                  UniCesumar e atuo como desenvolvedora full stack, com
                  experiência prática em React Native, Node.js e Java. Tenho
                  base sólida em tecnologias web, banco de dados, metodologias
                  ágeis (Scrum/Kanban) e experiência do usuário.
                </p>
                <p className="text-muted-foreground">
                  Já participei de projetos acadêmicos e profissionais, como o
                  desenvolvimento de aplicativo para controle de frotas, além de
                  projetos de interface, identidade visual e presença digital.
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
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <h4 className="font-bold">Analista de Sistemas Júnior</h4>
                    <span className="text-sm text-muted-foreground">
                      2025
                    </span>
                  </div>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Indemil Indústria e Comércio
                  </p>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Apoio ao planejamento e à priorização do backlog,
                        conectando demandas do negócio, tecnologia e
                        experiência do usuário.
                    </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Levantamento e análise de requisitos junto às áreas
                        internas, transformando necessidades em soluções
                        escaláveis.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Facilitação de cerimônias ágeis e alinhamento com
                        stakeholders para manter entregas consistentes e de
                        impacto.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <h4 className="font-bold">Desenvolvedora Full Stack</h4>
                    <span className="text-sm text-muted-foreground">
                      2024 - Atual
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Freelancer / Autônoma
                  </p>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Desenvolvimento de aplicações web, mobile, landing
                        pages e dashboards para clientes e projetos
                        independentes.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Criação de interfaces e protótipos com foco em
                        usabilidade, identidade visual e entrega rápida.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <h4 className="font-bold">Designer Gráfico</h4>
                    <span className="text-sm text-muted-foreground">
                      2019 - Atual
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Freelancer / Autônoma
                  </p>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Criação de identidades visuais, logos e peças para
                        redes sociais e materiais gráficos.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Desenvolvimento de layouts e conceitos visuais com foco
                        em clareza, estética e consistência de marca.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <h4 className="font-bold">Analista de Suporte Técnico</h4>
                    <span className="text-sm text-muted-foreground">
                      2022 - 2025
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Vitru Educação
                  </p>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Registro, acompanhamento e análise de chamados
                        técnicos, contribuindo para a melhoria de processos e
                        da experiência dos usuários.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Apoio na resolução de problemas em sistemas e
                        aplicações, colaborando com equipes multidisciplinares.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <h4 className="font-bold">Desenvolvedora de Software</h4>
                    <span className="text-sm text-muted-foreground">
                      2019 - 2025
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Stationsoft
                  </p>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Desenvolvimento e manutenção de sistemas legados e
                        novos módulos, com foco em soluções corporativas e
                        integração institucional.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Atuação com Progress ABL, Webspeed, análise de
                        requisitos, testes, implantação e melhorias com base em
                        feedback de usuários.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <h4 className="font-bold">
                      Assistente Administrativo Financeiro
                    </h4>
                    <span className="text-sm text-muted-foreground">
                      2018 - Atual
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Aik Network
                  </p>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Controle de contas a pagar e receber, emissão de notas
                        fiscais, organização de documentos e relatórios
                        financeiros.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Apoio em projetos digitais, identidade visual e peças
                        para redes sociais, conectando organização, design e
                        rotina operacional.
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
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <h4 className="font-bold">
                      Pós-graduação em Gestão de Produtos
                    </h4>
                    <span className="text-sm text-muted-foreground">
                      2026
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Unopar</p>
                  <p className="text-sm">
                    Especialização que complementa minha atuação técnica com
                    visão de produto, cultura ágil, discovery, UX research,
                    backlog, MVP, OKRs e estratégia para produtos digitais.
                  </p>
                </div>
                <div className="mb-8">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <h4 className="font-bold">
                      Pós-graduação em Computação Forense e Perícia Digital  
                    </h4>
                    <span className="text-sm text-muted-foreground">
                      2025
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Unopar</p>
                  <p className="text-sm">
                    Especialização voltada para análise forense de dados,
                    segurança da informação e investigação digital.
                  </p>
                </div>

                <div className="mb-8">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <h4 className="font-bold">
                      Pós-graduação Especialista Full Stack
                    </h4>
                    <span className="text-sm text-muted-foreground">
                      2026
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Rocketseat
                  </p>
                  <p className="text-sm">
                    Formação focada em desenvolvimento full stack, abrangendo
                    Node.js, Java, React, DevOps, IA, produto e inovação.
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <h4 className="font-bold">
                      Análise e Desenvolvimento de Sistemas
                    </h4>
                    <span className="text-sm text-muted-foreground">
                      2024
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
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-300">
                      JavaScript
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-300">
                      React
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-300">
                      React Native
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-300">
                      Next.js
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-300">
                      Node.js
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-300">
                      HTML
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-300">
                      CSS
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-300">
                      Java
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-300">
                      C
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-300">
                      Nest
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Banco de Dados</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-300">
                      SQL
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-300">
                      NoSQL
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Design</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-300">
                      Design Gráfico
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-300">
                      UX/UI
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-300">
                      Figma
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-300">
                      Canva
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Outros</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-300">
                      Salesforce
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-300">
                      Progress
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-300">
                      Scrum
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-300">
                      Kanban
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-300">
                      Inglês
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="mb-4 font-medium">Certificados e Cursos</h4>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <div className="rounded-lg border p-4">
                    <h5 className="font-medium">Formação em Product Manager</h5>
                    <p className="text-xs text-muted-foreground">Udemy, 2025</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h5 className="font-medium">Desenvolvimento Full Stack</h5>
                    <p className="text-xs text-muted-foreground">Rocketseat</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h5 className="font-medium">
                      CS50: Introdução à Ciência da Computação
                    </h5>
                    <p className="text-xs text-muted-foreground">Harvard</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h5 className="font-medium">Lógica de Programação</h5>
                    <p className="text-xs text-muted-foreground">UEM, 2020</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h5 className="font-medium">Banco de Dados e SQL</h5>
                    <p className="text-xs text-muted-foreground">Udemy, 2022</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h5 className="font-medium">Java Orientado a Objetos</h5>
                    <p className="text-xs text-muted-foreground">Udemy, 2022</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h5 className="font-medium">Design Thinking</h5>
                    <p className="text-xs text-muted-foreground">
                      Curso em Vídeo, 2022
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h5 className="font-medium">
                      Noções de Infraestrutura, Servidores, Containers e Cloud
                    </h5>
                    <p className="text-xs text-muted-foreground">Udemy, 2023</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h5 className="font-medium">
                      Gerenciamento de Novos Produtos
                    </h5>
                    <p className="text-xs text-muted-foreground">Udemy, 2023</p>
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
              Unindo front-end, back-end, mobile e design para criar produtos
              digitais claros, funcionais e bem implementados.
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
                <Code2 className="text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Front-end</h3>
              <p className="text-muted-foreground">
                Construção de interfaces responsivas, componentizadas e
                cuidadosas com usabilidade.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  React e Next.js
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  TypeScript e JavaScript
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Tailwind CSS
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  UI/UX aplicado
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
                <Smartphone className="text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Mobile</h3>
              <p className="text-muted-foreground">
                Desenvolvimento de aplicativos e fluxos móveis com foco em uso
                real, performance e clareza.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  React Native
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Navegação e estados
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Prototipagem
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Experiência do usuário
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
                <Database className="text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Back-end e Sistemas</h3>
              <p className="text-muted-foreground">
                Atuação em sistemas corporativos, integrações, dados e regras
                de negócio.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Node.js, Java e Nest
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  SQL e NoSQL
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Salesforce
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Progress ABL
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
                <Palette className="text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Design e Produto</h3>
              <p className="text-muted-foreground">
                Uso design e visão de produto como apoio para criar soluções
                mais compreensíveis.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  UI/UX Design
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Figma
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Branding
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                  Scrum e Kanban
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
              Quer conversar sobre desenvolvimento, sistemas ou presença
              digital? Entre em contato.
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
                      href="tel:+5544999641256"
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
                  aria-label="GitHub"
                  href="https://github.com/Milena-Kamitani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-muted/80"
                >
                  <Github className="h-5 w-5" />
                </a>
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
                <span className="inline-block font-bold">MKAMITANI</span>
              </Link>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                Desenvolvendo soluções digitais com código, produto e design.
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
              <h3 className="mb-4 text-sm font-medium">Atuação</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Desenvolvimento Web
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Desenvolvimento Mobile
                  </Link>
                </li>
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
                    Sistemas e Integrações
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
