# JAC San Diego Sur

Sitio web + aplicación instalable (PWA) de la **Junta de Acción Comunal San Diego Sur**
— Comuna 10, La Candelaria, Medellín.

## Estructura

- `index.html` → portada (pantalla de bienvenida).
- `inicio.html` → página principal (historia, comisiones, territorio, noticias).
- `r_territorio.html`, `r_lajunta.html`, `r_comisiones.html`, `r_directiva.html`,
  `r_noticias.html`, `r_galeria.html`, `r_vitrina.html`, `r_transparencia.html`,
  `r_contacto.html`, `r_afiliacion.html`, `r_registro.html` → secciones.
- `noticia-detalle.html`, `negocio-detalle.html` → páginas de ejemplo (noticia y negocio).
- `manifest.webmanifest` + `sw.js` → hacen el sitio instalable como app (PWA).
- `assets/` → logo, fotos, mapas e íconos de la app.

Sitio estático en HTML/CSS/JS. No requiere compilación ni servidor.

## Ver en local (Codespaces o PC)

Por el Service Worker, ábrelo con un servidor local (no con `file://`):

```bash
python3 -m http.server 8000
# luego abre http://localhost:8000
```

En Codespaces, al correr ese comando usa el puerto reenviado que te ofrece.

## Publicar con GitHub Pages (HTTPS gratis → la app se instala)

1. Settings → **Pages**.
2. En "Build and deployment": Source = **Deploy from a branch**.
3. Branch = `main`, carpeta = `/ (root)` → **Save**.
4. En 1–2 minutos queda en `https://<usuario>.github.io/JAC/`.

Esa URL es HTTPS, así que desde el celular aparecerá la opción **Instalar app**.

## Nota sobre la app (PWA)

La app ES este mismo sitio. Al "instalar" se guarda como aplicación en el
celular/computador. Las rutas son relativas, por lo que funciona igual en la raíz
de un dominio (Hostinger) o en subcarpeta (GitHub Pages).
