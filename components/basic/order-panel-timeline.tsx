import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import { GlobalConstants } from '../abstract/global';
import SelectOrderProductType from '../complex/select-order-product-type';


export function OrderPanelTimeline() {
    const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  
    return (
      <>
        <Stepper color={GlobalConstants.PRIMARY_CSS} active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step label="انتخاب محصول" description="و افزودن به سبد">
            
            <SelectOrderProductType/>
          </Stepper.Step>
          <Stepper.Step label="سفارش و شخصی سازی" description="سفارشی سازی محصول به دلخواه">
          </Stepper.Step>
          <Stepper.Step label="ثبت سفارش ساخت" description="پر کردن اطلاعات فرم">
          </Stepper.Step>
          <Stepper.Completed>
          </Stepper.Completed>
        </Stepper>
  
        <Group position="right" mt="xl">
          <Button variant="default" onClick={prevStep}>بازگشت</Button>
          <Button style={{backgroundColor:GlobalConstants.PRIMARY_CSS}}  onClick={nextStep}>مرحله بعدی</Button>
        </Group>
      </>
    );
}