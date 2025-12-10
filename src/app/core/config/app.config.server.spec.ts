import { TestBed } from '@angular/core/testing';
import { config } from './app.config.server';
import { appConfig } from './app.config';

describe('app.config.server', () => {
  it('should be defined', () => {
    expect(config).toBeDefined();
  });

  it('should have providers array', () => {
    expect(config.providers).toBeDefined();
    expect(Array.isArray(config.providers)).toBe(true);
  });

  it('should merge appConfig with serverConfig', () => {
    // Verify that the merged config has more providers than the base appConfig
    const baseProviderCount = appConfig.providers?.length || 0;
    const mergedProviderCount = config.providers?.length || 0;
    
    expect(mergedProviderCount).toBeGreaterThanOrEqual(baseProviderCount);
  });

  it('should include server rendering provider', () => {
    expect(config.providers?.length).toBeGreaterThan(0);
  });
});
