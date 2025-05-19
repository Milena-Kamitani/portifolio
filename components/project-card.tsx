"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface Project {
  id: string
  title: string
  category: string
  categoryId: string
  image: string
  featured?: boolean
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
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
          <h3 className="mb-2 text-xl font-bold tracking-tight">{project.title}</h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <span className="flex items-center transition-colors group-hover:text-primary">
              Ver detalhes <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
