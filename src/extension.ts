import * as vscode from 'vscode';

let statusBarItem: vscode.StatusBarItem;
let whisperInterval: NodeJS.Timeout | undefined;

const WHISPERS = [
  "System: A shadow has been extracted.",
  "System: The Monarch is watching.",
  "Navi: Digital World synced. Anomaly detected.",
  "PET: Jack In successful. Network is stable.",
  "System: He left it behind... The Network remembers.",
  "Arise.",
  "System: New quest generated. Survive."
];

const GLITCH_CHARS = ["#", "@", "%", "&", "!", "?", "0", "1", "█", "▓", "▒", "░"];

export function activate(context: vscode.ExtensionContext) {
  // Create Status Bar Item
  statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  statusBarItem.command = 'nexusmon.arise';
  statusBarItem.text = `$(pulse) [💠 NAVI: ONLINE ]`;
  statusBarItem.tooltip = "NEXUSMON: The System is active.";
  statusBarItem.color = "#00F0FF";
  statusBarItem.show();
  context.subscriptions.push(statusBarItem);

  // Register Arise Command
  const ariseCmd = vscode.commands.registerCommand('nexusmon.arise', () => {
    vscode.window.showInformationMessage('Arise. The Shadow Monarch has awakened.');
    glitchStatusBar();
  });
  context.subscriptions.push(ariseCmd);

  // Register Jack In Command
  const jackInCmd = vscode.commands.registerCommand('nexusmon.jackIn', () => {
    const channel = vscode.window.createOutputChannel("NEXUSMON PET");
    channel.show();
    channel.appendLine("[ CONNECTING TO DIGITAL WORLD... ]");
    setTimeout(() => channel.appendLine("=> Handshake with Code Crown... OK"), 500);
    setTimeout(() => channel.appendLine("=> Shadow Extraction Protocol... OK"), 1000);
    setTimeout(() => channel.appendLine("=> Jack In: Execute."), 1500);
    setTimeout(() => {
      vscode.window.showInformationMessage('System: Cyberspace NetBattle Ready.');
      glitchStatusBar();
    }, 2000);
  });
  context.subscriptions.push(jackInCmd);

  // Hook into document save to trigger a glitch
  const saveEvent = vscode.workspace.onDidSaveTextDocument(() => {
    glitchStatusBar();
  });
  context.subscriptions.push(saveEvent);

  // Setup random whispers (every 10-30 minutes)
  const scheduleWhisper = () => {
    const delay = Math.floor(Math.random() * (30 - 10 + 1) + 10) * 60 * 1000;
    whisperInterval = setTimeout(() => {
      const whisper = WHISPERS[Math.floor(Math.random() * WHISPERS.length)];
      vscode.window.showInformationMessage(whisper);
      glitchStatusBar();
      scheduleWhisper(); // Schedule the next one
    }, delay);
  };
  scheduleWhisper();
}

function glitchStatusBar() {
  if (!statusBarItem) return;
  const originalText = `$(pulse) [💠 NAVI: ONLINE ]`;
  let glitchCount = 0;
  
  const glitcher = setInterval(() => {
    const randomChar = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
    const randomChar2 = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
    statusBarItem.text = `$(pulse) [${randomChar} N${randomChar2}VI: GLITCH]`;
    statusBarItem.color = "#FF00FF";
    glitchCount++;
    
    if (glitchCount > 5) {
      clearInterval(glitcher);
      statusBarItem.text = originalText;
      statusBarItem.color = "#00F0FF";
    }
  }, 100);
}

export function deactivate() {
  if (whisperInterval) {
    clearTimeout(whisperInterval);
  }
}
