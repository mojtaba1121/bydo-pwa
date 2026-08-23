# Bydo PWA — Agent Development Guide

This file is the source of truth for every agent or developer extending Bydo. Read it before changing code.

## Product

Bydo is a Persian-first shared-bicycle PWA. The primary flow is: sign in → find station → select/reserve bike → inspect/report damage → scan QR/unlock → ride → dock/end ride. Persian and RTL are the default; multilingual support must not be blocked.

## Stack and commands

- Angular 20 standalone components, strict TypeScript, Angular Router, Angular Service Worker.
- Install: `npm ci`
- Development: `npm start`
- Production gate: `npm run build`
- Do not introduce another UI framework or state library without a clear project-level need.

## Architecture

- `src/app/core/`: domain models, API contracts, application-wide services and guards.
- `src/app/shared/`: reusable presentational components, directives and pipes. Shared UI must not fetch data.
- `src/app/features/<feature>/`: route pages and feature-local components.
- Each major user flow gets its own route. Keep page components orchestration-focused; extract repeated or complex UI.
- Future server calls belong behind typed services/adapters. Never call `fetch` directly from templates/components.
- Demo data currently lives in `core/models.ts`. Replace it incrementally with adapters; keep route components stable.

## Design system

Base reference: Figma `Ui Kit My City`, file key `MLB9n5ddUsDO5dRGvOgVXq`, page `1:3`.

- Always inspect the relevant Figma node before implementing a Figma-specified screen.
- Primary palette from the kit: `#001200`, `#002C00`, `#0F5F00`, `#287816`, `#429130`, `#5BAB49`, `#7CBC6D`, `#9DCD92`, `#BDDDB6`, `#DEEEDB`.
- Global tokens are defined in `src/styles.css`; use variables, never repeat brand hex values in feature styles.
- Default font is Vazirmatn. Body copy must remain readable at mobile sizes; avoid text below 10px for essential content.
- Corner language: 12–24px for product surfaces, pill only for badges/actions. Use quiet borders, soft green surfaces and restrained shadows.
- Icons use `lucide-angular`. Do not hand-author SVG icons; add a trusted icon or use an exported Figma asset.
- Mobile-first target width is 360–520px. Validate at 360px and a desktop viewport.

## RTL, localization and copy

- Keep `lang="fa"` and `dir="rtl"` at document level. Use logical CSS properties (`margin-inline`, `padding-inline`, `inset-inline`) for new code.
- Never reverse numbers/codes accidentally. Bike IDs, timers and technical codes should use `direction:ltr` where needed.
- User-facing Persian should be short, warm and conversational. Technical errors are never shown raw.
- New text should be easy to extract to Angular i18n later; do not concatenate sentence fragments in TypeScript.

## Product and safety rules

- Never imply a physical lock opened until the backend confirms it.
- Reservation countdown must be based on a server expiry timestamp in production, not a client-only counter.
- End-ride requires backend confirmation that the bike is docked/locked; include retry and a support path.
- Camera, location and notification permissions require an explanation before the browser prompt.
- Do not log phone numbers, auth tokens, precise location history or QR payloads.
- Store auth secrets in secure server-managed sessions; never localStorage.

## Accessibility and quality gate

- Interactive controls need accessible names and visible focus states. Touch targets are at least 44×44px.
- Color must not be the only status cue. Maintain WCAG AA contrast for essential text/actions.
- Every new route includes loading, empty, error and retry behavior once connected to APIs.
- Before commit: run `npm run build`; add/update tests for non-trivial logic; inspect `git diff` for secrets and unrelated changes.
- Do not commit generated `dist/`, `.angular/`, local environment files or credentials.

## Git workflow

- Keep commits small and coherent with imperative messages (`feat: add station bike selection`).
- Preserve existing user changes. Do not force-push, rewrite shared history or commit secrets.
- Update this file when architecture, tokens, commands or non-obvious product rules change.
