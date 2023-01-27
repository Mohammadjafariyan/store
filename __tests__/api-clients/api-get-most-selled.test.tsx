/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ApiGetMostSelledImp from '@/api-clients/use-case-api/api-get-most-selled';
import { ApiConsts } from '@/api-clients/abstract/api-factory';


describe('Home', () => {
  it('Api: Get Most Selled list ', () => {



    var service = new ApiGetMostSelledImp();

    service.getList(ApiConsts.MOST_SELLED).subscribe(list => {
      expect(list).toBeTruthy();
      expect(list.length > 0).toBeTruthy();
    });

  })
})