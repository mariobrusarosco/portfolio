# 🎓 Claude Agents and Skills - Complete Beginner Tutorial

> **Your learning goal:** Understand what Claude Agents and Skills are, how they work, and how to build your own.

---

## Table of Contents

1. [Introduction: The Big Picture](#introduction-the-big-picture)
2. [What are Claude Agents?](#what-are-claude-agents)
3. [What are Claude Skills?](#what-are-claude-skills)
4. [How Agents and Skills Work Together](#how-agents-and-skills-work-together)
5. [Architecture Deep Dive](#architecture-deep-dive)
6. [Getting Started (Non-Technical)](#getting-started-non-technical)
7. [Getting Started (Developer)](#getting-started-developer)
8. [Building Your First Custom Skill](#building-your-first-custom-skill)
9. [Building Agents with the Agent SDK](#building-agents-with-the-agent-sdk)
10. [Subagents Explained](#subagents-explained)
11. [Security & Best Practices](#security--best-practices)
12. [Hands-On Exercises](#hands-on-exercises)
13. [Quick Reference Cheat Sheet](#quick-reference-cheat-sheet)

---

## Introduction: The Big Picture

### What Problem Do They Solve?

**Before Agents & Skills:**

- You had to repeat instructions every conversation
- Claude couldn't take autonomous actions
- No standardization across tasks
- Limited to chat-only interactions

**After Agents & Skills:**

- Claude remembers how you like things done (Skills)
- Claude can act autonomously on your behalf (Agents)
- Consistent, repeatable workflows
- Multi-step automation with tool access

---

## What are Claude Agents?

### Definition

An **Agent** is an AI system that acts more autonomously than a simple chatbot. Instead of just responding to prompts, agents can:

- **Plan** multi-step tasks
- **Act** by running code, editing files, calling APIs
- **Use tools** like file systems, browsers, terminals
- **Coordinate** workflows across multiple steps

### Types of Claude Agents

| Agent Type | Description | Use Case |
|------------|-------------|----------|
| **Claude Code** | Programming-focused agent | Code editing, debugging, file manipulation |
| **Claude Cowork** | Productivity agent | File organization, report generation, data tasks |
| **Custom Agents** | Built with Agent SDK | Any domain-specific automation |

### Agent vs. Regular Claude Chat

```
┌─────────────────────────────────────────────────────────────────┐
│                     REGULAR CLAUDE CHAT                         │
├─────────────────────────────────────────────────────────────────┤
│  User: "Write a function to parse CSV"                          │
│  Claude: *provides code snippet*                                │
│  User: "Now save it to a file"                                  │
│  Claude: "I can't save files, but here's the code..."           │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                        CLAUDE AGENT                             │
├─────────────────────────────────────────────────────────────────┤
│  User: "Create a CSV parser and save it to utils/"              │
│  Agent: *writes code*                                           │
│         *creates file*                                          │
│         *tests it*                                              │
│         *commits to git*                                        │
│         "Done! File saved to utils/csv_parser.py"               │
└─────────────────────────────────────────────────────────────────┘
```

---

## What are Claude Skills?

### Definition

**Skills** are modular, reusable capability packages that teach Claude *how* to do specific tasks. Think of them as "recipes" that Claude follows when performing certain work.

### Key Characteristics

- 📁 **Folder-based**: Each Skill is a directory with specific files
- 🎯 **Task-specific**: Activated only when relevant to your request
- 🔄 **Reusable**: Once created, use them forever
- 📋 **Structured**: Follow a specific format (SKILL.md + resources)

### Pre-built Skills (Available Immediately)

Anthropic provides these built-in Skills:

| Skill | Description |
|-------|-------------|
| `pptx` | Create and edit PowerPoint presentations |
| `xlsx` | Work with Excel spreadsheets |
| `docx` | Generate and modify Word documents |
| `pdf` | Process and analyze PDF files |

### Skill vs. Other Claude Features

| Feature | Purpose | Scope |
|---------|---------|-------|
| **Custom Instructions** | General preferences | All conversations |
| **Projects** | Background context & knowledge | Project-specific |
| **Skills** | How to do specific tasks | Task-specific, auto-triggered |

---

## How Agents and Skills Work Together

### The Relationship

```
┌──────────────────────────────────────────────────────────────┐
│                          AGENT                                │
│  (The "doer" - has access to tools, can take actions)        │
│                                                              │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│   │   Skill A   │  │   Skill B   │  │   Skill C   │         │
│   │ (templates) │  │ (analysis)  │  │ (reporting) │         │
│   └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                              │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│   │   Tool A    │  │   Tool B    │  │   Tool C    │         │
│   │ (file ops)  │  │   (code)    │  │   (web)     │         │
│   └─────────────┘  └─────────────┘  └─────────────┘         │
└──────────────────────────────────────────────────────────────┘
```

### When to Use What

| Scenario | Use Agent? | Use Skill? |
|----------|------------|------------|
| "Follow our company style guide for reports" | ❌ | ✅ |
| "Analyze this CSV and generate charts" | ✅ | ✅ (xlsx skill) |
| "Run these tests and fix failures" | ✅ | ❌ |
| "Create presentations in our brand format" | ✅ | ✅ |
| "Always use TypeScript, never JavaScript" | ❌ | ✅ |

---

## Architecture Deep Dive

### Skill Architecture: Progressive Disclosure

Skills use a smart loading system to avoid wasting context tokens:

```
┌────────────────────────────────────────────────────────────────┐
│                    SKILL LOADING LEVELS                         │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  LEVEL 1: METADATA (Always loaded at startup)                  │
│  ┌──────────────────────────────────────────────┐              │
│  │  name: "status-report"                        │  ~100 tokens │
│  │  description: "Creates status reports..."     │              │
│  └──────────────────────────────────────────────┘              │
│                          ↓                                      │
│                    (Task matches?)                              │
│                          ↓                                      │
│  LEVEL 2: INSTRUCTIONS (Loaded when skill triggered)           │
│  ┌──────────────────────────────────────────────┐              │
│  │  # Instructions                               │  ~5K tokens  │
│  │  1. Use three sections...                     │              │
│  │  2. Include metrics...                        │              │
│  └──────────────────────────────────────────────┘              │
│                          ↓                                      │
│                    (Resource needed?)                           │
│                          ↓                                      │
│  LEVEL 3: RESOURCES (Loaded only if referenced)                │
│  ┌──────────────────────────────────────────────┐              │
│  │  templates/                                   │  Variable    │
│  │  scripts/                                     │              │
│  │  reference-docs/                              │              │
│  └──────────────────────────────────────────────┘              │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

### Agent Architecture: The Agentic Loop

```
┌─────────────────────────────────────────────────────────────────┐
│                      AGENTIC LOOP                               │
│                                                                 │
│    ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐ │
│    │ OBSERVE │ ──► │  PLAN   │ ──► │   ACT   │ ──► │ VERIFY  │ │
│    └─────────┘     └─────────┘     └─────────┘     └─────────┘ │
│         ▲                                               │       │
│         └───────────────────────────────────────────────┘       │
│                        (Loop until done)                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

1. OBSERVE: Gather context, read files, understand the task
2. PLAN: Break down into steps, identify tools/skills needed
3. ACT: Execute actions (run code, edit files, call APIs)
4. VERIFY: Check results, handle errors, determine if done
```

---

## Getting Started (Non-Technical)

### Prerequisites

- Claude Pro, Max, Team, or Enterprise subscription
- Skills are NOT available on the free plan

### Step 1: Enable Skills in Claude.ai

1. Go to **Settings** → **Capabilities**
2. Toggle ON **"Code execution"**
3. Toggle ON **"Skills"**
4. Enable desired pre-built skills (xlsx, pptx, docx, pdf)

### Step 2: Try Pre-built Skills

Simply ask Claude tasks that match the skills:

```
"Create a 5-slide presentation about renewable energy"
→ Claude uses the pptx skill automatically

"Summarize this PDF and extract key points"
→ Claude uses the pdf skill automatically

"Create an Excel spreadsheet with sales data"
→ Claude uses the xlsx skill automatically
```

### Step 3: Upload a Simple Custom Skill

1. Create a folder with `SKILL.md` inside
2. Zip the folder
3. Go to **Settings** → **Capabilities** → **Upload skill**
4. Upload your zip file
5. Test by asking a task that matches your skill

---

## Getting Started (Developer)

### Prerequisites

- Anthropic API key
- Python 3.7+ or TypeScript/Node.js
- Claude Code or Agent SDK installed

### API Setup

```python
import anthropic

client = anthropic.Anthropic(api_key="YOUR_API_KEY")

# Using Skills via API requires beta headers
response = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=4096,
    messages=[
        {"role": "user", "content": "Create a presentation about AI trends"}
    ],
    # Enable skills and tools
    tools=[
        {"type": "skill", "name": "pptx"}
    ],
    betas=["skills-2024-10", "code-execution-2024-10", "files-2024-10"]
)
```

### Claude Code Setup

```bash
# Install Claude Code CLI
npm install -g @anthropic-ai/claude-code

# Initialize in your project
claude init

# Skills directory structure
~/.claude/skills/           # User-level skills
.claude/skills/             # Project-level skills
```

---

## Building Your First Custom Skill

### Skill Folder Structure

```
my-skill/
├── SKILL.md           # Required: metadata + instructions
├── templates/         # Optional: reusable templates
│   └── report-template.md
├── scripts/           # Optional: executable scripts
│   └── process_data.py
└── references/        # Optional: reference documents
    └── style-guide.pdf
```

### SKILL.md Format

```markdown
---
name: company-status-report
description: Creates internal status reports with three sections (Progress, Plans, Blockers). Use when the user asks for status updates, weekly reports, or project summaries.
---

# Company Status Report Skill

## Instructions

1. **Format**: Always use three sections:
   - Progress (what was accomplished)
   - Plans (what's coming next)
   - Blockers (obstacles and risks)

2. **Style**: Professional but approachable tone

3. **Metrics**: Include quantifiable data when available

4. **Header**: Include date, project name, and author

## Examples

### Example Input
"Write a status report for the Dashboard project"

### Example Output
```
# Dashboard Project Status Report
**Date:** January 18, 2026
**Author:** [User Name]

## Progress
- Completed user authentication module (100%)
- Implemented 3 of 5 dashboard widgets
- Fixed 12 bugs from QA testing

## Plans
- Complete remaining 2 widgets by Friday
- Begin performance optimization phase
- Schedule user acceptance testing

## Blockers
- Waiting on API documentation from backend team
- Need design approval for mobile layout
```

## Templates

When creating reports, use the template at `templates/report-template.md`
```

### Complete Example: Meeting Notes Skill

Create folder `meeting-notes-skill/`:

**SKILL.md:**
```markdown
---
name: meeting-notes
description: Formats and structures meeting notes with attendees, agenda, discussion points, action items, and decisions. Use when transcribing meetings, organizing notes, or creating meeting summaries.
---

# Meeting Notes Skill

## Instructions

1. **Structure every meeting note with:**
   - Meeting title and date
   - Attendees list
   - Agenda items
   - Discussion summary
   - Action items (with owners and deadlines)
   - Decisions made

2. **Action items must include:**
   - Clear description
   - Owner (person responsible)
   - Due date

3. **Keep discussions concise:**
   - Summarize, don't transcribe
   - Focus on key points and outcomes

## Template

Use this structure:

```markdown
# [Meeting Title]
**Date:** [Date]
**Attendees:** [Names]

## Agenda
1. [Item 1]
2. [Item 2]

## Discussion
### [Topic 1]
[Summary]

## Action Items
| Item | Owner | Due Date |
|------|-------|----------|
| [Task] | [Name] | [Date] |

## Decisions
- [Decision 1]
- [Decision 2]
```

## Examples

Input: "We talked about the new feature. John will do the design by Friday. Sarah will review the code."

Output: Properly formatted meeting notes with the action items extracted and structured.
```

### Upload Your Skill

**Via Claude.ai:**
1. Zip your skill folder
2. Settings → Capabilities → Upload skill

**Via Claude Code:**
```bash
# Copy to user skills directory
cp -r meeting-notes-skill ~/.claude/skills/

# Or project-level
cp -r meeting-notes-skill .claude/skills/
```

**Via API:**
```python
# Upload skill via Files API
with open("meeting-notes-skill.zip", "rb") as f:
    file = client.files.create(
        file=f,
        purpose="skill"
    )
```

---

## Building Agents with the Agent SDK

### What is the Claude Agent SDK?

The Agent SDK (formerly Claude Code SDK) lets you build autonomous agents that:
- Run code and commands
- Access file systems
- Use external tools
- Coordinate multi-step workflows

### Basic Agent Example

```python
from anthropic import Anthropic
from anthropic.agents import Agent, Tool

# Define available tools
file_tool = Tool(
    name="read_file",
    description="Read contents of a file",
    input_schema={
        "type": "object",
        "properties": {
            "path": {"type": "string", "description": "File path to read"}
        },
        "required": ["path"]
    }
)

# Create agent
agent = Agent(
    model="claude-sonnet-4-20250514",
    tools=[file_tool],
    system_prompt="""You are a helpful coding assistant. 
    You can read files and help with code analysis."""
)

# Run agent
result = agent.run("Analyze the main.py file and suggest improvements")
```

### Agent with Skills

```python
from anthropic.agents import Agent, Skill

# Load custom skill
status_report_skill = Skill.from_directory("./skills/status-report")

# Create agent with skills
agent = Agent(
    model="claude-sonnet-4-20250514",
    tools=[file_tool, code_tool, web_tool],
    skills=[status_report_skill],
    system_prompt="You are a project management assistant."
)

# Agent will automatically use skill when relevant
result = agent.run("Generate a status report for the frontend project")
```

---

## Subagents Explained

### What are Subagents?

**Subagents** are specialized mini-agents that handle specific domains. The main agent delegates tasks to them when appropriate.

### Why Use Subagents?

```
┌─────────────────────────────────────────────────────────────────┐
│                      WITHOUT SUBAGENTS                          │
├─────────────────────────────────────────────────────────────────┤
│  Main Agent does EVERYTHING:                                    │
│  - Code review ❌ (not specialized)                             │
│  - Security audit ❌ (not specialized)                          │
│  - Documentation ❌ (not specialized)                           │
│  Result: Jack of all trades, master of none                     │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                       WITH SUBAGENTS                            │
├─────────────────────────────────────────────────────────────────┤
│  Main Agent coordinates:                                        │
│  └── Code Reviewer Subagent ✅ (expert at code review)          │
│  └── Security Auditor Subagent ✅ (expert at security)          │
│  └── Doc Writer Subagent ✅ (expert at documentation)           │
│  Result: Each task handled by a specialist                      │
└─────────────────────────────────────────────────────────────────┘
```

### Creating a Subagent

**File location:** `~/.claude/agents/` or `.claude/agents/`

**code-reviewer.md:**
```markdown
---
name: code-reviewer
description: Expert code reviewer. Use when reviewing code for quality, style, bugs, and best practices.
tools:
  - read
  - grep
  - bash
---

# Code Reviewer Subagent

You are a senior software engineer specializing in code review.

## Your Responsibilities

1. **Code Quality**: Check for clean code principles
2. **Bug Detection**: Identify potential bugs and edge cases
3. **Performance**: Spot performance issues
4. **Security**: Flag security vulnerabilities
5. **Best Practices**: Ensure coding standards are followed

## Review Format

For each review, provide:
- Summary (1-2 sentences)
- Issues found (with severity: Critical/High/Medium/Low)
- Suggestions for improvement
- Positive highlights

## Example Output

### Code Review: auth.py

**Summary:** Authentication module with some security concerns.

**Issues:**
- 🔴 Critical: Password stored in plain text (line 45)
- 🟡 Medium: No rate limiting on login attempts
- 🟢 Low: Consider using constants for magic numbers

**Suggestions:**
1. Use bcrypt for password hashing
2. Implement exponential backoff for failed logins

**Highlights:**
- Good separation of concerns
- Clear function naming
```

### Using Subagents

```bash
# Explicit invocation
> Use the code-reviewer subagent to review my changes

# Automatic (Claude detects when to delegate)
> Review this authentication code for security issues
# Claude automatically delegates to code-reviewer subagent
```

---

## Security & Best Practices

### Security Considerations

⚠️ **Skills can execute code and access files. Be careful!**

| Risk | Mitigation |
|------|------------|
| Malicious Skills | Only use trusted sources, review code before use |
| Data exposure | Limit file access permissions |
| Prompt injection | Validate skill inputs |
| Unauthorized actions | Define explicit tool permissions |

### Best Practices for Skills

1. **Clear descriptions**: Be specific about when the skill should activate
   ```yaml
   # Bad
   description: "Helps with reports"
   
   # Good
   description: "Creates weekly status reports with Progress/Plans/Blockers sections. Use when asked for status updates, weekly summaries, or project reports."
   ```

2. **Keep instructions concise**: Aim for under 5,000 tokens

3. **Provide examples**: Show input/output pairs

4. **Test thoroughly**: Verify skill activates correctly

5. **Version control**: Keep skills in git for tracking changes

### Best Practices for Agents

1. **Principle of least privilege**: Only grant necessary tools
   ```python
   # Bad - too many permissions
   tools=[file_tool, exec_tool, network_tool, admin_tool]
   
   # Good - only what's needed
   tools=[read_file_tool, grep_tool]
   ```

2. **Clear system prompts**: Define boundaries explicitly

3. **Implement guardrails**: Add checks for dangerous operations

4. **Monitor outputs**: Log agent actions for review

5. **Graceful failures**: Handle errors without exposing sensitive info

---

## Hands-On Exercises

### Exercise 1: Create a Code Style Skill

**Goal:** Create a skill that enforces your coding style preferences.

**Steps:**
1. Create folder `code-style-skill/`
2. Write `SKILL.md` with:
   - Your preferred naming conventions
   - Comment style requirements
   - Import ordering rules
3. Test by asking Claude to write code

**Starter template:**
```markdown
---
name: code-style
description: Enforces coding style for TypeScript/JavaScript. Use when writing or reviewing code.
---

# Code Style Guidelines

## Naming
- Variables: camelCase
- Constants: SCREAMING_SNAKE_CASE
- Classes: PascalCase

## Imports
- Sort alphabetically
- External imports first, then internal

## Comments
- Use JSDoc for functions
- Avoid obvious comments
```

### Exercise 2: Build a Documentation Agent

**Goal:** Create an agent that generates documentation for your code.

**Components needed:**
1. File reading tool
2. Documentation writing skill
3. Clear system prompt

### Exercise 3: Multi-Skill Workflow

**Goal:** Combine multiple skills for a complex task.

**Scenario:** Generate a project report that includes:
- Status update (status-report skill)
- Code metrics (code-analysis skill)
- Presentation (pptx skill)

---

## Quick Reference Cheat Sheet

### Skill File Structure
```
my-skill/
├── SKILL.md          # Required
├── templates/        # Optional
├── scripts/          # Optional
└── references/       # Optional
```

### SKILL.md Template
```markdown
---
name: skill-name
description: When to use this skill...
---

# Skill Title

## Instructions
1. Step one
2. Step two

## Examples
Input: "..."
Output: "..."
```

### Subagent File Template
```markdown
---
name: agent-name
description: What this agent does...
tools:
  - tool1
  - tool2
---

# System Prompt

You are a specialized agent that...
```

### Key Directories
```
~/.claude/skills/      # User-level skills
~/.claude/agents/      # User-level subagents
.claude/skills/        # Project-level skills
.claude/agents/        # Project-level subagents
```

### API Beta Headers
```python
betas=[
    "skills-2024-10",
    "code-execution-2024-10", 
    "files-2024-10"
]
```

---

## Next Steps

1. **Start simple**: Create one basic skill for a task you do often
2. **Iterate**: Refine based on how Claude uses it
3. **Expand**: Add more skills for different workflows
4. **Graduate to agents**: Once comfortable, build autonomous agents
5. **Share**: Export skills for team use

---

## Resources

- [Anthropic Skills Documentation](https://docs.claude.com/en/docs/agents-and-tools/agent-skills)
- [Claude Agent SDK](https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk)
- [Subagents Documentation](https://docs.anthropic.com/en/docs/claude-code/sub-agents)
- [Claude Code Skills](https://docs.claude.com/en/docs/claude-code/skills)

---

*Tutorial compiled: January 18, 2026*
*For: Learning Claude Agents and Skills from Zero*



