# set shell := ["powershell.exe", "-c"]
set shell := ["cmd.exe", "/c"]

packageName := "Rohit 19060 Github IO"

default:
    @echo "Welcome to {{packageName}}"
    @just --list

# Build the project
[group('dev')]
dev:
    bun run dev

# Build the project for Dev testing
[group('dev')]
build:
    bun run build

# Preview the Project
[group('dev')]
preview:
    bun run preview
