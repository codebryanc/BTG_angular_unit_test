# Angular Unit Test - BTG Project

Proyecto de estudio para aprender y practicar pruebas unitarias en Angular.

## 📋 Descripción

Este proyecto está diseñado para aprender las mejores prácticas de testing en Angular, incluyendo pruebas de componentes, servicios, directivas y pipes.

## 🚀 Tecnologías

- Angular
- Jasmine (Framework de testing)
- Karma (Test runner)
- TypeScript

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>

# Instalar dependencias
npm install

# Las dependencias de Jasmine/Karma ya están en package.json
# Solo ejecuta: npm install
```

## 🧪 Ejecutar Tests

```bash
# Ejecutar todas las pruebas
ng test

# Ejecutar pruebas con cobertura
ng test --no-watch --code-coverage

# Ejecutar pruebas en modo headless
ng test --no-watch --code-coverage --browsers=ChromeHeadless

# Script personalizado con reporte de cobertura
./scripts/test-coverage.sh
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/     # Componentes con sus tests
│   ├── services/       # Servicios con sus tests
│   ├── pipes/          # Pipes con sus tests
│   └── directives/     # Directivas con sus tests
```

## 📚 Conceptos Cubiertos

- **Component Testing**: Pruebas de componentes y sus interacciones
- **Service Testing**: Pruebas de servicios y llamadas HTTP
- **Async Testing**: Manejo de operaciones asíncronas
- **Mocking**: Uso de mocks y spies
- **Test Coverage**: Medición de cobertura de código

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## 📄 Licencia

Este proyecto es para fines educativos.

## 🎯 Objetivos de Aprendizaje

Al completar esta guía en minutos, serás capaz de:
- ✅ Entender qué son las pruebas unitarias
- ✅ Escribir tests básicos

## A futuro que podemos mejorar

A futuro podemos mejorar en inyección de dependencias, explicar lo que son las arquitecturas emergentes, los automation test y las pruebas de componentes visuales.