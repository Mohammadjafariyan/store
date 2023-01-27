/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ApiGetMostViewedImp from '@/api-clients/use-case-api/api-get-most-selled';

import { ApiConsts } from '@/api-clients/abstract/api-factory';


describe('Home', () => {
  it('Api: Get Most Viewed list ', () => {



    var service = new ApiGetMostViewedImp();

    service.getList(ApiConsts.MOST_VIEWED).subscribe(list => {
      expect(list).toBeTruthy();
      expect(list.length > 0).toBeTruthy();
    });

  })
})