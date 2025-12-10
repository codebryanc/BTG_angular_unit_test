import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { appConfig } from './app.config';

describe('appConfig', () => {
  beforeEach(() => {
    // Arrange
    TestBed.configureTestingModule(appConfig);
  });

  it('should be defined', () => {
    // Arrange - Act
    const config = appConfig;

    // Assert
    expect(config).toBeDefined();
  });

  it('should have providers array', () => {
    // Arrange - Act
    const providers = appConfig.providers;
    const isArray = Array.isArray(providers);

    // Assert
    expect(providers).toBeDefined();
    expect(isArray).toBe(true);
  });

  it('should provide Router', () => {
    // Arrange - Act
    const router = TestBed.inject(Router);

    // Assert
    expect(router).toBeDefined();
    expect(router).toBeInstanceOf(Router);
  });

  it('should have at least 3 providers configured', () => {
    // Arrange
    const minimumProviders = 3;

    // Act
    const providersCount = appConfig.providers?.length || 0;

    // Assert
    expect(providersCount).toBeGreaterThanOrEqual(minimumProviders);
  });
});
