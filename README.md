# Pokémon Microfrontend

Proyecto compuesto por un **Shell** y dos microfrontends independientes:

- `pokemon-detail`
- `pokemon-history`

## Requisitos previos

- Node.js instalado.
- Pnpm instalado.


## Instalación

Instala las dependencias de cada aplicación desde la raíz del proyecto:

```bash

cd apps/pokemon-detail
pnpm install

cd ../pokemon-history
pnpm install

cd ../shell
pnpm install
```

Este proyecto no requiere archivos ni variables de entorno.

## Scripts

Cada aplicación dispone de sus propios scripts:

| Comando | Descripción |
| --- | --- |
| `pnpm install` | Instala las dependencias de la aplicación. |
| `pnpm run dev` | Inicia la aplicación en modo desarrollo. |
| `pnpm run serve` | Genera el build y lo ejecuta mediante un servidor local. |


Los comandos deben ejecutarse dentro de la carpeta correspondiente a cada aplicación.

## Levantar el Shell y los microfrontends

Cada aplicación debe ejecutarse en una terminal independiente.

### Terminal 1: `pokemon-detail`

```bash
cd pokemon-detail
pnpm run serve
```

### Terminal 2: `pokemon-history`

```bash
cd pokemon-history
pnpm run serve
```

### Terminal 3: `shell`

```bash
cd shell
pnpm run serve
```

Una vez iniciados los tres proyectos, accede a:

[http://localhost:3000/](http://localhost:3000/)

## Conectarse

```bash
usuario: pokemaster
password: 123456
```

## Decisiones técnicas

- **Arquitectura microfrontend:** permite dividir la aplicación en funcionalidades independientes.
- **Shell:** funciona como punto de entrada y se encarga de integrar los microfrontends.
- **Separación por dominio:** `pokemon-detail` gestiona el detalle de un Pokémon y `pokemon-history` gestiona el historial de consultas.
- **Desarrollo independiente:** cada microfrontend posee sus propias dependencias, scripts y ciclo de desarrollo.
- **Integración centralizada:** el `shell` define cómo se cargan y presentan los microfrontends.
- **Escalabilidad:** la arquitectura facilita añadir nuevas funcionalidades sin modificar toda la aplicación.
- **Configuración simple:** no se utilizan variables de entorno; la configuración necesaria se encuentra definida en el código y en los archivos de configuración de cada aplicación.
- **Estrategia de Historial:** se mantuvo la estructura referencial ya que cumple con todo lo requerido 

