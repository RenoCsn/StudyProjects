# Variables
NAME ?= study-projects
TEMPLATE ?= react-ts

DEV_PORT := 3000
DEV_PID := .dev.pid
DEV_LOG := dev.log

STORYBOOK_PORT := 6006
STORYBOOK_PID := .storybook.pid
STORYBOOK_LOG := storybook.log

.PHONY: install dev dev-start dev-stop dev-status dev-logs \
	storybook-start storybook-stop storybook-status storybook-logs storybook-stop-port

install:
	npm install

dev:
	npm run dev

dev-start:
	@if [ -f $(DEV_PID) ]; then \
		PID=$$(tr -d '[:space:]' < $(DEV_PID)); \
		if tasklist //FI "PID eq $$PID" | grep -q "$$PID"; then \
			echo "Already running (PID $$PID). Stop it with: make dev-stop"; \
			exit 0; \
		fi; \
		rm -f $(DEV_PID); \
	fi
	@echo "Starting Vite in the background..."
	@powershell -NoProfile -Command '$$p = Start-Process -FilePath cmd.exe -ArgumentList "/c","npm run dev > $(DEV_LOG) 2>&1" -WorkingDirectory (Get-Location).Path -WindowStyle Hidden -PassThru; Set-Content -Path "$(DEV_PID)" -Value $$p.Id -Encoding ascii; Write-Output ("PID " + $$p.Id)'
	@echo "Vite is launching at http://localhost:$(DEV_PORT)"
	@echo "Logs: $(DEV_LOG)    Stop with: make dev-stop"

dev-stop:
	@echo "Stopping Vite..."
	@if [ -f $(DEV_PID) ]; then \
		taskkill //F //PID $$(tr -d '[:space:]' < $(DEV_PID)) //T || true; \
		rm -f $(DEV_PID); \
	else \
		echo "No PID file. Freeing port $(DEV_PORT)..."; \
		npx --yes kill-port $(DEV_PORT); \
	fi
	@echo "Stopped."

dev-status:
	@if [ -f $(DEV_PID) ]; then \
		PID=$$(tr -d '[:space:]' < $(DEV_PID)); \
		echo "PID file: $$PID"; \
		tasklist //FI "PID eq $$PID"; \
	else \
		echo "Not running (no $(DEV_PID))."; \
	fi

dev-logs:
	@tail -n 40 $(DEV_LOG)

storybook-start:
	@if [ -f $(STORYBOOK_PID) ]; then \
		PID=$$(tr -d '[:space:]' < $(STORYBOOK_PID)); \
		if tasklist //FI "PID eq $$PID" | grep -q "$$PID"; then \
			echo "Already running (PID $$PID). Stop it with: make storybook-stop"; \
			exit 0; \
		fi; \
		rm -f $(STORYBOOK_PID); \
	fi
	@echo "Starting Storybook in the background..."
	@powershell -NoProfile -Command '$$p = Start-Process -FilePath cmd.exe -ArgumentList "/c","npm run storybook > $(STORYBOOK_LOG) 2>&1" -WorkingDirectory (Get-Location).Path -WindowStyle Hidden -PassThru; Set-Content -Path "$(STORYBOOK_PID)" -Value $$p.Id -Encoding ascii; Write-Output ("PID " + $$p.Id)'
	@echo "Storybook is launching at http://localhost:$(STORYBOOK_PORT)"
	@echo "Logs: $(STORYBOOK_LOG)    Stop with: make storybook-stop"

storybook-stop:
	@echo "Stopping Storybook..."
	@if [ -f $(STORYBOOK_PID) ]; then \
		taskkill //F //PID $$(tr -d '[:space:]' < $(STORYBOOK_PID)) //T || true; \
		rm -f $(STORYBOOK_PID); \
	else \
		echo "No PID file. Freeing port $(STORYBOOK_PORT)..."; \
		npx --yes kill-port $(STORYBOOK_PORT); \
	fi
	@echo "Stopped."

storybook-status:
	@if [ -f $(STORYBOOK_PID) ]; then \
		PID=$$(tr -d '[:space:]' < $(STORYBOOK_PID)); \
		echo "PID file: $$PID"; \
		tasklist //FI "PID eq $$PID"; \
	else \
		echo "Not running (no $(STORYBOOK_PID))."; \
	fi

storybook-logs:
	@tail -n 40 $(STORYBOOK_LOG)

storybook-stop-port:
	@echo "Killing process on port $(STORYBOOK_PORT)..."
	@npx --yes kill-port $(STORYBOOK_PORT)
