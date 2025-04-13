# ✨ AiderDesk

**Supercharge your coding workflow** with AiderDesk, a sleek desktop application that brings the power of [aider](https://aider.chat) to your fingertips with a modern GUI. Leverage AI to accelerate your coding tasks while enjoying seamless project management, cost tracking, and IDE integration.

## 🚀 Introduction

Transform your AI coding experience with AiderDesk - all the power of the Aider console tool in an intuitive desktop interface. Whether you're managing multiple projects, integrating with your favorite IDE, or tracking costs, AiderDesk elevates your productivity to new heights.

## Table of Contents
- [✨ Key Features](#-key-features)
- [📥 Installation](#-installation)
- [📸 Previews](#-previews)
- [🤖 Agent Mode & MCP Support](#-agent-mode--mcp-support)
- [📄 Comprehensive Context File Management](#-comprehensive-context-file-management)
- [💾 Session Management](#-session-management)
- [🌐 REST API](#-rest-api)
- [👨‍💻 Development Setup](#-development-setup)
- [🤝 Contributing](#-contributing)
- [⭐ Star History](#-star-history)

## 🎬 Quick Demo

<div align="center">
  <a href="https://www.youtube.com/watch?v=9JkUwn9rk2g">
    <img src="https://img.youtube.com/vi/9JkUwn9rk2g/0.jpg" alt="Demo Video" width=600>
  </a>
</div>

## ✨ Key Features

*   **🖥️ Intuitive GUI** - Replace command-line complexities with a sleek visual interface
*   **📂 Project Management** - Organize and switch between multiple codebases effortlessly
*   **🔌 IDE Integration** - Automatically manage context files in:
    * IntelliJ IDEA ([Plugin](https://plugins.jetbrains.com/plugin/26313-aiderdesk-connector) | [GitHub](https://github.com/hotovo/aider-desk-connector-intellij-plugin))
    * VSCode ([Extension](https://marketplace.visualstudio.com/items?itemName=hotovo-sk.aider-desk-connector) | [GitHub](https://github.com/hotovo/aider-desk-connector-vscode-extension))
*   **🤖 Agent Mode** - Leverage an autonomous AI agent powered by the Vercel AI SDK. The agent can use tools (including Aider itself and external MCP servers) to gather context, plan, and execute complex coding tasks.
*   **🧩 MCP Support** - Connect to Model Context Protocol servers to extend the Agent's capabilities with external tools (web search, documentation access, etc.).
*   **🌐 REST API** - Expose functionality via REST API for external tools
*   **🔑 Settings Management** - Easily configure API keys and environment variables
*   **💰 Cost Tracking** - Monitor token usage and expenses for both Aider and the Agent.
*   **📨 Structured Messages** - View code, prompts, agent thoughts, and tool outputs in a clear, organized manner
*   **📄 Comprehensive Context File Management** - Automatically manage context files via IDE plugins (IntelliJ/VSCode) or manually add/drop files using the integrated view that shows *all* project files.
*   **🔄 Model Switching** - Seamlessly switch between different AI models while preserving context
*   **🔍 Code Diff Viewer** - Review changes with side-by-side comparison
*   **⏪ One-Click Reverts** - Undo specific AI-generated changes while keeping others
*   **📋 Easy Sharing** - Copy and share code changes or conversations instantly
*   **💾 Session Management** - Save your current work (messages, context files) as a session and load it later to pick up exactly where you left off.

## 📥 Installation

### 📋 Requirements
- Python 3.9-3.12 installed on your system

### 🚀 Quick Start
1. Download the latest release for your platform from [Releases](https://github.com/hotovo/aider-desk/releases)
2. Run the downloaded executable

### 🔧 Troubleshooting

#### 🐍 Python Version Detection

If you encounter issues with the application not detecting the correct Python version, you can specify the path to the desired Python executable using the `AIDER_DESK_PYTHON` environment variable. This is typically only needed on the initial run/setup of AiderDesk.

For example, on macOS or Linux:

```bash
export AIDER_DESK_PYTHON=/usr/bin/python3.10
```

Or on Windows:

```powershell
$env:AIDER_DESK_PYTHON = "C:\Path\To\Python310\python.exe"
```

Replace `/usr/bin/python3.10` or `C:\Path\To\Python310\python.exe` with the actual path to your Python executable.

#### 🚫 Disabling Auto Updates

If you want to disable automatic updates, you can set the `AIDER_DESK_NO_AUTO_UPDATE` environment variable to `true`. This is useful in environments where you want to control when updates are applied.

For example, on macOS or Linux:

```bash
export AIDER_DESK_NO_AUTO_UPDATE=true
```

Or on Windows:

```powershell
$env:AIDER_DESK_NO_AUTO_UPDATE = "true"
```

## 📸 Previews

<div align="center">

### 🖥️ Aider Desk Interface
<img src="docs/images/aider-desk.png" alt="Aider Desk" width="800"/>
<p><em>Main application interface showing the chat interface, file management, and project overview</em></p>

### ⚙️ Configuration
<img src="docs/images/settings.png" alt="Configuration" width="800"/>
<p><em>Aider settings and preferences</em></p>

### 📂 Multiple Project Management
<img src="docs/images/multiple-projects.gif" alt="Multiple Projects" width="800"/>
<p><em>Manage and switch between multiple projects</em></p>

### 🔄 Model Switching Interface
<img src="docs/images/model-selector.gif" alt="Model Switching" width="800"/>
<p><em>Switch between different models</em></p>

### 💬 Chat Mode Selection
<img src="docs/images/chat-modes.gif" alt="Chat Modes" width="800"/>
<p><em>Switch between different chat modes</em></p>

### 🤖 Question Answering and Commands
<img src="docs/images/commands.gif" alt="Commands" width="800"/>
<p><em>Answer questions and run commands</em></p>

### 🔍 Code Diff Viewer
<img src="docs/images/code-diff.png" alt="Code Diff" width="600"/>
<p><em>Side-by-side code comparison and diff viewer</em></p>

### 💰 Cost Tracking
<img src="docs/images/cost-tracking.png" alt="Cost Tracking" width="300"/>
<p><em>Token usage and cost tracking for session per project</em></p>

### 🛠️ MCP Server Integration
<img src="docs/images/mcp-servers.gif" alt="MCP Servers" width="800"/>
<p><em>Configure and manage Model Context Protocol servers for enhanced AI capabilities</em></p>

</div>

## 🤖 Agent Mode & MCP Support

<div align="center">
  <a href="https://youtu.be/Lsd7QReXfy4">
    <img src="https://img.youtube.com/vi/Lsd7QReXfy4/0.jpg" alt="Demo Video" width=600>
  </a>
</div>

AiderDesk features a powerful **Agent mode** built on the Vercel AI SDK. This mode provides a flexible framework for an AI agent to handle complex tasks. The agent's capabilities are defined by the tools *you* provide, primarily through Model Context Protocol (MCP) servers, alongside its built-in ability to interact with Aider.

### Agent Capabilities:
- **Customizable Toolset**: The agent is not opinionated; its functionality depends entirely on the tools configured by the user. Connect it to MCP servers offering web search, documentation access, custom scripts, or any other capability you need.
- **Autonomous Task Execution**: Based on the available tools, the agent can understand requests, plan multi-step execution flows, and utilize the tools to achieve the goal.
- **Aider Integration**: Seamlessly uses Aider as a core tool for code generation, modification, and analysis tasks.
- **Multi-Provider Support**: Configure the agent to use different LLM providers like OpenAI, Anthropic, Gemini, Bedrock, Deepseek, or any OpenAI-compatible endpoint.
- **Transparent Reasoning**: Observe the agent's thought process, tool selection, and execution steps directly in the chat interface.

### 🛠️ Model Context Protocol (MCP) Integration

The Agent mode's capabilities can be significantly extended by connecting to [Model Context Protocol](https://github.com/model-context-protocol/mcp) (MCP) servers.

#### What is MCP?

MCP connects AI models to external tools like web browsers, documentation systems, and specialized programming utilities. AiderDesk can use these tools to gather information, then pass the results to Aider for implementing actual code changes.

#### How MCP Enhances the Agent:

- **External Tool Access**: Allows the agent to use tools beyond Aider, such as web browsers, documentation searchers, or custom utilities hosted on MCP servers.
- **Broader Context**: Enables the agent to gather information from external sources before instructing Aider to make code changes.
- **Flexible Configuration**: Enable/disable specific MCP servers or individual tools within the Agent settings.

AiderDesk should work with any MCP-compatible server. The agent can be configured to use tools from these servers alongside its built-in capabilities (like interacting with Aider).

#### Built-in AiderDesk MCP Server

AiderDesk comes with a built-in MCP server that provides tools for interacting with the AiderDesk API. This allows you to use MCP to manage context files, run prompts, and more.

#### Configuration

To use the built-in MCP server, add the following configuration to your MCP settings:

<details>
  <summary>Windows</summary>

```json
{
  "mcpServers": {
    "aider-desk": {
      "command": "node",
      "args": ["path-to-appdata/aider-desk/mcp-server/aider-desk-mcp-server.js", "/path/to/project"],
      "env": {
        "AIDER_DESK_API_BASE_URL": "http://localhost:24337/api"
      }
    }
  }
}
```

**Note:** Replace `path-to-appdata` with the absolute path to your AppData directory. You can find this value by running `echo %APPDATA%` in your command prompt.
</details>

<details>
  <summary>macOS</summary>

```json
{
  "mcpServers": {
    "aider-desk": {
      "command": "node",
      "args": ["/path/to/home/Library/Application Support/aider-desk/mcp-server/aider-desk-mcp-server.js", "/path/to/project"],
      "env": {
        "AIDER_DESK_API_BASE_URL": "http://localhost:24337/api"
      }
    }
  }
}
```

**Note:** Replace `/path/to/home` with the absolute path to your home directory. You can find this value by running `echo $HOME` in your terminal.
</details>

<details>
  <summary>Linux</summary>

```json
{
  "mcpServers": {
    "aider-desk": {
      "command": "node",
      "args": ["/path/to/home/.config/aider-desk/mcp-server/aider-desk-mcp-server.js", "/path/to/project"],
      "env": {
        "AIDER_DESK_API_BASE_URL": "http://localhost:24337/api"
      }
    }
  }
}
```

**Note:** Replace `/path/to/home` with the absolute path to your home directory. You can find this value by running `echo $HOME` in your terminal.
</details>

The server supports the following:

**Command-line arguments:**
- First argument: Project directory path (default: current directory)

**Environment variables:**
- `AIDER_DESK_API_BASE_URL`: The base URL of the AiderDesk API (default: http://localhost:24337/api)

With this configuration, the MCP server will automatically use the specified project directory for all tool calls, so you don't need to specify the project directory when using the tools.

#### Available Tools

The AiderDesk MCP server provides the following tools:

- `add_context_file`: Add a file to the context of AiderDesk
- `drop_context_file`: Remove a file from the context of AiderDesk
- `get_context_files`: Get the list of context files in AiderDesk
- `get_addable_files`: Get the list of project files that can be added to the context context
- `run_prompt`: Run a prompt in AiderDesk

These tools allow MCP clients (Claude Desktop, Claude Code, Cursor, Windsurf...) to interact with your AiderDesk, managing context files and running prompts.

**Note:** The AiderDesk application must be running for the MCP server to function.

## 📄 Comprehensive Context File Management

<div align="center">
  <a href="https://youtu.be/_hA1_NJDK3s">
    <img src="https://img.youtube.com/vi/_hA1_NJDK3s/0.jpg" alt="Context Files Demo Video" width=400>
  </a>
</div>

Keep your AI context perfectly synchronized with the files relevant to your current task. AiderDesk offers two flexible ways to manage context files:

1.  **Automatic Management via IDE Plugins**: Integrate AiderDesk with your favorite IDE (IntelliJ IDEA or VSCode) using our dedicated plugins. The plugins automatically add the currently active file(s) in your editor to the AiderDesk context and remove them when you switch away. This ensures the AI always has the most relevant code in view.
    *   IntelliJ IDEA ([Plugin](https://plugins.jetbrains.com/plugin/26313-aiderdesk-connector) | [GitHub](https://github.com/hotovo/aider-desk-connector-intellij-plugin))
    *   VSCode ([Extension](https://marketplace.visualstudio.com/items?itemName=hotovo-sk.aider-desk-connector) | [GitHub](https://github.com/hotovo/aider-desk-connector-vscode-extension))
2.  **Manual Management via Sidebar**: Use the dedicated "Context Files" panel within AiderDesk. This panel can display *all* files within your project directory. Simply click on any file to add it to or remove it from the AI's context. This provides granular control when you need to include specific files beyond what's currently open in your editor.

This combination allows for both seamless, automated context tracking and precise manual control over the information provided to the AI.

## 💾 Session Management

<div align="center">
  <a href="https://youtu.be/eFCod0fOhjI">
    <img src="https://img.youtube.com/vi/eFCod0fOhjI/0.jpg" alt="Sessions Demo Video" width=400>
  </a>
</div>

Never lose your train of thought or coding progress again. AiderDesk's session management allows you to save the complete state of your current workspace, including:

-   **Chat History**: All messages exchanged with the AI.
-   **Context Files**: The list of files currently included in the AI's context.

You can save multiple named sessions per project. Later, simply load a session to restore the chat history and context files exactly as they were, allowing you to seamlessly switch between different tasks, branches, or experiments without losing valuable context. This is particularly useful for:

-   Managing multiple features or bug fixes within the same project.
-   Pausing work on a complex task and resuming later.
-   Comparing different approaches or AI interactions side-by-side.

## 🌐 REST API

AiderDesk provides a REST API for external tools to interact with the application. The API is running on the same port as the main application (default 24337, configurable by `AIDER_DESK_PORT` environment variable).

#### Add Context File

<details>
  <summary><code>/api/add-context-file</code></summary>

- **Method:** POST
- **Request Body:**
  ```json
  {
    "projectDir": "path/to/your/project",
    "path": "path/to/the/file",
    "readOnly": false
  }
  ```
- **Response:**
  ```json
  [
    {
      "path": "path/to/the/file",
      "readOnly": false
    }
  ]
  ```
  Returns the list of context files in the project.
</details>

#### Drop Context File

<details>
  <summary><code>/api/drop-context-file</code></summary>

- **Method:** POST
- **Request Body:**
  ```json
  {
    "projectDir": "path/to/your/project",
    "path": "path/to/the/file"
  }
  ```
- **Response:**
  ```json
  []
  ```
  Returns the list of context files in the project.
</details>

#### Get Context Files

<details>
  <summary><code>/api/get-context-files</code></summary>

- **Method:** POST
- **Request Body:**
  ```json
  {
    "projectDir": "path/to/your/project"
  }
  ```
- **Response:**
  ```json
  [
    {
      "path": "path/to/the/file",
      "readOnly": false
    }
  ]
  ```
  Returns the list of context files in the project.
</details>

#### Get Addable Files

<details>
  <summary><code>/api/get-addable-files</code></summary>

- **Method:** POST
- **Request Body:**
  ```json
  {
    "projectDir": "path/to/your/project",
    "searchRegex": "optional/regex/filter"
  }
  ```
- **Response:**
  ```json
  [
    {
      "path": "path/to/the/file"
    }
  ]
  ```
  Returns the list of files that can be added to the project.
</details>

#### Run Prompt

<details>
  <summary><code>/api/run-prompt</code></summary>

- **Endpoint:** `/api/run-prompt`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "projectDir": "path/to/your/project",
    "prompt": "Your prompt here",
    "editFormat": "code" // Optional: "code", "ask", or "architect"
  }
  ```
- **Response:**
  ```json
  [
    {
      "messageId": "unique-message-id",
      "baseDir": "path/to/your/project",
      "content": "The AI generated response",
      "reflectedMessage": "Optional reflected message",
      "editedFiles": ["file1.txt", "file2.py"],
      "commitHash": "a1b2c3d4e5f6",
      "commitMessage": "Optional commit message",
      "diff": "Optional diff content",
      "usageReport": {
        "sentTokens": 100,
        "receivedTokens": 200,
        "messageCost": 0.5,
        "totalCost": 1.0,
        "mcpToolsCost": 0.2
      }
    }
  ]
  ```
</details>

## 👨‍💻 Development Setup
If you want to run from source, you can follow these steps:

```bash
# Clone the repository
$ git clone https://github.com/hotovo/aider-desk.git
$ cd aider-desk

# Install dependencies
$ npm install

# Run in development mode
$ npm run dev

# Build executables
# For Windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help improve aider-desk:

1. **Fork the repository** on GitHub
2. **Create a new branch** for your feature or bugfix:
   ```bash
   git checkout -b my-feature-branch
   ```
3. **Commit your changes** with clear, descriptive messages
4. **Push your branch** to your fork
5. **Create a Pull Request** against the main branch of the original repository

Please follow these guidelines:
- Keep PRs focused on a single feature or bugfix
- Update documentation when adding new features
- Follow the existing code style and conventions
- Write clear commit messages and PR descriptions

For major changes, please open an issue first to discuss what you would like to change.

## ⭐ Star History

[![Star History
Chart](https://api.star-history.com/svg?repos=hotovo/aider-desk&type=Date)](https://star-history.com/#hotovo/aider-desk&Date)

Thank you ❤️
