import { GlobalConstants } from '@/components/abstract/global'
import { Group } from '@mantine/core'
import { Card } from 'primereact/card'
import React, { Component } from 'react'
import QuestionPositiveNegative from './quesion-positive-negative'
import QuestionsQuestionRate from './quesions-comment-rate'
import RateToQuestion from './rate-to-quesion'

export default class QuestionsSingleQuestion extends Component {
  render() {
    return (
      <Card data-testid='QuestionsSingleQuestion'>

<Group>

<QuestionsQuestionRate rate={3.1}/>
    <h5>اگر داشته باشید دیگه گوشی دیگری استفاده نمی‌کنید عالی</h5>

</Group>

<ul style={{listStyle:'none', display:'flex'}}>
    <li  style={{color:GlobalConstants.SECENDARY_CSS}}>۲۲ بهمن ۱۴۰۱
</li>
    <li className='me-4' style={{color:GlobalConstants.SECENDARY_CSS}}> 
    کاربر دیجی‌کالا
    </li>

</ul>
<hr/>
<p>
قبل این دستگاه آیفون ۱۳ پرومکس داشتم و بخاطر اینکه طرفدار برند نیستم و عاشق تست کردن تکنولوژی ام عوض کردم ، دوست داشتنی و کارآمده ولی باتریش باید روزی ۳ ، ۴ بار شارژ شه برای استفاده ی من ، زیاد گرم میشه و عرض صفحه نمایش اول انقد کمه دائم غلط تایپی دارم ، همچنین دوربیناش نسبت به یه پرچمدار گرون قیمت واقعا معمولیه خصوصا دوربین سلفی زیر صفحه نمایش دوم که تقریبا به درد نخوره ، اما در کل هربار که این گوشی رو باز میکنم حس خارق العاده ای بهم میده و این تکنولوژیه که منو به وجد میاره ...
</p>

<QuestionPositiveNegative/>

<div className='row'>
    <div className='col-auto me-auto'>
    <RateToQuestion/>

    </div>
</div>

      </Card>
    )
  }
}
