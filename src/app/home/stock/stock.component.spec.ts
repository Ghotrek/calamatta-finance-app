import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockComponent } from './stock.component';
import { ComponentRef, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { MockMarketResponse, MockMarketResponseUpdated } from '../../../market-mock-for-test';
import { By } from '@angular/platform-browser';

fdescribe('StockComponent', () => {
  let component: StockComponent;
  let componentRef: ComponentRef<StockComponent>;
  let fixture: ComponentFixture<StockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideExperimentalZonelessChangeDetection()],
      imports: [StockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('inputStock', MockMarketResponse.quoteResponse.result[0]);
    fixture.autoDetectChanges();
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });

  it('should to init InputSignal', () => {
    expect(component.inputStock).not.toBeNull();
  });

  it('should inputStock recive Quota value', () => {
    component.ngAfterViewInit();
    expect(component.storedStock()).not.toBeNull();
  });

  it('should compute signal', () => {
    expect(component.stock()).not.toBeNull();
    expect(component.stock()).toBe(MockMarketResponse.quoteResponse.result[0]);
  });

  it('toggle change should set the stockStatus value', () => {
    const stockStatus = fixture.debugElement.query(By.css('#stockStatus'));

    //init state
    expect(component.stockRefresh).toBeTrue();
    expect(stockStatus.nativeElement.checked).toBeTrue();
    

    stockStatus.nativeElement.click();

    //after click
    expect(component.stockRefresh).toBeFalse();
    expect(stockStatus.nativeElement.checked).toBeFalse();

  });

  it('should change stock() when stockStatus value change from true to false', async () => {
    const stockStatus = fixture.debugElement.query(By.css('#stockStatus'));

    //init state
    expect(component.stockRefresh).toBeTrue();
    expect(stockStatus.nativeElement.checked).toBeTrue();
    expect(component.stock()).toBe(MockMarketResponse.quoteResponse.result[0]);

    await new Promise((resolve) => setTimeout(resolve, 2000)); 

    componentRef.setInput('inputStock', MockMarketResponse.quoteResponse.result[0]);
    expect(component.stock()).not.toBeNull();
    expect(component.stock()).toBe(MockMarketResponse.quoteResponse.result[0]);

    stockStatus.nativeElement.click();
    
    //after click
    expect(component.stockRefresh).toBeFalse();
    expect(stockStatus.nativeElement.checked).toBeFalse();
    
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    componentRef.setInput('inputStock', MockMarketResponseUpdated.quoteResponse.result[0]);
    expect(component.stock()).not.toBeNull();
    expect(component.stock()).not.toEqual(MockMarketResponseUpdated.quoteResponse.result[0]);

  }); 
});
