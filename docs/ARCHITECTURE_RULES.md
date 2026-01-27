# Domain Driven Architecture Rules

This document defines the strict architectural rules for this project. All AI agents and developers must follow these guidelines when creating new features or files.

## 1. Domain-Based Structure

All business logic, UI components, and state management must be organized by **Domain** in `src/domains/`.

**Do not** create top-level folders like `src/components`, `src/hooks`, or `src/utils` for feature-specific code. Use the `global` domain for shared items if absolutely necessary.

## 2. Standard Domain Structure

Every new domain created in `src/domains/[domain-name]/` MUST follow this exact directory structure:

```tree
src/domains/[domain-name]/
├── api/          # API integration (fetchers, mutations, query options)
├── components/   # React components specific to this domain
├── hooks/        # Custom React hooks (logic encapsulations)
├── schemas/      # Zod schemas (validation)
├── types/        # TypeScript interfaces and types
└── utils/        # Domain-specific helper functions (optional)
```

### 2.1 File Placement Rules

| File Type     | Correct Location                   | Example                                 |
| :------------ | :--------------------------------- | :-------------------------------------- |
| **API Call**  | `src/domains/[domain]/api/`        | `userConfig.ts`, `fetchPayments.ts`     |
| **Component** | `src/domains/[domain]/components/` | `UserProfile.tsx`, `Paymentlist.tsx`    |
| **Hook**      | `src/domains/[domain]/hooks/`      | `useAuth.ts`, `usePaymentCalculator.ts` |
| **Schema**    | `src/domains/[domain]/schemas/`    | `userSchema.ts`, `paymentFormSchema.ts` |
| **Type**      | `src/domains/[domain]/types/`      | `User.ts`, `Payment.ts`                 |

## 3. Naming Conventions

- **Domains**: `kebab-case` (e.g., `user-profile`, `payment-processing`).
- **Components**: `PascalCase` (e.g., `UserProfile.tsx`).
- **Hooks**: `camelCase` starting with `use` (e.g., `useUserData.ts`).
- **Functions/Utils**: `camelCase` (e.g., `formatCurrency.ts`).

## 4. Workflows

### Creating a New Domain

When asked to creating a new feature (e.g., "blog"):

1.  Create the folder `src/domains/blog`.
2.  Scaffold the standard subdirectories (`api`, `components`, `hooks`, `schemas`, `types`).
3.  Place files immediately into these subdirectories.

### Shared Resources

- Use `src/domains/global` for truly universal utilities, hooks, or UI components (like Buttons, Inputs).
- Use `src/domains/components-library` for the core design system components (e.g., `card.tsx`, `button.tsx`).

## 5. Imports

- Prefer absolute imports using the `@` alias.
  - `@/domains/blog/components/PostList`
  - `@/domains/global/hooks/useWindowSize`

---

**AI Instruction:** ALWAYS check this file before generating a file structure for a new feature.
