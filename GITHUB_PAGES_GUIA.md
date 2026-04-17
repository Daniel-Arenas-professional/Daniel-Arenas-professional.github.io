# 📚 Guía: Cómo subir tu Portfolio a GitHub Pages

## Paso 1: Crear un repositorio en GitHub

1. Ve a [github.com](https://github.com/new)
2. Inicia sesión con tu cuenta (o crea una si no tienes)
3. Rellena los campos:
   - **Repository name**: Elige un nombre (ej: `portfolio` o `mi-portfolio`)
   - **Description**: "Mi portfolio profesional de Logística"
   - **Public**: Asegúrate de que esté en "Public" ✓
   - No necesitas inicializar con README (ya lo tenemos)
4. Click en **Create repository**

## Paso 2: Configurar Git en tu máquina

En Terminal, navega a tu carpeta del proyecto:

```bash
cd "/Users/dapper/Documents/Daniel Arenas Web"
```

Inicializa el repositorio local:
```bash
git init
```

Agrega todos los archivos:
```bash
git add .
```

Crea el primer commit:
```bash
git commit -m "Primer commit: Portfolio inicial"
```

## Paso 3: Conectar con GitHub

Copia el comando que GitHub te proporciona (algo como esto):

```bash
git branch -M main
git remote add origin https://github.com/tu-usuario/nombre-repositorio.git
git push -u origin main
```

Reemplaza `tu-usuario` y `nombre-repositorio` con los tuyos.

## Paso 4: Habilitar GitHub Pages

1. En tu repositorio de GitHub, ve a **Settings** (⚙️)
2. En el menú izquierdo, busca **Pages**
3. Bajo "Build and deployment":
   - **Source**: Selecciona "Deploy from a branch"
   - **Branch**: Selecciona `main` y `/root`
   - Click en **Save**
4. Espera 1-3 minutos mientras GitHub construye tu sitio

## Paso 5: ¡Tu web está en internet!

Tu portfolio estará disponible en:
```
https://tu-usuario.github.io/nombre-repositorio
```

Ejemplo: Si tu usuario es "daniel-arenas" y el repositorio es "portfolio", sería:
```
https://daniel-arenas.github.io/portfolio
```

## ⚠️ Verificación

Si los archivos no se ven correctamente:
- Asegúrate de que `index.html` esté en la raíz (no en una carpeta)
- Las imágenes deben estar en la misma carpeta que `index.html`
- Espera unos minutos después de hacer push (GitHub necesita tiempo para construir)

## 🔄 Actualizar tu Portfolio

Cada vez que hagas cambios locales:

```bash
git add .
git commit -m "Describe tu cambio aquí"
git push
```

¡Y listo! Tu web se actualizará automáticamente en unos minutos.

---

¿Preguntas? Consulta la [documentación oficial de GitHub Pages](https://docs.github.com/en/pages)
