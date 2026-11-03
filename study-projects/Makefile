# Variables
NAME ?= study-projects
TEMPLATE ?= react-ts

.PHONY: install dev storybook-start storybook-stop storybook-stop-port

PID_FILE := .storybook.pid

install:
	npm install

dev:
	npm run dev

storybook-start:
	@echo "Starting Storybook in the background..."
	@npm run storybook > storybook.log 2>&1 &
	@echo "Storybook is launching in the background."

storybook-stop:
	@echo "Stopping Storybook..."
	@taskkill //F //IM node.exe //T 2>kill.log || true
	@echo "Stopped."

storybook-stop-port:
	@echo "Killing process on port 6006..."
	@npx kill-port 6006