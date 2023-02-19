import { GlobalConstants } from '@/components/abstract/global'
import React, { Component } from 'react'
import QuestionsSort from './questions/quesions-sort'
import QuestionsSummary from './questions/quesions-summary'
import QuestionsList from './questions/quesions.list'

export default class ProductQuestions extends Component {
  render() {
    return (
      <div data-testid='ProductQuestions'>


        <br />
        <h4 className='product-article-header'>پرسش ها</h4>

        <div className='row mt-4'>


          <div className='col-md-3'>

            <QuestionsSummary />



          </div>

          <div className='col-md-9'>
            <QuestionsSort />

            <div className='mt-3'></div>
            <QuestionsList />

          </div>
        </div>



      </div>
    )
  }
}
