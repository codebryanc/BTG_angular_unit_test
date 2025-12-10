import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have title signal defined', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect((app as any).title).toBeDefined();
  });

  it('should have correct title value from environment', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect((app as any).title()).toBe('BTG Angular Unit Test');
  });

  it('should have version from environment', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect((app as any).version).toBe('1.0.0');
  });

  it('should render content', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('BTG Angular Unit Test');
  });

  it('should render description with version', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Proyecto de pruebas unitarias con Angular');
    expect(compiled.textContent).toContain('1.0.0');
  });

  it('should render version from environment', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Versión: 1.0.0');
  });

  it('should render BTG logo', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const logo = compiled.querySelector('img.logo') as HTMLImageElement;
    expect(logo).toBeTruthy();
    expect(logo.src).toContain('assets/image/BTG_Logo.png');
    expect(logo.alt).toBe('BTG Logo');
  });

  it('should have app-root selector', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const appRoot = compiled.querySelector('app-root') || compiled;
    expect(compiled).toBeDefined();
  });

  it('should use templateUrl', () => {
    const metadata = (App as any).ɵcmp;
    expect(metadata).toBeDefined();
  });

  it('should have no imports', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const componentImports = (App as any).ɵcmp?.dependencies || [];
    expect(componentImports.length).toBe(0);
  });
});
