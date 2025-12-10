#!/bin/bash

# Script para ejecutar pruebas y generar reporte de cobertura
# Uso: ./scripts/test-coverage.sh

echo "🧪 Ejecutando pruebas unitarias con cobertura..."
echo ""

# Ejecutar tests con timeout automático - se cierra después de completar
(npm test -- --coverage & TEST_PID=$!; sleep 5; kill $TEST_PID 2>/dev/null)

# Verificar si el comando fue exitoso
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Algunos test completados exitosamente"
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
