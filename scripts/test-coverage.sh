#!/bin/bash

# Script para ejecutar pruebas y generar reporte de cobertura
# Uso: ./scripts/test-coverage.sh

echo "🧪 Ejecutando pruebas unitarias con cobertura..."
echo ""

# Ejecutar tests con cobertura usando Jasmine/Karma
ng test --no-watch --code-coverage --browsers=ChromeHeadless

# Verificar si el comando fue exitoso
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Tests completados exitosamente"
    echo ""
    echo "📊 Reporte de cobertura generado en: coverage/angular-unit-test/"
    echo ""
    echo "🌐 Abriendo reporte en Chrome..."
    open -a "Google Chrome" coverage/angular-unit-test/index.html
else
    echo ""
    echo "❌ Tests fallaron"
    exit 1
fi
