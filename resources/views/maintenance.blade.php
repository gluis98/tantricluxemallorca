<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <title>Mantenimiento | Tantric Luxe Mallorca</title>
    <link rel="icon" type="image/png" href="{{ asset('images/favicon.png') }}">
    <meta name="theme-color" content="#0a0a0a">
    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #030712;
            color: #e5e7eb;
            font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
            padding: 1.5rem;
            overflow: hidden;
        }
        .bg-glow {
            position: fixed;
            inset: 0;
            pointer-events: none;
            background:
                radial-gradient(circle at 20% 30%, rgba(120, 53, 15, 0.35) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(92, 51, 23, 0.25) 0%, transparent 40%),
                radial-gradient(circle at 60% 80%, rgba(69, 39, 17, 0.2) 0%, transparent 35%);
        }
        .card {
            position: relative;
            z-index: 1;
            max-width: 32rem;
            width: 100%;
            text-align: center;
            padding: 2.5rem 2rem;
            border: 1px solid rgba(251, 191, 36, 0.2);
            border-radius: 1rem;
            background: rgba(17, 24, 39, 0.75);
            backdrop-filter: blur(12px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.45);
        }
        .logo { max-width: 220px; height: auto; margin: 0 auto 1.75rem; display: block; }
        .badge {
            display: inline-block;
            font-size: 0.65rem;
            letter-spacing: 0.25em;
            text-transform: uppercase;
            color: #fbbf24;
            margin-bottom: 1rem;
        }
        h1 {
            font-size: clamp(1.75rem, 5vw, 2.25rem);
            font-weight: 300;
            letter-spacing: 0.08em;
            background: linear-gradient(135deg, #fde68a, #d97706);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
        }
        p {
            color: #9ca3af;
            line-height: 1.7;
            font-size: 0.95rem;
            margin-bottom: 1.75rem;
        }
        .divider {
            width: 4rem;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.6), transparent);
            margin: 0 auto 1.75rem;
        }
        .contact {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            border: 1px solid rgba(251, 191, 36, 0.35);
            border-radius: 9999px;
            color: #fde68a;
            text-decoration: none;
            font-size: 0.85rem;
            letter-spacing: 0.05em;
            transition: background 0.2s, border-color 0.2s;
        }
        .contact:hover {
            background: rgba(251, 191, 36, 0.08);
            border-color: rgba(251, 191, 36, 0.6);
        }
        .spinner {
            width: 2.5rem;
            height: 2.5rem;
            border: 2px solid rgba(251, 191, 36, 0.2);
            border-top-color: #fbbf24;
            border-radius: 50%;
            margin: 0 auto 1.5rem;
            animation: spin 1s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
    </style>
</head>
<body>
    <div class="bg-glow" aria-hidden="true"></div>
    <main class="card">
        <img src="{{ asset('images/LogoFull.png') }}" alt="Tantric Luxe Mallorca" class="logo" width="220" height="60">
        <div class="spinner" aria-hidden="true"></div>
        <p class="badge">Sitio en mantenimiento</p>
        <h1>VOLVEMOS PRONTO</h1>
        <div class="divider"></div>
        <p>
            Estamos realizando mejoras en nuestra web para ofrecerte una experiencia aún mejor.
            Disculpa las molestias.
        </p>
        <a class="contact" href="https://wa.me/34602560426?text={{ urlencode('Hola, me gustaría información sobre los servicios TL Mallorca.') }}" target="_blank" rel="noopener noreferrer">
            Contactar por WhatsApp
        </a>
    </main>
</body>
</html>
