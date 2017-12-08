import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import {RouterTestingModule} from '@angular/router/testing'

import { UtilsService } from './utils.service';
import { log } from 'util';

// beforeEach(() => { TestBed.configureTestingModule({ declarations: [ AppComponent ], imports: [ RouterTestingModule ] });

describe('UtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilsService, HttpClient, HttpHandler],
      imports: [RouterTestingModule]
    });
  });

  it('should be created', inject([UtilsService], (service: UtilsService) => {
    expect(service).toBeTruthy();
  }));

  // it('getFileText abc.html works', inject([UtilsService, HttpClient], 
  //     (service: UtilsService, http: HttpClient) => {
  // // it('getFileText abc.html works', inject([UtilsService, HttpClient], 
  // //     (service: UtilsService, http: HttpClient) => {
  //   // spyOn(http, "get").and.returnValue('<html></html>');
  //   // let textObs = service.getText('../../assets/test/abc.json');
  //   let textObs = service.getText('../../assets/test/abc.html');
  //   // let textObs = service.getText('/src/assets/test/abc.json');
  //   textObs.subscribe(
  //     data => {
  //       console.log(`ut: data=${data}`);
  //     },    
  //     err => {
  //       debugger;
  //       console.log('err= ' + err);
  //     },
  //     () => console.log('yay'))
  //   // expect(text).toBeTruthy();
  //   // expect(text).toMatch(/<html>/);
  // }));

  // it('abc', inject([UtilsService, HttpClient], (service: UtilsService, http: HttpClient) => {
  //   spyOn(http, "get").and.returnValue('<html></html>');

  //   let utils = new UtilsService(http);

  //   let textObs = utils.getText('../../assets/test/abc.html');

  //   textObs.subscribe(
  //     data => {
  //       console.log(`ut: data=${data}`);
  //     },    
  //     err => {
  //       debugger;
  //       console.log('err= ' + err);
  //     },
  //     () => console.log('yay'))

  // }))
});
