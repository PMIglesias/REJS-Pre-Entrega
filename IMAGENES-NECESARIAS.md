# Imágenes Necesarias para el Proyecto

Para que el diseño funcione correctamente, necesitas agregar las siguientes imágenes en las carpetas correspondientes:

## 📁 /public/brands/
Necesitas 3 logos de marcas para el Hero (fondo transparente o PNG con fondo blanco):

1. **heinrich-dinkelacker.png** - Logo de Heinrich Dinkelacker
2. **1991.png** - Logo del número/marca 1991
3. **henry-stevens.png** - Logo de Henry Stevens

Puedes crear placeholders temporales o buscar logos similares.

## 📝 Notas:
- Los logos deben tener fondo transparente o blanco
- El CSS aplicará un filtro para convertirlos a blanco
- Dimensiones recomendadas: altura ~100px, width auto

## 🎨 Alternativa Temporal:
Si no tienes los logos, puedes modificar el componente Hero.jsx para mostrar texto en lugar de imágenes:

```jsx
<div className="hero__brands">
  <div className="hero__brand-text">HEINRICH DINKELACKER</div>
  <div className="hero__brand-text">1991</div>
  <div className="hero__brand-text">HENRY STEVENS</div>
</div>
```

Y agregar este CSS:
```css
.hero__brand-text {
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 2px;
}
```
