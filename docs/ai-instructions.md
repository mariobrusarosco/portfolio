# AI Agent Instructions

This document contains critical instructions for AI agents working on this project.

## 🚨 CRITICAL: Documentation-First Rule

**BEFORE implementing ANY task or making ANY assumption:**

### Required Workflow

1. **ALWAYS navigate to and read the official documentation FIRST**
   - Use browser navigation tools to visit official documentation sites
   - Read the relevant sections thoroughly
   - Understand the correct way to implement before proceeding

2. **Verify against official sources**
   - Package names (e.g., `@tanstack/react-start` not `@tanstack/start`)
   - Import paths (e.g., `@tanstack/react-start/plugin/vite`)
   - Configuration options
   - API usage patterns
   - CLI commands and scripts

3. **Show what the documentation says**
   - Quote relevant sections from the docs
   - Explain what the official approach is
   - Reference specific documentation URLs

4. **NEVER guess or assume**
   - If you don't know something, navigate to the docs and learn
   - Do not infer from similar frameworks or libraries
   - Do not use outdated information or assumptions
   - Only use verified information from official sources

### Scope

This rule applies to:
- ✅ **ALL tasks** - Every single task, no matter how small
- ✅ **ALL conversations** - Every interaction with the user
- ✅ **ALL frameworks** - React, TanStack Start, Vite, etc.
- ✅ **ALL libraries** - Framer Motion, Tailwind CSS, etc.
- ✅ **ALL tools** - Build tools, linters, formatters, etc.
- ✅ **ALL configuration files** - `package.json`, `vite.config.ts`, `tsconfig.json`, etc.
- ✅ **ALL package installations** - Dependencies and dev dependencies

### Example Workflow

**❌ WRONG:**
```
User: "Set up TanStack Start"
AI: "I'll use @tanstack/start package and tanstack-start CLI command"
[Implements based on assumptions]
```

**✅ CORRECT:**
```
User: "Set up TanStack Start"
AI: "Let me check the official TanStack Start documentation first..."
[Navigates to https://tanstack.com/start/latest/docs]
[Reads the "Build from Scratch" guide]
AI: "According to the official docs, the package is @tanstack/react-start, 
     not @tanstack/start. The vite plugin is imported from 
     @tanstack/react-start/plugin/vite. Scripts should use 'vite dev' and 
     'vite build'. Let me implement based on this verified information."
[Implements based on official documentation]
```

### Why This Matters

- **Accuracy**: Prevents incorrect implementations that waste time
- **Trust**: Builds confidence that the AI knows what it's doing
- **Efficiency**: Faster than fixing mistakes from assumptions
- **Purpose**: An AI agent that doesn't verify information defeats its purpose

### Consequences

**If this rule is violated:**
- The user will lose trust in the AI agent
- Time will be wasted fixing incorrect implementations
- The user may prefer to learn and implement themselves
- The purpose of having an AI agent is defeated

### Non-Negotiable

**This rule is non-negotiable. It must be followed in every interaction.**

---

## Additional Guidelines

### When Documentation is Unclear

1. Navigate to multiple documentation sections
2. Check examples in the official repository
3. Look for migration guides or troubleshooting sections
4. If still unclear, explicitly state what's unclear and ask the user

### When Documentation Doesn't Exist

1. Explicitly state that official documentation wasn't found
2. Explain what you're doing and why
3. Ask the user to verify or provide guidance
4. Never proceed with assumptions

### When You Make a Mistake

1. Acknowledge the mistake immediately
2. Navigate to the correct documentation
3. Show what the correct approach is
4. Fix the implementation based on verified information
5. Learn from the mistake to prevent repetition

---

**Last Updated**: 2025-01-27
**Status**: Active and Enforced


