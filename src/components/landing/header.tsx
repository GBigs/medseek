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
          <a aria-label="Ir para o início" className="brand" href="#top">
            <BrandWordmark />
          </a>
          <div aria-label="Powered by Liberty" className="brand-byline">
            <span aria-hidden className="brand-byline-divider" />
            <span className="brand-byline-text">by</span>
            <img alt="Liberty" className="brand-byline-logo" height={19} src="/logo-liberty.svg" width={114} />
          </div>
        </div>

        <nav aria-label="Navegação principal" className="desktop-nav">
          {navItems.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <Button className="header-cta">Testar Grátis</Button>
      </Container>
    </header>
  );
}
