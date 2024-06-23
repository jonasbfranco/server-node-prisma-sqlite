### video
https://youtu.be/KjZ5RmrSptI?si=ixqP219fK8Sq2zI0

### criar pasta
- mkdir server-node

### iniciar projeto
- npm init -y

### instalar gerenciador de pacotes pnpm
- npm install -g pnpm

### instalar servidor fastify
- pnpm install fastify

### instalar pacotes desenvolvimento
- pnpm i @types/node -D
- pnpm i tsx -D
- pnpm i typescript -D

### instalar prisma
- pnpm i prisma -D

### driver prisma para SQLite
- npx prisma init --datasource-provider SQLite

### gerar as tabelas (migrations)
- npx prisma migrate dev

### abrir o banco de dados
- npx prisma studio
  
  