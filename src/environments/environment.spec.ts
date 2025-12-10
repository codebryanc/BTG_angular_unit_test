import { environment } from './environment';

describe('Environment Production', () => {
  it('should be defined', () => {
    // Arrange - Act
    const config = environment;

    // Assert
    expect(config).toBeDefined();
  });

  it('should have production set to true', () => {
    // Arrange - Act
    const isProduction = environment.production;

    // Assert
    expect(isProduction).toBe(true);
  });

  describe('info_version', () => {
    it('should have appName defined', () => {
      // Arrange - Act
      const appName = environment.appName;

      // Assert
      expect(appName).toBeDefined();
      expect(appName).toBe('BTG Angular Unit Test');
    });

    it('should have version defined', () => {
      // Arrange - Act
      const version = environment.version;

      // Assert
      expect(version).toBeDefined();
      expect(version).toBe('1.0.0');
    });
  });

  it('should have enableDebugTools set to false in production', () => {
    // Arrange - Act
    const debugToolsEnabled = environment.enableDebugTools;

    // Assert
    expect(debugToolsEnabled).toBe(false);
  });

  it('should have all required properties', () => {
    // Arrange
    const requiredProperties = ['production', 'appName', 'version', 'enableDebugTools'];

    // Act
    const hasAllProperties = requiredProperties.every(prop => 
      environment.hasOwnProperty(prop) && environment[prop as keyof typeof environment] !== undefined
    );

    // Assert
    expect(hasAllProperties).toBe(true);
    expect(environment.production).toBeDefined();
    expect(environment.appName).toBeDefined();
    expect(environment.version).toBeDefined();
    expect(environment.enableDebugTools).toBeDefined();
  });
});
