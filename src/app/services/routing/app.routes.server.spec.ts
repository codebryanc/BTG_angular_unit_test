import { RenderMode } from '@angular/ssr';
import { serverRoutes } from './app.routes.server';

describe('app.routes.server', () => {
  it('should be defined', () => {
    // Arrange - Act
    const routes = serverRoutes;

    // Assert
    expect(routes).toBeDefined();
  });

  it('should be an array', () => {
    // Arrange - Act
    const isArray = Array.isArray(serverRoutes);

    // Assert
    expect(isArray).toBe(true);
  });

  it('should have at least one route', () => {
    // Arrange - Act
    const routesCount = serverRoutes.length;

    // Assert
    expect(routesCount).toBeGreaterThan(0);
  });

  it('should have a catch-all route', () => {
    // Arrange
    const catchAllPath = '**';

    // Act
    const catchAllRoute = serverRoutes.find(route => route.path === catchAllPath);

    // Assert
    expect(catchAllRoute).toBeDefined();
  });

  it('catch-all route should use Prerender mode', () => {
    // Arrange
    const catchAllPath = '**';
    const expectedMode = RenderMode.Prerender;

    // Act
    const catchAllRoute = serverRoutes.find(route => route.path === catchAllPath);
    const actualMode = catchAllRoute?.renderMode;

    // Assert
    expect(actualMode).toBe(expectedMode);
  });
});
