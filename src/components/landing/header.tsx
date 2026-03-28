"use client";

import Link from "next/link";

import type { LinkItem } from "@/src/types/landing";

import { BrandWordmark } from "@/src/components/shared/brand-wordmark";
import { Button } from "@/src/components/shared/button";
import { Container } from "@/src/components/shared/container";

type HeaderProps = {
  navItems: LinkItem[];
};

export function Header({ navItems }: HeaderProps) {
  return (
    <header className="site-header">
      <Container className="site-header-inner">
        <div className="brand-cluster">
          <Link aria-label="Ir para o início" className="brand" href="#top">
            <BrandWordmark />
          </Link>
          <div className="brand-byline" aria-label="Powered by Liberty">
            <span aria-hidden className="brand-byline-divider" />
            <span className="brand-byline-text">by</span>
            <img alt="Liberty" className="brand-byline-logo" src="/logo-liberty.svg" />
          </div>
        </div>

        <nav aria-label="Navegação principal" className="desktop-nav">
          {navItems.map((item) => (
            <Link className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Button className="header-cta">Testar Grátis</Button>
      </Container>
    </header>
  );
}
