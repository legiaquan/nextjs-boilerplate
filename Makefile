# Define OS-specific commands
ifeq ($(OS),Windows_NT)
    DEL = del
    RMDIR = rmdir /s /q
else
    DEL = rm -f
    RMDIR = rm -rf
endif

# Install dependencies
i: install
install:
	@make check-node-version
	@echo "Running npm install"
	npm install

# Target for running ESLint with auto-fix
eslint:
	npx eslint --fix .

# Target for checking TypeScript types
check-types:
	npm run check-types

check-node-version:
	npm run check-node-version

pull-code:
	git pull

# Target for formatting code with Prettier
prettier:
	npx prettier \
		--arrow-parens always \
		--bracket-same-line false \
		--bracket-spacing true \
		--embedded-language-formatting auto \
		--html-whitespace-sensitivity css \
		--single-quote true \
		--tab-width 2 \
		--use-tabs false \
		--write .

lint: eslint prettier
# Combined pre-commit checks
pre-commit: pull-code eslint check-types prettier

# Initialize the project (example placeholder)

init: install


# Reinstall dependencies and clean up
re-install: clean install

# Clean up package-lock.json and node_modules
clean:
	@echo "Removing package-lock.json"
	$(DEL) package-lock.json
	@echo "Removing node_modules directory"
	$(RMDIR) node_modules
