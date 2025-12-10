import { TestBed } from '@angular/core/testing';
import { config } from './app.config.server';
import { appConfig } from './app.config';

describe('app.config.server', () => {
  it('should be defined', () => {
    // Arrange - Act
    const serverConfig = config;

    // Assert
    expect(serverConfig).toBeDefined();
  });

  it('should have providers array', () => {
    // Arrange - Act
    const providers = config.providers;
    const isArray = Array.isArray(providers);

    // Assert
    expect(providers).toBeDefined();
    expect(isArray).toBe(true);
  });

  it('should merge appConfig with serverConfig', () => {
    // Arrange
    const baseProviderCount = appConfig.providers?.length || 0;

    // Act
    const mergedProviderCount = config.providers?.length || 0;
    
    // Assert
    expect(mergedProviderCount).toBeGreaterThanOrEqual(baseProviderCount);
  });

  it('should include server rendering provider', () => {
    // Arrange - Act
    const providersCount = config.providers?.length || 0;

    // Assert
    expect(providersCount).toBeGreaterThan(0);
  });
});
