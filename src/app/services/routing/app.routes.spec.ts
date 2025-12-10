import { routes } from './app.routes';

describe('app.routes', () => {
  it('should be defined', () => {
    // Arrange - Act
    const routesConfig = routes;

    // Assert
    expect(routesConfig).toBeDefined();
  });

  it('should be an array', () => {
    // Arrange - Act
    const isArray = Array.isArray(routes);

    // Assert
    expect(isArray).toBe(true);
  });

  it('should be empty initially', () => {
    // Arrange - Act
    const routesCount = routes.length;

    // Assert
    expect(routesCount).toBe(0);
  });

  it('should export Routes type', () => {
    // Arrange
    const expectedRoutes: typeof routes = [];

    // Act
    const actualRoutes = routes;

    // Assert
    expect(actualRoutes).toEqual(expectedRoutes);
  });
});
