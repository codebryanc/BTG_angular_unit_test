import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { appConfig } from './app.config';

describe('appConfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(appConfig);
  });

  it('should be defined', () => {
    expect(appConfig).toBeDefined();
  });

  it('should have providers array', () => {
    expect(appConfig.providers).toBeDefined();
    expect(Array.isArray(appConfig.providers)).toBe(true);
  });

  it('should provide Router', () => {
    const router = TestBed.inject(Router);
    expect(router).toBeDefined();
    expect(router).toBeInstanceOf(Router);
  });

  it('should have at least 3 providers configured', () => {
    expect(appConfig.providers?.length).toBeGreaterThanOrEqual(3);
  });
});
