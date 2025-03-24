run:
	npm install
	npx tsc
	node dist/index.js

dev:
	npm install
	npx tsx src/index.ts

init:
	npm init -y
	npm install express socket.io cors
	npm install -D typescript tsx @types/node @types/express @types/cors @types/socket.io
	npx tsc --init
	mkdir -p src/routes src/sockets logs dist

clean:
	rm -rf node_modules dist package-lock.json
