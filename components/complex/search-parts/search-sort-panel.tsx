import { GlobalConstants } from '@/components/abstract/global';
import React, { Component } from 'react'
import SearchSortList from './search-sort-list';
import SearchTotal from './search-total';

const arr =['مرتبط ترین' ,
'پربازدیدترین',
'جدیدترین',
'پرفروش ترین',
'ارزان ترین',
'گران ترین',
'سریع ترین ارسال',
'پیشنهاد خریداران',
'منتخب',
'',
];

export default class SearchSortPanel extends Component {

  render() { 
    return (
      <div data-testid="SearchSortPanel" >

        <SearchSortList/>
  <SearchTotal/>



      </div>
    )
  }
}
