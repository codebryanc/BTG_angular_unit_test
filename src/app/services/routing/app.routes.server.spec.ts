import { RenderMode } from '@angular/ssr';
import { serverRoutes } from './app.routes.server';

describe('app.routes.server', () => {
  it('should be defined', () => {
    expect(serverRoutes).toBeDefined();
  });

  it('should be an array', () => {
    expect(Array.isArray(serverRoutes)).toBe(true);
  });

  it('should have at least one route', () => {
    expect(serverRoutes.length).toBeGreaterThan(0);
  });

  it('should have a catch-all route', () => {
    const catchAllRoute = serverRoutes.find(route => route.path === '**');
    expect(catchAllRoute).toBeDefined();
  });

  it('catch-all route should use Prerender mode', () => {
    const catchAllRoute = serverRoutes.find(route => route.path === '**');
    expect(catchAllRoute?.renderMode).toBe(RenderMode.Prerender);
  });
});
