import { container } from "./src/Config/Dependencies/AwilixContainer";

console.log('Inicio del archivo index.ts');

container.resolve("env").config();
container.resolve("app").start();

