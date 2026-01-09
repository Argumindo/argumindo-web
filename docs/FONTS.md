# Font Configuration

This document explains how fonts are configured and used in the Argumindo web application.

## Configured Fonts

The application uses **two Google Fonts** optimized through Next.js's built-in font system:

### 1. Quicksand (Primary Font)
- **Weights**: 300, 400, 500, 600, 700
- **Usage**: Default font for the entire application
- **Tailwind Class**: `font-sans`
- **CSS Variable**: `var(--font-quicksand)`

### 2. Outfit (Secondary Font)
- **Weights**: 300, 400, 500, 600, 700
- **Usage**: Accent font for specific UI elements
- **Tailwind Class**: `font-outfit`
- **CSS Variable**: `var(--font-outfit)`

## How Fonts Are Loaded

### Configuration Location
Fonts are configured in `app/layout.tsx`:

```typescript
import { Quicksand, Outfit } from "next/font/google";

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});
```

### Tailwind Configuration
Fonts are mapped in `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ["var(--font-quicksand)", "Quicksand", "sans-serif"],
  outfit: ["var(--font-outfit)", "Outfit", "sans-serif"],
}
```

## How to Use Fonts

### Using Quicksand (Default)
Quicksand is applied automatically to all text. No class needed:

```tsx
<p>This uses Quicksand by default</p>
```

Or explicitly:
```tsx
<p className="font-sans">This uses Quicksand</p>
```

### Using Outfit
Apply the `font-outfit` class:

```tsx
<p className="font-outfit">This uses Outfit</p>
```

### Font Weights
Use Tailwind's font weight utilities:

```tsx
<p className="font-light">Light (300)</p>
<p className="font-normal">Regular (400)</p>
<p className="font-medium">Medium (500)</p>
<p className="font-semibold">Semi Bold (600)</p>
<p className="font-bold">Bold (700)</p>
```

## Best Practices

### ✅ DO

```tsx
// Use Tailwind classes
<p className="font-outfit text-lg">Correct usage</p>

// Combine with other utilities
<h1 className="font-outfit font-bold text-2xl">Heading</h1>
```

### ❌ DON'T

```tsx
// Don't use inline font declarations
<p className="font-['Outfit']">Wrong usage</p>

// Don't use fonts that aren't configured
<p className="font-['Lato']">Wrong - not configured</p>

// Don't use inline styles for fonts
<p style={{ fontFamily: 'Outfit' }}>Wrong approach</p>
```

## Performance Optimizations

Next.js automatically optimizes fonts:

1. **Self-Hosted**: Fonts are downloaded during build and served from your domain
2. **Zero Layout Shift**: Font metrics calculated at build time prevent CLS
3. **Automatic Subsetting**: Only required characters are loaded
4. **Optimized Loading**: `display: "swap"` prevents invisible text (FOIT)
5. **Privacy**: No external requests to Google Fonts CDN

## Font Files Location

After building, font files are located in:
- `.next/static/media/` (development)
- `out/_next/static/media/` (production build)

Font files are automatically:
- Minified and optimized
- Split by unicode ranges for faster loading
- Cached with long-lived cache headers

## Adding New Fonts

To add a new Google Font:

1. **Import in `app/layout.tsx`:**
```typescript
import { Quicksand, Outfit, NewFont } from "next/font/google";

const newFont = NewFont({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newfont",
});
```

2. **Add to body className:**
```typescript
<body className={`${quicksand.variable} ${outfit.variable} ${newFont.variable} font-sans`}>
```

3. **Add to Tailwind config:**
```typescript
fontFamily: {
  sans: ["var(--font-quicksand)", "Quicksand", "sans-serif"],
  outfit: ["var(--font-outfit)", "Outfit", "sans-serif"],
  newfont: ["var(--font-newfont)", "NewFont", "sans-serif"],
}
```

4. **Use in components:**
```tsx
<p className="font-newfont">Text in new font</p>
```

## Troubleshooting

### Fonts Not Loading
- Check that `npm run build` completes successfully
- Verify no SSL/certificate errors during build
- Check browser DevTools Network tab for font file requests

### Wrong Font Displaying
- Ensure you're using the correct Tailwind class (`font-outfit` not `font-['Outfit']`)
- Check browser DevTools to see computed font-family
- Verify Tailwind config includes the font

### Build Errors
If you see "Failed to download font from Google Fonts":
- Check your internet connection
- Try disabling SSL verification for development: `NODE_TLS_REJECT_UNAUTHORIZED=0`
- Verify the font name is correct in the import

## Current Usage

| Component | Font Used | Reason |
|-----------|-----------|--------|
| Body (Default) | Quicksand | Primary branding font |
| Hero descriptions | Outfit | Better readability for longer text |
| Testimonials | Outfit | Consistent with feature text |
| Journey descriptions | Outfit | Better readability |
| CTA text | Outfit | Emphasis on action items |
| Footer text | Outfit | Clean, modern look |

## References

- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Google Fonts](https://fonts.google.com/)
- [Tailwind CSS Typography](https://tailwindcss.com/docs/font-family)

