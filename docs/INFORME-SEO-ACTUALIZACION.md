# Informe SEO — Actualización Tantric Luxe Mallorca

**Fecha:** 18 de julio de 2026  
**Alcance:** Keywords, metas, contenidos, páginas de detalle (servicios y masajistas), sitemap, hreflang y datos estructurados  
**Idiomas:** `es`, `en`, `de`, `it`, `fr`

---

## 1. Resumen ejecutivo

Se realizó una actualización SEO completa con tres objetivos:

1. **Refrescar keywords** en todos los idiomas (menos genéricas, más orientadas a intención de búsqueda local).
2. **Garantizar una página indexable por servicio y por masajista**, con `meta_title`, `meta_description`, `meta_keywords` y descripciones alineadas.
3. **Actualizar contenidos** (home, about, contact, booking, servicios, masajistas) asociándolos de forma natural a las nuevas keywords.

### Núcleo de keywords nuevas (por idioma)

| Idioma | Keywords núcleo |
|--------|-----------------|
| **ES** | masaje tantrico mallorca, masaje erotico palma, masajes eroticos mallorca, masajista tantrica palma, spa erotico mallorca, masaje cuerpo a cuerpo palma, masaje en pareja mallorca, masaje 4 manos palma, masajes palma de mallorca |
| **EN** | tantric massage mallorca, erotic massage palma, erotic massage mallorca, tantric masseuse palma, erotic spa mallorca, body to body massage palma, couples massage mallorca, 4 hands massage palma |
| **DE** | tantra massage mallorca, erotische massage palma, erotische massage mallorca, tantra masseurin palma, erotisches spa mallorca, körper an körper massage palma, paarmassage mallorca |
| **IT** | massaggio tantrico mallorca, massaggio erotico palma, massaggiatrice tantrica palma, spa erotico mallorca, massaggio corpo a corpo palma, massaggio di coppia mallorca |
| **FR** | massage tantrique mallorca, massage erotique palma, masseuse tantrique palma, spa erotique mallorca, massage corps a corps palma, massage en couple mallorca |

---

## 2. Lo nuevo agregado (infraestructura)

### 2.1 Páginas de detalle por masajista

Antes solo existía el listado (`/es/masajistas`). Ahora hay **perfil independiente** por masajista:

| Slug | ES | EN | DE | IT | FR |
|------|----|----|----|----|-----|
| `angy` | `/es/masajistas/angy` | `/en/masseuses/angy` | `/de/masseurinnen/angy` | `/it/massaggiatrici/angy` | `/fr/masseuses/angy` |
| `aroha` | `/es/masajistas/aroha` | `/en/masseuses/aroha` | `/de/masseurinnen/aroha` | `/it/massaggiatrici/aroha` | `/fr/masseuses/aroha` |
| `brenda` | `/es/masajistas/brenda` | … | … | … | … |
| `emma` | `/es/masajistas/emma` | … | … | … | … |
| `luna` | `/es/masajistas/luna` | … | … | … | … |
| `zoe` | `/es/masajistas/zoe` | … | … | … | … |

**Archivos nuevos / clave:**

| Archivo | Rol |
|---------|-----|
| `app/Http/Controllers/MasseuseDetailController.php` | Controlador de detalle |
| `resources/views/masseuse-detail.blade.php` | Vista SEO del perfil |
| Rutas en `routes/web.php` | `{locale}/masajistas/{slug}` (y equivalentes EN/DE/IT/FR) |

Cada perfil incluye: `slug`, `description`, `fullDescription`, `meta_title`, `meta_description`, `meta_keywords`, galería, especialidades, JSON-LD `Person`, hreflang y enlace a reserva/WhatsApp.

### 2.2 Masajistas alineadas con carpetas reales

Datos lang actualizados a las 6 masajistas presentes en `public/images/masseurs/`:

- **Angy, Aroha, Brenda, Emma, Luna, Zoe**
- Imágenes `.jpeg` correctas
- Slugs unificados en todos los idiomas

Antes (desfasado): Angela/Amara (ES) y Tatiana/Leila (EN/DE/IT/FR) con rutas antiguas (`Sharon`, etc.).

### 2.3 Mejoras en páginas de servicio (ya existían)

Las rutas de detalle de servicio **ya existían**, pero se corrigió y completó:

- Uso real de `meta_title`, `meta_description`, `meta_keywords` del lang (antes se ignoraban).
- Enlaces internos desde home y listado (“Ver más”).
- Contenido enriquecido con features y textos SEO.
- JSON-LD `ItemList` con `url` por servicio.

### 2.4 SEO técnico asociado

| Componente | Cambio |
|------------|--------|
| `SitemapController` | Incluye URLs de detalle de masajistas (+ servicios) |
| `hreflang.blade.php` | Alternates para perfiles de masajista |
| `CanonicalLocalePath` | Canonicalización de segmentos masajistas |
| `MasseuseCatalog` | Soporte de `slug`, `fullDescription`, metas y match por nombre/carpeta |
| `components/seo/json-ld.blade.php` | (ya existente) usado en detalle de masajista |
| Enlaces home/listados | Paths localizados (`common.header.paths.*`) en lugar de `/servicios` hardcodeado |

---

## 3. Lo actualizado (contenidos y lang)

Archivos de traducción tocados (×5 idiomas):

- `lang/{locale}/homepage.php`
- `lang/{locale}/servicesPage.php`
- `lang/{locale}/masseusesPage.php`
- `lang/{locale}/aboutPage.php`
- `lang/{locale}/contactPage.php`
- `lang/{locale}/bookingPage.php`
- `lang/{locale}/common.php` (copyright 2026 + mención keywords en ES/EN/DE/IT/FR)

Vistas / PHP actualizados:

- `resources/views/home.blade.php`
- `resources/views/services.blade.php`
- `resources/views/service-detail.blade.php`
- `resources/views/masseuses.blade.php`
- `resources/views/masseuse-detail.blade.php` *(nuevo)*
- `resources/views/components/seo/hreflang.blade.php`
- `app/Support/MasseuseCatalog.php`
- `app/Http/Controllers/SitemapController.php`
- `app/Http/Middleware/CanonicalLocalePath.php`
- `routes/web.php`

---

## 4. Comparativa de keywords: VIEJAS vs NUEVAS

### 4.1 Homepage

#### Español (`lang/es/homepage.php`)

| | Keywords |
|---|----------|
| **VIEJAS** | masajes palma, masajes mallorca, masaje erotico palma, masajes eroticos mallorca, masaje tantrico palma, masaje tantrico mallorca, masajista palma, masaje en pareja mallorca, spa mallorca, spa palma, luxe, masaje palma de mallorca, masajes mallorca ofertas, masaje erótico, masajes eroticos palma, tantric, erotic, masaje, masajes, masajes en mallorca, masajes palma de mallorca, masajistas palma, masaje erotico mallorca, masajes tantricos palma de mallorca, masaje tantrico en mallorca |
| **NUEVAS** | masaje tantrico mallorca, masaje erotico palma, masajes eroticos mallorca, masajista tantrica palma, spa erotico mallorca, masaje cuerpo a cuerpo palma, masaje en pareja mallorca, masaje 4 manos palma, masajes palma de mallorca |

#### Inglés (`lang/en/homepage.php`)

| | Keywords |
|---|----------|
| **VIEJAS** | massage, erotic massage, massage palma, massage mallorca, erotic massage palma, erotic massage mallorca, tantric massage palma, tantric massage mallorca, massage palma de mallorca, massage near me, erotic massage near me, spa, spa mallorca, spa palma, palma massage, mallorca massage, mallorca tantric massage, luxe, tantric, erotic, massage palma de majorque, tantric massage near me |
| **NUEVAS** | tantric massage mallorca, erotic massage palma, erotic massage mallorca, tantric masseuse palma, erotic spa mallorca, body to body massage palma, couples massage mallorca, 4 hands massage palma |

#### Alemán (`lang/de/homepage.php`)

| | Keywords |
|---|----------|
| **VIEJAS** | massage, erotische massage, massage palma, massage mallorca, erotische massage palma, erotische massage mallorca, tantra massage palma, tantra massage mallorca, massage palma de mallorca, spa, spa mallorca, spa palma, palma massage, mallorca massage, mallorca tantra massage, luxe, tantrisch, erotisch, entspannungsmassage palma |
| **NUEVAS** | tantra massage mallorca, erotische massage palma, erotische massage mallorca, tantra masseurin palma, erotisches spa mallorca, körper an körper massage palma, paarmassage mallorca |

#### Italiano (`lang/it/homepage.php`)

| | Keywords |
|---|----------|
| **VIEJAS** | massaggi palma, massaggi maiorca, massaggio erotico palma, massaggi erotici maiorca, massaggio tantrico palma, massaggio tantrico maiorca, massaggiatrice palma, massaggio di coppia maiorca, spa maiorca, spa palma, luxe, massaggio palma di maiorca, offerte massaggi maiorca, massaggio erotico, massaggi erotici palma, tantric, erotic, massaggio, massaggi, massaggi a maiorca, massaggitrici palma |
| **NUEVAS** | massaggio tantrico mallorca, massaggio erotico palma, massaggiatrice tantrica palma, spa erotico mallorca, massaggio corpo a corpo palma, massaggio di coppia mallorca |

#### Francés (`lang/fr/homepage.php`)

| | Keywords |
|---|----------|
| **VIEJAS** | massages palma, massages majorque, massage erotique palma, massages erotiques majorque, massage tantrique palma, massage tantrique majorque, masseuse palma, massage en couple majorque, spa majorque, spa palma, luxe, massage palma de majorque, offres massages majorque, massage érotique, massages erotiques palma, tantric, erotic, massage, massages, massages a majorque, massages palma de majorque, masseuses palma |
| **NUEVAS** | massage tantrique mallorca, massage erotique palma, masseuse tantrique palma, spa erotique mallorca, massage corps a corps palma, massage en couple mallorca |

---

### 4.2 Listado de servicios

#### Español

| | Keywords |
|---|----------|
| **VIEJAS** | servicios masaje tantrico palma, masajes eroticos palma, masajes eroticos mallorca, masaje tantrico mallorca, servicios eroticos palma, masaje en pareja mallorca, masajes mallorca ofertas, spa servicios palma, catálogo masajes tantricos, experiencias exclusivas mallorca, masajes en mallorca, masajes palma de mallorca, masaje erótico mallorca, masajes tantricos palma de mallorca, spa palma, luxe services |
| **NUEVAS** | masajes eroticos mallorca, masaje tantrico mallorca, masaje erotico palma, masaje cuerpo a cuerpo palma, masaje en pareja mallorca, masaje 4 manos palma, spa erotico mallorca, masajes palma de mallorca, servicios masaje tantrico palma |

#### Inglés

| | Keywords |
|---|----------|
| **VIEJAS** | massage services palma, erotic massage palma, tantric massage services palma, erotic massage mallorca, massage mallorca, tantric massage mallorca, erotic services palma, couples massage mallorca, spa services palma, tantric massage catalog, exclusive experiences mallorca, massage palma de mallorca, spa mallorca, luxe massage services, erotic massage near me |
| **NUEVAS** | erotic massage mallorca, tantric massage mallorca, erotic massage palma, body to body massage palma, couples massage mallorca, 4 hands massage palma, erotic spa mallorca, tantric masseuse palma |

#### Alemán

| | Keywords |
|---|----------|
| **VIEJAS** | massage leistungen palma, erotische massage palma, tantra massage leistungen palma, erotische massage mallorca, massage mallorca, tantra massage mallorca, erotische leistungen palma, paarmassage mallorca, spa leistungen palma, tantra massage katalog, exklusive erlebnisse mallorca, massage palma de mallorca, spa mallorca, luxe massage leistungen |
| **NUEVAS** | erotische massage mallorca, tantra massage mallorca, erotische massage palma, körper an körper massage palma, paarmassage mallorca, erotisches spa mallorca, tantra masseurin palma |

#### Italiano

| | Keywords |
|---|----------|
| **VIEJAS** | servizi massaggio tantrico palma, massaggi erotici palma, massaggi erotici maiorca |
| **NUEVAS** | massaggio erotico mallorca, massaggio tantrico mallorca, massaggio erotico palma, massaggio corpo a corpo palma, massaggio di coppia mallorca, spa erotico mallorca, massaggiatrice tantrica palma |

#### Francés

| | Keywords |
|---|----------|
| **VIEJAS** | services massage tantrique palma, massages erotiques palma, massages erotiques majorque, massage tantrique majorque, services erotiques palma |
| **NUEVAS** | massage érotique mallorca, massage tantrique mallorca, massage érotique palma, massage corps a corps palma, massage en couple mallorca, spa érotique mallorca, masseuse tantrique palma |

---

### 4.3 Keywords por servicio individual (ES)

| Servicio (slug) | Keywords VIEJAS | Keywords NUEVAS |
|-----------------|-----------------|-----------------|
| `masaje-cuerpo-a-cuerpo` | masaje cuerpo a cuerpo palma, masaje piel con piel mallorca, masaje sensual palma, masaje intimo mallorca, masaje erotico cuerpo cuerpo palma | masaje cuerpo a cuerpo palma, masajes eroticos mallorca, masaje erotico palma, masaje tantrico mallorca, masaje piel con piel palma, spa erotico mallorca |
| `experiencia-erotica-ducha` | experiencia erotica ducha palma, masaje ducha mallorca, ducha erotica palma, experiencia sensual ducha mallorca, masaje bajo agua palma | experiencia erotica ducha palma, masaje erotico palma, masajes eroticos mallorca, spa erotico mallorca, masaje tantrico mallorca, ducha erotica palma |
| `masaje-prostatico` | masaje prostatico palma, masaje prostatico mallorca, masaje intimo masculino palma, bienestar masculino mallorca, masajes eroticos palma, masaje erotico palma, masajes mallorca, spa palma | masaje prostatico palma, masaje erotico palma, masajes eroticos mallorca, masaje tantrico mallorca, spa erotico mallorca, masaje intimo palma |
| `striptease-privado` | striptease privado palma, striptease mallorca, espectaculo erotico palma, show privado mallorca, striptease palma, masajes eroticos palma, spa palma, experiencia erotica palma | striptease privado palma, masaje erotico palma, masajes eroticos mallorca, spa erotico mallorca, espectaculo erotico palma, masaje tantrico mallorca |
| `experiencia-premium` | experiencia premium palma, masaje premium mallorca, striptease ducha masaje palma, experiencia completa erotica mallorca, masajes eroticos palma, spa palma, masaje cuerpo a cuerpo palma, champagne masaje mallorca | experiencia premium palma, masajes eroticos mallorca, masaje cuerpo a cuerpo palma, spa erotico mallorca, masaje tantrico mallorca, masaje erotico palma |
| `masaje-4-manos` | masaje 4 manos palma, masaje cuatro manos mallorca, dos masajistas palma, masaje sincronizado mallorca, masajes eroticos palma, masajes mallorca, spa palma, masaje erotico palma, masaje sensual 4 manos palma | masaje 4 manos palma, masajes eroticos mallorca, masaje tantrico mallorca, masajista tantrica palma, spa erotico mallorca, masaje erotico palma |
| `masaje-en-pareja` | masaje en pareja palma, masaje parejas mallorca, masaje erotico parejas palma, experiencia pareja mallorca, masaje sensual pareja palma, masajes eroticos palma, spa palma, masaje romantico palma, masajes mallorca | masaje en pareja mallorca, masaje erotico palma, masajes eroticos mallorca, masaje tantrico mallorca, spa erotico mallorca, masaje pareja palma |

> **Nota:** Antes, la vista `service-detail.blade.php` **no usaba** las keywords del lang; generaba `{title}, masaje tantrico, palma, mallorca` (fijo en español). Ahora sí usa `meta_keywords` por servicio e idioma.

---

### 4.4 Listado de masajistas

#### Español

| | Keywords |
|---|----------|
| **VIEJAS** | masajista palma, masajistas palma, masajistas eroticas mallorca, masajistas tantricas palma, masajista erotica palma, masajista mallorca, profesionales masaje tantrico, especialistas tantricas palma, masajistas certificadas mallorca, masajistas en mallorca, masajista tantrica mallorca, masajistas profesionales palma |
| **NUEVAS** | masajista tantrica palma, masajistas eroticas mallorca, masajista erotica palma, masajistas palma, masajista mallorca, masaje tantrico mallorca, masajes eroticos mallorca, spa erotico mallorca, masajistas tantricas palma de mallorca |

#### Inglés

| | Keywords |
|---|----------|
| **VIEJAS** | masseuses palma, tantric masseuses palma, erotic masseuses mallorca, erotic masseuse palma, masseuse mallorca, tantric massage professionals, tantric specialists palma, certified masseuses mallorca, professional masseuses palma, tantric masseuse mallorca, masseuses in mallorca |
| **NUEVAS** | tantric masseuse palma, erotic massage mallorca, erotic massage palma, tantric massage mallorca, erotic spa mallorca, masseuse palma, tantric masseuses mallorca |

#### Alemán / Italiano / Francés (resumen)

| Idioma | VIEJAS (resumen) | NUEVAS |
|--------|------------------|--------|
| **DE** | masseurinnen palma, tantra masseurinnen palma, erotische masseurinnen mallorca… | tantra masseurin palma, erotische massage mallorca, erotische massage palma, tantra massage mallorca, erotisches spa mallorca, masseurin palma, tantra masseurinnen mallorca |
| **IT** | massaggiatrici, professioniste, palma *(muy genérico)* | massaggiatrice tantrica palma, massaggio erotico mallorca, massaggio erotico palma, massaggio tantrico mallorca, spa erotico mallorca, massaggiatrice palma |
| **FR** | masseuses, palma, majorque, spécialistes *(muy genérico)* | masseuse tantrique palma, massage érotique mallorca, massage érotique palma, massage tantrique mallorca, spa érotique mallorca, masseuse palma |

### 4.5 Keywords por masajista (ES — nuevas; no existían páginas detalle)

| Masajista | meta_keywords |
|-----------|---------------|
| Angy | angy masajista palma, masajista tantrica angy mallorca, masaje erotico palma angy, masaje tantrico mallorca angy, masajista erotica palma |
| Aroha | aroha masajista palma, masaje 4 manos palma aroha, masaje en pareja mallorca aroha, masajista tantrica palma, spa erotico mallorca |
| Brenda | brenda masajista palma, masaje cuerpo a cuerpo palma brenda, masaje erotico palma brenda, masajes eroticos mallorca, masajista tantrica palma |
| Emma | emma masajista palma, masaje tantrico mallorca emma, masajista tantrica palma, masaje erotico palma emma, spa erotico mallorca |
| Luna | luna masajista palma, masaje erotico palma luna, masajes eroticos mallorca, masajista tantrica palma, spa erotico mallorca luna |
| Zoe | zoe masajista palma, masaje en pareja mallorca zoe, masajista tantrica palma, masaje erotico palma pareja, spa erotico mallorca |

---

### 4.6 About / Contact / Booking

#### About — ES

| | Keywords |
|---|----------|
| **VIEJAS** | sobre tantric luxe mallorca, historia masaje tantrico palma, centro masajes eroticos mallorca, spa tantrico palma, spa mallorca, spa palma, profesionales masaje tantrico, experiencia tantrica palma, masajes palma, masajistas profesionales mallorca, centro tantrico mallorca, luxe spa mallorca |
| **NUEVAS** | masaje tantrico mallorca, masaje erotico palma, spa erotico mallorca, masajista tantrica palma, masajes eroticos mallorca, masajes palma de mallorca, centro tantrico palma, tantric luxe mallorca |

#### Contact — ES

| | Keywords |
|---|----------|
| **VIEJAS** | contacto masajes palma, reservar masaje erotico palma, contacto masaje tantrico palma, reservar masajes mallorca, tantric luxe contacto, whatsapp masaje tantrico, whatsapp masajista palma, ubicacion spa palma, reserva masaje en pareja mallorca, contacto spa mallorca |
| **NUEVAS** | masaje erotico palma contacto, masaje tantrico mallorca reserva, spa erotico mallorca, masajista tantrica palma, masajes eroticos mallorca, masajes palma de mallorca, reservar masaje palma |

#### Booking — ES

| | Keywords |
|---|----------|
| **VIEJAS** | reservar masaje palma, cita online mallorca, reserva tantric luxe |
| **NUEVAS** | reservar masaje tantrico mallorca, reservar masaje erotico palma, masaje en pareja mallorca reserva, spa erotico mallorca, masajista tantrica palma, cita online masajes palma de mallorca |

#### Contact / Booking — EN (ejemplo)

| Página | VIEJAS | NUEVAS |
|--------|--------|--------|
| Contact EN | contact massage palma, book erotic massage palma, contact tantric massage palma… | erotic massage palma contact, tantric massage mallorca booking, erotic spa mallorca, tantric masseuse palma, erotic massage mallorca, book massage palma |
| Booking EN | book massage palma, online booking mallorca, tantric luxe | book tantric massage mallorca, book erotic massage palma, couples massage mallorca booking, erotic spa mallorca, tantric masseuse palma, online massage booking palma |

---

## 5. Criterio del cambio de keywords

| Antes | Ahora |
|-------|-------|
| Listas muy largas y genéricas (`massage`, `luxe`, `tantric`, `masaje`) | Menos keywords, más específicas |
| Mezcla de términos muy amplios con local | Foco en **servicio + ciudad/isla** |
| IT/FR a veces casi vacíos o genéricos | Alineados con el núcleo ES/EN |
| Keywords de detalle de servicio no se renderizaban | Se renderizan correctamente |
| Sin keywords de perfil de masajista | Keywords propias por nombre + especialidad |

---

## 6. Checklist post-despliegue

1. Subir a producción los cambios de `lang/`, `app/`, `resources/views/` y `routes/web.php`.
2. Limpiar caché: `php artisan view:clear` y `php artisan cache:clear`.
3. Verificar URLs de ejemplo:
   - `https://tantricluxemallorca.com/es/servicios/masaje-cuerpo-a-cuerpo`
   - `https://tantricluxemallorca.com/es/masajistas/angy`
4. Reenviar `/sitemap.xml` en Google Search Console.
5. Validar rich results / datos estructurados en las URLs nuevas.
6. Solicitar indexación de las páginas de masajistas nuevas.

---

## 7. Inventario rápido de URLs SEO nuevas (×5 idiomas)

- **7 servicios × 5 idiomas = 40 URLs** (ya en sitemap; ahora mejor enlazadas y con metas correctas).
- **6 masajistas × 5 idiomas = 30 URLs nuevas** de perfil (añadidas a sitemap).

**Total aproximado de URLs de detalle reforzadas/añadidas:** ~70.

---

*Documento generado para el proyecto Tantric Luxe Mallorca — carpeta `docs/`.*
