import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-verde">404</h1>
        <h2 className="mt-4 font-display text-2xl text-verde">Pagina non trovata</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for has wandered off the alpine path.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-verde px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-verde-soft"
          >
            Take me home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-verde">This page didn't load.</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something spilled on our end. Try again, or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center rounded-full bg-verde px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-verde-soft"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center rounded-full border border-verde/30 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-verde transition-colors hover:bg-verde hover:text-cream"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Belluno — Caffè, Cucina, Vesu" },
      {
        name: "description",
        content:
          "Belluno is a small alpine-inspired cafe in Vesu, Surat. Specialty coffee, slow brunch, and house-baked dolci.",
      },
      { name: "author", content: "Belluno" },
      { property: "og:title", content: "Belluno — Caffè, Cucina, Vesu" },
      {
        property: "og:description",
        content:
          "Specialty coffee and Italian-leaning brunch in Vesu, Surat.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Fira+Sans:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen bg-background text-foreground">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
