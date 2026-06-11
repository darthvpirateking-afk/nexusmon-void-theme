# NEXUSMON Sovereign Theme

Two operator-grade VS Code color themes built from the NEXUSMON sovereign palette (`cosmicTokens.ts`).

## Variants

| Theme | Vibe | Best For |
|-------|------|----------|
| **NEXUSMON Sovereign** | Deep void + violet/cyan sovereignty | Daily development, cockpit work |
| **NEXUSMON Void** | Ultra-dark matrix terminal aesthetic | Late-night sessions, focused coding |

## Palette DNA

Both themes are derived from the same organism palette:

- **Void Violet** `#8B5CF6` — keywords, structure, focus
- **Prism Cyan** `#00E0FF` — functions, active elements, neural pulse
- **Authority Gold** `#FFD700` — numbers, enums, warnings
- **Hologram Teal** `#00BFA5` — strings, interfaces, success
- **Magenta Pulse** `#FF6FD8` — flow control, decorators, JSX tags
- **Erebus Cyan** `#1AFFE4` — regex, escape sequences
- **Success Bright** `#00FF88` — git additions, terminal green
- **Error Crimson** `#FF4B4B` — errors, breakpoints, deletions

## Install (Local Development)

```bash
# From the NEXUSMON repo root:
code --install-extension extensions/nexusmon-theme --force

# Or symlink for live reloading during development:
# Windows (PowerShell as Admin):
New-Item -ItemType SymbolicLink `
  -Path "$env:USERPROFILE\.vscode\extensions\nexusmon-sovereign-theme" `
  -Target "$(Get-Location)\extensions\nexusmon-theme"

# Then reload VS Code (Ctrl+Shift+P → "Reload Window")
# Select theme: Ctrl+K Ctrl+T → "NEXUSMON Sovereign" or "NEXUSMON Void"
```

## Sovereign Glass Law

Every color in this theme traces back to `cosmicTokens.ts`. No arbitrary hex values. The theme _is_ the organism.
